import React, { useEffect, useState } from "react"

const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("http://localhost:1337/api/movies?populate=*")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.data)
        console.log(data.data);
      })
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="con container bgimg ">
    <h1 className="p-2 mb-2"> Watch Allwood Movies</h1>
            
    <ul class="nav nav-tabs ms-4 me-4">
      <li class="nav-item">
        <a class="nav-link " data-bs-toggle="tab" href="#home">Allywood</a>
      </li>
    </ul>


    <div class="tab-content mt-3">
      <div class="tab-pane container active" id="home">
        <div className="row ps-2">
        {users.map((movie) => (
         
            <div className="col-3 img_body  ">
              <div className="con m-2 mb-5 zm shadow p-3">
                  <img className="moviebnr" src={'http://localhost:1337'+movie.attributes.image.data[0].attributes.url} />
                  <h6><b>{movie.attributes.MovieName}</b></h6>
                  <p className="">{movie.attributes.Moviecats}</p>
                  <a
                  target="_blank"
                  href={movie.attributes.Link}
                  className="text-decoration-none"
                  >
                  Watch Online
                  </a>
                
              </div>
            </div>
        ))}

        </div>
      </div>
      <div class="tab-pane container fade" id="menu1">...</div>
      <div class="tab-pane container fade" id="menu2">...</div>
    </div>
  </div>
  )
}

export default UsingFetch
