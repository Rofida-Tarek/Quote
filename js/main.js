var quote = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    Author: "Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    Author: " Marilyn Monroe",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    Author: "Albert Einstein",
  },
  {
    quote: "“So many books, so little time.”",
    Author: "Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    Author: "Marcus Tullius Cicero",
  },
  {
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    Author: "Bernard M. Baruch",
  },
  {
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    Author: "Dr. Seuss",
  },
  {
    quote: "“Be yourself; everyone else is already taken.”",
    Author: "Oscar Wilde",
  },
];
function getQuote() {
  var index = Math.floor(Math.random() * quote.length);
  document.getElementById("quote").innerHTML = quote[index].quote;
  document.getElementById("Author").innerHTML = quote[index].Author;
}
