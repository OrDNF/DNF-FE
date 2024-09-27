import { Order } from "./Order";
import { Product } from "./Product";

export interface Comments{
    id?: number;
    starNumber?: number;
    comments?: string;
    image?: string;
    order_id?: Order;
    product_id?: Product;
}