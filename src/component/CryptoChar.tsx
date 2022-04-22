import React from "react";
import { Line } from "react-chartjs-2";
import { CryptoData } from "../types/crypto-data";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';

    import './Crypto.css'
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

interface Props {
    data: CryptoData[];
}

export const CryptoChart = (props: Props) => {

    const state = {
        labels: props.data.map(one => one.symbol),
        datasets: [
            {
                label: 'weightedAvgPrice',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: props.data.map(one => Number(one.weightedAvgPrice))
            }
        ]
    }

    return <div className="container">
        <Line
            data={state}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Currency weighted price',
                    },
                    legend: {
                        display: true,
                        position: 'right',
                    }
                },
            }}
        />
    </div>;
}