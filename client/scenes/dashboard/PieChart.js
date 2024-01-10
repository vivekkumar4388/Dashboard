import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = () => {
    const [topicData, setTopicData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/getIntensity')
            .then((res) => setTopicData(res.data))
            .catch(err => console.log(err))
    }, [])
    const data = {
        labels: topicData.map((item) => (item?._id)),
        datasets: [{
            label: topicData.map((item) => (item?._id)),
            data: topicData.map((item) => (item?.count)),
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
            hoverOffset: 4

        }]
    }

    return (

        <div>
            Pie Chart
            <Pie data={data} height={400} width={600} />
        </div>
    )
}

export default PieChart;
