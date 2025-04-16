console.log("----------- 1 -----------");

const d1 = new Date(1970, 0, 2);
const d2 = new Date(1970, 0, 3);

console.log("🚀 ~ d1:", d1);
console.log("🚀 ~ d2:", d2);
console.log((d2 - d1) / 1000);

console.log("----------- 2 -----------");

const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
const today = new Date();
today.setMonth(today.getMonth() + 1);
today.setDate(0);
const endOfDay = today.getDate();
console.log("🚀 ~ endOfDay:", endOfDay);
console.log("🚀 ~ today:", today);

const days = [];
do {
  const r = rand(1, endOfDay);
  if (!days.includes(r)) days.push(r);
} while (days.length < 5);

const yyyy = today.getFullYear();
const mm = (today.getMonth() + 1).toString().padStart(2, 0);
const rets = days
  .sort((a, b) => (a < b ? 1 : -1))
  .map((day) => `${yyyy}-${mm}-${day.toString().padStart(2, 0)}`);
console.log("🚀 ~ days:", days);
console.log("🚀 ~ rets:", rets);

/*
for(let i=0;i<5;i++){
    days.push(rand(1, endOfDay))
}
*/

console.log("----------- 3 -----------");

const nextYear = new Date();
const weekNames = "일월화수목금토";
nextYear.setFullYear(nextYear.getFullYear() + 1);
console.log("🚀 ~ nextYear:", nextYear, weekNames[nextYear.getDay()]);

console.log("----------- 4 -----------");

const dayAfter10 = new Date();
dayAfter10.setDate(dayAfter10.getDate() + 10 -1);
console.log("🚀 ~ dayAfter10:", dayAfter10);
