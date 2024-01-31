import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
    selectedInterval: string;
  }
const baseURL='http://localhost:8080/api/chart'

const GrowthChart:React.FC<ChartProps> = ({ selectedInterval }) => {
    console.log(selectedInterval)
  const [chartData, setChartData] = useState([
    {
      Timestamp: "January",
      Percentage: 9.35599994659424,
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseURL}?interval=${selectedInterval}`
        ); // Adjust the API endpoint and query parameters
        const data = await response.json();
        setChartData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedInterval]);

  const chartOptions: any = {
    scales: {
      x: {
        type: "category",
        labels: chartData
          .map((dataPoint) => dataPoint.Timestamp)
          .filter((value, index, self) => self.indexOf(value) === index),
      },
      y: {
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value: any) {
            return value >= 100 ? `${(value / 100).toFixed()}` : value;
          },
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: "Line Chart",
      },
      legend: {
        labels: {
          usePointStyle: true,
        },
      }
    },
    elements: {
      line: {
        tension: 0, 
      },
    },
    spanGaps: true,
    legend: {
      display: false, 
    },
  };

  const chartDataConfig = {
      labels: chartData.map((dataPoint) => dataPoint.Timestamp).filter((value, index, self) => self.indexOf(value) === index),
    datasets: [
      {
        label: "Profit Percentage",
        data: chartData.map((dataPoint) => dataPoint.Percentage),
        borderColor: "rgb(60, 179, 113)",
        borderWidth: 1,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.3)',
        borderDash: [2, 2],
        pointRadius: 0,
      },
    ],
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Line data={chartDataConfig} options={chartOptions} />
      )}
    </div>
  );
};

export default GrowthChart;
