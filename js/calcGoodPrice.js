//_____________________________Суммирование цен товаров в корзине_________________________________________
function calcGoodsPrice(){
    let goods__block__basket = document.querySelectorAll('.product');
    let sum__price__number = document.querySelector('.sum__price__number');
    let basket__number = document.querySelector('.basket__number');

    let totalAmount = 0;
    let totalPrice = 0;

    goods__block__basket.forEach(function(item){
        let amountEl = item.querySelector('#quantity');
        let priceEl = item.querySelector('.price');
        let currentPrice = +amountEl.textContent * +priceEl.textContent;
        totalPrice += currentPrice;

        let currentAmount = +amountEl.textContent;
        totalAmount += currentAmount;
    })
    sum__price__number.textContent = totalPrice;
    basket__number.textContent = totalAmount;
    localStorage.setItem('basket__number', JSON.stringify(basket__number.textContent));
}

//_____________________________Суммирование количества товаров в избранном_________________________________________
function calcGoodsPrice2(){
    let goods__block__favorites = document.querySelectorAll('.block__product');
    let favorites__number = document.querySelector('.favorites__number');

    favorites__number.textContent = goods__block__favorites.length;
    localStorage.setItem('favorites__number', JSON.stringify(favorites__number.textContent));
}