import { Pages } from './pages.js';

const menus = document.querySelectorAll('.menu a');
const content = document.querySelector('#content');
let currentPage = 0;

changeMenu();
content.innerHTML = Pages.home;

menus[0].onclick = () => {
  //   content.innerHTML = Pages.home;
  content.innerHTML = makeChangesToPage({
    page: 'home',
    bg: 'bg-purple-400',
    sub: 'Super duper page',
    subStyle: 'bg-red-500 text-center text-white text-xl',
  });
  currentPage = 0;
  changeMenu();
};
menus[1].onclick = () => {
  //   content.innerHTML = Pages.product;
  content.innerHTML = makeChangesToPage({ page: 'product' });
  currentPage = 1;
  changeMenu();
};
menus[2].onclick = () => {
  //   content.innerHTML = Pages.pricing;
  content.innerHTML = makeChangesToPage({ page: 'pricing' });
  currentPage = 2;
  changeMenu();
};
menus[3].onclick = () => {
  //   content.innerHTML = Pages.about;
  content.innerHTML = makeChangesToPage({ page: 'about' });

  currentPage = 3;
  changeMenu();
};
menus[4].onclick = () => {
  //   content.innerHTML = Pages.contact;
  content.innerHTML = makeChangesToPage({ page: 'contact' });
  currentPage = 4;
  changeMenu();
};

function changeMenu() {
  Array.from(menus).map((map) => {
    map.classList.remove('text-orange-500');
  });
  menus[currentPage].classList.add('text-orange-500');
}

function makeChangesToPage({
  page,
  bg = 'bg-slate-600',
  sub = '',
  subStyle = '',
}) {
  let newEle = `<h1 class=" ${bg} text-center text-white text-3xl p-3 my-3"> ${
    page[0].toUpperCase() + page.slice(1)
  } Page</h1> 
  <h3 class="${subStyle}">${sub}</h3>
  `;

  let newContent = `${newEle}  ${Pages[`${page}`]}`;
  return newContent;
}
