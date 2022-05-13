export const fetchData = () => fetch('https://the-first-project.herokuapp.com/db/')
  .then((response) => response.json())
  .then((data) => data);
