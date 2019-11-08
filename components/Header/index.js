// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector(".header-container"); // headerContainer is now equal to the header-container div in HTML 
headerContainer.appendChild(Header()); // makes the component that is returned from the Header function a child of the header-container div in HTML


function Header() {
    // Define new elements 
    const newHeader = document.createElement('div'),
    date = document.createElement('span'),
    title = document.createElement('h1'),
    temp = document.createElement('span');

    // Setup structure
    newHeader.appendChild(date);
    newHeader.appendChild(title);
    newHeader.appendChild(temp);

    // Give class names--defined in template
    newHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return newHeader;
}

