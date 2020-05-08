// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

createTab = (data) => {
    const tab = document.createElement('div');
    tab.textContent = data;
    tab.classList.add('tab');
    
    return tab
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
      let gitData = response.data
    //   console.log(gitData)
      let entry = document.querySelector('.topics')
      gitData.topics.forEach(data => {
          entry.appendChild(createTab(data))
      });
  })
  .catch(error => {
      console.log(error)
  })