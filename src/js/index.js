// import myesmodule from './myesmodule';

// console.log(myesmodule);

const pageFooter = document.getElementById('footer');
const pageFooterRect = pageFooter.getBoundingClientRect();
const navBar = document.getElementById('nav-wrapper');
const navBarContainer = document.getElementById('nav');
const documentRect = document.body.getBoundingClientRect();
const mainContent = document.getElementById('main');

const fullHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);

// console.log(navBar.offsetHeight);
// console.log(mainContent.offsetHeight);

function refreshNavbar() {
  if (navBar.offsetHeight + window.scrollY >= pageFooter.offsetTop) {
    document.body.classList.remove('navbar-sticky');
    document.body.classList.add('navbar-end');
  }
  else if (navBarContainer.offsetTop <= window.scrollY) {
    document.body.classList.add('navbar-sticky');
    document.body.classList.remove('navbar-end');
  }
  else {
    document.body.classList.remove('navbar-sticky');
    document.body.classList.remove('navbar-end');
  }
}

document.addEventListener('scroll', e => {
  // console.clear();
  // console.log(navBarContainer.offsetTop);
  // console.log("window.scrollY: ", window.scrollY);
  // console.log("document.documentElement.clientHeight: ", document.documentElement.clientHeight);
  // console.log("window.innerHeight: ", window.innerHeight);
  // console.log("fullHeight: ", fullHeight);
  // console.log("documentRect.height: ", documentRect.height);
  // console.log("pageFooterRect.top: ", pageFooterRect.top);
  // console.log("pageFooter.offsetTop: ", pageFooter.offsetTop);
  // console.log("navBar.offsetHeight: ", navBar.offsetHeight)
  refreshNavbar();
});

window.onresize = refreshNavbar;