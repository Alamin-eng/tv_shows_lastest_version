

function FetchEpisodes(id) {
  return fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // For debugging
      return data;       // Important!
    })
    .catch(error => {
      console.error('Fetch error:', error);
      throw error;
    });
}

// FetchEpisodes(431)
