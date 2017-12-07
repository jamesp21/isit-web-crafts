import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome';
import MakeHtml from './MakeHtml';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomeButtons from './HomeButtons';
import { Provider } from './react-redux';
import { createStore } from './redux';
import fireReducer from './fire-reducer';
const store = createStore(fireReducer);


/*let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml/>, homeDiv);
}

function reactHome() {
    $('#pageLoad').empty();
        home();
}

function home() {
    console.log('hi');
    ReactDOM.render(<ReactHome/>, homeDiv);
}

$(document).ready(function () {
    homeDiv = document.getElementById('home');
    home();
    $.subscribe('reactMakeHtml', reactMakeHtml);
    $.subscribe('home', reactHome);
});
*/

$(document).ready(function() {
    try {
        const root = document.getElementById('home');
        ReactDOM.render(
            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <HomeButtons/>
                    </div>
                </MuiThemeProvider>
            </Provider>
            , root);
    } catch (e) {
        console.error(e);
        document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
    }
});