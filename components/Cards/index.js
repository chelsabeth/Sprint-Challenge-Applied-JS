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
        const articleContainer = document.querySelector(".cards-container"); // articleContainer is now equal to the cards-container div in HTML
        response.data.articles.bootstrap.forEach(element => { // loops through bootstrap array
            articleContainer.appendChild(Article(element)); // makes the component that is returned from the Article function a child of the cards-container div in HTML
        });

        response.data.articles.javascript.forEach(element => { // loops through js array
            articleContainer.appendChild(Article(element));
        });

        response.data.articles.jquery.forEach(element => { // loops through jquery array
            articleContainer.appendChild(Article(element));
        });

        response.data.articles.node.forEach(element => { // loops throgugh node array
            articleContainer.appendChild(Article(element));
        });

        response.data.articles.technology.forEach(element => { // loops through technology array
            articleContainer.appendChild(Article(element));
        });
    })
    .catch(error => {
        console.log("Sorry, there was an error", error);
    });



    function Article(data) {
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
        imgContainer.classList.add("img-container");

        // Assing elements with data
        headline.textContent = `${data.headline}`;
        img.src = `${data.authorPhoto}`;
        authorsName.textContent = `${data.authorName}`;

        return newArticle;
    }
