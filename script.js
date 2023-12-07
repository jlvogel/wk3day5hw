// Task 3.0
// Copy the following data structure to the top of script.js:

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
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