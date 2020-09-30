import axios from "axios/index";

async function getMoviesBydate(page, query) {
    return new Promise((resolve, reject) => {
        axios.get("https://yts.mx/api/v2/list_movies.json?page=" + page + query)
            .then(async (results) => {
                resolve(results);
            })
    })
}

export function getMoviesByRatings(query, page, filter) {
    return new Promise(async(resolve, reject) => {
        const headers = {
            'Content-Type': 'application/json',
          }

        if (filter === undefined) {
            axios.get("https://yts.mx/api/v2/list_movies.json?page=" + page + query, 
            {
                headers: headers
            }
            )
                .then(results => {
                    resolve(results.data.data)
                })
                .catch(err => {
                    resolve(false)
                });
        } else {
            let results = await getMoviesBydate(page, query);

            let new_result = [];
            const min = filter[0];
            const max = filter[1];
            await setTimeout(async () => {
                if (results.data.data !== undefined && results.data.data !== null) {
                    results.data.data.movies.forEach(element => {
                        if (parseInt(element.year) > parseInt(min) && parseInt(element.year) < parseInt(max)) {
                            new_result.push(element);
                        }
                    });
                }
                let i = parseInt(results.data.data.page_number) + 1;
                while (new_result.length < 20) {
                    results = await getMoviesBydate(i, query);
                    if (results.data.data.movies && results.data && results.data.data !== undefined && results.data.data !== null) {
                        results.data.data.movies.forEach(element => {
                            if (parseInt(element.year) > parseInt(min) && parseInt(element.year) < parseInt(max)) {
                                new_result.push(element);
                            }
                        });
                    }
                    i++;
                }

                results.data.data.movies = [];
                results.data.data.movies = new_result;

                resolve(results.data.data);
            }, 150);
        }
    })

};