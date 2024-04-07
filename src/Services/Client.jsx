import api from "./api";

const ENDPOINT = '/client'

export const getAllClients = async (token) => {
  try {
    const { data } = await api.get(ENDPOINT, { headers: { 'Authorization': token }});
    return {status: true, data};
  } catch (_error) {
    return {status: false, data: []};
  }
};

export const getClientById = async (id, token) => {
  try {
    const { data } = await api.get(`${ENDPOINT}/${id}`, { headers: { 'Authorization': token }});
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createClient = async (obj, token) => {
  console.log(token)
  try {
    const { data } = await api.post( ENDPOINT, obj, { headers: { 'Authorization': token }});
    return {status: true, data};
  } catch (_error) {
    return {status: false, data: []};
  }
};
