export function getDate(year) {
  const currentYear = new Date().getFullYear();
  let userDate = currentYear - Number(year);
  let word;
  let count = userDate % 100;
  if (count >= 5 && count <= 20) {
    word = "лет";
  } else {
    count = count % 10;
    if (count === 1) {
      word = "год";
    } else if (count >= 2 && count <= 4) {
      word = "года";
    } else {
      word = "лет";
    }
  }
  return ` ${year} (${userDate} ${word})`;
}
