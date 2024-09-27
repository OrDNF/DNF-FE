import { Role } from "./Role";

export interface User{
    id?: number;
    userName?: string;
    password?: string;
    role_id?: Role;
}