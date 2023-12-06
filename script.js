// Menu data structure
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

let topMenuLinks = []
for(link of menuLinks) {
  let a = document.createElement('a')
  // a.href = link.href
  // a.textContent = link.text
  a.innerHTML = `<a href = 'links${link.href}.html' target="_blank">${link.text}</a>`
  topMenuEl.appendChild(a)
  topMenuLinks.push(a)
}

let subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.className = 'flex-around';
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = 0;
console.dir(subMenuEl)

let showingSubMenu = false;