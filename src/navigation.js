searchFormBtn.addEventListener('click', () => {
   location.hash = '#search=';
});

trendingBtn.addEventListener('click', () => {
   location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
   location.hash = '#home';
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
}

function searchPage() {
   console.log('SEARCH!!');

   headerSection.classList.remove('header-container--long');
   headerSection.style.background = '';
   arrowBtn.classList.remove('inactive');
   arrowBtn.classList.remove('header-arrow--white');
   headerTitle.classList.add('inactive');
   headerCategoryTitle.classList.remove('inactive');
   searchForm.classList.remove('inactive');

   trendingPreviewSection.classList.add('inactive');
   categoriesPreviewSection.classList.add('inactive');
   genericList.classList.remove('inactive');
   movieDetailSection.classList.add('inactive');
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
}
