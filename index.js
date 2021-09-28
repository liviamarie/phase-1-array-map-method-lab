const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(function(titles) {
//   return tutorials.toTitleCase();
// })

// function titleCased(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }

// const titleCased = () => {
//   const cap = tutorials.split(' ');
//   cap.map(first => first[0].toUpperCase() + first.substring(1)).join(' ');
//   return tutorials;
// }

// const titleCased = tutorials => {
//   tutorials.map(function (element) {
//     const words = element.split(" ");
//     words.map((word) => {
//       return word[0].toUpperCase() + word.substring(1);
//     }).join(" ");
//   })
// }

function capitalize(sentence) {
  const words = sentence.split(' ');
  const result = words.map(e => e[0].toUpperCase() + e.slice(1));
  const newSentence = result.join(' ')
  return newSentence;
}

function titleCased() {
  return tutorials.map(capitalize);
}

