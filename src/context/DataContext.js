import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { RectGraduallyShowLoading } from 'react-loadingg';

export const DataContext = createContext();

export const DataProvider = (props) => {
  // const urlInd = "http://localhost:5000/api/covid/lokal";
  // const urlProvinsi = "http://localhost:5000/api/covid/provinsi";
  const realUrlInd = 'https://make-life-easier.herokuapp.com/api/covid/lokal';
  const realUrlProvinsi =
    'https://make-life-easier.herokuapp.com/api/covid/provinsi';
  const [data, setData] = useState({});
  const [dataProvinsi, setDataProvinsi] = useState([]);

  const loading = <RectGraduallyShowLoading color={'#FFF'} />;

  const fetchData = () => {
    axios
      .get(realUrlInd)
      .then((res) => {
        const tmpData = { ...res.data.data };
        setData({ ...tmpData });
      })
      .catch((err) => console.log(err));
  };

  const fetchProvinsi = () => {
    axios
      .get(realUrlProvinsi)
      .then((res) => {
        setDataProvinsi([...res.data.data]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
    fetchProvinsi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // <div>{loading}</div>
    <DataContext.Provider
      value={[data, setData, dataProvinsi, setDataProvinsi]}
    >
      {props.children}
    </DataContext.Provider>
  );
};
