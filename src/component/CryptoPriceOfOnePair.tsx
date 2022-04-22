import React from "react";
import { CryptoData } from "../types/crypto-data";

interface Props {
    onePair: CryptoData;
}

export const CryptoPriceOfOnePair = (props: Props) => (
    <p style={{backgroundColor: Number(props.onePair.priceChangePercent) > 0 ? 'green' : 'red'}}>
        {props.onePair.symbol} current weighted value: {props.onePair.weightedAvgPrice}
    </p>
);