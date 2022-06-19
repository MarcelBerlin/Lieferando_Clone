function myMenu(i) {
   return /*html*/ `
         <div class="blocks">
            <div class="dish">
               <h3>${dishnames[i]}</h3>
               <i>${dishdescription[i]}</i>
               <p class="price">${dishprices[i].toFixed(2)} €</p>
            </div>
            <div class="addcross" onclick="addToBasket(${i})"><img src="img/plus.png"></div>
         </div>

   `;
}



function emptyBasket() {
   return /*html*/ `
   <div class="order-box">
            <img src="img/shopping-bag.png">
               <h3>Fülle Deinen Warenkorb</h3>
               <span>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle Dein Essen.</span>
         </div>   
   `;
}



function fullBasket(i, amount, name, price) {
   return /*html*/ `
   <div class="fullbasket">
      <div class="vis-basket">
         <div class="basket-name">
            <div><b>${amount}</b> x <b>${name}</b></div>
            <div>${price.toFixed(2)} €</div>
         </div>
         <div class="basketbutton">
            <button class="buttons" onclick="decrease(${i})">-</button>
            <button class="buttons" onclick="increase(${i})">+</button>
         </div>
      </div>  
   </div>          
    
`;
}



function priceCalc(sum, deliverycosts, basketsum, restsum) {
   return /*html*/ `
<div id="min-order">
      <div class="min-order">
         <span class="min-order-text">Benötigter Betrag, um den Mindestbestellwert zu erreichen</span>
         <span class="min-order-sum">${restsum.toFixed(2)} €</span>
      </div>
      <div>
      <span class="min-order-text">Leider kannst Du noch nicht bestellen. Adria Paradise liefert erst ab einem Mindestbestellwert von 15,00 € (exkl. Lieferkosten)</span>
      </div>
   </div>


   <div class="ordercosts">
      <div class="costs"><div>Zwischensumme</div> <div>${sum.toFixed(2)} €</div></div>
      <div class="costs"><div>Lieferkosten</div> <div>${deliverycosts.toFixed(2)} €</div></div>
      <div class="final-costs"><div><b>Gesamtbetrag</b></div><div><b>${basketsum.toFixed(2)} €</b></div></div>
   </div>
   
   <div class="orderbutton">
      <div id="paybutton" class="paybutton" onclick="sendOrder()">Bezahlen (${basketsum.toFixed(2)})</div>
   </div>
   `;
}

