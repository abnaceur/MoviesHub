import React from "react";
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
import { getMoviesByRatings } from '../shared/services/moviesServices/getMoviesByRatingAction';
import { getMovieViewsByUser } from '../shared/services/moviesServices/getMovieViewbyUserAction';
import { getMoviesFromSource } from '../shared/services/moviesServices/getMultiSourceMoviesAction';

const categories = require('./genre');
const genres = categories.data;

class Movies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '&sort_by=rating',
            query_term: '',
            allUserViewedMovies: [],
            decadeFilter: undefined,
            page: 0,
            userId: localStorage.getItem("userId"),
            pageMovie: 1,
            totalMovies: 0,
            allMovies: [],
            loading: <div class="container">
                <div class="row">
                    <div class="animationload">
                        <div class="osahanloading"></div>
                    </div>
                </div>
            </div>,
            onLoading: "",
            selectedCategory: "",
            ratingMin: 0,
            genres: [],
            allMaterials: [],
            currentPagination: 0,
            allPagination: [],
            numberOfPages: 1,
            sort_by: 'rating',
            order_by: 'desc'
        }
        this.handleChangeFilterCat = this.handleChangeFilterCat.bind(this);
        this.handleChangeInputText = this.handleChangeInputText.bind(this);
        this.goToMovieDatails = this.goToMovieDatails.bind(this);
    }

    async componentDidMount() {
        this.setState({ onLoading: this.state.loading })
        window.addEventListener('scroll', this.handleScrollDown);
    }

    handleChangeInputText(event) {
        this.setState({ query_term: event.target.value });
        let query = this.state.query.replace(/&sort_by=[^&]+/g, '') + `&sort_by=title`;

        this.setState({
            sort_by: 'title',
            query
        })
    }

    async handleChangeFilterCat(event) {
        this.setState({
            allMovies: [],
            pageMovie: 1
        });

        const target = event.target;
        const value = target.value;
        if (event.target.name !== 'query_term') {
            this.setState({
                [target.name]: value,
                currentPagination: 0,
            });
        }

        let query = '';

        this.setState({ onLoading: this.state.loading })
        let allMoviesByRatings = [];
        switch (target.name) {
            case 'selectedCategory':
                query = this.state.query.replace(/&genre=[^&]+/g, '') + `&genre=${value}`;
                query = query.replace(/&order_by=[^&]+/g, '') + `&order_by=asc`;
                query = query.replace(/&sort_by=[^&]+/g, '') + `&sort_by=title`;
              
                this.setState({
                    query: query,
                    order_by: "asc",
                    sort_by: "title"
                })
               setTimeout(async () => {
                    allMoviesByRatings = await getMoviesByRatings(query, 1, this.state.decadeFilter);
                    this.getAllMoviesSetup(allMoviesByRatings)

                }, 20);
                break;
            case 'ratingMin':
                query = this.state.query.replace(/&minimum_rating=[^&]+/g, '') + `&minimum_rating=${value}`;
                query = query.replace(/&order_by=[^&]+/g, '') + `&order_by=asc`;
                query = query.replace(/&sort_by=[^&]+/g, '') + `&sort_by=title`;
              
                this.setState({
                    query: query,
                    order_by: "asc",
                    sort_by: "title"
                })
                setTimeout(async () => {
                    allMoviesByRatings = await getMoviesByRatings(query, 1, this.state.decadeFilter);
                    this.getAllMoviesSetup(allMoviesByRatings)

                }, 20);
                break;
            case 'query_term':
                query = this.state.query.replace(/&query_term=[^&]+/g, '') + `&query_term=${this.state.query_term}`;
                query = query.replace(/&order_by=[^&]+/g, '') + `&order_by=asc`;
                this.setState({
                    query: query,
                    order_by: "asc"
                })
                setTimeout(async () => {
                    allMoviesByRatings = await getMoviesByRatings(query, 1, this.state.decadeFilter);
                    this.getAllMoviesSetup(allMoviesByRatings)

                }, 20);
                break;
            case 'sort_by':
                query = this.state.query.replace(/&sort_by=[^&]+/g, '') + `&sort_by=${value}`;
                this.setState({
                    query: query
                })
                setTimeout(async () => {
                    allMoviesByRatings = await getMoviesByRatings(query, 1, this.state.decadeFilter);
                    this.getAllMoviesSetup(allMoviesByRatings)

                }, 20);
                break;
            case 'order_by':
                query = this.state.query.replace(/&order_by=[^&]+/g, '') + `&order_by=${value}`;
                this.setState({
                    query: query
                })
                setTimeout(async () => {
                    allMoviesByRatings = await getMoviesByRatings(query, 1, this.state.decadeFilter);
                    this.getAllMoviesSetup(allMoviesByRatings)

                }, 20);
                break;
            case 'decadeFilter':
                if (!value || value.length === 0) {
                    this.setState({
                        decadeFilter: undefined
                    })
                } else {
                    this.setState({
                        decadeFilter: value.split('-')
                    })
                }
                setTimeout(async () => {
                    query = this.state.query.replace(/&order_by=[^&]+/g, '') + `&order_by=asc`;
                    query = query.replace(/&sort_by=[^&]+/g, '') + `&sort_by=title`;
                  
                    this.setState({
                        query: query,
                        order_by: "asc",
                        sort_by: "title"
                    })
                 
                    allMoviesByRatings = await getMoviesByRatings(query, this.state.pageMovie, this.state.decadeFilter);
                    this.getAllMoviesSetup(allMoviesByRatings)
                }, 20);
                break;
        }
    }

    async activePagination(event) {
        this.setState({
            currentPagination: parseInt(event.target.id, 10)
        })
        await this.initPagination();
        if (this.state.selectedCategory === "")
            await this.props.onGetAllMaterials(this.state.currentPagination);
        else
            await this.props.onGetFilteredMaterials(this.state.currentPagination, this.state.selectedCategory)
    }

    goToMovieDatails(e, movie) {
        //e.preventDefault();
        window.removeEventListener('scroll', this.handleScrollDown);
        localStorage.setItem("moviedetails", JSON.stringify(movie));
    }

    async FilterSearchByGenre(query) {
        this.setState({ onLoading: this.state.loading })
        this.setState({
            allMovies: [],
        });

        let page = 1;
        this.setState({
            pageMovie: page
        });
        let allMoviesByRatings = await getMoviesByRatings(query, page);
        this.getAllMoviesSetup(allMoviesByRatings)

    }


    handleScrollDown = async () => {
        let body = document.body,
            html = document.documentElement;
        let docHeight = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        if (docHeight - parseInt(window.innerHeight + document.documentElement.scrollTop) <= 5) {
            let page = this.state.pageMovie + 1;
            this.setState({
                pageMovie: page
            })

            if (this.state.pageMovie > this.state.numberOfPages) {
                return
            } else {
                this.setState({ onLoading: this.state.loading })
                let query = this.state.query;
                let allMoviesByRatings = await getMoviesByRatings(query, page, this.state.decadeFilter);
                this.getAllMoviesSetup(allMoviesByRatings)

                document.documentElement.scrollTop = document.documentElement.scrollTop - 10;
            }
        };
    }

    async UNSAFE_componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollDown, true);
    }

    getAllMoviesSetup(allMoviesByRatings) {
        if (allMoviesByRatings !== undefined && allMoviesByRatings.movies) {
            let moviesOld = this.state.allMovies;
            if (allMoviesByRatings.movies !== undefined && allMoviesByRatings.movies !== null)
                if (allMoviesByRatings.movies.length > 0) {
                    moviesOld = moviesOld.concat(allMoviesByRatings.movies);

                    this.setState({
                        allMovies: moviesOld,
                        totalMovies: Math.floor(allMoviesByRatings.movie_count / 20),
                        numberOfPages: Math.floor(allMoviesByRatings.movie_count / 20) + 1
                    })
                    this.setState({ onLoading: "" })
                }


        } else {
            // For testing when blocked
            this.setState({
                allMovies: [],
            })
            this.setState({ onLoading: "" })
        }

    }

    async UNSAFE_componentWillMount() {
        this.setState({ onLoading: this.state.loading })
        await getMoviesFromSource();
        let query = "&sort_by=rating"
        this.setState({ genres: genres });
        let allMoviesByRatings = await getMoviesByRatings(query, this.state.pageMovie);
        let getMovieViews = await getMovieViewsByUser(this.state.userId);
        this.getAllMoviesSetup(allMoviesByRatings)

        if (getMovieViews !== undefined && getMovieViews.code === 200) {
            this.setState({
                allUserViewedMovies: getMovieViews.data,
            })
        }

        this.setState({ onLoading: "" })

    }

    checkIfMovieViewed(movieId) {
        let i = 0;
        let check = 0;

        while (i < this.state.allUserViewedMovies.length) {
            if (parseInt(this.state.allUserViewedMovies[i].movieId) === parseInt(movieId)) {
                check = 1;
            }
            i++;
        }

        if (check === 1)
            return <span
                class="badge badge-info"> Viewed</span>
    }

    render() {
        const ratings = ['0/10',
            '1/10',
            '2/10',
            '3/10',
            '4/10',
            '5/10',
            '6/10',
            '7/10',
            '8/10',
            '9/10'
        ]
        const years = [
            '1900-1910',
            '1910-1920',
            '1920-1930',
            '1930-1940',
            '1940-1950',
            '1950-1960',
            '1960-1970',
            '1970-1980',
            '1980-1990',
            '1990-2000',
            '2000-2010',
            '2010-2020'
        ]

        return (
            <div>
                {this.state.onLoading}
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Movies list</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row" id="infinite-list">


                                        <form className="form-inline margin">
                                            <div className="form-group margin">
                                                <input type="text" className="form-control" placeholder="filter by title" onChange={this.handleChangeInputText} />
                                                <button type="button" className="btn btn-primary btn-flat" name="query_term" onClick={this.handleChangeFilterCat}>search!</button>
                                            </div>
                                            <div className="form-group margin">
                                                <label style={{ marginRight: "15px" }} >Filter by category</label>
                                                <select className="form-control" name="selectedCategory" onChange={this.handleChangeFilterCat} placeholder="Enter category">
                                                    <option value="" >Select</option>
                                                    {this.state.genres.map((genre, index) => {
                                                        return (
                                                            <option key={index} value={genre} >{genre}</option>
                                                        )
                                                    })}   </select>
                                            </div>

                                            <div className="form-group margin">
                                                <label style={{ marginRight: "15px" }} >Filter by minimum rating</label>
                                                <select className="form-control" name="ratingMin" onChange={this.handleChangeFilterCat} placeholder="Enter rating">
                                                    <option value="" >Select</option>
                                                    {ratings.map((rating, index) => {
                                                        return (
                                                            <option key={index} value={parseInt(rating.substr(0, 1))} >{rating}</option>
                                                        )
                                                    })}   </select>
                                            </div>
                                            <div className="form-group margin">
                                                <label style={{ marginRight: "15px" }} >Filter by decade</label>
                                                <select className="form-control" name="decadeFilter" onChange={this.handleChangeFilterCat} placeholder="Enter rating">
                                                    <option value="" >Select</option>
                                                    {years.map((yearz, index) => {
                                                        // var array = [];
                                                        // array = yearz.split('-');
                                                        return (
                                                            <option key={index} value={yearz} >{yearz}</option>
                                                        )
                                                    })}   </select>
                                            </div>

                                            <h3 className="margin">Sort by :</h3>

                                            <div className="sort-movies">
                                                <div className="form-group margin">
                                                    <label style={{ marginRight: "15px" }} >Alphabetically</label>
                                                    <input type="radio" name="sort_by" onChange={this.handleChangeFilterCat} value="title" checked={this.state.sort_by === 'title'}></input>
                                                </div>
                                                <div className="form-group margin">
                                                    <label style={{ marginRight: "15px" }} >Rating</label>
                                                    <input type="radio" name="sort_by" onChange={this.handleChangeFilterCat} value="rating" checked={this.state.sort_by === 'rating'}></input>
                                                </div>
                                                <div className="form-group margin">
                                                    <label style={{ marginRight: "15px" }} >Production Year</label>
                                                    <input type="radio" name="sort_by" onChange={this.handleChangeFilterCat} value="year" checked={this.state.sort_by === 'year'}></input>
                                                </div>
                                                <div className="form-group margin">
                                                    <label style={{ marginRight: "15px" }} >Increasing</label>
                                                    <input type="radio" name="order_by" onChange={this.handleChangeFilterCat} value="asc" checked={this.state.order_by === 'asc'}></input>
                                                </div>
                                                <div className="form-group margin">
                                                    <label style={{ marginRight: "15px" }} >Decreasing</label>
                                                    <input type="radio" name="order_by" onChange={this.handleChangeFilterCat} value="desc" checked={this.state.order_by === 'desc'}></input>
                                                </div>
                                            </div>
                                        </form>
                                        <br></br>

                                        <div className="movies-list">
                                            {this.state.allMovies && this.state.allMovies.length > 0 ? this.state.allMovies.map(movie => {
                                                return (
                                                    <div key={movie.id} className="col-md-3">
                                                        <div id={movie.id} className="listLessons card-content">
                                                            <div className="card-img">
                                                                <img src={movie.medium_cover_image} alt="" />
                                                                {this.checkIfMovieViewed(movie.id)}
                                                            </div>
                                                            <div className="card-desc" style={{ overflowWrap: 'break-word' }}>
                                                                <h3 style={{ margin: "0 0" }}>{movie.title}</h3>
                                                                <h5><b>Rating : </b>{movie.rating}</h5>
                                                                <h5><b>Year : </b>{movie.year}</h5>
                                                                {/* <div style={{ 'whiteSpace': 'nowrap', 'overflow': 'hidden', 'textOverflow': 'ellipsis' }}>
                                                                    {parse(movie.summary)}
                                                                </div> */}
                                                                <br></br>
                                                                <Link to="/videodetails" >
                                                                    <button type="button" onClick={(e) => { this.goToMovieDatails(e, movie) }} className="btn-card" style={{ fontSize: "12px", fontWeight: "bold" }}>See more</button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }) : ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Movies;