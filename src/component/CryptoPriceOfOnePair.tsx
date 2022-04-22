import React from "react";
import { CryptoData } from "../types/crypto-data";

interface Props {
    onePair: CryptoData;
}

export const CryptoPriceOfOnePair = (props: Props) => (
    <p style={{backgroundColor: Number(props.onePair.priceChangePercent) > 0 ? 'green' : Number(props.onePair.priceChangePercent) < 0 ? 'red' : 'lightblue', fontSize:'20px'}}>
        {props.onePair.symbol} current weighted value: {props.onePair.weightedAvgPrice}.
        <br />
        Price <strong>{Number(props.onePair.priceChangePercent) > 0 ? 'raised' : 'dropped'}</strong> by {Number(props.onePair.priceChangePercent)}%
    </p>
);