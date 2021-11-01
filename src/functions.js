function addToCart(quantity,productName ="Elma ") {
    console.log("Sepete EKlendi: ürün: " 
    + productName +"adet: " + quantity )
}
//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
} 

sayHello()

let sayHello2 = function name() {
    console.log("Hello World 2")
    
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}


let product1 = {productName:"Elma", unitPrice:10, quantity:5}
function addToCart3(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}

addToCart3(product1)

//console.log("SERTAÇ Yeter be kardeşim burası önemli sepete ekle kısmında bunlarıda alabilirsin bölümü")
function addToCart4(x) {
    console.log(products)   
}

 let products= [
     {productName:"Elma", unitPrice:10, quantity:5},
     {productName:"Armut", unitPrice:10, quantity:5},
     {productName:"Karpuz", unitPrice:10, quantity:5}
 ]

 addToCart4(products)
 //bir değişken tanımlandığında blok önemlidir yani dahil olduğu blok. Buna scope denir
 //products tanımlanmışsa o gelirdi ama tanımlanmadıkça bir üst global alanda yanic scopeta ne varsa o gelir
 //yani aynı sonucu almamızın sebebi budur..

 //Rest Operatörü
 function add(number1, number2) {
    console.log(number1 + number2)
 }
 add(20,30) //bu şekilde olursa yönetim bizden ekleme yap derse bu işin sonu yok

 //çözüm için
 function add2(bisey,...numbers) {
     let total = 0
     for (let i = 0; i< numbers.length; i++) {
        total = total + numbers[i]
         
     }
     console.log(total)
     console.log(bisey)
 }
 add2(20,30)
 //add2(20,30,40) // for döngüsü vermessen toplama yapmıyor array olarak tutuyor

 let numbers = [30,10,500,600]
console.log(Math.max(...numbers)) //burada ki  3 nokta numbersı ayır demek 

//spread ayrıştırır Reast Toparlar

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)