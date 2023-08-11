const adviceNo = document.getElementById("advice_no");
const quote = document.querySelector("q");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  console.log(data);
  adviceNo.textContent = `#${data.slip.id}`;
  quote.textContent = data.slip.advice;
};

fetchAdvice();
