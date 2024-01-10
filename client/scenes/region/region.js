import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend } from 'chart.js';
import { Line } from "react-chartjs-2";
import axios from 'axios';
ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement)
const Region = () => {
    const [regionData, setregionData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/getregion')
            .then((res) => setregionData(res.data))
            .catch(err => console.log(err))
    }, [])



    var data = {
        labels: regionData.map((item) => (item?._id)),
        datasets: [{
            label: regionData.map((item) => (item?._id)),
            data: regionData.map((item) => (item?.count)),
            backgroundColor: "aqua",
            borderColor: "red",
            pointBorderColor: "aqua",
            fill: true,
            tension: 0.2
        }]
    }

    var options = {
        plugins: {
            label: true
        },
        scales: {
            y: {

            }
        }
    }
    return (
        <div>
            <h2>Region LineChart</h2>
            <Line data={data} height={400} options={options} width={800} />
        </div>
    )
}


export default Region;

