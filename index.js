






//jQuery(".ChangeColor").ChangeColor({color:['#000','#fff'], colorEvent: 'mouseover'});





(function($) {
$.fn.ChangeColor = function(options) {

var defaults = {

	color: ["red","blue","gray", "orange", "pink"],
	colorEvent: "click"
   

    };

        var settings = $.extend( {}, defaults, options );
 

  return this.each(function() {

    var el = $(this);


    el.on(settings.colorEvent, function() {

    var random = settings.color[Math.floor(Math.random() * settings.color.length)];

    el.css({"color": random})

    el.css({"cursor": "pointer"})

     });

  });
};


})(jQuery)


$(".ChangeColor").ChangeColor();