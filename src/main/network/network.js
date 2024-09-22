import "./network.css";

export default function Network({ show, fileterShow, originalData }) {
  function handleNetwork(event, selectedNetwork) {
    const updatedShows = originalData.filter(
      (show) => show.network && show.network.name.includes(selectedNetwork)
    );
    fileterShow(updatedShows);
  }
  return (
    <button
      className="main-network"
      onClick={(event) => handleNetwork(event, show.network.name)}
    >
      {!show.network ? "Network unavailable" : show.network.name}{" "}
    </button>
  );
}
