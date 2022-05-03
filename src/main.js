async function getTrendingMoviesPreview() {
   //We make a request to get the trending movies
   const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY
   );
   const data = await response.json();

   //We save de results in this movies
   const movies = data.results;

   movies.forEach((movie) => {
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

getTrendingMoviesPreview();
