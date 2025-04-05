let SearchInput = document.querySelector('.input-field');
let suggestionsBox = document.querySelector('.suggestions');

const SuggestionsAvailable = [
  'mathematique', 'physics', 'philosophy', 'mathe-dynamique'
];

function fillSearchWith(text){
  SearchInput.value = text;
  console.log(SearchInput.value);
}

function drawSuggestions(){
  let result = "";
  let notFound = false;

  setTimeout(() => {
    suggestions = [];

    SuggestionsAvailable.forEach( 
      (item) => {
        if (SearchInput.value != ""){
          if (item.includes(SearchInput.value)){
            // suggestions.push(item);
            suggestionsBox.style.display = "flex";
            result += `
        <span class="suggestion" onclick="fillSearchWith('${item}')">
          <img src="images/arrow-upper-right.png" alt="search suggestion arrow" class="search-suggestion-arrow">
          <span>${item}</span>
        </span>
            `;
            notFound = true;
          }
        }
        else{
          suggestionsBox.style.display = "none";
        };
      }
    );
    if (notFound === false){
      suggestionsBox.style.display = "none";
    }
    suggestionsBox.innerHTML = result;
  }, 400);
};


