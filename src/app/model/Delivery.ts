import { DeliveryStatus } from "./DeliveryStatus";
import { UserInfo } from "./UserInfo";

export interface Delivery{
    id?: number;
    userinfo_id?: UserInfo;
    deliverystatus_id?: DeliveryStatus;
}