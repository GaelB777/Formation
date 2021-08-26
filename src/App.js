import React from "react";
import {BrowserRouter} from "react-router-dom";
import "./Css/App.css";
import {Box, Container, Link, makeStyles, TextField} from "@material-ui/core";
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';


const styles = theme => ({
  multilineColor:{
    color:'red'
  }
});


function App() {
  return (
<div>


  <BrowserRouter>


    <div className="navbar">

        <Container style={{display:"flex", marginLeft:"10px", flexWrap:"wrap"}}>

          <Box className="boxNavbar">
            <ViewModuleIcon style={{color:"white"}}/>
            <Link className="linkNavbar" component="button" href="">Modules</Link>
          </Box>

          <Box className="boxNavbar">
            <SupervisorAccountIcon style={{color: "white"}}/>
            <Link className="linkNavbar" component="button" href="">Administration</Link>
          </Box>

        </Container>

      <Container style={{display:"flex", marginLeft:"10px", flexWrap:"wrap"}}>

        <Box className="boxNavbar">
          <ImportContactsIcon style={{color:"white"}}/>
          <form>
            <TextField  InputLabelProps={{className:styles.multilineColor}} size="small" label="Outlined" variant="outlined" />
          </form>
        </Box>

      </Container>

    </div>


  </BrowserRouter>


</div>
  );
}

export default App;
