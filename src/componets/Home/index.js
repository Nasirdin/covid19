import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCovid } from "../../redux/reducers/covidReducer";
import FiveDaysCard from "../FiveDaysCard";
import Select from "../Select";
import TopRecovered from "../TopRecovered";
import "./index.css";

const Home = () => {
  const [country, setCountry] = useState("Afghanistan");
  const covid = useSelector((s) => s.covid.covidData);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getCovid(country));
  }, [!covid, country]);
  return (
    <div className="home">
      <div className="container">
        <Select setCountry={setCountry} />
        <div className="home__content">
          <FiveDaysCard />
          <TopRecovered />
        </div>
      </div>
    </div>
  );
};

export default Home;
