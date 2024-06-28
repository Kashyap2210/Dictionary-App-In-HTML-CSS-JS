let searchBtn = document.querySelector(".search-btn");
let inputWord = document.querySelector(".search");
let result = document.querySelector(".meaning");

searchBtn.addEventListener("click", () => {
  let word = inputWord.value.toLowerCase(); // Get the value from the input field

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Assuming API returns an array of meanings, you can display the first meaning
      const firstMeaning = data[0]?.meanings[0]?.definitions[0]?.definition;
      if (firstMeaning) {
        result.textContent = firstMeaning;
      } else {
        result.textContent = "Meaning not found";
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      result.textContent = "Error fetching meaning";
    });
});
