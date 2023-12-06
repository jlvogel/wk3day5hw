// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];




let mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.className = 'flex-ctr';

let topMenuEl = document.querySelector('#top-menu');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.className = 'flex-around'

console.dir(topMenuEl)

for(link of menuLinks) {
  let a = document.createElement('a')
  // a.href = link.href
  // a.textContent = link.text
  a.innerHTML = `<a href = 'links${link.href}.html' target="_blank">${link.text}</a>`
  topMenuEl.appendChild(a)
}

let subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.className = 'flex-around'