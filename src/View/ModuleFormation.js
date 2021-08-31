import React, {useState} from "react";
import Paper from '@material-ui/core/Paper';
import CssAddModule from "../Css/AddModule.module.css"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {Box, Button, Container} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CameraIcon from '@material-ui/icons/Camera';


function Module() {
    const [editorState, setEditorState] = useState("")
    console.log(editorState);


    return (<>


<Container className={CssAddModule.containerText}>
    <Box className={CssAddModule.title}>
        <CameraIcon />
        <h2>Ajouter une page au module</h2>
    </Box>
    <Paper elevation={3} className={CssAddModule.paperAddModule}>
        <Button
            variant="contained"
            color="default"
            className={CssAddModule.buttonVideo}
            startIcon={<CloudUploadIcon />}
        >
            Upload
        </Button>

        <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
        />

    </Paper>
</Container>


    </>);
}

export default Module;
