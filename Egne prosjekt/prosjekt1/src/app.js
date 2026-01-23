const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const movieGrid = document.getElementById('movieGrid');

if (searchBtn && searchInput && movieGrid) {

    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.classList.add('movie-card');
       
        const poster = movie.posterPath
            ? `https://image.tmdb.org/t/p/w300${movie.posterPath}`
            : 'https://via.placeholder.com/300x450?text=Ingen+bilde';

        card.innerHTML = `
            <img src="${poster}" alt="${movie.title}" </>
            <h3>${movie.title}</h3>
            <p>År: ${movie.year || 'N/A'}</p>
            <p>MediaType: ${movie.mediaType || 'N/A'}</p>            
        `;

        return card;
    }

    function fetchMovies(query) {
        if (!query) {
            movieGrid.innerHTML = '<p>Skriv inn en søketekst først.</p>';
            return;
        }

        movieGrid.innerHTML = '<p>Laster filmer...</p>';

        const url = `https://localhost:7066/api/Tmdb?query=${encodeURIComponent(query)}`;

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);
                return res.json();
            })
            .then(data => {
                movieGrid.innerHTML = '';

                if (!data || data.length === 0) {
                    movieGrid.innerHTML = '<p>Ingen filmer funnet.</p>';
                    return;
                }

                data.forEach(movie => {
                    const card = createMovieCard(movie);
                    movieGrid.appendChild(card);
                });
            })
            .catch(err => {
                console.error('Fetch error:', err);
                movieGrid.innerHTML = '<p>Kunne ikke laste filmer.</p>';
            });
    }
    
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        fetchMovies(query);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });
}



