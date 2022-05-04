window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
   if (location.hash.startsWith('#trends')) {
      trendsPage();
   } else if (location.hash.startsWith('#search=')) {
      searchPage();
   } else if (location.hash.startsWith('#movie=')) {
      movieDetailsPage();
   } else if (location.hash.startsWith('#category=')) {
      categoriesPage();
   } else {
      homePage();
   }
}

function homePage() {
   console.log('HOME!!');
   getCategoriesPreview();
   getTrendingMoviesPreview();
}

function categoriesPage() {
   console.log('CATEGORIES!!');
}

function searchPage() {
   console.log('HOME!!');
}

function movieDetailsPage() {
   console.log('DETAILS!!');
}

function trendsPage() {
   console.log('TRENDS!!');
}
