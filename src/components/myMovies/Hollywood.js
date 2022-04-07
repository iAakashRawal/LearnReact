import React from "react";
import '../../App.css'


const MovieDet = [
  {
    Movieame: "Avangers Age of Altron",
    src: "https://cdn.shopify.com/s/files/1/1148/2822/products/PBMAAOU088.jpg?v=1587408929",
    Moviecat: "Marvel movie",
    mbtnlink: "https://youtu.be/yEVuK1jYeUo",
  },
  {
    Movieame: "Captain America",
    src: "https://imgc.allpostersimages.com/img/posters/marvel-cinematic-universe-captain-america-the-first-avenger-one-sheet-premium-poster_u-L-F9KMV60.jpg",
    Moviecat: "Marvel movie",
    mbtnlink: "https://youtu.be/yEVuK1jYeUo",
  },
  {
    Movieame: "Iroman",
    src: "https://m.media-amazon.com/images/I/411upOpOjHL._SL500_.jpg",
    Moviecat: "Marvel movie",
    mbtnlink: "https://youtu.be/yEVuK1jYeUo",
  },
  {
    Movieame: "Superman Man of steel",
    src: "https://cdn-www.comingsoon.net/assets/uploads/2013/05/file_104542_0_kal-el-poster.jpg",
    Moviecat: "DC movie",
    mbtnlink: "https://youtu.be/yEVuK1jYeUo",
  },
  {
    Movieame: "The Batman (2022)",
    src: "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    Moviecat: "DC movie",
    mbtnlink: "https://youtu.be/yEVuK1jYeUo",
  },
  {
    Movieame: "WonderWoman",
    src: "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    Moviecat: "DC movie",
    mbtnlink: "https://youtu.be/yEVuK1jYeUo",
  },
];

//console.log(MovieDet);
const Hollywood = () => {
  return (
    <>

      <div className="con container bgimg ">
        <h1 className="p-2 mb-2"> Watch Allwood Movies</h1>
                
        <ul class="nav nav-tabs ms-4 me-4">
          <li class="nav-item">
            <a class="nav-link " data-bs-toggle="tab" href="#home">Hollwwood</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">Bollywood</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu2">Tollywood</a>
          </li>
        </ul>

   
        <div class="tab-content mt-3">
          <div class="tab-pane container active" id="home">
          <div className="row ps-2">
          {MovieDet.map((movie) => (
            <div className="col-3 ">
              <div className="con m-2 mb-5">
                <img className="moviebnr" src={movie.src} />
                <h6><b>{movie.Movieame}</b></h6>
                <p className="">{movie.Moviecat}</p>
                <a
                  target="_blank"
                  href={movie.mbtnlink}
                  className="text-decoration-none"
                >
                  Watch Online
                </a>
                <button className="ms-2 btn btn-outline-primary">
                  Book A ticket
                </button>
              </div>
            </div>
          ))}
        </div>
          </div>
          <div class="tab-pane container fade" id="menu1">...</div>
          <div class="tab-pane container fade" id="menu2">...</div>
        </div>




        

          {/* <div className="col-3">
            <Card
              mname="Avangers Age of Altron"
              msrc="https://cdn.shopify.com/s/files/1/1148/2822/products/PBMAAOU088.jpg?v=1587408929"
              mcat="Marvel movie"
              mbtnlink="https://youtu.be/yEVuK1jYeUo"
            />
          </div>
          <div className="col-3">
            <Card
              mname="Captain America"
              msrc="https://imgc.allpostersimages.com/img/posters/marvel-cinematic-universe-captain-america-the-first-avenger-one-sheet-premium-poster_u-L-F9KMV60.jpg"
              mcat="Marvel movie"
              mbtnlink="https://youtu.be/yEVuK1jYeUo"
            />
          </div>
          <div className="col-3">
            <Card
              mname="Iroman"
              msrc="https://m.media-amazon.com/images/I/411upOpOjHL._SL500_.jpg"
              mcat="Marvel movie"
              mbtnlink="https://www.youtube.com/watch?v=dpqelE_9OgA"
            />
          </div>
          <div className="col-3">
            <Card
              mname="Superman Man of steel"
              msrc="https://cdn-www.comingsoon.net/assets/uploads/2013/05/file_104542_0_kal-el-poster.jpg"
              mcat="DC movie"
              mbtnlink="https://www.youtube.com/watch?v=IYdg1Y8S0N0&t=1s"
            />
          </div>
          <div className="col-3">
            <Card
              mname="The Batman (2022)"
              msrc="https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
              mcat="DC movie"
              mbtnlink="https://youtu.be/yEVuK1jYeUo"
            />
          </div>
          <div className="col-3">
            <Card
              mname="WonderWoman"
              msrc="https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"
              mcat="DC movie"
              mbtnlink="https://www.youtube.com/watch?v=jbwmskAdZMM"
            />
          </div> 
        </div>*/}
      </div>
    </>
  );
};

export default Hollywood;
