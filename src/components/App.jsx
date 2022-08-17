import { Search } from './Search';
import { Anime } from './Anime';
import { AnimePage } from './AnimePage';
import { Route, Routes } from 'react-router';

export function App() {

    return (
        <>
            <Search />
            <Anime type="anime" />
            <Anime type="manga" />
            <Routes>
                <Route path='/anime/:id' element={<AnimePage />}/>
            </Routes>
        </>
    )
};

