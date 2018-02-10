# Subground

A Dungeon Crawler game
Very much a work in progress :)

## Install
1. Run `yarn install` or simply `yarn` from inside the project's root to install the required dependencies

## Run as Developer
1. Run `yarn run dev` to start an hot-reload server on port `7331` (`localhost:7331`) 

## Build for PRD
1. Run `yarn run build` to compile the code and create an archive ready for PRD (bundled `bundle.js` file in the `dist` folder) 

## Technicalities
1. **Typescript**
    - It is compiled back into ES5
2. **Yarn** is used to manage the external dependencies
3. **Webpack** is used to bundle the modules (into a single minified file)
    - In essence it handles the internal dependencies among all the files
