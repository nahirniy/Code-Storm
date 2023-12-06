// ТУТ ПИШЕ ТІЛЬКИ МАКС
import axios from 'axios';

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

export const getCategoryList = async () => {
  const { data } = await axios.get(`/products/categories`);

  return data;
};

export const getCurrentProducts = async ({ value, category, page, limit }) => {
  const params = new URLSearchParams({
    page,
    limit,
  });

  if (value) {
    params.set('value', value);
  }

  if (category) {
    params.set('category', category);
  }

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
