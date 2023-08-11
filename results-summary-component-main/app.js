const currentGradeEl = document.querySelectorAll(".current-grade");
const getSummaryData = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => console.log(error));

const getGrade = async () => {
  const grade = await getSummaryData;
  grade.map(({ score }, i) => {
    currentGradeEl[i].textContent = score;
  });
};

getGrade();
