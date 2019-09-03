const testDiv = document.getElementById('testDiv');

testDiv.textContent //?


const ob = {
	value: 10
}

const fn = (x) => {
  console.log(x)
}

Object.entries(ob).map(fn)