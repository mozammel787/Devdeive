import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import CheckoutForm from "./CheckoutForm";
import Lading from "../Components/Lading";

const stripePromise = loadStripe(
  "pk_test_TYooMQauvdEDq54NiTphI7jx"
);

const Payment = () => {
  const { user } = useAuth();
  const course = useLoaderData();
  const navigation = useNavigation();
  const { title, thumPhotoUrl, price } = course;

  if (navigation.state === "loading") {
    return <Lading></Lading>;
  }
  return (
    <>
      <div className=" w-[50vw]  py-28">
        <h2 className="text-4xl font-bold my-5">Check Out</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-10 ">
          <div className="lg:card  w-[60%] bg-neutral rounded-xl">
            <div className="lg:card-body">
              <div className="form-control text-neutral-focus">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
                <label className="label"></label>
              </div>
              <div className="form-control text-neutral-focus">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
              </div>
              <div className="form-control text-neutral-focus">
                <label className="label">
                  <span className="label-text ">Address</span>
                </label>
                <input
                  type="text"
                  name="uid"
                  value={user?.address}
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
                <label className="label"></label>
              </div>
              <div className="form-control text-neutral-focus">
                <label className="label">
                  <span className="label-text ">Phone</span>
                </label>
                <input
                  type="text"
                  name="uid"
                  value={user?.PhoneNumber}
                  className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
                <label className="label"></label>
              </div>

              {/* payment method info */}
              <p className="mt-1 font-medium">payment method</p>
              <img src="logo.png" className="w-96" alt="" />
              <Elements stripe={stripePromise}>
                <CheckoutForm course={course} />
              </Elements>
            </div>
          </div>

          {/* Product info */}

          <div className="card w-[40%] bg-neutral rounded-xl justify-center items-center p-5 ">
            <figure className=" rounded-xl">
              <figure>
                <img src={thumPhotoUrl} alt="Movie" />
              </figure>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <div className="card-actions">
                <button className="btn btn-primary w-full">
                  Price only $ {price}
                </button>
              </div>
            </div>

            {/* Buy info */}
            <div className="form-control mb-3">
              <label className="input-group flex w-full items-center rounded-full font-medium bg-gray-100 border p-1">
                <input
                  type="text"
                  placeholder="Voucher Code"
                  className=" px-8 py-4 bg-gray-100 rounded-full border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                />
                <span className="btn btn-primary">Apply</span>
              </label>
            </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Payment;
