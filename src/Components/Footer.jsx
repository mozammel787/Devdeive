/* eslint-disable react/no-unescaped-entities */
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#1c1d20] text-white">
      <footer className="footer py-10  container mx-auto flex justify-between ">
        <div className="w-[33%] flex flex-col gap-6 pr-20">
          <h1 className="text-6xl font-semibold">
            <span className="text-primary">Let’s</span> Work Together
          </h1>
          <p className="text-base ">
            Welcome to our diverse and dynamic course catalog. At Defats, We're
            dedicated to providing you with access to high-quality education
            that empowers your personal and professional growth.
          </p>
          <div className="text-4xl text-primary flex items-center gap-3">
            <FaFacebook className="border border-primary rounded-full p-2" />
            <FaTwitter className="border border-primary rounded-full p-2" />
            <FaInstagram className="border border-primary rounded-full p-2" />
            <FaLinkedin className="border border-primary rounded-full p-2" />
          </div>
        </div>
        <nav className="w-[33%] border-x border-[#33363b] px-40">
          <h6 className="text-4xl font-semibold mb-5">Navigation</h6>
          <div className="flex  flex-col gap-4">
          <a className="text-base hover:text-primary ">About us</a>
          <a className="text-base hover:text-primary">Courses</a>
          <a className="text-base hover:text-primary">Community</a>
          <a className="text-base hover:text-primary">Blog</a>
          </div>
        </nav>
        <nav className="w-[33%] pl-20 content-center ">
          <h6 className="text-4xl font-semibold mb-5">Contact Us</h6>
          <div className="flex  flex-col gap-4">
            <div className="flex justify-start items-center gap-3 text-lg font-medium ">
              <FaPhone />
              +8801785587293
            </div>
            <div className="flex justify-end items-center gap-3 text-lg font-medium ">
              <FaEnvelope />
              info@devdrive.com
            </div>
            <div className="flex justify-start items-center gap-3 text-lg font-medium ">
              <FaLocationArrow />
              Dhaka, Bangladesh
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t  border-[#33363b] container mx-auto">
        <aside className="text-base ">
          <p>Copyright © 2024 All right reserved by Devdeive Ltd .</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end flex">
          <a className="text-base hover:text-primary">Privacy policy</a>
          <a className="text-base hover:text-primary">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
