import { User } from "./User";

export interface UserInfo {
    id?: number;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    address?: string;
    user_id?: User;
}