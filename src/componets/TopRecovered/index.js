import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./index.css";

const TopRecovered = () => {
  const covid = useSelector((s) => s.covid.covidData);
  const [topRecoveredData, setTopRecoveredData] = useState([]);
  useEffect(() => {
    if (!covid) {
      console.log("ok");
    } else {
      if (covid.length > 0) {
        setTopRecoveredData(() => {
          return covid?.reduce((acc, curr) => (acc.Recovered > curr.Recovered ? acc : curr));
        });
      }
    }
    
  }, [covid, topRecoveredData]);

  const refactoringDate = (date) => {
    if (!date) {
      return;
    } else {
      const fullDateArr = date.split("T");
      return fullDateArr[0];
    }
  };
  return (
    <div className="recovered">
      <h2 className="recovered__title">Top recovered cases</h2>
      <p className="recovered__amount">{topRecoveredData.Recovered}</p>
      <p className="recovered__date">{refactoringDate(topRecoveredData.Date)}</p>
    </div>
  );
};

export default TopRecovered;
