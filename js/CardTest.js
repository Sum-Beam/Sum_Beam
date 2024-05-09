const goods__basket = document.querySelector('.goods__basket');
let cartData = getCartData(); // вытаскиваем все данные корзины
      
if(cartData !== null){
  totalItems = '';
  for(var items in cartData){
      totalItems += 


              `<div class="product" style="text-align: center; margin-bottom: 20px;" data-id="${items}">
			        <div style="display: flex;">
				      <div style="text-align: center;">
					    <div style="display: inline-block; margin: 0 auto;">
						  <img src="${cartData[items][4]}" style="width: 200px; height: 200px; object-fit: cover; border-radius: 10px;">
					    </div>
				      </div>
			
				      <div style="text-align: left; margin-left: 50px;">
					    <h2 style="font-size: 24px; margin-bottom: 10px; color: #333; font-family: 'Roboto', sans-serif;">${cartData[items][0]}</h2>
					    <p style="font-size: 16px; color: #666; margin-bottom: 15px;">Цена: <span class="price">${cartData[items][2]}</span>₽</p>
					    <div style="display: flex; align-items: center; margin-bottom: 10px;">
					    </div>
					    <div class="basket__amoynt" style="margin-top: 15px;">
					  	<button style="font-size: 18px; padding: 5px 10px; background-color: #FF6347; color: white; border: none; cursor: pointer; transition: background-color 0.3s; border-radius: 5px;" data-action="minus" >-</button>
					  	<span id="quantity" data-count="${items}">${cartData[items][3]}</span>
					  	<button style="font-size: 18px; padding: 5px 10px; background-color: #4CAF50; color: white; border: none; cursor: pointer; transition: background-color 0.3s; border-radius: 5px;" data-action="plus">+</button>
					    </div>
					    <button class="delete" style="font-size: 18px; padding: 10px 20px; background-color: #4CAF50; color: white; border: none; cursor: pointer; transition: background-color 0.3s; border-radius: 5px; margin-top: 15px;" data-del="${items}">X</button>
				      </div>
			        </div>
		          </div>`;
  }
  goods__basket.innerHTML = totalItems;
}
toggleGoodsStatus(+basket__number.textContent);