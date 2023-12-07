// ТУТ ПИШЕ ТІЛЬКИ МАКС
import axios from 'axios';
import { createParams } from './helpers';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export const getCategoryList = async () => {
  const { data } = await axios.get(`/products/categories`);

  return data;
};

export const getCurrentProducts = async parameters => {
  const params = createParams(parameters);

  const { data } = await axios.get(`/products/`, { params });

  return data;
};

export const getProductById = async id => {
  const { data } = await axios.get(`/products/${id}`);

  return data;
};

export const getPopularProducts = async limit => {
  const { data } = await axios.get(`/products/popular?limit=${limit}`);

  return data;
};

export const getDiscountProducts = async () => {
  const { data } = await axios.get(`/products/discount`);

  return data;
};

export const addOrder = async body => {
  const { data } = await axios.post(`/orders`, body);

  return data;
};

export const addEmail = async body => {
  const { data } = await axios.post(`/subscription`, body);

  return data;
};
