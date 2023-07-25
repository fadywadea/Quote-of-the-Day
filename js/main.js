var arrayOfQoutes = [
  {
    "qoute": "Be yourself; everyone else is already taken.",
    "author": "-- Oscar Wilde"
  },
  {
    "qoute": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "author": "-- Marilyn Monroe"
  },
  {
    "qoute": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "author": "-- Albert Einstein"
  },
  {
    "qoute": "So many books, so little time.",
    "author": "-- Frank Zappa"
  },
  {
    "qoute": "A room without books is like a body without a soul.",
    "author": "-- Marcus Tullius Cicero"
  },
  {
    "qoute": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "author": "-- Bernard M. Baruch"
  },
  {
    "qoute": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "author": "-- Dr. Seuss"
  }
];


function rundomQuote() {
  var quoteIndex = Math.floor(Math.random() * arrayOfQoutes.length);
  var oldQuote = document.getElementById("quoteOutput").innerText;
  var newQuote = `"${arrayOfQoutes[quoteIndex].qoute}"`;
  if (oldQuote == newQuote) {
    rundomQuote();
  } else {
    document.getElementById("quoteOutput").innerText = newQuote;
    document.getElementById("authorOutput").innerText = `"${arrayOfQoutes[quoteIndex].author}"`;
  }
};