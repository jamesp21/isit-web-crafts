import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

class MakeHtmlHomeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            home: 'Go Home'
        }
    }

    goHome() {
        /*$.publish('home', {
            message: "The user wants to go home."
        });*/

        this.props.dispatch({type: 'SWITCH_COMPONENT', component: 'app'});
    };

    render() {

        return <MuiThemeProvider>
            <div>
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.goHome}>
                    {this.state.home}
                </RaisedButton>
                <p>This is the React MakeHtmlHomeButton component.</p>
            </div>
        </MuiThemeProvider>;
    };
}

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

MakeHtmlHomeButton = connect()(MakeHtmlHomeButton);

export default MakeHtmlHomeButton;