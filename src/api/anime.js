const url = 'https://api.jikan.moe/v4/top/';

export const getAnime = ({ type }) => {
    return fetch(`${url}${type}`).then((r) => r.json()
    );
};
