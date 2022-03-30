export const getAuth = () => {
  try {
    return JSON.parse(localStorage.getItem("auth"));
  } catch (error) {
    return "";
  }
};