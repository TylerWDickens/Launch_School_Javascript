let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function strEqual(string1, string2, string3) {
let str1 = string1.toLowerCase();
let str2 = string2.toLowerCase();
let str3 = string3.toLowerCase();

if(str1 == str2 || str2 ==  str3 || str1 == str3) {
  
  if(str1 === str2 && str2 === str3) {

    console.log("All strings are equal");
  }else if(str3 === str2) {

    console.log("String2 is equal to String3")
  }else if(str3 === str1) {

    console.log("String1 is equal to String3")
  }else{
    console.log("String1 is equal to String2")
  }

}
  
}

strEqual(string1, string2, string3);