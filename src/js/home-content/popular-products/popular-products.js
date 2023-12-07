import { getPopularProducts } from '../../services/food-api';
import markupPopularList from './markup-popular-products';

const limitPopularProduct = 5;

getPopularProducts(limitPopularProduct).then(data => markupPopularList(data));
