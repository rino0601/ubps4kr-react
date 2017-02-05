import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import reducers from "./redux";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(reducers);
injectTapEventPlugin();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

