import React from "react";
import moment from "moment";
import { saveMovieDetails } from '../shared/services/moviesServices/SaveMovieAction';
import { saveMovieComments } from '../shared/services/moviesServices/SaveMovieCommentAction';
import { getMovieComments } from '../shared/services/moviesServices/getMovieCommentsAction';
import ReactPlayer from 'react-player'
import styles from './style.css';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      magnetLink: "",
      videoName: "",
      currentPagination: 0,
      subTitlesArr: [],
      videoUrlLink: "",
      totalPage: 0,
      imageUrl: localStorage.getItem('imageUrl'),
      allPagination: [],
      userId: localStorage.getItem("userId"),
      selectedVideo: "",
      commentContent: "",
      videos: [],
      moviesComments: [],
      materialDetails: {},
    };

    this.initVideoList = this.initVideoList.bind(this);
    this.handleCommentSave = this.handleCommentSave.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (target.type === "file") {
      this.setState({
        cv: target.files.length > 0 ? target.files[0] : this.state.cv
      });

    } else {
      this.setState({
        [name]: value
      });
    }
  }

  async handleCommentSave(e) {
    e.preventDefault();
    let allMovieComments = this.state.moviesComments;

    let data = {
      movieId: this.state.materialDetails.id,
      userId: this.state.userId,
      userImage: this.state.imageUrl,
      commentContent: this.state.commentContent,
      userFullName: localStorage.getItem('familyName') + " " + localStorage.getItem('givenName'),
      dateOfCreation: moment().toString(),
    }

    if (this.state.commentContent !== "") {
      await saveMovieComments(data);
      allMovieComments.push(data);
      this.setState({
        moviesComments: allMovieComments,
        commentContent: "",
      })
    }
  }

  async initVideoList() {
    let videos = [];

    videos = JSON.parse(localStorage.getItem("moviedetails"));

    if (videos.url !== undefined) {
      this.setState({
        materialDetails: videos
      })
    }
  }

  async UNSAFE_componentWillMount() {
    this.initVideoList();
  }

  async componentDidMount() {
    let materialDetailsTmp = {};
    let moviesCommentsTmp = {};

    if (this.state.materialDetails.id !== undefined)
      moviesCommentsTmp = await getMovieComments(this.state.materialDetails.id);
    if (moviesCommentsTmp.data !== undefined && moviesCommentsTmp.code === 200) {
      this.setState({
        moviesComments: moviesCommentsTmp.data,
      })
    }

    materialDetailsTmp = await saveMovieDetails(this.state.materialDetails);

    if (materialDetailsTmp.data !== undefined && materialDetailsTmp.code === 200) {
      this.setState({
        videoUrlLink: materialDetailsTmp.data.videoUrlLink,
        subTitlesArr: materialDetailsTmp.data.subTitlesArr
      })
      this.videoPlayer();
    }

  }

  updateVideo() {
    this.videoPlayer();
  }

  formatSubtitleTracker(arr) {
    let data = [];
    let i = 0;

    if (arr.length > 0) {
      while (i < arr.length) {
        data.push({
          label: arr[i].lang,
          kind: 'subtitles',
          srclang: arr[i].langShort,
          src: process.env.REACT_APP_URL + "/" + arr[i].path.substr(13, arr[i].path.length)
        })
        i++;
      }
    }

    return data;
  }

  videoPlayer() {
    if (this.state.videoUrlLink !== "") {

      return <div className="vd-player">
        <ReactPlayer
          url={[process.env.REACT_APP_URL + '/api/v1/movies/stream/' + this.state.videoUrlLink]}
          className='react-player'
          controls
          width='80%'
          height='80%'
          config={{
            file: {
              attributes: {
                crossOrigin: 'true'
              },
              tracks: this.formatSubtitleTracker(this.state.subTitlesArr)
            }
          }}
        />
      </div>
    }
  }

  render() {
    return (
      <section className="content">
        <div className="box1" id="fixMarginTop">
          <div className="col-md-6 tab-content">
            <article className="panel panel-default">
              <div className="panel-body">
                <div className="row">
                  <img
                    className="img-responsive center-block"
                    src={
                      this.state.materialDetails.large_cover_image
                    }
                    alt="pic holder"
                  />
                  <br></br>
                </div>
              </div>
            </article>
          </div>

          <div className="col-md-6 tab-content">
            <h1>      {this.state.materialDetails.title}
            </h1>
            <article className="panel1">
              <div className="panel-body">
                <div className="row">
                  <div className="textbox">
                    <b>Rating :</b>
                    {this.state.materialDetails.rating}
                    <br></br>
                    <b>Year :</b>{" "} {this.state.materialDetails.year} <br></br>
                    <b>Runtime :</b>{" "} {this.state.materialDetails.runtime} minutes
                  </div>

                  <div className="textbox">
                    <b>Genre :</b>
                    {this.state.materialDetails.genres && this.state.materialDetails.genres.length > 0 ?
                      this.state.materialDetails.genres.map((g, i) => {
                        return <div key={i} class="tags">
                          <a href="#" class="success">{g}</a>
                        </div>
                      }) : ""}

                  </div>

                  <div className="textbox">
                    <b>Description :</b>{" "}
                    {this.state.materialDetails.description_full}
                  </div>


                  <br></br>
                  <b>Play movie</b>
                  <br></br>

                  <div
                    style={{ backgroundColor: "light-blue" }}
                    className="image-grid-cover"
                  >
                    <span className="image-grid-clickbox"></span>
                    <span className="cover-wrapper">
                      Movie {this.state.materialDetails.title} <br></br>
                      {this.state.videoUrlLink === "" ? "loading ..." : ""}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="box box-primary">
              <div className="box-body">
                <div className="row">
                  {this.videoPlayer()}
                </div>

                <div className="row">
                  <div className="box-header with-border">
                    <h3 className="box-title">Leave a comment</h3>
                  </div>
                  {this.state.moviesComments && this.state.moviesComments.length > 0 ?
                    this.state.moviesComments.map(cm => {
                      return (
                        <div class="box-footer box-comments col-md-12">
                          <div className="box-comment">
                            <img className="img-responsive1" src={typeof cm.userImage.name !== "string" ?
                              cm.userImage.indexOf("https") === -1 && cm.userImage !== "undefined" && cm.userImage !== "" && cm.userImage !== undefined ?
                              process.env.REACT_APP_URL + "/" + cm.userImage : cm.userImage.indexOf("https") > -1 ?
                                  cm.userImage :
                                  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/112692698/original/31a5d2469689575beee06ffcf4e9e76abab3abe2/logo-design-for-profile-picture-dessin-pour-photo-de-profil.png"
                              : null}
                              alt="User Image" />

                            <div className="comment-text">
                              <span className="username">
                                {cm.userFullName} {" "}
                                <span className="text-muted pull-right">{" "}{moment().format('ll', cm.dateOfCreation)}</span>
                              </span>
                              {cm.commentContent}
                            </div>
                          </div>
                        </div>

                      )
                    })

                    : ""}

                  <div className="box-footer col-md-12">
                    <form>
                      <div style={{ paddingTop: '30px', paddingBottom: '150px' }} className="img-push">
                        <textarea col="10" row="22" type="text" className="form-control input-sm" name="commentContent" onChange={this.handleFormSubmit} placeholder="Type your comment here" />
                        <button onClick={(e) => { this.handleCommentSave(e) }} style={{ 'marginTop': '20px' }} className="pull-right btn btn-primary">Send</button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieDetails;