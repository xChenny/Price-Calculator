#!/usr/bin/env node

import "babel-polyfill";
import program from 'commander';
import colors from 'colors';
import fs from 'fs';
import { cartTotal } from './calculate'

program
  .arguments('<cartFile> <basePricesFile>')
  .usage('<cartFile> <basePricesFile>')
  .action((cartFile, basePricesFile) => {
    const cart = JSON.parse(fs.readFileSync(cartFile, 'utf8'));
    const basePrices = JSON.parse(fs.readFileSync(basePricesFile, 'utf8'));
    console.log(cartTotal(cart, basePrices) + '\n')
  })
  .parse(process.argv);
