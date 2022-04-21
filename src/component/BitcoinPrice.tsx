import React, { useEffect } from "react";

interface Props {

}

export const BitcoinPrice = (props: Props) => {
    return <>
        {
            useEffect(() => {
                (async () => {
                    const res = await fetch('https://api.binance.com/api/v3/order');
                    console.log(await res.json());
                })();
            })
        }
        test
    </>
}