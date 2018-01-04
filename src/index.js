#!/usr/bin/env node

import "babel-polyfill";
import program from 'commander';
import fs from 'fs';
import { cartTotal } from './calculate'

let cart, basePrices

program
  .arguments('<cartFile> <basePricesFile>')
  .usage('<cartFile> <basePricesFile>')
  .action((cartFile, basePricesFile) => {
    try {
      cart = JSON.parse(fs.readFileSync(cartFile, 'utf8'));
      basePrices = JSON.parse(fs.readFileSync(basePricesFile, 'utf8'));
      console.log(`${cartTotal(cart, basePrices)}\n`)
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