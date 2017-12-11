#!/usr/bin/env node
import program from 'commander';
import colors from 'colors';

program
  .arguments('<word>')
  .action(word => {
    winston.log('word: %s'.green, word);
  })
  .parse(process.argv);