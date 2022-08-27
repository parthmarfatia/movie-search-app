import React from "react";

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    const query = "jurassic park";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=1ea1562afb8b3817d0ace7a22fbbfc9a&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="Search Movie"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchMovies;
