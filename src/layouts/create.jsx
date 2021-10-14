import React, { useState, useEffect } from "react";
import CreateForm from "../components/createForm";
import { useHistory } from "react-router-dom";
import { validator } from "../utils/validator";
import { statusUser } from "../utils/statusUser";

const Create = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    date: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleGoToUser = () => {
    history.replace("/");
  };

  const validatorConfig = {
    name: {
      isRequired: {
        message: "поле должно быть заполнено",
      },
      isSymbol: {
        message: "Имя должно состоять из букв",
      },
    },
    surname: {
      isRequired: {
        message: "поле должно быть заполнено",
      },
      isSymbol: {
        message: "Фамилия должна состоять из букв",
      },
    },
    date: {
      isRequired: {
        message: "поле должно быть заполнено",
      },
      isCurrentYear: {
        message: "дата рождения должна быть меньше текущего года",
      },
      minDigit: {
        message: "дата рождения состоит из 4-х цифр",
      },
    },
    portfolio: {
      isRequired: {
        message: "поле должно быть заполнено",
      },
      isUrl: {
        message: "Должно быть заполнено в формате ссылки",
      },
    },
  };

  useEffect(() => {
    if (statusUser()) {
      setData(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = validate();
    if (!isValidate) return;
    localStorage.setItem("user", JSON.stringify(data));
    alert("Данные обновлены");
    handleGoToUser();
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <CreateForm
          data={data}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleGoToUser={handleGoToUser}
          errors={errors}
        />
      </div>
    </div>
  );
};

export default Create;
