import axios from "axios";

const COVID = "COVID";
const COUNTRES = "COUNTRES";

const initialState = {
  covidData: [],
  countresDate: [],
};

const defFunc = (state = initialState, action) => {
  switch (action.type) {
    case COVID: {
      return { ...state, covidData: action.covidData };
    }
    case COUNTRES: {
      return { ...state, countresDate: action.countresDate };
    }
    default:
      return state;
  }
};

export const getCovid = (country) => {
  return (dispatch) => {
    axios(`https://api.covid19api.com/total/dayone/country/${country}`).then(({ data }) =>
      dispatch({ type: COVID, covidData: data })
    );
  };
};
export const getCountres = () => {
  return (dispatch) => {
    axios("https://restcountries.com/v2/all").then(({ data }) => dispatch({ type: COUNTRES, countresDate: data }));
  };
};

export default defFunc;
