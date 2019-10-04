// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios 
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        console.log("Reponse for Tabs", response.data.topics);
        const topics = document.querySelector(".topics");
        response.data.topics.forEach(element => {
            topics.appendChild(Tab(element));
        });
    })
    .catch(error => {
        console.log("Sorry, there was an error", error);
    });

    
    function Tab(data) {

        // Define new elements
        newTopic.createElement("div");

        // Give class name
        newTab.classList.add('tab');

        // Assign element with data
        newTab.textContent = `${data.topics}`;

        return newTopic;
    }
