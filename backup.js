document.getElementById('cart').innerHTML = ``;


if (names.length == 0) {
   document.getElementById('cart').innerHTML += /*html*/ `
      <div class="order-box">
         <img src="img/shopping-bag.png">
            <h3>Fülle Deinen Warenkorb</h3>
            <span>Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle Dein Essen.</span>
      </div>
   `;

} else {
   for (let i = 0; i < names.length; i++) {


      document.getElementById('cart').innerHTML +=  /*html*/ `

   <div class="vis-basket">
      <p>${amounts[i]} x ${names[i]}</p><p>${prices[i].toFixed(2)} €</p>
   
      <div class="basketbutton">
         <button class="buttons" onclick="decrease(${i})">-</button>
         <button class="buttons" onclick="increase(${i})">+</button>
      </div>
   </div>         
`;
   }
   
}

subTotal()