import { apiKey } from './config.js';
const parentElement = document.querySelector(".main");

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
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
        return data.results;

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

const movies = await fetchAndDisplayMovies();
console.log(movies);

const createElement = (element) => document.createElement(element);

const createMovieCard = (movies) => {
    for (let movie of movies) {
        // creating parent container
        const cardContainer = createElement("div");
        cardContainer.classList.add("card", "shadow");

        // creating image container
        const imageContainer = createElement("div");
        imageContainer.classList.add("card-image-container");

        // creating card image
        const imageEle = createElement("img");
        imageEle.classList.add("card-image");
        imageEle.setAttribute("src", `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`);
        imageEle.setAttribute("alt", movie.title);
        imageContainer.appendChild(imageEle);
        
        cardContainer.appendChild(imageContainer);

        // creating card details container
        const cardDetails = createElement("div");
        cardDetails.classList.add("movie-details");

        // card title
        const titleEle = createElement("p");
        titleEle.classList.add("title");
        titleEle.innerText = movie.title;

        cardDetails.appendChild(titleEle);

        cardContainer.appendChild(cardDetails);

        parentElement.appendChild(cardContainer);
    }
};
createMovieCard(movies);