const goods__favorites = document.querySelector('.goods__favorites');
let cartData2 = getCartData2(); // вытаскиваем все данные корзины
      
if(cartData2 !== null){
  totalItems = '';
  for(var items in cartData2){
      totalItems += 


              ` <div class="col-lg-3 col-sm-6 mb-3 block__product" data-id="${items}">
			    	<div class="product-card">
			    		<div class="product-thumb">
			    			<a href="#"  id="services-section4"><img src="${cartData2[items][4]}" alt="" style="font-size: 50px;"></a>
			    		</div>
			    		<div class="product-details">
			    			<h4><a href="#" style="color: #000;">${cartData2[items][0]}</a></h4>
			    			<div class="product-bottom-details d-flex justify-content-between">
			    				<div class="product-price">
			    					<div class="card-footer text-muted">
			    					Есть в наличии
			    				  </div>
			    				  <span class="weight"></span>
			    				  <span class="price">${cartData2[items][2]}</span>р
			    				</div>
			    				<div class="product-links">
			    					<button href="#" class="add-to-cart-btn" style="color: #000;"><i class="fas fa-shopping-cart" alt="f"></i></button>
			    					<button href="#" class="add-to-favorites-btn" data-del="${items}" style="color: rgb(245, 6, 6);"><i class="far fa-heart"></i></button>
			    				</div>
			    			</div>
			    		</div>	
			    	</div>
			    </div>`;
  }
  goods__favorites.innerHTML = totalItems;
}
toggleGoodsStatus2(+favorites__number.textContent);