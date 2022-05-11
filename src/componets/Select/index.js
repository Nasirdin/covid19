import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountres } from "../../redux/reducers/covidReducer";
import "./index.css";

const Select = ({setCountry}) => {
  const countres = useSelector((s) => s.covid.countresDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountres());
  }, [!countres]);

  const getValueSelect = (e) => {
    setCountry(() => {
        const element = e.target.value.split(' ').join('-')
       return  element;
    })
  };

  return (
    <select className="select" onChange={getValueSelect}>
      {!countres ? "loading" : countres.map((country) => <option>{country.name}</option>)}
    </select>
  );
};

export default Select;
