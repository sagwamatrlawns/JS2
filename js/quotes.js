const quotes = [
  {
    quote:
      "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Design can be art. Design can be aesthetics. Design is so simple, that's why it's so complicated.",
    author: "Paul Rand",
  },
  {
    quote: "Creativity is nothing but the way to solve new problems.",
    author: "Diana Santos",
  },
  {
    quote: "Digital design is like painting, except the paint never dries.",
    author: "Neville Brody",
  },
  {
    quote: "Get rid of everything that is not essential to making a point.",
    quthor: "Christoph Niemann",
  },
  {
    quote: "Make it simple, but significant.",
    quthor: "Don Draper",
  },
  {
    quote: "Look at usual thing with unusual eyes.",
    quthor: "Vico Magistretti",
  },
  {
    quote: "Design is thinking made visual.",
    quthor: "Saul Bass",
  },
  {
    quote: "You don't have to be 'a creative' to be creatibe.",
    quthor: "Drory Ben-Menachem",
  },
  {
    quote: "The best way to predict the future is to create it.",
    quthor: "Abraham Lincoln",
  },
  {
    quote: "Design is the world I create.",
    quthor: "Kim Jun",
  },
];

// html에서 텏스트를 넣을 곳을 불러와서 변수에 저장
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random()은 렌덤으로 0 부터 1까지 사이의 수를 출력
// 거기에 quotes.lenght(배열의 요소 갯수 만큼의 수를 반환하는 기본함수) 를 곱하여 그 사이의 수를 랜텀하게 출력하고
// Math.floor를 사용여 소수점 자리를 내림함
// 그 숫자가 나온 배열의 번쨰를 가져와서 변수에 저장
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 가져온 명언을 명언과 사람을 html에서 불러온 곳에 innerText로 넣었다.
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
