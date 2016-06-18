//app.js
$(document).ready( function() {
	
	$("#button").click(function() {
		var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=YOURAPIHERE&tags=";
		var tag = $('input').val() || "berlin";
		var src;
		$.getJSON(url + tag + "&format=json&jsoncallback=?", function(data){
    	$.each(data.photos.photo, function(i,item){
        	src = "https://farm"+ item.farm + ".staticflickr.com/" + item.server + "/" + item.id + "_" + item.secret + ".jpg";
        	$("#img-" + i).find("img").attr("src", src);
       	 	if ( i == 9 ) return false;
    		});
		});
	});
});



