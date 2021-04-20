import React from "react";
import {Switch, Route} from 'react-router-dom'
import Main from "./components/pages/main/Main";
import Search from "./components/pages/search/Search";
export default function Routes() {
    return (
        <Switch>
            <Route path={'/'} exact>
                <Main/>
            </Route>
            <Route path={'/search'} exact>
                <Search/>
            </Route>
        </Switch>
    )
}
