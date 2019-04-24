var condition;
function clear() {
    forms.field.value="";
}
function root() {
   forms.field.value=Math.pow(forms.field.value,1/2);
}
function power(){
    forms.field.value=Math.pow(forms.field.value,2);
}
var equalto=document.getElementById("click");
equalto.addEventListener("click",reset);
function reset() {
    condition=true;
   
    if (condition===true) {
        forms.field.value="";
    }
    else {
        condition=false;
    }
}
