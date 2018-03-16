#!/usr/bin/env node

import "babel-polyfill";
import program from 'commander';
import fs from 'fs';
import { cartTotal } from './calculate'

let cart, basePrices, discountPrices

program
  .arguments('<cartFile> <basePricesFile> <discountFile>')
  .usage('<cartFile> <basePricesFile> <discountFile>')
  .action((cartFile, basePricesFile, discountFile) => {
    try {
      cart = JSON.parse(fs.readFileSync(cartFile, 'utf8'));
      basePrices = JSON.parse(fs.readFileSync(basePricesFile, 'utf8'));
      discountPrices = JSON.parse(fs.readFileSync(discountFile, 'utf8'));
      console.log(JSON.stringify(cartTotal(cart, basePrices, discountPrices), null, 2))
    }
    catch(err) {
      console.error(err);
    }
  })
  .parse(process.argv);


if (typeof cart === 'undefined') {
  console.error('\nerror: cart is missing or invalid!');
  process.exit(1)
}
if (typeof basePrices === 'undefined') {
  console.error('\nerror: basePrices is missing or invalid!');
  process.exit(1)
}