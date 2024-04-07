import api from "./api";

const URL = '/login-manager'

export const generateToken = async (obj) => {
  try {
    const { data } = await api.post(URL, obj);
    return {status: true, token: data.token}; 
  } catch (error) {
    return {status: false, token: ''}; 
  }
};