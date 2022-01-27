import React from "react";

const RowsCrypto = ({ coin, index }) => {

    return (
        <tr>
            <td className="text-muted" style={{width: '10%', paddingLeft: '2%'}}>
                {index}
            </td>
            <td style={{width: '20%'}}>
                <img
                    src={coin.image}
                    alt={coin.name}
                    className="img-fluid"
                    style={{ width: "30%" }}
                />
            </td>
            <td style={{width: '35%'}}>
                <span>{coin.name}</span>
            </td>

            <td style={{width: '35%'}}>
                ${coin.current_price.toLocaleString()}
            </td>
        </tr>
    );
};

export default RowsCrypto;