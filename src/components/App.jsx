import { useEffect, useState } from 'react';
import { getAnime } from '../api';

import css from './app.styles.module.css';

function App({ type }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAnime({ type }).then(({ data }) => {
            setData(data);
    });
    }, []);
    

  return (
    <div className="App">
          <div className={css.title}>TOP {type}</div>
          <div className={css.cards}>
              {data.map(({ title, mal_id, images }) => (
                  <div className={css.card} key={mal_id}>
                          {title}
                    <img className={css.img} src={images.jpg.image_url}></img>
                  </div>
              )).slice(0, 6)}
          </div>
          <div className={css.cards}>
              {data.map(({ title, mal_id, images }) => (
                  <div className={css.card} key={mal_id}>
                      {title}
                      <img className={css.img} src={images.jpg.image_url}></img>
                  </div>
              )).slice(6, 12)}
          </div>
    </div>
  )
}

export default App;
