let dishnames = ['Cevapcici', 'Raznici', 'Djuvec', 'Palacinke'];
let dishdescription = ['Fleischröllchen aus gewürztem Hackfleisch', 'Gegrillte Fleischspieße aus Schweinefleisch', 'traditionelles Schmorgericht aus Gemüse, Fleisch und Reis', 'Dünner Pfannkuchen mit Marmelade'];
let dishprices = [6.50, 11.00, 8.00, 4.50];
let dishamounts = [1, 1, 1, 1];

let names = [];
let prices = [];
let amounts = [];

let deliverycosts = 2.00;
let minsum = 17;
let sum = 0;
let basketsum = 0;


// render main #######################################################


function render() {

   let content = document.getElementById('content');
   content.innerHTML = '';

   for (let i = 0; i < dishnames.length; i++)
      content.innerHTML += myMenu(i);


   renderBasket();

}


// render basket when empty #######################################################

function renderBasket() {
   document.getElementById('cart').innerHTML = ``;

   if (names.length == 0) {
      document.getElementById('basketprice').classList.add('d-none');
      document.getElementById('basketmenu').innerHTML = '';
      document.getElementById('cart').innerHTML += emptyBasket();

   } else {
      document.getElementById('basketprice').classList.remove('d-none');
      let basketmenu = document.getElementById('basketmenu');
      basketmenu.innerHTML = '';
      for (let i = 0; i < names.length; i++) {
         const name = names[i];
         const price = prices[i];
         const amount = amounts[i];
         basketmenu.innerHTML += fullBasket(i, amount, name, price);
      }
   }

   document.getElementById('basketprice').innerHTML = '';

   renderBasketOrder()
   updateMobileCheckoutBtn()
}


// render orderprice #######################################################


function renderBasketOrder() {

   let restsum = minsum - basketsum;
   let basketmenu = document.getElementById('basketprice');   
   basketmenu.innerHTML += priceCalc(sum, deliverycosts, basketsum, restsum);

   minOrderCheck()

}

// render subTotal #######################################################


function subTotal() {

   sum = 0;
   for (let i = 0; i < prices.length; i++) {
      sum += prices[i] * amounts[i];
   }
   basketsum = sum + deliverycosts;

   render()
}

// minOrderCheck ################################################

function minOrderCheck() {
   let min = document.getElementById('min-order');
   let paybutton = document.getElementById('paybutton');

   if (basketsum >= 17) {
      min.classList.add('d-none');
      paybutton.classList.remove('paybuttoncheck');

   } else {

      min.classList.remove('d-none');
      paybutton.classList.add('paybuttoncheck');

   }

}

// send order message ###############################################

function sendOrder() {

   if (basketsum >= 17) {
      alert('Deine Bestellung wurde übermittelt und in kürze geliefert.');
   }

}

// add dish into the basket ########################

function addToBasket(i) {

   if (names.indexOf(dishnames[i]) == -1) {
      names.push(dishnames[i]);
      prices.push(dishprices[i]);
      amounts.push(dishamounts[i]);
   } else {
      amounts[i]++;
   }

   renderBasket()
   subTotal()
}

// increase amount ######################### 

function increase(index) {

   amounts[index]++;

   renderBasket()
   subTotal()

}

// decrease amount ######################### 


function decrease(index) {

   if (amounts[index] == 1) {
      deleteOrder(index);
   } else {
      amounts[index]--;
   }

   renderBasket()
   subTotal()

}

// delete basket ##############################

function deleteOrder(i) {
   names.splice(i, 1);
   prices.splice(i, 1);
   amounts.splice(i, 1);

   renderBasket()
   subTotal()
}



// like button ##############################

function likeButton() {
   let likebutton = document.getElementById('likebutton');
   let url = document.getElementById('likebutton').src;
   let imgPath = url.split('/').pop();

   if (imgPath == "heart.png") {
      likebutton.src = "./img/heart-full.png";
   } else {

      likebutton.src = "./img/heart.png"
   }
}


// Alert - No Function #############################

function inConstruction() {
   alert('Diese Funktion steht momentan noch nicht zur Verfügung.')

}


// responsive button #####################################

function responsiveBasket() {
   document.getElementById('responsive-menu').classList.remove('sidemenu');
   document.getElementById('responsive-menu').classList.add('sidemenu-responsive');
   document.getElementById('responsive-cart').classList.remove('cart');
   document.getElementById('responsive-cart').classList.add('cart-responsive');
   document.getElementById('responsive-headline').classList.remove('side-headline');
   document.getElementById('responsive-headline').classList.add('responsive-headline');
}

function doNotClose(event) {
   event.stopPropagation();
}


function closeResponsive() {

   document.getElementById('responsive-menu').classList.remove('sidemenu-responsive');
   document.getElementById('responsive-menu').classList.add('sidemenu');
   document.getElementById('responsive-cart').classList.remove('cart-responsive');
   document.getElementById('responsive-cart').classList.add('cart');
   document.getElementById('responsive-headline').classList.remove('responsive-headline');
   document.getElementById('responsive-headline').classList.add('side-headline');
   document.getElementById('responsive-menu').classList.add('d-none');
}


// how much items are in basket ###########################

function updateMobileCheckoutBtn() {
   document.getElementById('itemsInCheckout').innerHTML = getCheckoutTotalAmounts();
}

// calculate items for responsive basket ###########################

function getCheckoutTotalAmounts() {
   let amountlength = 0;

   for (let i = 0; i < amounts.length; i++) {
      amountlength += amounts[i];
   }

   if (amountlength > 0) {
      document.getElementById('itemsInCheckout').classList.add('orange');
   } else {
      document.getElementById('itemsInCheckout').classList.remove('orange');
   }

   return amountlength;
}

// open search input ###########################

function openInput() {
   document.getElementById('input').classList.remove('d-none');
   document.getElementById('button').classList.remove('d-none');

}

// close search input ############################

function closeInput() {
   document.getElementById('input').classList.add('d-none');
   document.getElementById('button').classList.add('d-none');
}

// open hidden infofield #########################

function showHiddenInfo() {
   document.getElementById('hidden').classList.remove('d-none');
}

// close hidden infofield ######################

function closeHidden() {
   document.getElementById('hidden').classList.add('d-none');
}