import React, { useEffect, useState } from "react";
import "./display.css";
import axios from "axios";
const Display = () => {
  const [state, setState] = useState([]);
  const [stateid, setStateId] = useState(0);
  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get("http://localhost:3000/states?type=states");
        setState(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);

  const [district, setDistrict] = useState([]);
  const getDistrict = (state_id) => {
    setStateId(state_id);
    getDistricts(state_id);
  };
  const [tehsil, setTehsil] = useState([]);
  const getTehsil = (district_id) => {
    getTehsils(district_id);
  };
  const getDistricts = async (state_id) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/states?type=districts&search_db=state_id&id=${state_id}`
      );
      setDistrict(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getTehsils = async (district_id) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/states?type=tahshil&search_db=district_id&id=${district_id}`
      );
      setTehsil(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="displayContainer">
      <select name="" id="">
        <option value="">Select State</option>
        {state.map((state, key) => (
          <option
            value={state.id}
            onClick={(event) => {
              getDistrict(event.target.value);
            }}
          >
            {state.name}
          </option>
        ))}
      </select>
      <select name="" id="">
        <option value="">Select District</option>
        {district.map((district, key) => (
          <option
            value={district.id}
            onClick={(event) => {
              getTehsil(event.target.value);
            }}
          >
            {district.district}
          </option>
        ))}
      </select>
      <select name="" id="">
        <option value="">Select Tehsil</option>
        {tehsil.map((tehsil,key)=>(
          <option value={tehsil.id} >{tehsil.tahshil}</option>
        ))}
      </select>
    </div>
  );
};

export default Display;
