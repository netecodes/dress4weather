//app.js
$(document).ready( function() {

	$("#button").click(function() {
		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=APIKEYHERE&tags=london&safe_search=1&per_page=20";
		var src;
		$.getJSON(url + "&format=json&jsoncallback=?", function(data){
    	$.each(data.photos.photo, function(i,item){
    		console.log(item);
        	src = "https://farm"+ item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_m.jpg";
        	$("<img/>").attr("src", src).appendTo("#images");
        if ( i == 3 ) return false;
    		});
		});
	});
});



