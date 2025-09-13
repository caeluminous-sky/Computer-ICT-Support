
new bootstrap.ScrollSpy(document.body, {
  target: '#navbarNav',
  offset: 50,
});


function adjustHomeHeight() {
  const navbar = document.querySelector('.navbar');
  const home = document.querySelector('#home');
  if (navbar && home) {
    const navbarHeight = navbar.offsetHeight;
    home.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
  }
}
window.addEventListener('load', adjustHomeHeight);
window.addEventListener('resize', adjustHomeHeight);


const scrollElement = document.querySelector('.about-content');
new bootstrap.ScrollSpy(scrollElement, {
  target: '#aboutNav',
  offset: 0,
});
