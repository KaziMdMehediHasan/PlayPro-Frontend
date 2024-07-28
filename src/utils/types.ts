export interface TCartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
    image: string;
    count: number;
}

export interface TProduct {
    _id: string;
    name: string;
    stockQuantity: number,
    brand: string;
    description: string;
    productDescription: string;
    price: number;
    image: string;
    rating: number;
    inStock: boolean;
    category: string;
}