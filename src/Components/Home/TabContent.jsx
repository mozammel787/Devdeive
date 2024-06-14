/* eslint-disable react/prop-types */

import CourseCard from "../CourseCard";

const TabContent = ({ activeCategory, tabsData }) => {
  // console.log(activeCategory, tabsData);
  const filterCourse = tabsData?.filter(
    (data) => data.category === activeCategory
  );
  return (
    <div className="flex flex-wrap items-center justify-between gap-5">
      {filterCourse.map((tab, idx) => {
        return <CourseCard key={idx} course={tab}></CourseCard>;
      })}
    </div>
  );
};

export default TabContent;
