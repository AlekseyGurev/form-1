import React from "react";
import TextField from "./textField";

const CreateForm = ({
  data,
  handleChange,
  handleSubmit,
  handleGoToUser,
  errors,
}) => {
  const status = Object.keys(errors).length > 0 ? true : false;

  return (
    <div className="col-md-6 offset-md-3 shadow p-4">
      <h3 className="mb-4">Создать пользователя</h3>
      <form action="">
        <TextField
          label="Имя"
          name="name"
          value={data.name}
          onChange={handleChange}
          error={errors.name}
        />
        <TextField
          label="Фамилия"
          name="surname"
          value={data.surname}
          onChange={handleChange}
          error={errors.surname}
        />
        <TextField
          label="Дата рождения"
          name="date"
          type="number"
          value={data.date}
          onChange={handleChange}
          error={errors.date}
        />
        <TextField
          label="Портфолио"
          name="portfolio"
          value={data.portfolio}
          onChange={handleChange}
          error={errors.portfolio}
        />
        {localStorage.length > 0 ? (
          <>
            <button className="btn btn-secondary" onClick={handleGoToUser}>
              Назад
            </button>
            <button
              onClick={handleSubmit}
              disabled={status}
              className="btn btn-primary m-2"
            >
              Обновить
            </button>
          </>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={status}
            className="btn btn-primary w-100 mx-auto"
          >
            Создать
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateForm;
