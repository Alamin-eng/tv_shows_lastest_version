import "./genre.css";

export default function Genre({ genre, setGenre, originalData }) {
  // handle genre filtering (NOTICE HOW I USED SEPARATE ORIGINALDATA VARIABLE TO HANDLE FILTER SEPARETELY)
  function handleGenre(event, selectedGenre) {
    const updatedShows = originalData.filter(
      (show) => show.genres && show.genres.includes(selectedGenre)
    );
    setGenre(updatedShows);
  }

  return (
    <div className="card-genre-container">
      {genre.genres &&
       genre.genres.map((genre, index) => (
          <button
            key={index}
            className="card-genres"
            onClick={(event) => handleGenre(event, genre)}>
            {genre}
          </button>
        ))}
    </div>
  );
}

//handle genres
// function handleGenre(event, getGenre) {
//   let updateGenre = filter.filter(
//     (genre) => genre.genres && genre.genres.includes(getGenre)
//   );
//   setFilter(updateGenre);
//   console.log(setFilter(updateGenre))
// }
// ORIGINAL MAIN GENRE COMPONENT
// <div className="card-genre-container">
//  {show.genres.map((genre) => (
//   <button className="card-genres"
//  onClick={(event) => handleGenre(event, genre)}>
//  {genre}{" "}
// </button>
//  ))}
//  </div>
