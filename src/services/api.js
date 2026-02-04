const BASE_URL = 'http://localhost:9000';

const handleResponse = async (res) => {
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const api = {
  getTeamMembers: (status) =>
    fetch(`${BASE_URL}/sample_mflix/movies`).then(handleResponse),
};

export default api;
