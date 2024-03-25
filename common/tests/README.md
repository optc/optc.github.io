# OPTC-DB Tests

You can write here all the unit tests you want.

We have setup Jest and babel in order to be able to write tests with ES6 language feature (import/export, async/await, ...)

If you need help with Jest, take a look at their docs: <https://jestjs.io/docs/using-matchers>

`DBLoader.js` file is here to help you loading the database into nodeJS and it wire up all the database preloading, and export all the block you should need.

## How to configure your machine

1. Install NodeJS 14+ <https://nodejs.org/en/>
2. From a command-line, go to this sub-folder `cd common/tests`
3. Restore the package with `npm install`
4. Now you can
   1. Launch the watcher with `npm run test:watch`, (it will automatically relaunch the tests associated with the file you will be editing)
   2. Run the test suite with `npm run test`
