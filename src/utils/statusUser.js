export function statusUser() {
  return localStorage.getItem("user") === "true" ? true : false;
}
