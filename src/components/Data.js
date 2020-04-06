import React, {useContext, useState, useEffect} from 'react';
import { Pie, Bar } from 'react-chartjs-2';

import { SpesifikProvinsi } from "./SpesifikProvinsi";

import { DataContext } from '../context/DataContext';

export const Data = () => {
  const [data, , dataProvinsi] = useContext(DataContext);

  const [prov, setProv] = useState({
    nama: [],
    positif: [],
    sembuh: [],
    meninggal: []
  });

  

  useEffect(() => {
    const nama2provinsi = dataProvinsi.map(val => val.nama);
    const positif2provinsi = dataProvinsi.map(val => val.positif);
    const sembuh2provinsi = dataProvinsi.map(val => val.sembuh);
    const meninggal2provinsi = dataProvinsi.map(val => val.meninggal);
    setProv({ nama: nama2provinsi, positif: positif2provinsi, sembuh: sembuh2provinsi, meninggal: meninggal2provinsi });
  }, [dataProvinsi]);
  
  const pieData = {
    labels: ['Meninggal', 'Sembuh', 'Perawatan'],
    datasets: [{
      data: [data.meninggal, data.sembuh, data.perawatan],
      backgroundColor: ['rgba(255, 33, 33, 1)','rgba(33, 255, 33, 1)','rgba(255, 188, 48, 1)'],
      borderWidth: 1
    }],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      labels: {
        fontColor: '#fff',
        boxWidth: 20
      },
      position: 'bottom'
    }
  };

  const provinsiData = {
    labels: prov.nama,
    datasets: [{
      labels: 'Daftar Provinsi Positif Covid',
      backgroundColor: 'rgba(255, 123, 0, 1)',
      minBarLength: 1,
      data: prov.positif
    }]
  };
  const provinsiOption = {
    scales: {
      xAxes : [{
        ticks: {
          beginAtZero: true,
          fontColor: '#FFF',
          barThickness: 'flex'
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: '#FFF'
        }
      }]
    },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: false
  };
  return (
    <section className="data-container">
      <div className="data-box">
        <h2>Data Chart</h2>
        <div className="data-pie">
          <Pie 
            height={300}
            width={300}
            data={pieData}
            options={options}
          />
        </div>
        <div className="data-provinsi">
        <h2>Data Provinsi</h2>
          <Bar 
            height={450} 
            width={1200}
            data={provinsiData}
            options={provinsiOption}
          />
        </div>
        <SpesifikProvinsi prov={prov}/>
      </div>
    </section>
  )
}