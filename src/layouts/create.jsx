import React, { useState, useEffect } from "react";
import CreateForm from "../components/createForm";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    surname: "",
    date: "",
    portfolio: "",
  });

  useEffect(() => {
    if (localStorage.length > 0) {
      setData(localStorage);
    }
  }, []);
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(data).forEach((key) => {
      localStorage.setItem(key, data[key]);
    });
    alert("Данные обновлены");
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <CreateForm
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Create;
