import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, BarElement, LinearScale, CategoryScale } from 'chart.js';
import { Bar } from "react-chartjs-2";
import axios from 'axios';
ChartJS.register(CategoryScale, BarElement, LinearScale)

const BarChart = () => {
    const [likelihoodData, setlikelihoodData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/getlikelihood')
            .then((res) => setlikelihoodData(res.data))
            .catch(err => console.log(err))
    }, [])



    var data = {
        labels: likelihoodData.map((item) => (item?._id)),
        datasets: [{
            label: likelihoodData.map((item) => (item?._id)),
            data: likelihoodData.map((item) => (item?.count)),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    }

    var options = {
        scales: {
            y: {
                beginAtZero: true,

            }
        }, legend: {
            label: {
                fontSize: 26
            }
        }
    }
    return (
        <div>

            <Bar data={data} height={400} options={options} width={800} />
        </div>
    )
}


export default BarChart;
