import React, {Component} from "react";
import "./App.css";
import MyList from "./MyList";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ImageAddAPhoto from "material-ui/svg-icons/image/add-a-photo";

class App extends Component {

    render() {
        const style = {
            position: "fixed",
            right: "20px",
            bottom: "20px"
        };
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="TITLe"
                    />
                    <MyList />
                    <FloatingActionButton style={style}>
                        <ImageAddAPhoto />
                    </FloatingActionButton>
                </div>

            </MuiThemeProvider>
        );
    }
}

export default App;
