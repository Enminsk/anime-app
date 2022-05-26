import { useParams } from "react-router";
import { getAnimePage } from '../api';

const AnimePage = ({ type }) => {
    const {id} = useParams();
    const [page, setPage] = useState({});

    useEffect(() => {
        getAnimePage({ type }).then(({ data }) => {
            setPage(data);
        });
    }, [id]);

    return (
        <div>
            {page && (
                <>
                    <div>{page.title}</div>
                    <p>{page.synopsis}</p>
                </>
            )}
        </div>
    )
}

export { AnimePage }
