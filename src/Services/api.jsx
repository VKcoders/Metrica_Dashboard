import axios from 'axios';

const {url, prefix} = {
  url: 'https://api.vkcoders.com',
  prefix: "/metrica"
}

const api = axios.create({
  baseURL: url + prefix,
});

export default api;