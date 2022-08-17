const urlAnime = 'https://api.jikan.moe/v4/top/';
const urlAnimePage = 'https://api.jikan.moe/v4/anime/';
const urlSearch = 'https://api.jikan.moe/v4/anime?q=';


export const getAnime = ({ type }) => {
    return fetch(`${urlAnime}${type}`).then((r) => r.json()
    );
};

export const getAnimePage = (mal_id) => {
    return fetch(`${urlAnimePage}${mal_id}`).then((r) => r.json()
    );
};

export const getSearch = (text) => {
    return fetch(`${urlSearch}${text}`).then((r) => r.json()
    );
};
