//_______________________________Функция отслежиния есть ли товар в корзине___________________________________________________________________
function toggleGoodsStatus(){
    let making__order = document.querySelector('.making__order');
    let goods__basket = document.querySelector('.container.goods__basket');
    let basket__empty__text = document.querySelector('.basket__empty__text');
    
    if(goods__basket.children.length > 0){
        // console.log(goods__basket.children);
        goods__basket.style.height = "auto";
        basket__empty__text.classList.add('dispNone');
        making__order.classList.remove('dispNone');
    }else{
        goods__basket.style.height = "10px";
        basket__empty__text.classList.remove('dispNone');
        making__order.classList.add('dispNone');
    }
    calcGoodsPrice()
}

//_______________________________Функция отслежиния есть ли товар в избранном___________________________________________________________________
function toggleGoodsStatus2(){
    // let making__order = document.querySelector('.making__order');
    let goods__favorites = document.querySelector('.container.goods__favorites');
    let favorites__empty__text = document.querySelector('.favorites__empty__text');
    
    if(goods__favorites.children.length > 0){
        // console.log(goods__basket.children);
        goods__favorites.style.height = "auto";
        favorites__empty__text.classList.add('dispNone');
        // making__order.classList.remove('dispNone');
    }else{
        goods__favorites.style.height = "10px";
        favorites__empty__text.classList.remove('dispNone');
        // making__order.classList.add('dispNone');
    }
    calcGoodsPrice2()
}