import React from 'react';
import { Button } from "@material-ui/core";
import { Add, Refresh } from "@material-ui/icons";
import { HashLink as Link } from "react-router-hash-link";

import { getCoins } from '../lib/coins';
import TableCoins from '../components/TableCrypto';

export default function Crypto() {

    const [coins, setCoins] = React.useState([]);
    const [search, setSearch] = React.useState("");

    const handleRefresh = async () => {
        await loadCoins();
    }

    const loadCoins = async () => {
        try {
            const result = await getCoins();
            console.log(result);
            setCoins(result);
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        const loadInitialData = () => { loadCoins() }
        loadInitialData();
    }, [])

    return (
        <div className='crypto-api'>
            <div className='content-api'>
                <h1>Control your crypto</h1>
                <div className='input-crypto'>
                    <input
                        type="text"
                        placeholder="Search crypto"
                        className="form-control bg-dark text-light border-0 mt-4"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className='list-crypto'>
                    <TableCoins coins={coins} search={search} />
                </div>
                <div className='btn-content'>
                    <Button
                        variant="outlined"
                        disableElevation
                        className="add-btn"
                        component={Link}
                        to="/crypto/new"
                    >
                        <Add
                            style={{
                                marginRight: "7px",
                                fontSize: "20px",
                                fontWeight: "bolder",
                            }}
                        />
                        Add coin
                    </Button>
                    <Button
                        variant="outlined"
                        disableElevation
                        className="add-btn"
                        onClick={handleRefresh}
                    >
                        <Refresh
                            style={{
                                marginRight: "7px",
                                fontSize: "20px",
                                fontWeight: "bolder",
                            }}
                        />
                        Refresh
                    </Button>
                </div>
            </div>
            <div className='bg-crypto' />
        </div>
    )
}
