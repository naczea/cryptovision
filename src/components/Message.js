import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message(props) {
    const { message, severity, open, handleClose } = props;
    return (
        <Snackbar anchorOrigin={{ horizontal: "right", vertical: "top" }} autoHideDuration={6000}
            open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>{message}</Alert>
        </Snackbar>
    );
}