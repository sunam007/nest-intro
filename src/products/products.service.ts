import { Injectable } from "@nestjs/common";
import {Product} from "../products/products.model"

@Injectable()
export class ProductService{
     products: Product[] = [] ;

    insertProduct (title:string , desc: string , price: number) {
        const id = Math.floor(Math.random() * 100);
        const newProduct = new Product ( id.toString() , title , desc , price );
        this.products.push(newProduct);
    }
}