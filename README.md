# A Price Calculator by Andrew Chen

Hello! Welcome to my submission of the RedBubble Internship Assessment. 

This is a NodeJS implementation and I tested it using Facebook's Jest testing framework.

## Table of Contents

- Installation
- Running the program
- Testing
- Notes

## Installation

    Prerequisites

    - NodeJS
    - NPM

Installing Node:

The [nvm](https://github.com/creationix/nvm) (Node Version Manager) script is a utility that you can easily install and switch between versions of NodeJS. Click on the link for a quick guide on how to install it.

Once installed, run the following command in the terminal to check that it has installed correctly.

`nvm --version`

If a version number appears, then we're in business! Run this command to install a LTS version of node, along with NPM.

`nvm install 8.9.3`

Now, we're all set up!

### Installing the project

1. Clone the project

    `git clone https://github.com/xChenny/Price-Calculator.git`

2. Install project dependencies

    `npm install`

3. Build/Transpile the project to make it usable by NodeJS (ES6 -> ES5 Javascript)

    `npm run build`

4. Install the script and put it in the PATH environment. This is automatically done for you by npm

    `npm install -g`

5. Test the script out

    `price <CART> <BASE_PRICES>`

    There are some files in the `/assets` folder to test this out.

    `price assets/cart/cart-4560.json assets/basePrice/basePrices.json`