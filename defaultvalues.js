let mark = [80]
let[maths = 0 , science = 0] = mark //  these 3 examples are for the default values
console.log(maths)
console.log(science)

let data = [0, null]
let [a = 10, b = 20] = data
console.log(a)
console.log(b)

let product = {
    name:"laptop"
}
let {name , price = 0} = product
console.log(name)
console.log(price)