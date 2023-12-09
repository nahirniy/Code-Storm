import { getDiscountProducts } from '../../services/food-api';
import markupDiscountList from './markup-discount-products';

getDiscountProducts().then(data => markupDiscountList(data));
