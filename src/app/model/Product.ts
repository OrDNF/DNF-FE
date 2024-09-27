import { OrderDetail } from "./OrderDetail";
import { ProductCategory } from "./ProductCategory";
import { Shop } from "./Shop";

export interface Product{
    id?: number;
    productName?: string;
    price?: number;
    description?: string;
    image?: string;
    category_id?: ProductCategory;
    orderdetail_id?: OrderDetail;
    shop_id?: Shop;
}