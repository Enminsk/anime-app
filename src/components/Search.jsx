import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { debounce } from 'lodash';


import { getSearch } from '../api';
import css from './search.styles.module.css';

function Search() {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([ ]);
    const navigate = useNavigate();

    const inputChangeHandler = (event) => {
        setValue(event.target.value)
    };

    const getSearchDebounce = useCallback(debounce((value) => 
    getSearch(value)
    .then(({ data }) => {
        setOptions(data)
    }), 500), []);
    
    useEffect(() => {
        if (value.length > 2) {
            getSearchDebounce(value)
        }
    }, [value]);

    const onOptionClick = (options) => {
        navigate(`/anime/${options.mal_id}`)
    }

    return (
        <>
            <div>
                <input value={value} onChange={inputChangeHandler}></input>
                <ul className={css.input}>
                    {options.map((option) => (
                        <Link key={option.mal_id} to={`/anime/${options.mal_id}`} onClick={onOptionClick}>
                            <li>
                                {option.title}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export {Search};
