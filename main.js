function toWeirdCase(string){
  string = string.split("");
  let cap = true, newStr= "";
  for (let i = 0; i < string.length; i++){
    if (string[i] == " ") {
      newStr += string[i];
      cap = true;
    } else if (cap) {
      newStr += string[i].toUpperCase();
      cap = false;
    } else {
      newStr += string[i].toLowerCase();
      cap = true;
    }
  }
  return newStr;
}
