import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  private baseUrl = 'http://localhost:8080/api/products';
  private categoryUrl = 'http://localhost:8080/api/product-category';
  

  constructor(private httpClient: HttpClient) { }

  

  // returns an Observable of Product[] 
  // this method is going to map the json data
  // from the spring data rest to a product array
  getProductList(theCategoryId: number): Observable<Product[]>{

    // build URL based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  getProduct(theProductId: number): Observable<Product> {
    
    // need to build URL based on the product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

  getProductListPaginate(thePage: number,
    thePageSize: number,
    theCategoryId: number): Observable<GetResponseProducts> {

    // need to build URL based on category id, page and size
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl);

  }

  searchProducts(theKeyword: string): Observable<Product[]> {
   
    // need to build a URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    
    return this.getProducts(searchUrl);
  }

  searchProductsPaginate(thePage: number,
                        thePageSize: number,
                        theKeyword: string): Observable<GetResponseProducts> {
    
      // need to buld URL based on keyword, page and size
      const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
            + `&page=${thePage}&size=${thePageSize}`;

      return this.httpClient.get<GetResponseProducts>(searchUrl);
                        }



  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
}

// Unwraps the JSON from Sprin Data Rest _embedded entry
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
