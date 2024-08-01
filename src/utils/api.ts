// const API_KEY = '6619a7edaa7836e07e237f782357370d';
const BASE_URL = 'https://api.themoviedb.org/3';



export const fetchMovies = async (page: number) => {
    const response = await fetch(`${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjE5YTdlZGFhNzgzNmUwN2UyMzdmNzgyMzU3MzcwZCIsIm5iZiI6MTcyMjM1NDExNS41MjgyMSwic3ViIjoiNjZhMmY4YjMwZjgxMDZkZDAwY2E4Y2U1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Dn7MhewE97ngriTsrIwIsBtnCPrzZ4amTvZkVGwccsM`
        }
    });
    const jsonData= await response.json()
    // console.log(jsonData);
    return jsonData;
    // return await response.json();
};

export const searchMovies = async (query: string) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjE5YTdlZGFhNzgzNmUwN2UyMzdmNzgyMzU3MzcwZCIsIm5iZiI6MTcyMjM1NDExNS41MjgyMSwic3ViIjoiNjZhMmY4YjMwZjgxMDZkZDAwY2E4Y2U1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Dn7MhewE97ngriTsrIwIsBtnCPrzZ4amTvZkVGwccsM`
        }
    });
    return await response.json();
};
