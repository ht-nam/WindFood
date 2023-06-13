import { Provider } from "./provider.model";

export class Food {
    foodId?: number;
    foodName?: string;
    quantity?: number;
    price?: number;
    description?: string;
    urlImg?: string;
    createDate?: Date;
    provider?: Provider;
}