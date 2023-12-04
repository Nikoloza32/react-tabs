import { useEffect, useState } from "react";
import { JobInfo } from "./JobInfo";
import { BtnContainer } from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(2);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      {/* buttons */}
      <BtnContainer
        jobs={jobs}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      {/* jobsinfo */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
