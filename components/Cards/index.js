// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios 
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log("Response for Articles", response.data.articles)
    })
    .catch(error => {
        console.log("Sorry, there was an error", error);
    });



    function article(data) {
        // Define new elements
        const newArticle = document.createElement("div"),
        headline = document.createElement("div"),
        author = document.createElement("div"),
        imgContainer = document.createElement("div"),
        img = document.createElement("img"),
        authorsName = document.createElement("span");

        // Setup structure
        newArticle.appendChild(headline);
        newArticle.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        author.appendChild(authorsName);

        // Give class names
        newArticle.classList.add("card");
        headline.classList.add("headline");
        author.classList.add("author");
        imgConatainer.classList.add("img-container");

        // Assing elements with data
        
    }
