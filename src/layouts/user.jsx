import React, { useState, useEffect } from "react";
import { getDate } from "../utils/getDate";
import { useHistory } from "react-router-dom";

const User = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    date: "",
    portfolio: "",
  });

  const history = useHistory();
  const handleEdit = () => {
    history.replace("/create");
  };

  useEffect(() => {
    if (localStorage.getItem("user") === "true") {
      setData(localStorage);
    }
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Карточка пользователя</h3>
          {localStorage.getItem("user") === "true" ? (
            <>
              <p className="fs-4">
                Имя:
                <span className="fw-bold">{data.name}</span>
              </p>
              <p className="fs-4">
                Фамилия:
                <span className="fw-bold"> {data.surname}</span>
              </p>
              <p className="fs-4">
                Дата рождения:
                <span className="fw-bold">{getDate(data.date)}</span>
              </p>
              <p className="fs-4">
                Портфолио:
                <a href="http://" className="fw-bold">
                  {data.portfolio}
                </a>
              </p>
            </>
          ) : (
            <p>нет данных</p>
          )}
          <button className="btn btn-primary" onClick={handleEdit}>
            {localStorage.getItem("user") === "true"
              ? "Редактировать"
              : "Добавить"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
