import React, { useContext } from 'react';
import CountUp from 'react-countup';

import { DataContext } from '../context/DataContext';

export const Status = ({ loading }) => {
  const [data] = useContext(DataContext);
  if (data.persenPositif === undefined) {
    return loading;
  }
  return (
    <div className='status'>
      <div className='status-box'>
        <p>
          Positif ( {data.persenPositif}% <span />
          🌍 )
        </p>
        <p className='status-number positif'>
          <CountUp start={0} end={data.positif} duration={2.75} separator=',' />
        </p>
      </div>
      <div className='status-box'>
        <p>
          Perawatan <span role='img' />
          🙏
        </p>
        <p className='status-number perawatan'>
          <CountUp
            start={0}
            end={data.perawatan}
            duration={2.75}
            separator=','
          />
        </p>
      </div>
      <div className='status-box'>
        <p>
          Sembuh ( {data.persenSembuh}% <span />
          😀 )
        </p>
        <p className='status-number sembuh'>
          <CountUp start={0} end={data.sembuh} duration={2.75} separator=',' />
        </p>
      </div>
      <div className='status-box'>
        <p>
          Meninggal ( {data.persenMeninggal}% <span />
          😥 )
        </p>
        <p className='status-number meninggal'>
          <CountUp
            start={0}
            end={data.meninggal}
            duration={2.75}
            separator=','
          />
        </p>
      </div>
    </div>
  );
};
