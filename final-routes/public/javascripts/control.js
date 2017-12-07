import React from 'react;'

Route01 = () => {
    const that = this;
    fetch('/route01')
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            return (<pre>result</pre>);
        })
        .catch(function (ex) {
            console.log('parsing failed', ex);
        });
};

Route02 = () => {
    const that = this;
    fetch('/route02')
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            return (<pre>result</pre>);
        })
        .catch(function (ex) {
            console.log('parsing failed', ex);
        });
};

Route03 = () => {
    const that = this;
    fetch('/route03')
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            return (<pre>result</pre>);
        })
        .catch(function (ex) {
            console.log('parsing failed', ex);
        });
};