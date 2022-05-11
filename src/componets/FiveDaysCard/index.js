import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCovid } from "../../redux/reducers/covidReducer";
import "./index.css";

const FiveDaysCard = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const covid = useSelector((s) => s.covid.covidData);
  const date = new Date();
  const lastFiveDays = new Date(date.setDate(date.getDate() - 6));
  const mounth = lastFiveDays.toLocaleDateString();
  const fullDate = mounth.split(".").join("");
  const toTimestamp = (strDate) => Date.parse(strDate);

//   const month = (timestamp) => {
//     const time = timestamp * 1000;
//     const date = new Date(time);
//     const month = date.getUTCMonth();
//     console.log(month);
//     switch (month) {
//         case 0:
//             return 'January';
//             break;
//         case 1:
//             return 'Februaly';
//             break;
//         case 2:
//             return 'March';
//             break;
//         case 3:
//             return 'April';
//             break;
//         case 4:
//             return 'May';
//             break;
//         case 5:
//             return 'June';
//             break;
//         case 6:
//             return 'July';
//             break;
//         case 7:
//             return 'August';
//             break; 
//         case 8:
//             return 'September';
//             break;  
//         case 9:
//             return 'November';
//             break;
//         case 10:
//             return 'October';
//             break; 
//         case 11:
//             return 'December';
//             break; 
//         default:
//             return 'no month'
//     }
// }
  const refactoringDate = (date) => {
    const fullDateArr = date.split("T");
    return fullDateArr[0]
    // const dateArr = fullDateArr[0].split("-")
    // log
    // const newDate = dateArr[2] + month(toTimestamp())
    // console.log(newDate);
  };

  useEffect(() => {
    const aa = covid.filter((e) => {
      return lastFiveDays < toTimestamp(e.Date);
    });
    setDataCovid(aa);
  }, [covid]);

  return (
    <div className="cards">
      {!dataCovid
        ? "loading"
        : dataCovid.map((dataObj) => (
            <div className="card" key={dataCovid.Date}>
              <h3 className="card__date">{refactoringDate(dataObj.Date)}</h3>
              <ul className="card__covid-data">
                <li className="card__blank">
                  Active <span className="card__amount">{dataObj.Active}</span>
                </li>
                <li className="card__blank">
                  Deaths <span className="card__amount">{dataObj.Deaths}</span>
                </li>
                <li className="card__blank">
                  Confirmed <span className="card__amount">{dataObj.Confirmed}</span>
                </li>
                <li className="card__blank">
                  Recovered <span className="card__amount">{dataObj.Recovered}</span>
                </li>
              </ul>
            </div>
          ))}
    </div>
  );
};

export default FiveDaysCard;
