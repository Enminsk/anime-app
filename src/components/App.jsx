import { useEffect, useState } from 'react';
import { getAnime } from '../api';

import './App.css';

function App({ type }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAnime({ type }).then(({ data }) => {
            setData(data);
    });
    }, []);

  return (
    <div className="App">
          <div className="cards">
              {data.map(({ title, mal_id, images }) => (
                  <div className="card" key={mal_id}>
                          {title}
                          <img className="img" src={images.jpg.image_url}></img>
                  </div>
              )).slice(0, 6)}
        </div>
    </div>
  )
}

export default App;
