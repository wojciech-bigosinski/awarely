import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import HomePage from "../pages/homePage/homePage";
import EditorPage from "../pages/editorPage/editorPage";


export default function MainContentRouter() {
    return (
        <Switch>

            <Route path="/editor">
                <EditorPage/>
            </Route>

            <Route path="/">
                <HomePage/>
            </Route>
            
        </Switch>
    )
}