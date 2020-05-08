// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

//response.data.articles -- 5 sections javascript/bootstrap/technology/jquery/node inside articles category 
//response.data.articles[data] -- # headlines inside javascript/bootstrap/technology/jquery/node sections
//response.data.articles[data](ele) -- individual headlines/photo/name

function make(selector) {
    return document.createElement(selector);
};

const cardEntry = document.querySelector('.cards-container');

const createCard = (getData) => {
    //elements
    card = make('div');
    headline = make('div');
    author = make('div');
    imgContainer = make('div');
    cardImg = make('img');
    cardName = make('span');

    //structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(cardImg);
    author.appendChild(cardName);

    //content
    headline.textContent = getData.headline;
    cardImg.src = getData.authorPhoto;
    cardName.textContent = `By ${getData.authorName}`;

    //classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    return card
}





axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(getData =>{
//   console.log(getData.data.articles)
    articleData = Object.keys(getData.data.articles)
    articleData.forEach(data => {
        // console.log(getData.data.articles[data])
        getData.data.articles[data].forEach(ele => {
            cardEntry.appendChild(createCard(ele))
        })
    })
})
.catch(error => {
    console.log(error)
})