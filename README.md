# A Price Calculator by Andrew Chen

Hello! Welcome to my submission of the RedBubble Internship Assessment. 

This is a NodeJS implementation and I tested it using Facebook's Jest testing framework.

## Table of Contents

- Installation
- Running the program
- Testing
- Notes

## Installation


#### For the RedBubble Submission Installation:

Make sure that you have the prerequisite programs installed and skip to step 2 of normal installation instructions below!


#### Prerequisites

- NodeJS
- NPM

*Installing Node:*

The [nvm](https://github.com/creationix/nvm) (Node Version Manager) script is a utility that you can easily install and switch between versions of NodeJS. Click on the link for a quick guide on how to install it.

Once installed, run the following command in the terminal to check that it has installed correctly.

`nvm --version`

If a version number appears, then we're in business! Run this command to install a LTS version of node, along with NPM.

`nvm install 8.9.3`

and quickly check node and npm:

`node -v`

`npm -v`

Now, we're all set up!

### Installing and Running the Project

1. Clone the project

    `git clone https://github.com/xChenny/Price-Calculator.git`

2. Enter the project folder

    `cd Price-Calculator`

3. Install project dependencies

    `npm install`

4. Build/Transpile the project to make it usable by NodeJS (ES6 -> ES5 Javascript)

    `npm run build`

5. Install the script and put it in the PATH environment. This is automatically done for you by npm

    `npm install -g`

    **Note:** If this command did not work, then try running it with the `sudo` command in the front

    `sudo npm install -g`

6. Test the script out

    `price <CART> <BASE_PRICES>`

    There are some files in the `/assets` folder to test this out.

    `price assets/cart/cart-4560.json assets/basePrice/basePrices.json`

### Running Automated tests

To run the tests, make sure that you have the `/node_modules` and `/build` folders installed.

Simply run the following command to start the test runner:

  `npm run test`

  To add a coverage report, run this command:

  `npm run testCoverage`


## Program Design and Design Choices


My project is roughly outlined like so:


![/assets/tree.png](/assets/tree.png)


The "main" file where the program runs is `/src/index.js`


The other files that are in the folder, (such as `calculate.js` or `compare.js`) will be modules for any extensions that I plan to implement in the future and this is made easy with Javascript's module exporting.


While the program is still small, it will suffice to make them files, but if the functionality gets more complicated, then I will change the modules from individual files to directories with comprised of smaller files to promote modularity.


### Notes on Test Coverage

I chose not to test the `index.js` entry file because the file consisted of just the `commander` and NodeJS framework calls and my functions that I test already.

I didn't think that testing established frameworks made any sense, so I didn't test them.

There is also a single branch in the `calculate.test.js` test file that I neglected to test because that confirms whether or not the cart matches the basePrices files, and since the assignment said that doing checks for that was not required, I did not test it.
