import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import "./Css/App.css";
import {Box, Container, makeStyles, TextField} from "@material-ui/core";
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Module from "./View/ModuleFormation";


const useStyles = makeStyles({
    input: {
        backgroundColor: "skyblue",
        borderColor: "white !important",
        color: "white"
    },
    label: {
        color: "white",
    },

   focused:{
        borderColor:"white"
   }

});


function App() {
    const classes = useStyles();

    return (
        <div>


            <BrowserRouter>

                <div className="navbar">

                    <Container style={{display: "flex", marginLeft: "10px", flexWrap: "wrap"}}>
                        <Box className="boxNavbar">
                            <ViewModuleIcon style={{color: "white"}}/>
                            <Link to="/modules" className="linkNavbar" >Modules</Link>
                        </Box>

                        <Box className="boxNavbar">
                            <SupervisorAccountIcon style={{color: "white"}}/>
                            <Link to="/addModules" className="linkNavbar" >Administration</Link>
                        </Box>

                    </Container>

                    <Container style={{display: "flex", marginLeft: "10px", flexWrap: "wrap"}}>

                        <Box className="boxNavbar">
                            {/*<ImportContactsIcon style={{color: "white"}}/>*/}
                            {/*<form>*/}
                            {/*    <TextField*/}
                            {/*        InputLabelProps={{*/}
                            {/*            className: classes.label,*/}
                            {/*            classes: {*/}
                            {/*                focused: classes.focused*/}
                            {/*            }*/}
                            {/*        }}*/}

                            {/*        InputProps={{*/}
                            {/*            className: classes.input,*/}
                            {/*            classes: {*/}
                            {/*                focused: classes.focused,*/}
                            {/*                rout: classes.outlined*/}
                            {/*            }*/}
                            {/*        }}*/}
                            {/*        size="small"*/}
                            {/*        label="Outlined"*/}
                            {/*        variant="outlined"*/}
                            {/*    />*/}
                            {/*</form>*/}
                        </Box>

                    </Container>

                </div>

                <Switch>
                    <Route exact path = "/addModules">
                        <Module/>
                    </Route>
                </Switch>

            </BrowserRouter>




        </div>
    );
}

export default App;
