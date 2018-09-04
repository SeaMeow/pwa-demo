# Pwa Demo using Angular 6 with Firebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

This project was created with the intention of providing a brief demo of the advantages of implementing PWA on a modern web app. 

## Setup Locally

Setup in your local environment by adding a firebase project settings in the environment files in src/environments. Example :
`
export const environment = {
  production: false,
  firebase: {
    apiKey: "##",
    authDomain: "##",
    databaseURL: "##",
    projectId: "##",
    storageBucket: "##",
    messagingSenderId: "##"
  }
};
`


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
