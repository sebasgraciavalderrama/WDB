
const prices = [1,2,3,4,5,6,7,8,9]

const reducer = (accumulator, currentValue) => accumulator + currentValue

console.log(prices.reduce(reducer))

//To get the min value...

const reducerMin = (min, currentPrice) => {
  if (prince < min) {
    return price
  }
  return min;
}

prices.reduceMin(reducerMin);

const evens = [2, 4, 6, 8]
evens.reduce((sum, num) => sum + num, 100)
