// Angular2
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// Models
import { ProductModel } from '../../models/product.model';
import { ManufacturingItems } from '../../models/purchase-order/manufacturing-items.model';
import { ManufacturingModel } from '../../models/manufacturing.model';
// Services
import { VideoApiService } from './video-api.service';
import { ProductToValidateModel } from '../../models/ProductToValidateModel';
import { ProductDivisionModel } from '../../models/product-division.model';

@Injectable()
export class ProductRepository extends VideoApiService {

  constructor(private http: Http) {
    super();
  }

  // GET by id
  public getById(productId: number | string, language: string): Observable<ProductModel> {
    return this.http.get(this.apiUrl + 'products/' + productId + '?language=' + language + '&light=false')
      .map((res) => new ProductModel().fromJSON(res.json()))
      .catch(this.handleError);
  }

  // POST
  public post(product: ProductModel, language: string) {
    return this.http.post(this.apiUrl + 'products/?language=' + language, product)
      .toPromise()
      .catch(this.handleError);
  }

  // PUT
  public put(product: ProductModel, language: string) {
    return this.http.put(this.apiUrl + 'products/' + product.id + '?language=' + language, product)
      .toPromise()
      .catch(this.handleError);
  }

  // DELETE
  public deleteProduct(productId: number) {
    return this.http.delete(this.apiUrl + 'products/' + productId)
      .toPromise()
      .catch(this.handleError);
  }

  // GET product box set by title and ignore current product
  public getProductBoxSetByTitle(title: string, id: number): Observable<ProductModel[]> {
    if (id !== null) {
      return this.http.get(this.apiUrl + 'products/' + id + '/search?title=' + title)
        .map((res) => res.json())
        .catch(this.handleError);
    } else {
      return this.getByTitle(title);
    }
  }

  // GET product box set by ean and ignore current product
  public getProductBoxSetByEan(ean: string, id: number): Observable<ProductModel[]> {
    if (id !== null) {
      return this.http.get(this.apiUrl + 'products/' + id + '/search?ean=' + ean)
        .map((res) => res.json())
        .catch(this.handleError);
    } else {
      return this.getByEan(ean);
    }
  }

  // GET count(manufacturings) by Id
  public getManufacturingsCountById(id: number): Observable<number> {
    return this.http.get(this.apiUrl + 'products/' + id + '/manufacturings/count')
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // GET by title
  public getByTitle(title: string): Observable<ProductModel[]> {
    return this.http.get(this.apiUrl + 'products?title=' + title)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // GET by ean
  public getByEan(ean: string): Observable<ProductModel[]> {
    return this.http.get(this.apiUrl + 'products?ean=' + ean)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // GET by work id
  public getByWorkId(workId: number, language: string): Observable<ProductModel[]> {
    return this.http.get(this.apiUrl + 'products/works/' + workId + '?language=' + language)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // GET all items from last manufacturing by product id
  public getAllItemsFromLastManufacturingByProductId(productId: number, language: string): Observable<ManufacturingItems> {
    return this.http.get(this.apiUrl + 'products/' + productId + '/manufacturings-items?language=' + language)
      .map((res) => new ManufacturingItems().fromJSON((res.json())));
  }

  // GET all manufacturing by product id
  public getAllManufacturingByProductId(productId: number, language: string): Observable<ManufacturingModel[]> {
    return this.http.get(this.apiUrl + 'products/' + productId + '/manufacturings?language=' + language)
      .map((res) => new ManufacturingModel().fromJSONs((res.json())));
  }

  // GET all simple-product-divisions by product Id
  public getDivisionsByBoxSetProductId(productId: number, language: string): Observable<ProductDivisionModel[]> {
    return this.http.get(this.apiUrl + 'products/' + productId + '/divisions?language=' + language)
      .map((res) => new ProductDivisionModel().fromJSONs((res.json())));
  }

  // GET all box-set-product-divisions by product Id
  public getDivisionsBySimpleProductId(productId: number, language: string): Observable<ProductDivisionModel[]> {
    return this.http.get(this.apiUrl + 'products/' + productId + '/simple-divisions?language=' + language)
      .map((res) => new ProductDivisionModel().fromJSONs((res.json())));
  }

  // GET production ID by product ID
  public getProductionIdByProductId(productId: number): Observable<any> {
    return this.http.get(this.apiUrl + 'products/' + productId + '/production')
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // GET latest manufacturing id by product id
  public getLatestIdByProductId(productId: number): Observable<any> {
    return this.http.get(this.apiUrl + 'products/' + productId + '/last-manufacturing')
      .map((res) => res.json())
      .catch(this.handleError);
  }

  // GET by work id
  public getAllWithNoSapOrder(language: string): Observable<ProductModel[]> {
    return this.http.get(this.apiUrl + 'products/no-sap-order/?language=' + language)
      .map((res) => new ProductModel().fromJSONs(res.json()))
      .catch(this.handleError);
  }

  // PUT
  public putDistribution(product: ProductModel, language: string) {
    return this.http.put(this.apiUrl + 'products/' + product.id + '/distribution?language=' + language, product)
      .toPromise()
      .catch(this.handleError);
  }

  public getProductsToValidate(language: string): Observable<ProductToValidateModel[]> {
    return this.http.get(this.apiUrl + 'products/products-to-validate/?language=' + language)
      .map((res) => new ProductToValidateModel().fromJSONs(res.json()))
      .catch(this.handleError);
  }

  // PATCH products Validated
  public setProductsValidated(language: string, validatedProducts: ProductToValidateModel[]) {
    return this.http.patch(this.apiUrl + 'products/productsValidated/?language=' + language, validatedProducts)
      .toPromise()
      .catch(this.handleError);
  }

  // Global product search
  public productGlobalSearch(searchInput: string, language: string): Observable<ProductModel[]> {
    return this.http.get(this.apiUrl + 'products/globalSearch?searchInput=' + searchInput + '&language=' + language)
      .map((res) => res.json())
      .catch(this.handleError);
  }

  public updateNumFED(numFED: string, productId: number) {
    return this.http.patch(this.apiUrl + 'products/' + productId, numFED)
      .map((res) => res.json())
      .catch(this.handleError);
  }

}
