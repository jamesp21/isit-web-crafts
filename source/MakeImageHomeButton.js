import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class MakeImageHomeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            home: 'Go Home'
        }
    }

    goHome() {
        $.publish('home', {
            message: "The user wants to go home."
        });
    }

    render() {

        return <MuiThemeProvider>
            <div>
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.goHome}>
                    {this.state.home}
                </RaisedButton>
                <p>This is the React MakeImageHomeButton component.</p>
            </div>
        </MuiThemeProvider>;
    };
}

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default MakeImageHomeButton;