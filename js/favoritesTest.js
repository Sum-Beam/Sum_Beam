let goods__block2 = document.querySelectorAll('.block__product');
let favorites__number = document.querySelector('.favorites__number');

let number3 = localStorage.getItem('favorites__number');
    let number4 = JSON.parse(number3);
    favorites__number.textContent = number4;


goods__block2.forEach((el, idx) => {
    const btn = el.childNodes[1].childNodes[3].childNodes[3].childNodes[3].childNodes[3];
    // console.log(el.childNodes[1].childNodes[3].childNodes[3].childNodes[3].childNodes[3]);
    let id = el.dataset.id;
    btn.addEventListener('click', (e) =>{
        let el2 = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode; 
        let src2 = el2.childNodes[1].childNodes[1].childNodes[1].childNodes[0].src;
        console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        // console.log(src2);
        let cartData2 = getCartData2() || {},
        el = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
        id = el.getAttribute('data-id'),
        title = el.childNodes[1].childNodes[3].childNodes[1].childNodes[0].innerText,
        weight = el.childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[3].innerText,
        price = el.childNodes[1].childNodes[3].childNodes[3].childNodes[1].childNodes[5].innerText,
        // catigories = el.childNodes[2].innerText,
        img = el.childNodes[1].childNodes[1].childNodes[1].childNodes[0].src;
        if(cartData2.hasOwnProperty(id)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
          cartData2[id][3] = cartData2[id][3];
        } else { // если товара в корзине еще нет, то добавляем в объект
            cartData2[id] = [title, weight, price, 1, img];
        }
        if(!setCartData2(cartData2)){ // Обновляем данные в LocalStorage
            let sum = 0;
            for(let i in cartData2){
                console.log(i)
                sum = sum + cartData2[i][3];
                favorites__number.textContent = sum;
                localStorage.setItem('favorites__number', JSON.stringify(favorites__number.textContent));
            }
        }
    });
});

function getCartData2(){
    console.log(JSON.parse(localStorage.getItem('cart2')));
    return JSON.parse(localStorage.getItem('cart2'));
    
  }
  
//   Записываем данные в LocalStorage
  function setCartData2(o){
    localStorage.setItem('cart2', JSON.stringify(o));
    return false;
  }