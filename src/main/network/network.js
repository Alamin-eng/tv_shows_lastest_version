import "./network.css";

export default function Network({ show, fileterNetwork, originalData }) {
  function handleNetwork(event, selectedNetwork) {
    const updatedNetworks = originalData.filter(
      (show) => show.network && show.network.name.includes(selectedNetwork)
    );
    fileterNetwork(updatedNetworks);
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
