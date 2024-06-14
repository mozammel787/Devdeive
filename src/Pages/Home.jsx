import BecomeanInstructor from "../Components/Home/BecomeanInstructor";
import CourseCatagory from "../Components/Home/CourseCatagory";
import CourseTab from "../Components/Home/CourseTab";
import Hero from "../Components/Home/Hero";
import HomeReview from "../Components/Home/HomeReview";
import HomeSapport from "../Components/Home/HomeSapport";

const Home = () => {
  return (
    <div >
      <Hero  />
      <CourseCatagory />
      <CourseTab/>
      <HomeSapport/>
      <BecomeanInstructor/>
      <HomeReview/>
    </div>
  );
};

export default Home;
