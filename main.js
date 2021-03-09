menu_list_array["Pepperoni Pizza",
"Veg supreme","Chicken Supereme",
"Deluxe Pizza"];
function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;<menu_list_array;i++){
htmldata=htmldata"<li>"+menu_list_array[i]+ "</li>";
}
htmldata=htmldata+"<ol>";
document.getElementById("display_menu").innerHTML=htmldata;
}
function add_item(){var htmldata;
    var line-document.getElementById("add_item").value;
    menu_list_array.push(Item);
    menu_list_array.sort();
    htmldata"<section class="cards>";
    for(var i=0;<menu_list_array.length;i++){
    htmldata=htmldata"<div class="cards>+<img src="pizzaImg.png">"+menu_list_array[i] '<div>';
    }
htmldata=htmldata+"</section>";
document.getElementById("display_addedmenu").innerHTML=htmldata;
}
