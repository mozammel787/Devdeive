/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const CheckoutForm = ({ course }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { price, title, _id, authorEmail, author, thumPhotoUrl } = course;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://devdrive-server.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log(error);
      toast.error(error.message);
    }

    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: title,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      toast.error(confirmError);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        customerEmail: user?.email,
        courseId: _id,
        authorEmail,
        author,
        title,
        thumPhotoUrl,
        customerName: user?.displayName,
      };
      fetch("https://devdrive-server.onrender.com/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Congrats your payment completed ");
            setTransactionId(paymentIntent.id);
            navigate("/paymentcomplete");
          }
        });
    }
    setProcessing(false);
  };
  return (
    <>
      <form className="mt-5 " onSubmit={handleSubmit}>
        <div className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  margin: "10px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                  backgroundColor: "#f3f4f6",
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        <button
          className={`btn btn-primary w-full  mt-5 `}
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay ${price}
        </button>
      </form>
      {success && (
        <>
          <h3>
            Your TransactionId is{" "}
            <span className="font-bold">{transactionId}</span>
          </h3>
        </>
      )}
    </>
  );
};

export default CheckoutForm;
