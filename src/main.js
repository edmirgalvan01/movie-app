const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   headers: {
      'Content-Type': 'application/json;charset=utf-8',
   },
   params: {
      api_key: API_KEY,
   },
});

async function getTrendingMoviesPreview() {
   //We make a request to get the trending movies
   const { data, status } = await api('trending/movie/day');

   //We save de results in this movies
   const movies = data.results;

   movies.map((movie) => {
      //This is the container
      const trendingMoviesPreviewList = document.querySelector(
         '#trendingPreview .trendingPreview-movieList'
      );

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
      trendingMoviesPreviewList.appendChild(movieContainer);
   });
}

async function getCategoriesPreview() {
   const { data, status } = await api('genre/movie/list');
   const categories = data.genres;

   categories.map((category) => {
      const categoriesPreviewList = document.querySelector(
         '#categoriesPreview .categoriesPreview-list'
      );

      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');

      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', 'id' + category.id);
      const categoryTitleText = document.createTextNode(category.name);

      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      categoriesPreviewList.appendChild(categoryContainer);
   });
}
