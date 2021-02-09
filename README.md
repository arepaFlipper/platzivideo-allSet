# platzivideo-allSet

Example project taken from Escuela de JavaScript courses to implement de testing end-to-end using Cypress.

## The problem
You want to execute the Platzivideo project, but it requires to have a deployed API and a mongoDB instance developed from "curso de Backend con Node.js" and "Curso de Autenticación con Passport.js", by this method we would need to use some sensitive credentials in order to show the tests.

## This solution

The actual proyect requires a deployed API and a mongoDB instance that provides the App a backend. For testing purposes the current repository has a docker-compose set-up to execute the whole App using 4 services (api, mongo, web, testing), by this way it does not require any deployed configuration or sensitive data, and it is pretty straight forward to execute.

## Installation

These images have all dependencies necessary to install and run Platzivideo with a testing module together. Just install `docker` & `docker-compose`, and enable the X11 Access Control to run the cypress GUI, then you will able to execute:

```docker-compose up```