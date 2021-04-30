//--> 1.Destructuring Arrays to Variables :

const marks = [99, 97, 94, 91, 90, 88, 72, 65];

const [firstNum, secondNum, thirdNum, ...allRemainingNum] = marks;

//<--

// --> 2.Destructuring Objects to Variables

// Object Containing Information.
const userId = {
  name: "Nabeel Asif",
  mail: "nabeel.asif362@gmail.com",
  currentAddress: "Toba Tek Singh",
  gender: "Male",
  age: 21,
};
//  Destructuring :
const {
  name: varName,
  currentAddress: varCurrentAddress = "338 GB",
  age: varAge,
} = userId;

// Now objects exists as Variables with new name e.g ( varName, varCurrentAddress, varAge ). etc
// <--

// --> 3. Destructuring Params to Variables :

const movies = [
  {
    title: "Apocalypse Now",
    year: "1979",
    score: "95",
    genre: ["drama", "war"],
  },
  {
    title: "Unforgiven",
    year: "1992",
    score: "92",
    genre: ["western", "drama"],
  },
  {
    title: "The big Lebowski",
    year: "1998",
    score: "88",
    genre: "comedy",
  },
];

const bestMovies = movies.filter(({ score }) => score > 90);

const movieSummary = movies.map(({ title, year, score }) => {
  return `The '${title}' was released in '${year}' and got rating : ${score}.`;
});

// <--
