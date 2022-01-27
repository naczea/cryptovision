import React from "react";
import RowsCrypto from "./RowsCrypto";

const titles = ["", "Image", "Coin", "Price"];

const TableCoins = ({ coins, search }) => {
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    if (!coins) return <div>no coins</div>

    return (
        <table className="table table-dark table-hover table-sm">
            <thead>
                <tr>
                    {titles.map((title, i) => (
                        <td key={i}>{title}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    filteredCoins.map((coin, index) => {

                        return (
                            <RowsCrypto key={coin.id} coin={coin} index={index + 1} />
                        )

                    })
                }
            </tbody>
        </table>
    );
};

export default TableCoins;