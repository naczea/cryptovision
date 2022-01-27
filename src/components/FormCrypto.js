import React from 'react';
import { Button } from "@material-ui/core";
import { Send, ArrowBack } from "@material-ui/icons";
import { postCoin } from '../lib/coins';
import Message from './Message';

export default function FormCrypto() {

    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState();

    const [mns, setMns] = React.useState('');
    const [severity, setSeverity] = React.useState('');
    const [openMns, setOpenMns] = React.useState(false);

    const handleClick = (mns, severity) => {
        setOpenMns(true);
        setSeverity(severity);
        setMns(mns);
    };

    const handleCloseMns = (event, reason) => {
        if (reason === 'clickaway') { return }
        setOpenMns(false);
    };

    const sendCoin = async () => {
        let body = {
            name: name,
            current_price: price
        };
        if(body.name=='' || body.current_price==0 || body.current_price==null){
            handleClick('Complete the information', 'error');
            setName('');
            setPrice(0);
        }else{
            try {
                const result = await postCoin(body);
                console.log(result);
                handleClick('Coin created!', 'success');
            } catch (err) {
                console.error(err);
            }
            setName('');
            setPrice(0);
        }
    }

    return (
        <div className='form-crypto'>
            <h1>Createa new crypto</h1>
            <form>
                <div className='input-crypto'>
                    <input
                        type="text"
                        placeholder="Coin name"
                        className="form-control bg-dark text-light border-0 mt-4"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Coin price $"
                        className="form-control bg-dark text-light border-0 mt-4"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
            </form>

            <Button
                variant="outlined"
                disableElevation
                className="add-btn"
                onClick={() => sendCoin()}
            >
                <Send
                    style={{
                        marginRight: "7px",
                        fontSize: "20px",
                        fontWeight: "bolder",
                    }}
                />
                Send
            </Button>
            <Message message={mns} severity={severity} open={openMns} handleClose={handleCloseMns} />
        </div>
    )
}
