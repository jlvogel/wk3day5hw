// Task 3.0
// Copy the following data structure to the top of script.js:

// // Menu data structure
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];

// Task 5.0
// Update the menuLinksarray in script.js to this:

// Menu data structure
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


// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
mainEl = document.querySelector('main')

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)'

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1> .
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

// Task 1.3
// Add a class of flex-ctr to mainEl .
mainEl.classList.add('flex-ctr')

// Task 2.0
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl .
topMenuEl = document.querySelector('#top-menu')

// Task 2.1
// Set the height topMenuEl element to be 100% .
topMenuEl.style.height = '100%'

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3
// Add a class of flex-around to topMenuEl .
topMenuEl.classList.add('flex-around')

// Task 3.0
// Copy the following data structure to the top of script.js:

// // Menu data structure
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

//    Create an <a>element.
//    On the new element, add an href attribute with its value set to the href property of the "link" object.
//    Set the new element's content to the value of the text property of the "link" object.
//    Append the new element to the topMenuEl element.

for(link of menuLinks) {
  let a = document.createElement('a')
  a.href = link.href
  a.text = link.text
  topMenuEl.appendChild(a)
}

// Task 4.0
// Select and cache the <nav id=sub-menu"> element in a variable named subMenuEl .
subMenuEl = document.querySelector('#sub-menu')

// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = '100%'

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

// Task 4.3
// Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add('flex-around')

// Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute.
subMenuEl.style.position = 'absolute'

// Task 4.5
// Set the CSS topproperty of subMenuElto the value of 0.
subMenuEl.style.top = 0

// Task 5.0
// Update the menuLinksarray in script.js to this:

// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '#', subLinks: [
//     {text: 'all', href: '/catalog/all'},
//     {text: 'top selling', href: '/catalog/top'},
//     {text: 'search', href: '/catalog/search'},
//   ]},
//   {text: 'orders', href: '#' , subLinks: [
//     {text: 'new', href: '/orders/new'},
//     {text: 'pending', href: '/orders/pending'},
//     {text: 'history', href: '/orders/history'},
//   ]},
//   {text: 'account', href: '#', subLinks: [
//     {text: 'profile', href: '/account/profile'},
//     {text: 'sign out', href: '/account/signout'},
//   ]},
// ];


// Task 5.1
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks .
let topMenuLinks = []
for (const child of topMenuEl.children) {
  if(child.tagName = 'A') {
    topMenuLinks.push(child)
  }
}

// Declare a global showingSubMenu variable and initialize it to false
var showingSubMenu = false

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', handleClick)

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working.

// Task 5.3
// Next in the event listener, if the clicked <a>link has a class of active:

// 1. Remove the activeclass from the clicked <a>element.
// 2. Set the showingSubMenuto false.
// 3. Set the CSS topproperty of subMenuElto 0.
// 4. returnto exit the handler.


// Task 5.4
// Next, the event listener should remove a class name of active from each <a> element in topMenuLinks- whether the active class exists or not.

// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

// Task 5.5
// Next, the event listener should add a class name of active to the <a> element that was clicked.

function handleClick(evt) {
  evt.preventDefault()
  if(evt.target.tagName != 'A') {
    return
  } else {
    console.log(evt.target.text)
    let a = evt.target
    if (a.classList.contains('active')) {
      a.classList.remove('active')
      showingSubMenu = false
      subMenuEl.style.top = 0
      return
    }
    // Task 5.4
    for (const link of topMenuLinks) {
      link.classList.remove('active')
    }
  }
}

