import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/Graficos.css';

// Registrando os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graficos = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Desperdícios',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: data.values
      }
    ]
  };

  return (
    <div className="grafico">
      <Bar data={chartData} />
    </div>
  );
};

export default Graficos;
