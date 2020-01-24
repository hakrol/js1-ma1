//question 1
const cat = {
  complain: function() {
    console.log("Meow!");
  }
};

//question 2
const heading = document.querySelector("h3");

//question 3
heading.style.fontSize = "2em";

//question 4
heading.classList.add("subheading");

//question 5
const paragraphs = document.querySelectorAll("p");

//question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New pararaph</p>`;

//question 7
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function catNames(catArray) {
  for (let i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
  }
}

catNames(cats);

//question 8
function catNames(catArray) {
  let catHTML = "";

  for (let i = 0; i < catArray.length; i++) {
    catHTML += `<h5>${catArray[i].name}</h5>`;
  }

  return catHTML;
}

//question 9
resultsContainer.innerHTML = `${catNames(cats)}`;

//question 10
function catNames(catArray) {
  let catHTML = "";

  for (let i = 0; i < catArray.length; i++) {
    let ageUnknown = "Age unknown";

    if (catArray[i].age) {
      ageUnknown = catArray[i].age;
    }

    catHTML += `<div>
                <h5>${catArray[i].name}</h5>
                <p>${ageUnknown}</p>
                </div>`;
  }

  return catHTML;
}
