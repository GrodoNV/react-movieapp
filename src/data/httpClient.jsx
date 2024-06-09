const API = "https://api.themoviedb.org/3/"; // Asegúrate de usar la versión correcta de la API
const API_KEY = "49d71275d1f3eab569c3199d33e23a41"; // Tu API key

export function get(path) {
  return fetch(`${API}${path}?api_key=${API_KEY}`, {
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    });
}
