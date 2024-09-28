import React from "react";
import { useSelector } from "react-redux";
import jobSlice from "./../../redux/slice/taskSlice";
import Filter from "../../component/Filter";
import Loader from "../../component/Loader";
import Error from "../../component/Error";
import Card from "./../../component/Card/index";
import "./home.scss";

const Home = () => {
  const { jobs, isLoading, error } = useSelector((store) => store.jobSlice);

  return (
    <div className="home_page">
      <Filter />
      <div>
        {isLoading ? (
          <Loader isLoading={isLoading} />
        ) : error ? (
          <Error error={error} />
        ) : (
          <div className="cards_wrapper">
            {jobs && jobs.map((job) => <Card key={job.id} job={job} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
