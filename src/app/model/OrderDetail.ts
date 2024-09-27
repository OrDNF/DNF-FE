import { Order } from "./Order";
import { OrderStatus } from "./OrderStatus";
import { PaymentMethod } from "./PaymentMethod";

export interface OrderDetail {
    id?: number;
    productAmount?: number;
    order_id?: Order;
    payment_id?:PaymentMethod;
    orderstatus_id?: OrderStatus;
}