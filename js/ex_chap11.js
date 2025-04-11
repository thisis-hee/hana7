globalThis.name = "GlobalName";
this.name = "ModuleName";

const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 1000); // (1)
    setTimeout(() => this.showMyName(), 1500); // (2)
  },
};

dog.whatsYourName();

const weekName = () => (weekNo) => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  return weeks[weekNo];
};

const getWeekName = weekName();

const day = new Date().getDay();
console.log(`오늘은 ${getWeekName(day)}요일 입니다!`);