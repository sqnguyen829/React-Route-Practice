**Simple useage of routes**
This is just a brief example of using routes. In this app we'll cover using routes to redirect to multiple pages as well as passing props around.

**Setting up a quick app**
npx create-react-app "App-name"

make the components we are playing with
( About InitPage Test)

removeing all code in the return of the App.js

install routes
npm install --save react-router-dom

We need to import this where the route are being created
import { BrowserRouter, Route } from 'react-router-dom'

The exact key word is used when there are child routes to a certain route when assigning to <Route />