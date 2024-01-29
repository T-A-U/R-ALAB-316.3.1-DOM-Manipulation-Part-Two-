//import "./styles.css";

// DOM Manipulation //(Part One)
// Do not modify any of the contents of the index.html or styles.css files. Your goal in this lab is to demonstrate DOM manipulation through JavaScript. As such, directly modifying the HTML or CSS files is counterproductive.
//  Part 1: Getting Started
// Explore the existing structure of the provided CodeSandbox to familiarize yourself with important aspects such as current DOM structure, element IDs, and available CSS classes.
// Take five minutes to familiarize yourself with CSS Custom Properties (variables) - they are an amazing addition to CSS. If you are familiar with using variables with SASS/LESS pre-processors, CSS Custom Properties are similar but far more powerful because they are dynamic (their values can be changed during runtime) - and they are built into the CSS language!
// Start the project by building a main content element using the following steps:
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main");

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var/() function like this: 'var/(--main-bg)'.
mainEl.style.backgroundColor = `var(--main-bg)`;
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add(`flex-ctr`);

// Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);
// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

// Part 3: Adding Menu Buttons
// Very often, you will be working with data provided by external sources in a variety of ways. For this project, copy the following data structure to the top of your index.js file; you will use it to create your menu buttons.

// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// If this data was provided by an external source, it would allow that source to control how our menu is built. We would simply implement the logic, and allow the data to decide what displays. This is not typically done with menus, but it can be done with any DOM element.
// To continue:
// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  // Create an <a> element.
  let menuItem = document.createElement(`a`);
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  menuItem.setAttribute(`href`, link.href);
  // Set the new element's content to the value of the text property of the "link" object.
  menuItem.textContent = link.text;
  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(menuItem);
});

// Part 4: Adding Interactivity
// With the basic structure of the page now generated purely with JavaScript, we have demonstrated the ability to manipulate the DOM in several fundamental ways.
// In order to continue with this project, we must first explore how to add user interaction to DOM elements, which will be covered in a future lesson. For now, save your work so that you can return to it for Part Two of this lab activity.
// Remember to submit the link to this part of the project to Canvas using the submission instructions at the beginning of this document.

//console.log//("dog")

//PART 2 (R-ALAB 316.3.1: DOM Manipulation (Part Two)  )

//Part 1: Getting StartedTake a few moments to explore your code and refamiliarize yourself with it. Now that you have a deeper understanding of DOM manipulation concepts, if there is anything you would like to fix or change, now is the time to do so.

// Part 2: Adding Additional HTML and CSS
// One of the most important features of an interactive user interface is feedback. The user needs to know that their actions are accomplishing something, even if it is something as simple as a button shifting color slightly or changing the cursor style when hovered, indicating that it is clickable. In order to facilitate this, add the following additional "sub-menu" <nav> element to the index.html file within your <header> element, beneath the existing <nav> element, as follows: (code in html) Other than this change, do not modify index.html in any way.Secondly, add the following to the styles.css file: (code in css) Other than this change, do not modify styles.css in any way.

// Part 3: Creating the Submenu
// A submenu serves as an additional menu for users to select from, and offers more specific context to the top-level menu's options. We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component. All future steps should be completed within the index.js file.

//1 Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById(`sub-menu`);
//2 Set the height subMenuEl element to be "100%".
subMenuEl.style.height = `100`;
//3 Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
//4 Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add(`flex-around`);
//Throughout this process, note that you are also becoming accustomed to another important skill: working with another developer's code. Many of these variables, elements, CSS classes, and other features have already been developed, and you are simply working with them for your own purposes.

//Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

//1 Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = `absolute`;
//2 Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = `0`;

// Part 4: Adding Menu Interaction
//In order to add submenu links, we will need to restructure the menuLinks array within index.js. Update the menuLinks array to the following: (code edited in js)

//In order to add interaction:
//1 Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll(`a`);
//2 Attach a delegated 'click' event listener to topMenuEl. The first line of code of the event listener function should call the event object's preventDefault() method. The second line of code of the function should immediately return if the element clicked was not an <a> element. Log the content of the <a> to verify the handler is working.
topMenuEl.addEventListener(`click `, (event) => {
  event.preventDefault();
  if (!event.target.matches("a")) {
    return;
  }
  console.log(event.target.textContent);

  if (event.target.classList.contains(`active`)) {
    event.target.classList.remove(`active`);
  } else {
    event.target.classList.add(`active`);
  }
  if (event.target.textContent === "about") {
    subMenuEl.style.top = "0";
  } else {
    subMenuEl.style.top = "100%";
  }
  subMenuEl.innerHTML = ``;
});

//unfinished, had help
