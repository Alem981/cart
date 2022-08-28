let allTotal =0; 
function addToCart(element){
    //selektovanje svih podataka
    let mainEl = element.closest('.single-item');
    console.log(mainEl)
    let input = document.querySelector('label');
   // console.log(input.innerText);
    let price = mainEl.querySelector('.price').innerText;
 //  console.log(price);
    let name = mainEl.querySelector('h3').innerText;
   // console.log(name);
    //let quantity = mainEl.querySelector('input').value;
    // console.log(quantity);
   // console.log(name);
   let quantity = mainEl.querySelector('input').value;
 
    //dodavanje u cart
    
    let cartItems = document.querySelector('.cart-items');
   /*  let total = price *quantity; */
    //console.log( price);
    //brisanje dolara i prebacanje u int
    price = price.substring(1); //brisanje $
    price = parseInt(price) ;// u int
 
    let total = price *quantity;
     
     //console.log(price);
     //console.log(total);
     
     // u ovom slucaju ce brisati prethodno 
    //to otklonimo tako sto stavimo + u naredni +=
    
    //cartItems.innerHTML +='Dodato' + name;
   
    //zabrana da dodaje 0 i manje

 //zabrana da dodaje 0 i manje
 if(parseInt(quantity)>0){
    // console.log('vece je')
    //span smo dodali u price da mozemo kasnije selektovati cijenu- za oduzimanje
     cartItems.innerHTML +=
     `
     <div class="cart-single-item">
     <h3> ${name}</h3>
     
     <p>${price} x ${quantity} = $ <span>${total}€</span>  </p>  
     
     <button class="remove-item" onclick="removeFromCart()" >Cancel</button> </div>
     `;
     
  allTotal +=total; 
     element.innerText = 'Added';
     element.setAttribute('disabled','');
     //Dodavanje total
     document.querySelector('.total').innerText = `
     Total:€${allTotal}
      `
 
 }
 else{
     alert ('odaberi kolicinu');
 }
 
 }

 
function removeFromCart(element){
    let mainEl = document.querySelector('.cart-single-item');    
   // mainEl.remove();
    let price =  mainEl.querySelector('p span').innerText;
    let name = mainEl.querySelector('h3').innerText;
    
    let vegetables = document.querySelectorAll('.single-item');
    price = parseInt (price);
    allTotal -=price;
    document.querySelector('.total').innerText = `
    Total:€${allTotal}`;
    mainEl.remove();
    
    //da se dugme @dodaj vrati da bude klikabilno

vegetables.forEach(function(vege){
    let itemName =vege.querySelector('.single-item h3').innerText;
    //console.log(itemName);
 if(itemName === name){
   vege.querySelector('.actions input').value = 0;
    vege.querySelector('.actions button').removeAttribute('disabled');
    console.log(name);
    vege.querySelector('.actions button').innerText = "Add"

 }  
});
}
 










 
 