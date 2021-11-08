function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklendi : " + productName + " adet : "+ quantity )
}

// addToCart("Elma")
addToCart(10)
// addToCart("Karpuz")


let sayHello = ()=>{
    console.log("Hello World")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()


////////////

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product1.productName)
    console.log("Adet : "+product1.quantity)
    console.log("Fiyat : "+product1.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)


///////////////


function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(...numbers) {//rest
    let total =0
    for (let i = 0 ; i < numbers.length; i++){
        
        total = total + nuumbers[i]
       
    }
    console.log(total)
}

// add(20,30)
// //add(20,30,40)
// //add(20,30,40,50)

// //let numbers = [30,10,500,600,120]
// //console.log(...numbers)
// //console.log(Math.max(...numbers))

// let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
//     {name:"İç Anadolu", population:"20M"},
//     {name:"Marmara", population:"30M"},
//     {name:"Karadeniz", population:"10M"},
//     [
//         ["Ankara","Konya"],
//         ["İstanbul","Bursa"],
//         ["Sinop","Trabzon"],
//     ]
// ]

// //console.log(icAnadolu.name)
// //console.log(icAnadolu.population)
// console.log(icAnadoluSehirleri)