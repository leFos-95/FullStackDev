import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalQuantity: Subject<number> = new Subject<number>();
  totalPrice: Subject<number> = new Subject<number>();
  
  constructor() { }

  addToCart(theCartItem: CartItem) {
    
    // check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0) {
      
      // find the item in the cart based on the item id
      for(let tempCartItem of this.cartItems) {
        if(tempCartItem.id === theCartItem.id) {
          existingCartItem = tempCartItem;
            
        }
      }
    
      // check if we found it
      if(existingCartItem != undefined) {
        alreadyExistsInCart = true;
      }
    }

      if(alreadyExistsInCart) {
        // increment the quantity
        existingCartItem.quantity++;
      }
      else {
        // just add the item to the array
        this.cartItems.push(theCartItem);
      }

      // compute cart total price and total quantity
      this.computeCartTotals();
    }


  computeCartTotals() {
    
    let totalQuantityValue: number = 0;
    let totalPriceValue: number = 0.0;

    for (let currentCartItem of this.cartItems) {
      totalQuantityValue += currentCartItem.quantity;
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
    }

    // publish the new valeus... all subscribers will receive the new data
    this.totalQuantity.next(totalQuantityValue);
    this.totalPrice.next(totalPriceValue);

    // log cart data just for debugging purposes
    this.logCartData(totalQuantityValue);
  }

  logCartData(totalQuantityValue: number) {
    console.log('Contents of the cart');
    for(let tempCartItem of this.cartItems) {
     console.log(`name:  ${tempCartItem.name}, quantity=${tempCartItem.quantity}`); 
    }

    console.log(`totalQuantity: ${totalQuantityValue}`);
    console.log('-----');
  }

  decrementQuantity(theCartItem: CartItem) {

    theCartItem.quantity--;

    if(theCartItem.quantity === 0) {
      this.remove(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
    
  }
  remove(theCartItem: CartItem) {
  
    // get index of item in the array 
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === theCartItem.id );
    // if found, remove the item from the array at the given index
    if(itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }
}
