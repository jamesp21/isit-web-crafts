import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome';
import MakeHtml from './MakeHtml';
import MakeImage from './MakeImage';

let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml/>, homeDiv);
}

function reactMakeImage(event, customMessage) {
    ReactDOM.render(<MakeImage/>, homeDiv);
}

function reactHome() {
    $('#pageLoad').empty();
        home();
}

function home() {
    ReactDOM.render(<ReactHome/>, homeDiv);
}

$(document).ready(function () {
    homeDiv = document.getElementById('home');
    home();
    $.subscribe('reactMakeHtml', reactMakeHtml);
    $.subscribe('home', reactHome);
});

$(document).ready(function () {
    homeDiv = document.getElementById('home');
    home();
    $.subscribe('reactMakeImage', reactMakeImage);
    $.subscribe('home', reactHome);
});