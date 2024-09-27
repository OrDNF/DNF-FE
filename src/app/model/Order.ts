import { Delivery } from "./Delivery";
import { Shop } from "./Shop";
import { UserInfo } from "./UserInfo";

export interface Order {
    id?: number;
    totalAmount?: number;
    orderDate?: string;
    shop_id?: Shop;
    userinfo_id?: UserInfo;
    delivery_id?: Delivery;
}