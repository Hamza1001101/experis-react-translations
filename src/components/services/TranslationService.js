import http from "../../http-common";

const getAll = () => {
  return http.get("/translations");
};

const getTenTranslationsByProfile = (author) => {
  return http.get(`/translations/?author=${author}&_limit=10`);
};

const get = (id) => {
  return http.get(`/translations/?id=${id}`);
};

const post = (data) => {
  return http.post("/translations/", data);
};

const TranslationService = {
  getAll,
  getTenTranslationsByProfile,
  get,
  post,
};

export default TranslationService;
