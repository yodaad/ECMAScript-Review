// The asterix allows to know it is a generatior
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Diego", "David", "Anne", "Jenny"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
