import React from 'react';
import { Button } from "@material-ui/core";
import { Send, ArrowBack } from "@material-ui/icons";
import { HashLink as Link } from "react-router-hash-link";
import FormCrypto from '../components/FormCrypto';

export default function NewCrypto() {

    return (
        <div className='newcrypto-api'>
            <div className='content-api'>
                <FormCrypto/>
                <Button
                    variant="outlined"
                    disableElevation
                    className="add-btn"
                    component={Link}
                    to="/crypto"
                >
                    <ArrowBack
                        style={{
                            marginRight: "7px",
                            fontSize: "20px",
                            fontWeight: "bolder",
                        }}
                    />
                    Get back
                </Button>
            </div>
            <div className='bg-crypto' />
        </div>
    )
}
