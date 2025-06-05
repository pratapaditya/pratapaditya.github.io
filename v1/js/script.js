/*document.addEventListener('DOMContentLoaded', () => {
	const widthW = document.documentElement.clientWidth;
	window.addEventListener('wheel', e => {
		if(e.deltaY > 0){
			document.body.scrollLeft += widthW;
		}
		else{
			document.body.scrollLeft -= widthW;
		}
	});
	window.addEventListener('keypress', e => {
		if(e.key == 'ArrowLeft'){
			document.body.scrollLeft -= widthW;
		}
		if(e.key == 'ArrowRight'){
			document.body.scrollLeft += widthW;
		}
	});
	
});
*/

function resize()
            {
                var heights = window.innerHeight;
                document.getElementById("body1").style.height = heights-30 + "px";
				  document.getElementById("menuwrapper").style.height = heights-80 + "px";
				
            }
            resize();
            window.onresize = function() {
                resize();
            };


$(document).ready(function() {
	
	 document.getElementById("scrollPoint").style.width = (window.innerWidth/10) + "px";
  $('#scrollPoint').on('scroll', function () {
    $('#body1').scrollLeft($(this).scrollLeft()*15);
  });
});


//**************Pratap

	$(document).ready(function () {
$('#des').LineProgressbar({
percentage:90,
radius: '3px',
height: '10px',
});
$('#brain').LineProgressbar({
percentage:80,
radius: '3px',
height: '10px',
fillBackgroundColor: '#e88239'
});
$('#team').LineProgressbar({
percentage:70,
radius: '3px',
height: '10px',
fillBackgroundColor: '#E0C341'
});
$('#pro').LineProgressbar({
percentage:70,
radius: '3px',
height: '10px',
fillBackgroundColor: '#4caf50'
});





$('#L1').LineProgressbar({
percentage:60,
radius: '3px',
height: '10px'
});

$('#L2').LineProgressbar({
percentage:50,
radius: '3px',
height: '10px'
});
$('#L3').LineProgressbar({
percentage:60,
radius: '3px',
height: '10px'
});
$('#L4').LineProgressbar({
percentage:50,
radius: '3px',
height: '10px'
});
$('#L5').LineProgressbar({
percentage:50,
radius: '3px',
height: '10px'
});
$('#L6').LineProgressbar({
percentage:70,
radius: '3px',
height: '10px'
});
$('#L7').LineProgressbar({
percentage:50,
radius: '3px',
height: '10px'
});
$('#L8').LineProgressbar({
percentage:40,
radius: '3px',
height: '10px'
});




$("#circle1,#circle2,#circle3,#circle4").percircle();



	$('.menulinks').on('click', function (e) {
  //e.preventDefault();
  $('.menulinks .active').removeClass('active');
  $(e.target).parent('li').addClass('active');
 
});
});
	

	var ratings = document.getElementsByClassName('rating');

            for (var i = 0; i < ratings.length; i++) {
                var r = new SimpleStarRating(ratings[i]);

                ratings[i].addEventListener('rate', function(e) {
                    console.log('Rating: ' + e.detail);
                });
            }
			
			
			
//Gallery filter
			
			$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


//Timer
setInterval(function() {

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Compose the string for display
  var currentTimeString = hours + ":" + minutes + ":" + seconds;
  $(".clock").html(currentTimeString);

}, 1000);

var dateObj = new Date();
    var month = dateObj.getUTCMonth()+1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate =  day + "/" +month + "/" + year;

    $(".datetxt").html(newdate);
	
	//console.log($('#body1').width());
	// $('#body1').scroll(function(){
    // var $this = $(this),
        // scrollPercentage = 100 * $this.scrollLeft() / ($this.width()-$('.slide').width());
			// console.log(scrollPercentage.toFixed(2)+'%');
    // //$('#log').html(scrollPercentage.toFixed(2)+'%');
// });

	$("#body1").scroll(function(){
  $('.slide').each(function(){
    if(isScrolledIntoView($(this))){
    $("#menulinksDots li").removeClass('active');
	  $("#dot_"+$(this).attr('id')).addClass("active");
  
    }
   
  });
});

function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $("#body1");

    var docViewLeft = $window.scrollLeft();
    var docViewRight = docViewLeft + $window.width();

    var elemLeft = ($elem.offset().left==0?true:false);
    var elemRight = elemLeft + $elem.width();

   // return ((elemRight <= docViewRight) && (elemLeft >= docViewLeft));
   return elemLeft;
}


////menubar
	// $(document).ready(function () {
// $("#menuwrapper li").click(function(){
	
	  // $("#menulinksDots li").removeClass('active');
	 // console.log(("#dot_"+($(this).attr("id").split("_")[1])));
	 // $("#dot_"+($(this).attr("id").split("_")[1])).attr('class',"active");
	// return false;
	
// });


// $("#menulinksDots li").click(function(){
	 // $("#menuwrapper li").removeClass('active');
	 // console.log(("#menu_"+($(this).attr("id").split("_")[1])));
	 // $("#menu_"+($(this).attr("id").split("_")[1])).addClass("active");
	 // return false;
// });	
// });

$(document).ready(function() {

		//dom elements
		var $homeLinks = $("a[href^='#'].menuLink"),
		$body = $("html, body");

		//settings	
		var settings = {
			navOffset : 55,
			scrollTime : 1000
		};

		//events
		$homeLinks.on("click", clickOnHomeLinks);

		//function
		function clickOnHomeLinks(e) {
			var $this = $(this),
			target = $this.attr("href");
			
			if ($(target).offset().left > 0) 
			($('#body1').scrollLeft($(target).offset().left));
			else ($('#body1').scrollLeft($(target).offset().right));
		
			
		};

	});
	

$(window).on('load', function(){ // makes sure the whole site is loaded
$('#status').fadeOut(); // will first fade out the loading animation
$('#preloader').delay(50).fadeOut(100); // will fade out the white DIV that covers the website.
$('body').delay(50).css({'overflow':'visible'});
})

//Gallery
$(document).ready(function() {
 // initialize manually with a list of links
 $('.image-set a.gallery').click(function (e) {
    
  e.preventDefault();

  var items = $('.image-set a.gallery').get().map(function (el) {
    return {
      src: $(el).attr('href'),
      title: $(el).attr('data-title')
    }
  });

  var options = {
    index: $(this).index(),
    resizable: false,
    initMaximized: true,
    headerToolbar: ['close'],
  };

  new PhotoViewer(items, options);

});




		   });

       $(document).ready(function() {
       //Model PDF
       // We have set the type to module so that we make sure that the script is executed after the other modules have been loaded
    var { pdfjsLib } = globalThis;
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.mjs';
   
	 $("#cheers_pdfView_1,#cheers_pdfView_2,#cheers_pdfView_3,#cheers_pdfView_4,#secure_pdfView_1,#secure_pdfView_2,#sns_pdfView_1").animatedModal();
    });
    function loadPDF(url){
      let pdfViewer = new PDFjsViewer($('.pdfjs-viewer'));
        pdfViewer.loadDocument(url).then(function() {
         
     pdfViewer.setZoom("fit");
      });
      window.pdfViewer = pdfViewer;
      window.printDoc = function() {
          pdfViewer.pdf.getData().then(function(data) {
              let b64Pdf=btoa(String.fromCharCode.apply(null, data));
              printJS({printable: b64Pdf, type: 'pdf', base64: true});
         });
      }
    }