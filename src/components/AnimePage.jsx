import { useParams } from "react-router";
import { useState, useEffect } from 'react'
import { getAnimePage } from '../api';

const AnimePage = ({ type }) => {
    
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getAnimePage({ type }).then(({ data }) => {
            setData(data);
        });
    }, [id]);

    return (
        <div>
            {data && (
                <>
                    <div>{data.title}</div>
                    <p>{data.synopsis}</p>
                </>
            )}
        </div>
    )
}

export {AnimePage}


