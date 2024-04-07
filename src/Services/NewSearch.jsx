import api from "./api";

const ENDPOINT = '/search'

export default async ([geral, intro, questions], token) => {
  const objFormated = {
    client: {
      clientId: geral.clientId,
      meta: geral.meta,
      qtdUsers: geral.qtdUsers,
      total: geral.total
    },
    intro: intro,
    questions: questions,
  };

  try {
    const { data } = await api.post( ENDPOINT, objFormated, { headers: { 'Authorization': token }});
    return {status: true, data};
  } catch (_error) {
    return {status: false, data: []};
  }
};
