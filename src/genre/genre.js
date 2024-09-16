import "./main.css";

export default function Genre({ props, handleClick }) {
  return (
    <div>
      main genre needs to be break down in to separate function in here.
      <div className="card-genre-container">
        {props.genres.map((genre) => (
          <button className="card-genres" onClick={handleClick}>
            {genre}{" "}
          </button>
        ))}
      </div>
    </div>
  );
}
