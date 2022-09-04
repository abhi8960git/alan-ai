import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import MovieCard from "./component/moviesCard/MovieCard";
import { data } from "./data"
import './index.css'


function App() {
  console.log(data);

  return (
    <div className="App">
      <div className="tabs">
        <div className="tab">
          Movies
        </div>
        <div className="tab">
          Favourite
        </div>


        {/* <motion.div
        layout
        className="popular-movies"
      >
        <AnimatePresence>
          {popular.map(movie => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))}
        </AnimatePresence>
      </motion.div> */}


      <div className="list">
        {data.map(movie=>(
          <MovieCard movie={movie}></MovieCard>
        ))}
      </div>




      </div>
    </div>
  )
}

export default App;