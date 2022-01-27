import React from 'react';
import { Button } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons";
import { HashLink as Link } from "react-router-hash-link";

export default function Main() {
    return (
        <div className='main-api'>
            <h1>
                Welcome to crypto
            </h1>
            <spam className='text-main'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur jahet esse jaase. 
            </spam>
            <Button
                variant="outlined"
                disableElevation
                className="actions_btn"
                component={Link}
                to="/crypto"
            >
                <ArrowRight
                    style={{
                        marginRight: "7px",
                        fontSize: "20px",
                        fontWeight: "bolder",
                    }}
                />
                Get Started
            </Button>
        </div>
    )
}