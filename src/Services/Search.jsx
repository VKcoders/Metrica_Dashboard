import api from "./api";

const ENDPOINT = '/search'

export const getAllSearch = async (token) => {
  try {
    const { data } = await api.get(
      ENDPOINT, 
      { 
        headers: { 'Authorization': token }
      }
    );
    return {status: true, data};
  } catch (_error) {
    return { status: false, data: [] };
  }
};

export const getSearchById = async (id, token) => {
  try {
    const { data } = await api.get(
      `${ENDPOINT}/${id}`,
      {
        headers: { 'Authorization': token }
      }
    );
    return {status: true, data};
  } catch (_error) {
    return { status: false, data: [] };
  }
};
