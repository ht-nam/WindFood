import { Bill } from "./bill.model";

export class Person {
    
    personId?: number;
    username?: string;
    password?: string | null;
    role?: number;
    name?: string;
    phoneNumber?: string;
    birthday?: Date;
    urlImg?:string;
    token?: string;
    createDate?: Date;
    bills?: Bill[];

    constructor() {
        
    }
}