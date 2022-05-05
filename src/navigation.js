searchFormBtn.addEventListener('click', () => {
   location.hash = '#search=' + searchFormInput.value;
});

trendingBtn.addEventListener('click', () => {
   location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
   location.hash = window.history.back();
});

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

   window.scrollTo(0, 0);
}

function homePage() {
   console.log('HOME!!');

   headerSection.classList.remove('header-container--long');
   headerSection.style.background = '';
   arrowBtn.classList.add('inactive');
   arrowBtn.classList.remove('header-arrow--white');
   headerTitle.classList.remove('inactive');
   headerCategoryTitle.classList.add('inactive');
   searchForm.classList.remove('inactive');

   trendingPreviewSection.classList.remove('inactive');
   categoriesPreviewSection.classList.remove('inactive');
   genericList.classList.add('inactive');
   movieDetailSection.classList.add('inactive');

   getCategoriesPreview();
   getTrendingMoviesPreview();
}

function categoriesPage() {
   console.log('CATEGORIES!!');

   headerSection.classList.remove('header-container--long');
   headerSection.style.background = '';
   arrowBtn.classList.remove('inactive');
   arrowBtn.classList.remove('header-arrow--white');
   headerTitle.classList.add('inactive');
   headerCategoryTitle.classList.remove('inactive');
   searchForm.classList.add('inactive');

   trendingPreviewSection.classList.add('inactive');
   categoriesPreviewSection.classList.add('inactive');
   genericList.classList.remove('inactive');
   movieDetailSection.classList.add('inactive');

   //#category=123-Romance
   const [categoryPage, categoryData] = location.hash.split('=');
   //123-romance
   const [categoryId, categoryName] = categoryData.split('-');

   headerCategoryTitle.innerHTML = categoryName;

   getMovieByCategory(categoryId);
}

function searchPage() {
   console.log('SEARCH!!');

   headerSection.classList.remove('header-container--long');
   headerSection.style.background = '';
   arrowBtn.classList.remove('inactive');
   arrowBtn.classList.remove('header-arrow--white');
   headerTitle.classList.add('inactive');
   headerCategoryTitle.classList.add('inactive');
   searchForm.classList.remove('inactive');

   trendingPreviewSection.classList.add('inactive');
   categoriesPreviewSection.classList.add('inactive');
   genericList.classList.remove('inactive');
   movieDetailSection.classList.add('inactive');

   //#search=Keyword
   const [searchPage, query] = location.hash.split('=');
   getMoviesBySearch(query);
}

function movieDetailsPage() {
   console.log('DETAILS!!');

   headerSection.classList.add('header-container--long');
   //    headerSection.style.background = '';
   arrowBtn.classList.remove('inactive');
   arrowBtn.classList.add('header-arrow--white');
   headerTitle.classList.add('inactive');
   headerCategoryTitle.classList.add('inactive');
   searchForm.classList.add('inactive');

   trendingPreviewSection.classList.add('inactive');
   categoriesPreviewSection.classList.add('inactive');
   genericList.classList.add('inactive');
   movieDetailSection.classList.remove('inactive');
}

function trendsPage() {
   console.log('TRENDS!!');

   headerSection.classList.remove('header-container--long');
   headerSection.style.background = '';
   arrowBtn.classList.remove('inactive');
   arrowBtn.classList.remove('header-arrow--white');
   headerTitle.classList.add('inactive');
   headerCategoryTitle.classList.remove('inactive');
   searchForm.classList.add('inactive');

   trendingPreviewSection.classList.add('inactive');
   categoriesPreviewSection.classList.add('inactive');
   genericList.classList.remove('inactive');
   movieDetailSection.classList.add('inactive');
   headerCategoryTitle.innerHTML = 'Tendencias';

   getTrendingMovies();
}
