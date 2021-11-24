const baseUrl = 'http://localhost:3030/data';

export const getAll = () => {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc`)
        .then(res => res.json());           
};

export const getOne = (id) => {
    return fetch(`${baseUrl}/games/${id}`)
        .then(res => res.json());           
}; 

export const getLatest = () => {
    return fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(res => res.json());           
};