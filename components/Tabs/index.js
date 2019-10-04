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
        const topics = document.querySelector(".topics"); // topics is now equal to the topics div in HTML 
        response.data.topics.forEach(element => { // loops through the topics array 
            topics.appendChild(Tab(element)); // makes the component that is returned from the Tab function a child of the topics div in the HTML 
        });
    })
    .catch(error => {
        console.log("Sorry, there was an error", error);
    });

    
    function Tab(data) {
        // Define new elements
        const newTopic = document.createElement("div");

        // Give class name
        newTopic.classList.add('tab');

        // Assign element with data
        newTopic.textContent = `${data.topics}`;

        return newTopic;
    }
