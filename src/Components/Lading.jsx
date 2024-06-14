

const Lading = () => {
  return (
    <div>
      <section className="bg-white relative place-items-center grid h-screen w-screen gap-4">
        <div className="bg-primary w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

        <div className="bg-primary w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

        <div className="bg-white  w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

        <img
          className=" filter mix-blend-normal h-16 w-16"
          src="fev.png"
          alt=""
        />
      </section>
    </div>
  );
};

export default Lading;
