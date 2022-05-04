async function getTrendingMoviesPreview() {
   //We make a request to get the trending movies
   const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY
   );
   const data = await response.json();

   //We save de results in this movies
   const movies = data.results;

   movies.map((movie) => {
      //This is the container
      const trandingPreviewMoviesContainer = document.querySelector(
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
      trandingPreviewMoviesContainer.appendChild(movieContainer);
   });
}

async function getCategoriesPreview() {
   //We make a request to get the trending movies
   const response = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY
   );
   const data = await response.json();

   //We save de results in this movies
   const categories = data.genres;

   categories.map((category) => {
      //This is the container
      const previewCategoriesContainer = document.querySelector(
         '#categoriesPreview .categoriesPreview-list'
      );

      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');

      const categoryTitle = document.createElement('h3');
      categoryTitle.classList.add('category-title');
      categoryTitle.setAttribute('id', category.id);
      const categoryTitleText = document.createTextNode(category.name);

      categoryTitle.appendChild(categoryTitleText);
      categoryContainer.appendChild(categoryTitle);
      previewCategoriesContainer.appendChild(categoryContainer);
   });
}

getCategoriesPreview();
getTrendingMoviesPreview();
