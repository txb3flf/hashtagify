class Hashtag {

 constructor(x) {
   this.x = x;
 }

 generate() {
   if (this.x == "") {
     return false;
   }
   var emptyStringCount = 0;
   for (var i = 0; i < this.x.length; i++) {
     if(this.x.charAt(i) == ' ') {
       emptyStringCount = emptyStringCount + 1;
     };
   }
   if(emptyStringCount == this.x.length) {
     return false;
   }
   var stringWithoutSpaces = "";
   for (var i = 0; i < this.x.length; i++) {
     if(this.x.charAt(i) != ' ') {
       if(this.x.charAt(i-1) != ' ') {
         stringWithoutSpaces = stringWithoutSpaces + this.x.charAt(i);
       } else {
         stringWithoutSpaces = stringWithoutSpaces + this.x.charAt(i).toUpperCase();
       }
     };
   }
   return "#" + stringWithoutSpaces
 }
} console.log('test');

module.exports = {
  Hashtag
}
