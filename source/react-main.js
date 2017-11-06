import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome';

function reactHome() {
    $('#pageLoad').load('/empty', function () {
        home();
    });
}

function home() {
    ReactDOM.render(<ReactHome/>, homeDiv);
}

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml/>, homeDiv);
}

$(document).ready(function () {
    homeDiv = document.getElementById('home');
    home();
    $.subscribe('reactMakeHtml', reactMakeHtml);
});