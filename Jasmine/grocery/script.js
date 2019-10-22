
//Use JSON to populate HTML on-the-fly with your items and their images, price and status (use jQuery)
//json.grocery.forEach(function(grocery)
//Use JSON to populate HTML on-the-fly with your items and their images, price and status (use jQuery)

json.grocery.forEach(function(grocery) {
	
	let item = $("<div></div>").addClass("item");
	
	let grocery_img 	= $("<img>").attr("src", grocery.img);
	let grocery_name 	= $("<h1>").text(grocery.name);
	let grocery_price 	= $("<h2>").text("$ " +grocery.price);
	let grocery_basket	= $("<p>").text("Basket: " +grocery.basket);
	
	if(grocery.basket != 0) {
		item.addClass("opacity");
	}
	
	$(".flex").append(item);
	$(item).attr("id", grocery.idgrocery_id);
	
	item.append(grocery_img);
	item.append(grocery_name)
	item.append(grocery_price);
	item.append(grocery_basket);
	
});
		
