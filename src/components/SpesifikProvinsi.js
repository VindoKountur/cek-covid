import React, {useState, useEffect , useCallback} from 'react';
import { Bar } from "react-chartjs-2";

export const SpesifikProvinsi = ({ prov }) => {
  const [viewIndex, setViewIndex] = useState(0);
  
  const provinsiBar = 
    prov !== undefined
    ?
    (<Bar 
      data={{
        labels: ['Positif', 'Sembuh', 'Meninggal'],
        datasets: [{
          labels: `${prov.nama[viewIndex]}`,
          backgroundColor: ['rgba(255, 188, 48, 1)','rgba(33, 255, 33, 1)','rgba(255, 33, 33, 1)'],
          data: [prov.positif[viewIndex], prov.sembuh[viewIndex], prov.meninggal[viewIndex]]
        }]
      }}
      options={{
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
      }}
    />)
    : 'Please Wait...';

  return (
    <div className="spesifik-provinsi">
      <h2>Lihat Provinsi Tertentu</h2>
      <select className="pilihprovinsi" onChange={(e) => setViewIndex(e.target.value)}>
        {prov.nama.map((nama, i) => <option value={i} key={i}>{nama}</option>)}
      </select>
      {provinsiBar}
    </div>
  )
}
