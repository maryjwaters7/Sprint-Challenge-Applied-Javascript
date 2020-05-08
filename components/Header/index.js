// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function make(selector) {
    return document.createElement(selector);
}

const Header = () => {
    const header = make ('div');
    const date = make ('span');
    const title = make ('h1');
    const temp = make ('span');

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    date.textContent = 'MAY 08, 2020';
    title.textContent = 'Lambda Times';
    temp.textContent = '88°';

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    return header
}

const entry = document.querySelector('.header-container');
entry.appendChild(Header())
