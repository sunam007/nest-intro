import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller("products")
export class ProductController {
    constructor(private readonly productService: ProductService ){}

   @Post() 
   addProduct(
    @Body("title") prodTitle: string,
    @Body("description") prodDesc: string,
    @Body("price") prodPrice: number,
   ):any {
  const newProduct =  this.productService.insertProduct(prodTitle,prodDesc , prodPrice );
    return {data: newProduct}
    }
}