const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [hong, kim, lee, park];

const find3 = (a) => a.id === 3;
const idxId2 = users.findIndex(find3);

const findId = (pid) => (a) => a.id === pid;
const idxId11 = users.findLastIndex(findId(2));
console.log("🚀  idxId11:", idxId11);

const ids = users.map((a) => a.id);
console.log(ids);

Array.prototype.map = function (f) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = f(this[i], i, this);
  }
  return results;
};

Array.prototype.mapBy = function (k) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(this[i][k]);
  }

  return results;
};

const ids2 = users.mapBy("id");
console.log("🚀 ~ ids2:", ids2);

const names = users.mapBy("name");
console.log("🚀 ~ names:", names);

Array.prototype.push = function(x) {
    return [...this, x];
}

const xx = users.push({id:100, name:"킹 세종"})
console.log("🚀 ~ xx:", xx)
