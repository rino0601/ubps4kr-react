import React, {Component} from "react";
import MyList from "./MyList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ImageAddAPhoto from "material-ui/svg-icons/image/add-a-photo";
import styled from "styled-components";
import spacing from "material-ui/styles/spacing";

class App extends Component {

    render() {
        const FloatingActionButtonS = styled(FloatingActionButton)`
            position: fixed;
            right: 20px;
            bottom: 20px;
        `;
        const styles = {
            root: {
                paddingTop: spacing.desktopToolbarHeight,
                minHeight: 400,
            },
            content: {
                margin: 0//spacing.desktopGutter,
            },
            appBar: {
                position: "fixed",
                top: 0
            }
        };
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar style={styles.appBar}/>
                    <div style={styles.root}>
                        <div style={styles.content}>
                            <MyList />
                            {this.props.children}
                        </div>
                    </div>
                    <FloatingActionButtonS>
                        <ImageAddAPhoto />
                    </FloatingActionButtonS>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
