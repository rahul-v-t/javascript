let store1 = [
    {
        name: "Apple",
        qty: 500,
        price: 50,
    },
    {
        name: "Orange",
        qty: 100,
        price: 40,
    },
    {
        name: "Mango",
        qty: 300,
        price: 60,
    },

];
let store2 = [
    {
        name: "Apple",
        qty: 200,
        price: 70,
    },
    {
        name: "Orange",
        qty: 700,
        price: 80,
    },
    {
        name: "Mango",
        qty: 500,
        price: 40,
    },

];
let store3 = [
    {
        name: "Apple",
        qty: 100,
        price: 90,
    },
    {
        name: "Orange",
        qty: 700,
        price: 70,
    },
    {
        name: "Mango",
        qty: 200,
        price: 30,
    },

];

let total1 = 0;
let total2 = 0;
let total3 = 0;
let stores = [store1,store2,store3];
let sum = [];
for(i=0;i<stores.length;i++){
    let total=0;
    stores[i].forEach((store) => {
        total += (store.qty) * (store.price);
    });
    sum.push(total);
}
total1 = sum[0]; 
total2 = sum[1]; 
total3 = sum[2]; 
let totalcost = {
    storeone : total1,
    storetwo : total2,
    storethree : total3
};
console.log(totalcost);