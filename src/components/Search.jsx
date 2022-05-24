import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { debounce } from 'lodash';
import { Route } from 'react-router';

import { getSearch } from '../api';
import css from './search.styles.module.css';


export function Search() {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([ ]);

    const inputChangeHandler = (event) => {
        setValue(event.target.value)
    };

    const getSearchDebounce = useCallback(debounce((value) => getSearch(value).then(({ data }) => {
        setOptions(data)
    }), 1500), []);
    const navigate = useNavigate();

    useEffect(() => {
        if (value.length > 2) {
            getSearchDebounce(value)
        }
    }, [value]);

    const onOptionClick = (o) => {
        navigate(`/amime/${o.mal_id}`)
    }

    return (
        <div>
            <input value={value} onChange={inputChangeHandler}></input>
            <ul className={css.input}>
                <Route>
                    {options.map((option) => (
                        <li key={option.mal_id} onClick={onOptionClick}>
                            {option.title}
                        </li>
                    ))}
                </Route>
            </ul>
        </div>
    )
}


