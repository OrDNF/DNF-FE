import { UserInfo } from "./UserInfo";

export interface Shop{
    id?: number;
    bankNumber?: string;
    bankName?: string;
    shopName?: string;
    userinfo_id?: UserInfo;
}