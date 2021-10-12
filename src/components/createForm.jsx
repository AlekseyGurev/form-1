import React from "react";
import TextField from "./textField";

const CreateForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <div className="col-md-6 offset-md-3 shadow p-4">
      <h3 className="mb-4">Создать пользователя</h3>
      <form action="">
        <TextField
          label="Имя"
          name="name"
          value={data.name}
          onChange={handleChange}
          error=""
        />
        <TextField
          label="Фамилия"
          name="surname"
          value={data.surname}
          onChange={handleChange}
          error=""
        />
        <TextField
          label="Дата рождения"
          name="date"
          type="number"
          value={data.date}
          onChange={handleChange}
          error=""
        />
        <TextField
          label="Портфолио"
          name="portfolio"
          value={data.portfolio}
          onChange={handleChange}
          error=""
        />
        {localStorage.length > 0 ? (
          <>
            <button
              className="btn btn-secondary "
              // onClick={() => {
              //   handleBack();
              // }}
            >
              Назад
            </button>
            <button onClick={handleSubmit} className="btn btn-primary m-2">
              Обновить
            </button>
          </>
        ) : (
          <button
            onClick={handleSubmit}
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
