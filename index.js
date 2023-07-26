const click = document.querySelector('.click');
const saveBtn = document.querySelector('.save-btn');
const list = document.querySelector('.list');
const priceList = document.querySelector('.priceList');
const totalPrice = document.querySelector('.totalPrice');
const menuField = document.querySelector('.menuField')
const priceField = document.querySelector('.price')

click.addEventListener("click",function(){
    // create new li tags programmatically
    const newLi = document.createElement("LI");
    const priceLi = document.createElement("LI");

    //get the vlues of the input
     const liContent = document.createTextNode(menuField.value);
     const priceContent = document.createTextNode(priceField.value);
    //add the input inside  the new li
     newLi.appendChild(liContent);
     priceLi.appendChild(priceContent);
    //Attach the li to the menu list
    list.appendChild(newLi);
    priceList.appendChild(priceLi);
    menuField.value = '';
    priceField.value = '';
});

saveBtn.addEventListener('click', function() {
    const prices = document.querySelectorAll('.priceList li');
    let sum = 0;
    for(let i = 0; i < prices.length; i++) {
        sum += Number(prices[i].textContent.slice(1));
    }
    totalPrice.value = `N${sum}`;
    menuField.value = '';
    priceField.value = '';
});
