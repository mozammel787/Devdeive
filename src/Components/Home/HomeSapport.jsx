const HomeSapport = () => {
  return (
    <div className="bg-neutral container mx-auto rounded-xl px-32 py-6 flex items-center justify-between gap-40 my-32 border border-gray-100 shadow-sm">
      <div className="w-[50%]">
        <img className="w-[65%] mx-auto" src="hero.png" alt="" />
      </div>
      <div className="flex flex-col gap-5 text-secondary w-[60%]">
        <h2 className=" font-semibold text-5xl  ">
          Let’s Find The Right Course For You!
        </h2>
        <p>
          Our story is a journey of passion, commitment, and dedication to
          empowering learners like you and achieve their learning goals. With
          our expert tutors, your goals are closer than ever!
        </p>
        <button className="btn btn-primary mr-auto">Contact Us</button>
      </div>
    </div>
  );
};

export default HomeSapport;
