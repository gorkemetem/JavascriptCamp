// console.log("Hello World")

// let dolarDun = 9.20
// let dolarBugun = 9.30

// console.log(dolarDun) 

// const euroDun = 11.2

// //euroDun = 11

// console.log(euroDun)

// let konutKredileri = ["Konut Kredi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Kamu Konut Kredisi"]

// console.log("<ul>")
// for (let i = 0; i < konutKredileri.length; i++) {
//     console.log("<li>"+konutKredileri[i]+"</li>")   
    
// }       
// console.log("</ul>") 

// console.log(konutKredileri)

let student ={id:1, name:"etem"}

function save(ogrenci, puan = 10) {
    // console.log(ogrenci.name + " : "+puan)
}

save(student, 100)


let students = ["görkem", "etem", "irmak"]

// console.log(students)

let students2 = [student, {id:2, name:"Halit"}, "Ankara", {city:"Istanbul"}]

// console.log(students2)



//rest -gerikalanalar
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

// console.log(typeof showProducts)
//showProducts(10,["Elma","Armmut","Karpuz"])

//spread
let points = [1,2,56,60,3,5,6,8]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC")


//Destructuring
let populations = [10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryhigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
    
}

someFunction(populations)

let category = {id:1, name:"icecek"}
console.log(category.id)
console.log(category.name)

let {id,name} = category
console.log(id)
console.log(name)
