const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   headers: {
      'Content-Type': 'application/json;charset=utf-8',
   },
   params: {
      api_key: API_KEY,
   },
});

// UTILS
function createMovies(movies, container) {
   container.innerHTML = '';

   movies.map((movie) => {
      const movieContainer = document.createElement('div');
      movieContainer.classList.add('movie-container');

      const movieImg = document.createElement('img');
      movieImg.classList.add('movie-img');
      movieImg.setAttribute('alt', movie.title);
      movieImg.setAttribute(
         'src',
         'https://image.tmdb.org/t/p/w300' + movie.poster_path
      );

      //We add the elements created
      movieContainer.appendChild(movieImg);
      container.appendChild(movieContainer);
   });
}

function createCategories(categories, container) {
   container.innerHTML = '';

   categories.map((category) => {
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');

      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', 'id' + category.id);
      const categoryTitleText = document.createTextNode(category.name);

      //This is to navigate to the category
      categoryTitle.addEventListener('click', () => {
         location.hash = `#category=${category.id}-${category.name}`;
      });

      //We add the elements created
      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      container.appendChild(categoryContainer);
   });
}
// UTILS

// CALL TO API
async function getTrendingMoviesPreview() {
   const { data, status } = await api('trending/movie/day');
   const movies = data.results;

   createMovies(movies, trendingMoviesPreviewList);
}

async function getCategoriesPreview() {
   const { data, status } = await api('genre/movie/list');
   const categories = data.genres;

   createCategories(categories, categoriesPreviewList);
}

async function getMovieByCategory(id) {
   const { data, status } = await api('discover/movie', {
      params: {
         with_genres: id,
      },
   });

   const movies = data.results;
   createMovies(movies, genericSection);
}

async function getMoviesBySearch(query) {
   const { data, status } = await api('search/movie', {
      params: {
         query,
      },
   });

   const movies = data.results;
   createMovies(movies, genericSection);
}

async function getTrendingMovies() {
   const { data, status } = await api('trending/movie/day');
   const movies = data.results;

   createMovies(movies, genericSection);
}
// CALL TO API
