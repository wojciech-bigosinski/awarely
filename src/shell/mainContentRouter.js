import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from "../pages/homePage/homePage";


export default function MainContentRouter() {
    return (
        <Switch>

            <Route path="/">
                <HomePage/>
            </Route>
            
        </Switch>
    )
}