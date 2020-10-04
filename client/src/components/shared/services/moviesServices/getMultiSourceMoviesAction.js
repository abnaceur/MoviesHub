import axios from "axios/index";

const apiSources = [
    "https://yts.lt/api/v2/list_movies.json",
    // "https://yts.unblocked.llc/",
    // "https://ytss.unblocked.si/",
    // "https://yts.unblocked.vet/",
    // "https://yts.pm/",
    // "https://yts.unblocked.vet/",
    // "https://ytss.unblocked.ms/",
    // "https://yts.unblocked.gdn/",
    // "https://tv-v2.api-fetch.website/movies/2",
    // "https://yts.am/",
    "http://www.yify-movies.net/",
    // "https://www4.yify.is/",
    // "https://yts.bypassed.wtf/",
    // "http://yify.live/",
    // "https://yifymovies.me/",
    // "http://yify.rocks/",
];

async function getMoviesBySource(url) {
    axios.get(url,
    )
        .then(results => {
            return (results.data);
        })
        .catch(err => {
            return (false);
        });
}

export function getMoviesFromSource() {
    let i = 0;
    while (i < apiSources.length) {
        getMoviesBySource(apiSources[i])
        i++;
    }
}