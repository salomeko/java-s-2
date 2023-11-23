// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს

function multipleOfThree(number){
    if(number % 3==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(multipleOfThree(17));
console.log(multipleOfThree(27));


// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.

function getCurrency(currency){
    if(currency === "USD"){
        return "$";
    }else if(currency === "EUR"){
        return "€";
    }else if(currency === "GEL"){
        return "ლ";
    }else{
        return currency;
    }
}
console.log(getCurrency("EUR"));
console.log(getCurrency("USD"));
console.log(getCurrency("GEL"));
console.log(getCurrency("CNY"));


// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.

function UpperCase(text){
    return text.toUpperCase();
}
console.log(UpperCase("my name is joe"));


// 4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.

function money(gasayidi, asagebi){
    return((gasayidi-asagebi)/gasayidi)*100;
}
console.log(money(6, 8)+ "%");


// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.

let numbers=[15,22,67,84,27,21,36,30,19,68];
const nums=numbers.filter(function(element){
    return element%2===0;
});
console.log(`Even nums are:${nums}`);


// 6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.

function findByName(objectsArray, targetName) {
    const foundObject = objectsArray.find(obj => obj.name === targetName);
    return foundObject || null;
  }
  const arrayOfObjects = [
    { name: 'nana'},
    { name: 'salo'},
    { name: 'ilia'}
  ];
  const targetObjectName = 'nana';
  const result = findByName(arrayOfObjects, targetObjectName);
  if (result) {
    console.log('Object found:', result);
  } else {
    console.log('Object not found');
  }