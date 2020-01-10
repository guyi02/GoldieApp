import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apisystem.itgoldie.com.br/app_solicitacoes.php',
});

export default api;
