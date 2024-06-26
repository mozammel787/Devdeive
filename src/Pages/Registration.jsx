
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";

const Registration = () => {
    const { googleLogin, gitHubLogIn, registration, user } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || "/";

    const handelGoogleSubmit = () => {
      googleLogin()
        .then((result) => {
          const user = {
            displayName: result?.user?.displayName,
            email: result?.user?.email,
            photoURL: result?.user?.photoURL,
            phoneNumber: result?.user?.phoneNumber,
          };
          fetch("https://devdrive-server.onrender.com/user", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("token", data?.token);
              toast.success("Registration Successfully");
            });
        })
        .catch((error) => {
          toast.error(error);
        });
    };
    const handelGitHubLogIn = () => {
      gitHubLogIn()
        .then((result) => {
          const user = {
            displayName: result?.user?.displayName,
            email: result?.user?.email,
            photoURL: result?.user?.photoURL,
            phoneNumber: result?.user?.phoneNumber,
          };
          fetch("https://devdrive-server.onrender.com/user", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("token", data?.token);
              toast.success("Registration Successfully");
            });
        })
        .catch((error) => {
          toast.error(error);
        });
    };

    const handelSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;

      const email = form.email.value;
      const displayName = form.name.value;
      const photoURL = form.photoURL.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      if (password === confirmPassword) {
        await registration(email, password)
          .then((result) => {
            const user = {
              displayName: displayName,
              email: result?.user?.email,
              photoURL: photoURL,
              phoneNumber: result?.user?.phoneNumber,
            };
            fetch("https://devdrive-server.onrender.com/user", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("token", data?.token);
                toast.success("Registration Successfully");
              });
          })
          .catch((error) => {
            toast.error(error);
          });

        form.reset();
      }
    };

    useEffect(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    }, [user, navigate, from]);
  return (
    <div>
      <div className="  text-gray-900 flex justify-center mt-20">
        <div className="max-w-screen-xl m-0 sm:my-10 sm:mx-10   flex justify-center flex-row-reverse flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 bg-neutral border rounded-xl">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">SIGN UP</h1>
              <div className="w-full flex-1 mt-8  ">
                
              
              
                <form
                  onSubmit={handelSubmit}
                  className="mx-auto max-w-lg flex flex-col"
                >
                  <input
                    className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                  <input
                    type="url"
                    name="photoURL"
                    className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    placeholder="Profile Photo URL"
                  />

                  <input
                    className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="New Password"
                    name="password"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-full font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary mx-auto mt-5"
                  >
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                    Do you have an account ?{" "}
                    <Link
                      to={"/signin"}
                      className="cursor-pointer text-primary"
                    >
                      Sign In
                    </Link>
                  </div>
                </form>
                <div className="flex justify-center gap-5 my-5 items-center">
                    <button
                      onClick={handelGoogleSubmit}
                      className="px-1 border rounded-full font-bold   py-1  text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out bg-neutral   "
                    >
                      <div className=" p-1 rounded-full">
                        <FaGoogle className="text-3xl text-primary"/>
                      </div>
                    </button>

                    <button
                      onClick={handelGitHubLogIn}
                      className="px-1 border rounded-full font-bold  py-1  text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none bg-neutral  "
                    >
                      <div className=" p-1 rounded-full">
                        <FaGithub className="text-3xl text-primary"/>
                      </div>
                    </button>
                 

                
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center hidden lg:flex">
            <div
              className=" w-[80%] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('hero.png')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
