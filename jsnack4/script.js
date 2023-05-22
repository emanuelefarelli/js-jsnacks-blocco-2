
const firstOne = areEqual("ciaone","ciao");
const secondOne = areEqual("pippo","pippa");

console.log(firstOne);
console.log(secondOne);


function areEqual(string1,string2){
    if(string1.length === string2.length){
        return true;
    }else{
        return false;
    }
}