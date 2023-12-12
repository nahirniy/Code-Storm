// ТУТ ПИШЕ ТІЛЬКИ МАКС
import axios from 'axios';
import { createParams } from './helpers';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

const cacheConfig = {
  maxAge: 60 * 60 * 24 * 30,
};

export const getCategoryList = async () => {
  const { data } = await axios.get(`/products/categories`, {
    headers: { 'Cache-Control': `max-age=${cacheConfig.maxAge}` },
  });

  return data;
};

export const getCurrentProducts = async parameters => {
  const params = createParams(parameters);

  const { data } = await axios.get(`/products/`, {
    params,
    headers: { 'Cache-Control': `max-age=${cacheConfig.maxAge}` },
  });

  return data;
};

export const getProductById = async id => {
  const { data } = await axios.get(`/products/${id}`, {
    headers: { 'Cache-Control': `max-age=${cacheConfig.maxAge}` },
  });

  return data;
};

export const getPopularProducts = async limit => {
  const { data } = await axios.get(`/products/popular?limit=${limit}`, {
    headers: { 'Cache-Control': `max-age=${cacheConfig.maxAge}` },
  });

  return data;
};

export const getDiscountProducts = async () => {
  const { data } = await axios.get(`/products/discount`, {
    headers: { 'Cache-Control': `max-age=${cacheConfig.maxAge}` },
  });

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
