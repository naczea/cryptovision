import React from "react";
import RowsCrypto from "./RowsCrypto";

export default function TableCoins ({ coins, search }) {

    const columns = ["", "Image", "Coin", "Price"];

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <table className="table table-dark table-hover table-sm">
            <thead>
                <tr>
                    {columns.map((title, i) => (
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
