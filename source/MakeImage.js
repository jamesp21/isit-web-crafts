import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeHtmlDropDowns from './MakeHtmlDropDowns';
import MakeImageHomeButton from './MakeImageHomeButton';

class MakeImage extends React.Component {
    render() {

        return <MuiThemeProvider>
            <div>
                <MakeImageHomeButton/>
                <MakeHtmlDropDowns/>
            </div>
        </MuiThemeProvider>;
    };
}

export default MakeImage;