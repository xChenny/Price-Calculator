#!/usr/bin/env node
import program from 'commander';
import colors from 'colors';
import calculate from './calculate'

program
  .arguments('<cart> <basePrices>')
  .action((cart, basePrices) => {
  })
  .parse(process.argv);