"use strict";

const { check } = require("prettier");

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = Math.random().toFixed();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.dateCreated = new Date();
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    this.isConfirmed = this.isConfirmed === false;
    this.dateConfirmed = this.dateConfirmed();
  }

  isValidType() {
    console.log(this.type);
    return this.type === "Buy" || this.type === "Sell";
  }
}

const newOrder = new Order(1500, "Kyiv", "Buy");
console.log(newOrder);
newOrder.confirmOrder();

const result = newOrder.isValidType();
console.log(result);
