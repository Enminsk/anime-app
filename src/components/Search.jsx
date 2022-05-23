import { useCallback, useEffect, useState } from 'react';
/* import { useNavigate } from "react-router-dom"; */
import { debounce } from 'lodash';

import { getSearch } from '../api';


export function Search() {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([ ]);

    const inputChangeHandler = (event) => {
        setValue(event.target.value)
    };

    const getSearchDebounce = useCallback(debounce(getSearch, 1500));
/*     const navigate = useNavigate(); */

    useEffect(() => {
        if (value.length > 2) {
            getSearchDebounce(value).then(({ data }) => {
                setOptions(data)
            });
        }
    }, [value]);

/*     const onOptionClick = (o) => {
        navigate(`/amime/${o.mal_id}`)
    } */

    return (
        <div>
            <input value={value} onChange={inputChangeHandler}></input>
            <ul>
                {options.map((option) => (
                    <li key={option.mal_id}>
                        {option.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}


