import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import { IoMdQuote } from "react-icons/io";
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function MyApp() {
  return (
    <div>
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-neutral h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <CarouselProvider
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={2}
        >
          <div className="inline-flex gap-3 border border-primary rounded-full items-center py-2 px-6 mb-4 font-semibold text-xl mr-auto">
            <FaStar className="text-primary" />
            <p>Reviews</p>
          </div>
          <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
            What our customers are
            <br />
            saying
          </h1>
          <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
            What our customers are saying
          </h1>
          <Slider>
            <Slide index={0} tabIndex="null">
              <div className="flex">
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded-xl"
                    />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-white shadow rounded-full">
                      <IoMdQuote className="text-6xl text-primary" />
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                        Some of the best work that was done!
                      </h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                        Our core values are at the heart of all that we do. They
                        are integrated into our daily work lives and help us to
                        remember our customers always comes first, the last
                        thank you should always comes from us.
                      </p>
                    </div>
                    <div className="md:mt-0 mt-8">
                      <p className="text-base font-medium leading-4 text-gray-800">
                        Anna Smith
                      </p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                        Senior Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div
                className="flex relative"
                style={{ transform: "translateX(0%)" }}
              >
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded-xl"
                    />
                    <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-white shadow rounded-full">
                      <IoMdQuote className="text-6xl text-primary" />
                    </div>
                  </div>
                  <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                        Some of the best work that was done!
                      </h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                        Our core values are at the heart of all that we do. They
                        are integrated into our daily work lives and help us to
                        remember our customers always comes first, the last
                        thank you should always comes from us.
                      </p>
                    </div>
                    <div className="md:mt-0 mt-8">
                      <p className="text-base font-medium leading-4 text-gray-800">
                        Anna Smith
                      </p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                        Senior Web Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
          <div className="flex items-center gap-3 mt-8">
            <ButtonBack
              className="cursor-pointer  "
              role="button"
              aria-label="previous slide"
            >
              <BsFillArrowLeftCircleFill className="text-5xl  text-primary shadow rounded-full " />
            </ButtonBack>

            <ButtonNext
              role="button"
              aria-label="next slide"
              className="cursor-pointer  ml-5"
            >
              <BsFillArrowRightCircleFill className="text-5xl   text-primary shadow rounded-full" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
