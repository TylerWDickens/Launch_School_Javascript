let str = "ha";

function repeat(num, str) {

let rpt = ""
for(let i =0; i<num; i++) {

rpt += str;
}
return rpt;
}


console.log(repeat(4,str));