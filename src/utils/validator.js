export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isSymbol": {
        const symbolRegExp = /\D+/g;
        statusValidate = !symbolRegExp.test(data);
        break;
      }
      case "isCurrentYear": {
        const currentYear = new Date().getFullYear();
        statusValidate = data > currentYear - 1;
        break;
      }
      case "isUrl": {
        const symbolRegExp = /^(ftp|http|https):\/\/[^ "]+$/;
        statusValidate = !symbolRegExp.test(data);
        break;
      }
      case "minDigit": {
        const symbolRegExp = /\d{4}/;
        statusValidate = !symbolRegExp.test(data);
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
