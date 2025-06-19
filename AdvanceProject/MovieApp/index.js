import { apiKey } from './config.js';


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: ` ${apiKey}`
        }
    };

    const moviesContainer = document.getElementById('movies-container');

    const fetchAndDisplayMovies = async () => {
        try {
            
            const response = await fetch(
                'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', 
                options
            );
            
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
            }
            
            const data = await response.json();
            console.log(data);
                        
        } catch (error) {
            console.error('Fetch error:', error);
            moviesContainer.innerHTML = `
                <div style="color: red; padding: 20px; border: 1px solid red;">
                    <h3>Error Loading Movies</h3>
                    <p>${error.message}</p>
                    <p>Please check your internet connection and try again.</p>
                </div>
            `;
        }
    };

    fetchAndDisplayMovies();
