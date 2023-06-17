import { Category } from "./category.model";
import { Provider } from "./provider.model";

export class ProductModel {
    foodId?: number;
    foodName?: string;
    quantity?: number;
    price?: number;
    urlImg?: string;
    createDate?: Date;
    description?: string;
    importPrice?: number;
    provider?: Provider;
    category?: Category;
}