import axios  from "axios";

export const getTodos = (): Promise<any> => {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/todos`
      )
      .then((response) => {
        return response.data;
      });
  };