var productos;
var cart=[];
var shoppingCart=(function(){
  cart=[];

  });
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
}

init();
function init(){
  console.log(document.getElementsByClassName("tablinks"));
  var tab=document.getElementsByClassName("tablinks");
  for(var i =0;i< tab.length;i++){
    
    tab[i].addEventListener("mouseover", setImage('this'.id));
  };
  // document.getElementsByClassName("tablinks").addEventListener("mouseover", setImage(this));
  productos= {
    "hojas":[
        {"name":"Acelga", "type": "rollo", "price": "300"},
        {"name":"Apio", "type": "rollo", "price": "400"},
        {"name":"Cebollín", "type": "rollo", "price": "₡400"},
        {"name":"Culantro", "type": "rollo", "price": "₡300"},
        {"name":"Espinaca", "type": "rollo", "price": "₡300"},
        {"name":"Hierbabuena", "type": "rollo", "price": "₡300"},
        {"name":"Hinojo", "type": "rollo", "price": "₡300"},
        {"name":"Chicasquil", "type": "300g", "price": "₡1600"},
        {"name":"Kale", "type": "rollo", "price": "₡300"},
        {"name":"Lechuga", "type": "Unidad", "price": "₡300"},
        {"name":"Perejil", "type": "rollo", "price": "₡300"},
        {"name":"Tomillo", "type": "rollo", "price": "₡300"}
    ],
    "hortalizas": [
        {"name":"Ajo", "type": "Kilo", "price": "₡1400"},
        {"name":"Ayote", "type": "Kilo", "price": "₡900"},
        {"name":"Brocoli", "type": "Kilo", "price": "₡1400"},
        {"name":"Cebolla Blanca", "type": "kilo", "price": "₡1200"},
        {"name":"Cebolla Morada", "type": "kilo", "price": "₡1400"},
        {"name":"frijoles germinados", "type": "bandeja", "price": "₡1200"},
        {"name":"Okra", "type": "Bandeja", "price": "₡4800"},
        {"name":"Pelino", "type": "kilo", "price": "₡1200"},
        {"name":"Rabano", "type": "rollo", "price": "₡400"},
        {"name":"Remolacha", "type": "unidad", "price": "₡300"},
        {"name":"Tomate", "type": "kilo", "price": "₡1400"},
        {"name":"Zanahoria", "type": "kilo", "price": "₡800"},
        {"name":"Zuquini", "type": "unidad", "price": "₡400"}
    ],
    "tuberculos":[
      {"name":"Camote", "type": "Kilo", "price": "₡1200"},
      {"name":"Curcuma", "type": "300g", "price": "₡1300"},
      {"name":"Jengibre ", "type": "200g", "price": "₡600"},
      {"name":"Papa blanca", "type": "Kilo", "price": "₡1400"},
      {"name":"Sagú", "type": "Kilo", "price": "₡3500"},
      {"name":"Yuca", "type": "Kilo", "price": "₡900"},
    ],
    "frutas": [
      {"name":"Aguacate", "type": "Kilo", "price": "₡2400"},
      {"name":"Banano", "type": "Kilo", "price": "₡700"},
      {"name":"Ciruela ", "type": "Caja", "price": "₡1200"},
      {"name":"Fresa", "type": "Bandeja", "price": "₡1800"},
      {"name":"Fresa para batidos ", "type": "kilo", "price": "₡2000"},
      {"name":"Granadilla", "type": "Unidad", "price": "₡200"},
      {"name":"Guanabana", "type": "kilo", "price": "₡2400"},
      {"name":"Limon Mandarino ", "type": "Unidad", "price": "₡100"},
      {"name":"Mani", "type": "200g", "price": "₡1100"},
      {"name":"Manzana", "type": "Kilo", "price": "₡1800"},
      {"name":"Mora Acida", "type": "500g", "price": "1500"},
      {"name":"Platano", "type": "kilo", "price": "₡800"},
      {"name":"Rosa de jamaica fresca", "type": "kilo", "price": "₡8000"},
      {"name":"Uchúa", "type": "Caja (900gm)", "price": "₡1000"}
    ],
    "huevos/hongos":[
      {"name":"Huevos Pastoreo", "type": "Caja 30uds", "price": "₡4500"},
      {"name":"Huevos Pastoreo", "type": "Caja 15uds", "price": "₡2200"},
      {"name":"Huevos Pastoreo", "type": "Docena", "price": "₡1800"},
      {"name":"Champiñones ", "type": "Caja 250g", "price": "₡1200"},
      {"name":"Hongo Crimini", "type": "Kilo", "price": "₡1400"}
    ],
    "granos":[
      {"name":"Frijol Rojo", "type": "900g", "price": "₡2000"},
      {"name":"Frijol Negro", "type": "900g", "price": "₡2000"},
      {"name":"Frijol Mantequilla", "type": "800g", "price": "₡2000"},
      {"name":"Frijol Mantequilla", "type": "400g", "price": "₡1200"},
      {"name":"Frijol Rabiza", "type": "800g", "price": "₡2000"},
      {"name":"Frijol Rabiza", "type": "400g", "price": "₡1200"},
      {"name":"Maiz Amarillo ", "type": "900g", "price": "₡1200"},
      {"name":"Maiz Pujagua ", "type": "800g", "price": "₡1200"}
    ],
    "procesados":[
      {"name":"Huevos ", "type": "Caja 30uds", "price": "₡4500"},
      {"name":"Huevos Pastoreo", "type": "Caja 15uds", "price": "₡2200"},
      {"name":"Champiñones ", "type": "Caja 250g", "price": "₡1200"},
      {"name":"Hongo Crimini", "type": "Kilo", "price": "₡1400"},
      {"name":"Sagú", "type": "Kilo", "price": "₡3500"},
      {"name":"Yuca", "type": "Kilo", "price": "₡900"},
      {"name":"Sagu", "type": "Kilo", "price": "₡3500"},
      {"name":"Yuca", "type": "Kilo", "price": "₡900"},
      {"name":"Sagú", "type": "Kilo", "price": "₡3500"},
      {"name":"Yuca", "type": "Kilo", "price": "₡900"},
      {"name":"Sagú", "type": "Kilo", "price": "₡3500"},
      {"name":"Yuca", "type": "Kilo", "price": "₡900"},
    ]
  



  }
};   

function openTab(evt, product) {
    var items=productos[product];
    var contentDiv= document.createElement("div");
    document.getElementById("content").innerHTML=""
    items.forEach(createTable);  
}

function createTable(item){
  
    var itemDiv= document.createElement("div");
    itemDiv.setAttribute('class',"item col-sm-12");
    
    
    itemDiv.innerHTML= `         
    

    <div class="description col-sm-4">
      <span>`+ item.name +`</span><span>`+ item.type +`</span>
      
    </div>
    <div class="col-sm-4">
      <button class="addButton" onclick="addToCart('`+item.name+`','`+item.price+`')">Add </button>
    </div>
    <div class=" col-sm-4 total-price">₡ `+item.price+`</div>
  `;
    document.getElementById("content").appendChild(itemDiv);
    
    //    <div class="quantity">
  //     <button class="plus-btn" type="button" name="button" onclick="addToTotal()">
  //     <img src="Assets/Imgs/plus.jpg" alt="" />
  //   </button>
  //   <input type="text" name="name" value="1">
  //   <button class="minus-btn" type="button" name="button" onclick="subtractOfTotal()">
  //     <img src="Assets/Imgs/minus.png" alt="" />
  //   </button>
  // </div>

  // <div class="image">
  //     <img src="Assets/Imgs/acelga.jpg" alt="" />
  //   </div>

}
function addToTotal(productPrice){

}
function subtractOfTotal(){
  
}

function setImage(tabName){
 


// document.getElementById("tabBackground").style.backgroundImage= 'url(Assets/Imgs/'+tabName+'.png)';

}
function addToCart(name, price){
  
    var add=true;
    for(var item in cart){
      if(cart[item].name===name){
        cart[item].count ++;
        add=false
      }
    }
    if(add){
    var item = new Item(name, price, 1);
    cart.push(item);
    }
    saveCart();
    
    
  }
  function showCart(){
    document.getElementById("cartMenu").innerHTML="";
    var cartMenu= document.getElementById("cartMenu")
    for(var item in cart){
      var itemTab=document.createElement("a");
      itemTab.innerHTML="";
      itemTab.setAttribute('class', 'dropdown-item');
      itemTab.innerHTML= cart[item].count+` X ` +cart[item].name+` `+cart[item].price;
      document.getElementById("cartMenu").appendChild(itemTab);
    }
  }

  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }


