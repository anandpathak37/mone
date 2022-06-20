// JavaScript Document

$(document).ready(function(){
 
  var url      = window.location.href;     
  //alert(url);
  if(url=='http://lbnjodhpur.org/shriffle/contact.html'){
    $(".sel_menu_contact").addClass("active");
  }else if(url=='http://lbnjodhpur.org/shriffle/index.html'){
    $(".sel_menu_home").addClass("active");
  }
  else if(url=='http://lbnjodhpur.org/shriffle/about.html'){
    $(".sel_menu_about").addClass("active");
  }
  else if(url=='http://lbnjodhpur.org/shriffle/partner.html'){
    $(".sel_menu_partner").addClass("active");
  }
  else if(url=='http://lbnjodhpur.org/shriffle/career.html'){
    $(".sel_menu_career").addClass("active");
  }
  else if(url=='http://lbnjodhpur.org/shriffle/portfolio.html'){
    $(".sel_menu_portfolio").addClass("active");
  }
  else if(url=='http://lbnjodhpur.org/shriffle/contact.html'){
    $(".sel_menu_contact").addClass("active");
  }

  $(".checkcolor").click(function(){
    var code_data = $(this).data('val');
   // alert(code_data);
    sessionStorage.setItem("color_scode", code_data);
    var selected_color = sessionStorage.getItem("color_scode");
	
	
    //alert(selected_color);
    $(".f-style.active label").css("background-color", selected_color);
    $(".f-style.active input").css("border-color", selected_color);
    $(".f-style.active textarea").css("border-color", selected_color);
    if(selected_color=='#4e81ee'){
  //     $("header .custom_ico img").css("background-position", "none");
  $(".bg_rgbsitec").css("background-color", "rgba(78,129,238,.8)");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "0px 0px");
	   $("header.stickedhead .logo.custom_ico5").css("background-position", "0px 0px");
	    $("header.stickedhead .logo.custom_ico6").css("background-position", "0px 0px");
		$("header .custom_ico6").css("background-position", "0px 0px");
	  $("header .custom_ico").css("background-position", "0px 0px");
	  $("header .custom_ico5").css("background-position", "0px 0px");
	   $("header .custom_ico2").css("background-position", "0px 0px");
	   $(".custom_ico3").css("background-position", "0px 0px");
    }else if(selected_color=='#f39c12'){
  //       $("header .custom_ico img").css("display", "none");
  $(".bg_rgbsitec").css("background-color", "rgba(243,156,18,.8)");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-120px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-120px 0px");
	   $("header.stickedhead .logo.custom_ico6").css("background-position", "-100px 0px");
		$("header .custom_ico6").css("background-position", "-100px 0px");
	  $("header .custom_ico").css("background-position", "-206px 0px");
	   $("header .custom_ico5").css("background-position", "-160px 0px");
	   $("header .custom_ico2").css("background-position", "-24px 0px");   
	   $(".custom_ico3").css("background-position", "-120px 0px"); 
        
    }else if(selected_color=='#8e44ad'){
  //      $("header .custom_ico img").css("display", "none");
  $(".bg_rgbsitec").css("background-color", "rgba(142,68,173,.8)");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-240px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-240px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-200px 0px");
		$("header .custom_ico6").css("background-position", "-200px 0px");
	  $("header .custom_ico").css("background-position", "-412px 0px");
	   $("header .custom_ico5").css("background-position", "-320px 0px");
	   $("header .custom_ico2").css("background-position", "-48px 0px");  
	   $(".custom_ico3").css("background-position", "-240px 0px");
    }else if(selected_color=='#bf1e2e'){
  //     $("header .custom_ico img").css("display", "none");
  $(".bg_rgbsitec").css("background-color", "rgba(191,30,46,.8)");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-360px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-360px 0px"); 
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-300px 0px");
		$("header .custom_ico6").css("background-position", "-300px 0px"); 
	  $("header .custom_ico").css("background-position", "-618px 0px");
	   $("header .custom_ico5").css("background-position", "-480px 0px");
	   $("header .custom_ico2").css("background-position", "-72px 0px"); 
	   $(".custom_ico3").css("background-position", "-360px 0px"); 
    }else if(selected_color=='#1abc9c'){
  //      $("header .custom_ico img").css("display", "none");
  $(".bg_rgbsitec").css("background-color", "rgba(26,188,156,.8)");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-480px 0px"); 
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-480px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-400px 0px");
		$("header .custom_ico6").css("background-position", "-400px 0px");
	  $("header .custom_ico").css("background-position", "-824px 0px");
	   $("header .custom_ico5").css("background-position", "-640px 0px");
	   $("header .custom_ico2").css("background-position", "-96px 0px"); 
	   $(".custom_ico3").css("background-position", "-480px 0px");
        
    }else if(selected_color=='#f97794'){
  //    $("header .custom_ico img").css("display", "none");
  $(".bg_rgbsitec").css("background-color", "rgba(249,119,148,.8)");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-600px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-600px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-500px 0px");
		$("header .custom_ico6").css("background-position", "-500px 0px");
	  $("header .custom_ico").css("background-position", "-1030px 0px"); 
	   $("header .custom_ico5").css("background-position", "-800px 0px");
	   $("header .custom_ico2").css("background-position", "-120px 0px");  
	   $(".custom_ico3").css("background-position", "-600px 0px"); 
    }

    
    	 
    $(".text_sitec").css("color", selected_color);
	$("header .head_ul2 li.active>a").css("color", selected_color);
	
	$(".bg_sitec").css("background-color", selected_color);
	$(".a_outlinebtn").css("color", selected_color);
	$(".a_outlinebtn").css("border-color", selected_color);
	$(".in_border").css("border-color", selected_color);
	$(".a_btn").css("background-color", selected_color);
	$(".a_btn").css("border-color", selected_color);

	$("header .head_ul2 li a").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", "#3a3a3c");
		});
		
		$("header .head_ul2 li.active>a").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", selected_color);
		});
		
		
		
		$(".a_outlinebtn").hover(function(){
		 $(this).css("background-color", selected_color);}, function(){
    $(this).css("background-color", "#fff");
		});
		
		
		$("header .head_ul2 li.drop_li ul.drop_ul li a").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", "#fff");
		});
			$(".a_btn").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", "#fff");
		});
		
			$("header .head_ul2 li a.a_btn").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", "#fff");
		});
		
		$("header .head_ul2 li.active>a").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", selected_color);
		});
	
    
    
  });


  //contactform script start
$( "#exampleInputtext" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});

$( "#exampleInputemail" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});

$( "#exampleInputphone" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});


$( "#exampleInputsubject" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});

$( "#exampleInputcity" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});


$( "#exampleInputcountry" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});


$( "#exampleInputorganization" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});

$( "#exampleInputreason" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});


$( "#exampleInputmsg" ).click(function() {
  var selected_color = sessionStorage.getItem("color_scode");
  //alert(selected_color);
  $(".f-style.active label").css("background-color", selected_color);
$(".f-style.active input").css("border-color", selected_color);
$(".f-style.active textarea").css("border-color", selected_color);
});


// Contact form script end

 var selected_data_color = sessionStorage.getItem("color_scode");
 //alert (selected_data_color);
   if(selected_data_color){
	   var selected_color = selected_data_color;
   }else{
	    var selected_color ="#4e81ee";
   }
  // alert(selected_color);
    	 if(selected_color=='#4e81ee'){
//     $("header .custom_ico img").css("display", "none");
$(".bg_rgbsitec").css("background-color", "rgba(78,129,238,.8)");
	  $("header .custom_ico").css("background-position", "0px 0px");
	   $("header .custom_ico5").css("background-position", "0px 0px");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "0px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "0px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "0px 0px");
		$("header .custom_ico6").css("background-position", "0px 0px");
	   $("header .custom_ico2").css("background-position", "0px 0px");
	   $(".custom_ico3").css("background-position", "0px 0px");
    }else if(selected_color=='#f39c12'){
//       $("header .custom_ico img").css("display", "none");
$(".bg_rgbsitec").css("background-color", "rgba(243,156,18,.8)");
	  $("header .custom_ico").css("background-position", "-206px 0px");
	   $("header .custom_ico5").css("background-position", "-160px 0px");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-120px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-120px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-100px 0px");
		$("header .custom_ico6").css("background-position", "-100px 0px");
	   $("header .custom_ico2").css("background-position", "-24px 0px");  
	   $(".custom_ico3").css("background-position", "-120px 0px");   
        
    }else if(selected_color=='#8e44ad'){
//      $("header .custom_ico img").css("display", "none");
$(".bg_rgbsitec").css("background-color", "rgba(142,68,173,.8)");
	  $("header .custom_ico").css("background-position", "-412px 0px");
	   $("header .custom_ico5").css("background-position", "-320px 0px");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-240px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-240px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-200px 0px");
		$("header .custom_ico6").css("background-position", "-200px 0px");
	   $("header .custom_ico2").css("background-position", "-48px 0px");  
	   $(".custom_ico3").css("background-position", "-240px 0px");
    }else if(selected_color=='#bf1e2e'){
//     $("header .custom_ico img").css("display", "none");
$(".bg_rgbsitec").css("background-color", "rgba(191,30,46,.8)");
	  $("header .custom_ico").css("background-position", "-618px 0px");
	   $("header .custom_ico5").css("background-position", "-480px 0px"); 
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-360px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-360px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-300px 0px");
		$("header .custom_ico6").css("background-position", "-300px 0px");
	   $("header .custom_ico2").css("background-position", "-72px 0px");  
	   $(".custom_ico3").css("background-position", "-360px 0px"); 
    }else if(selected_color=='#1abc9c'){
//      $("header .custom_ico img").css("display", "none");
$(".bg_rgbsitec").css("background-color", "rgba(26,188,156,.8)");
	  $("header .custom_ico").css("background-position", "-824px 0px");
	   $("header .custom_ico5").css("background-position", "-640px 0px"); 
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-480px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-480px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-400px 0px");
		$("header .custom_ico6").css("background-position", "-400px 0px");
	   $("header .custom_ico2").css("background-position", "-96px 0px");
	   $(".custom_ico3").css("background-position", "-480px 0px"); 
        
    }else if(selected_color=='#f97794'){
//    $("header .custom_ico img").css("display", "none");
$(".bg_rgbsitec").css("background-color", "rgba(249,119,148,.8)");
	  $("header .custom_ico").css("background-position", "-1030px 0px");
	   $("header .custom_ico5").css("background-position", "-800px 0px");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-600px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-600px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-500px 0px");
		$("header .custom_ico6").css("background-position", "-500px 0px");
	   $("header .custom_ico2").css("background-position", "-120px 0px"); 
	   $(".custom_ico3").css("background-position", "-600px 0px");   
    }
   
	  
    $(".text_sitec").css("color", selected_color);
	$(".a_outlinebtn").css("color", selected_color);
	$(".a_outlinebtn").css("border-color", selected_color);
	$("header .head_ul2 li.active>a").css("color", selected_color);
	
	$(".bg_sitec").css("background-color", selected_color);
	$(".in_border").css("border-color", selected_color);
	$(".a_btn").css("background-color", selected_color);
	$(".a_btn").css("border-color", selected_color);
		
	$("header .head_ul2 li a").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", "#3a3a3c");
		});
		
		$("header .head_ul2 li.active>a").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", selected_color);
		});
		
	$(".a_outlinebtn").hover(function(){
		 $(this).css("background-color", selected_color);}, function(){
    $(this).css("background-color", "#fff");
		});
		
		
		$("header .head_ul2 li.drop_li ul.drop_ul li a").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", "#fff");
		});
		
		
			$(".a_btn").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", "#fff");
		});
		
			$("header .head_ul2 li a.a_btn").hover(function(){
		 $(this).css("color", selected_color);}, function(){
    $(this).css("color", "#fff");
		});
    
//		$("header .head_ul2 li.active a").hover(function(){
//		 $(this).css("color", selected_color);}, function(){
//    $(this).css("color", selected_color);
//		});



   $(window).scroll(function() {

    if ($(this).scrollTop()>90)
     {
        var selected_color = sessionStorage.getItem("color_scode");
   if(selected_color=='#4e81ee'){
//     $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "0px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "0px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "0px 0px");
		$("header .custom_ico6").css("background-position", "0px 0px");
    }else if(selected_color=='#f39c12'){
//       $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-120px 0px"); 
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-120px 0px"); 
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-100px 0px");
		$("header .custom_ico6").css("background-position", "-100px 0px");   
        
    }else if(selected_color=='#8e44ad'){
//      $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-240px 0px");  
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-240px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-200px 0px");
		$("header .custom_ico6").css("background-position", "-200px 0px");
    }else if(selected_color=='#bf1e2e'){
//     $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-360px 0px");
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-360px 0px");   
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-300px 0px");
		$("header .custom_ico6").css("background-position", "-300px 0px"); 
    }else if(selected_color=='#1abc9c'){
//      $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-480px 0px"); 
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-480px 0px");
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-400px 0px");
		$("header .custom_ico6").css("background-position", "-400px 0px"); 
        
    }else if(selected_color=='#f97794'){
//    $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-600px 0px"); 
	  $("header.stickedhead .logo.custom_ico5").css("background-position", "-600px 0px"); 
	  $("header.stickedhead .logo.custom_ico6").css("background-position", "-500px 0px");
		$("header .custom_ico6").css("background-position", "-500px 0px");  
   
	 }
     }
    else
     {
     var selected_color = sessionStorage.getItem("color_scode");
	 if(selected_color=='#4e81ee'){
//     $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "0px 0px");
	   $("header .custom_ico5").css("background-position", "0px 0px");
	   $("header.stickedhead .logo.custom_ico6").css("background-position", "0px 0px");
		$("header .custom_ico6").css("background-position", "0px 0px");
    }else if(selected_color=='#f39c12'){
//       $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-206px 0px");  
	   $("header .custom_ico5").css("background-position", "-160px 0px");   
	   $("header.stickedhead .logo.custom_ico6").css("background-position", "-100px 0px");
		$("header .custom_ico6").css("background-position", "-100px 0px");
        
    }else if(selected_color=='#8e44ad'){
//      $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-412px 0px");
	   $("header .custom_ico5").css("background-position", "-320px 0px");
	   $("header.stickedhead .logo.custom_ico6").css("background-position", "-200px 0px");
		$("header .custom_ico6").css("background-position", "-200px 0px");  
    }else if(selected_color=='#bf1e2e'){
//     $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-618px 0px");
	   $("header .custom_ico5").css("background-position", "-480px 0px"); 
	   $("header.stickedhead .logo.custom_ico6").css("background-position", "-300px 0px");
		$("header .custom_ico6").css("background-position", "-300px 0px");   
    }else if(selected_color=='#1abc9c'){
//      $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-824px 0px");  
	   $("header .custom_ico5").css("background-position", "-640px 0px");
	   $("header.stickedhead .logo.custom_ico6").css("background-position", "-400px 0px");
		$("header .custom_ico6").css("background-position", "-400px 0px");
        
    }else if(selected_color=='#f97794'){
//    $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-1030px 0px");  
	   $("header .custom_ico5").css("background-position", "-800px 0px"); 
	   $("header.stickedhead .logo.custom_ico6").css("background-position", "-500px 0px");
		$("header .custom_ico6").css("background-position", "-500px 0px"); 
    }
     }
 });
     

	
	   $(window).scroll(function() {

    if ($(this).scrollTop()>90)
     {
        $(".checkcolor").click(function(){
    var code_data = $(this).data('val');
   // alert(code_data);
    sessionStorage.setItem("color_scode", code_data);
    var selected_color = sessionStorage.getItem("color_scode");
    //alert(selected_color);
    
    if(selected_color=='#4e81ee'){
//     $("header .custom_ico img").css("background-position", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "0px 0px");
    }else if(selected_color=='#f39c12'){
//       $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-120px 0px");    
        
    }else if(selected_color=='#8e44ad'){
//      $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-240px 0px");  
    }else if(selected_color=='#bf1e2e'){
//     $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-360px 0px");    
    }else if(selected_color=='#1abc9c'){
//      $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-480px 0px");  
        
    }else if(selected_color=='#f97794'){
//    $("header .custom_ico img").css("display", "none");
	  $("header.stickedhead .logo.custom_ico").css("background-position", "-600px 0px");    
    }
	});
	
     }
    else
     {
		      $(".checkcolor").click(function(){
    var code_data = $(this).data('val');
   // alert(code_data);
    sessionStorage.setItem("color_scode", code_data);
    var selected_color = sessionStorage.getItem("color_scode");
      if(selected_color=='#4e81ee'){
//     $("header .custom_ico img").css("background-position", "none");
	  $("header .custom_ico").css("background-position", "0px 0px");
    }else if(selected_color=='#f39c12'){
//       $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-206px 0px");    
        
    }else if(selected_color=='#8e44ad'){
//      $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-412px 0px");  
    }else if(selected_color=='#bf1e2e'){
//     $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-618px 0px");    
    }else if(selected_color=='#1abc9c'){
//      $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-824px 0px");  
        
    }else if(selected_color=='#f97794'){
//    $("header .custom_ico img").css("display", "none");
	  $("header .custom_ico").css("background-position", "-1030px 0px");    
    }
	});
     }
 });
  

  if($( window ).width()<=1200){

$('header .logo.custom_ico').removeClass('custom_ico');
$('header .logo').addClass('custom_ico5');
 }
 
   if($( window ).width()<=480){

$('header .logo.custom_ico5').removeClass('custom_ico5');
$('header .logo').addClass('custom_ico6');
 }
 


$('.slide_owl').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	navText:[],
	dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
			autoplay:true,
			dots:true
        },
        600:{
            items:1,
            nav:false,
			autoplay:true,
			dots:true
        },
        1000:{
            items:1,
            nav:false,
			autoplay:true,
			dots:true
           
        },
		
		 1200:{
            items:1,
            nav:false,
            loop:true,
			autoplay:true,
			dots:true
        }
    }
})




$('.testi_owl').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	navText:[],
	dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
			dots:true
        },
        600:{
            items:1,
            nav:false,
			dots:true
        },
        992:{
            items:1,
            nav:true,
            loop:true
        }
    }
})




$('.app_owl').owlCarousel({
    loop:true,
  navText:[],
    responsiveClass:true,
	center:true,
	dots:false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        992:{
            items:2,
            nav:true
        },
		   1000:{
            items:1.5,
            nav:true
        },
        1500:{
            items:1.7,
            nav:true,
            loop:true
        }
    }
})




$('.app_owl2').owlCarousel({
    loop:true,
  navText:[],
    responsiveClass:true,
	
	dots:false,
    responsive:{
        0:{
            items:1,
            nav:false,
			dots:true
        },
		  576:{
            items:2,
            nav:false,
			dots:true
        },
	
	    767:{
            items:3,
			center:true,
            nav:true
        },
        992:{
            items:2,
            nav:true
        },
		   1000:{
            items:2,
            nav:true
        },
        1500:{
            items:2,
            nav:true,
            loop:true
        }
    }
})









var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();




$('input').focus(function(){
  $(this).parents('.frm_inpuf').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.frm_inpuf').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
}) 

$('textarea').focus(function(){
  $(this).parents('.frm_inpuf').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.frm_inpuf').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
}) 

$('select').focus(function(){
  $(this).parents('.frm_inpuf').addClass('focused');
});

$('input').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents('.frm_inpuf').removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  


  $(".color_palate_triger").click(function(){
    $(".color_palet_fix").toggleClass("open");
  });



var main = function() {
 
 /* Push the body and the nav over by 285px over */
  
$('.icon-menu').click(function() {
  
  $('.menu').animate({
     
 left: "0px"
   
 }, 200);

    
$('body').animate({
      
left: "285px"
  
  }, 200);
 
 });

  
/* Then push them back */
  
$('.icon-close').click(function() {
   
 $('.menu').animate({
    
  left: "-285px"
   
 }, 200);

    
$('body').animate({
    
  left: "0px"
  
  }, 200);
  
});

};



$(document).ready(main);


  $(window).scroll(function() {

    if ($(this).scrollTop()>90)
     {
        $('header').addClass('stickedhead');
     }
    else
     {
      $('header').removeClass('stickedhead');
     }
 });


 //$('.navbar-toggle').click(function(){
//	 $('.form').slideToggle();
//	  
//	 
//	 
//	 });

 




  $("header .drop_li1").click(function(){
    $("header .drop_ul1").slideToggle();
	//$("header li.active").removeClass("active");
//	$(this).addClass("active");
	$("header .drop_li1>a").toggleClass("open");
  });
  
  
    $("header .drop_li2").click(function(){
    $("header .drop_ul2").slideToggle();
//	$("header li.active").removeClass("active");
//	$(this).addClass("active");
	$("header .drop_li2>a").toggleClass("open");
  });
  
    $("li.drop_menuli1").click(function(){
    $("li.drop_menuli1 ul.drop_menuul1").slideToggle();
	//$("header li.active").removeClass("active");
	$("li.drop_menuli1>a").toggleClass("open");
  });
  
    $("li.drop_menuli2").click(function(){
    $("li.drop_menuli2 ul.drop_menuul2").slideToggle();
	//$("header li.active").removeClass("active");
	$("li.drop_menuli2>a").toggleClass("open");
  });






	$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.app'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});	


  $(".load_btn").click(function(){
	  $("#portfoliolist").addClass("open");
	  $(this).addClass("remove");
   
  });


  $(".view_less a").click(function(){
    $("ul.hidden_ul").slideToggle();
  });
  
    $(".view_less a").click(function(){
    $(this).toggleClass('active');
  });


  $(".current_opening_innerdiv1 .content_a").click(function(){
    $(".current_opening_innerdiv1 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv1 .job_detail .short_detail").slideToggle();
  });
  
  $(".current_opening_innerdiv1 .hide_contenta").click(function(){
    $(".current_opening_innerdiv1 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv1 .job_detail .short_detail").slideToggle();
  });
  
  
  
  $(".current_opening_innerdiv2 .content_a").click(function(){
    $(".current_opening_innerdiv2 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv2 .job_detail .short_detail").slideToggle();
  });
  
  
  $(".current_opening_innerdiv2 .hide_contenta").click(function(){
    $(".current_opening_innerdiv2 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv2 .job_detail .short_detail").slideToggle();
  });
  
  
  $(".current_opening_innerdiv3 .content_a").click(function(){
    $(".current_opening_innerdiv3 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv3 .job_detail .short_detail").slideToggle();
  });
  
  
  $(".current_opening_innerdiv3 .hide_contenta").click(function(){
    $(".current_opening_innerdiv3 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv3 .job_detail .short_detail").slideToggle();
  });
  
  
  $(".current_opening_innerdiv4 .content_a").click(function(){
    $(".current_opening_innerdiv4 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv4 .job_detail .short_detail").slideToggle();
  });
  
  
  $(".current_opening_innerdiv4 .hide_contenta").click(function(){
    $(".current_opening_innerdiv4 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv4 .job_detail .short_detail").slideToggle();
  });
  
  
  
  $(".current_opening_innerdiv5 .content_a").click(function(){
    $(".current_opening_innerdiv5 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv5 .job_detail .short_detail").slideToggle();
  });
  
  $(".current_opening_innerdiv5 .hide_contenta").click(function(){
    $(".current_opening_innerdiv5 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv5 .job_detail .short_detail").slideToggle();
  });
  
  
  $(".current_opening_innerdiv6 .content_a").click(function(){
    $(".current_opening_innerdiv6 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv6 .job_detail .short_detail").slideToggle();
  });
  
  
  $(".current_opening_innerdiv6 .hide_contenta").click(function(){
    $(".current_opening_innerdiv6 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv6 .job_detail .short_detail").slideToggle();
  });
  
  
  
  $(".current_opening_innerdiv7 .content_a").click(function(){
    $(".current_opening_innerdiv7 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv7 .job_detail .short_detail").slideToggle();
  });
  
  
  $(".current_opening_innerdiv7 .hide_contenta").click(function(){
    $(".current_opening_innerdiv7 .job_detail .full_detail").slideToggle();
	$(".current_opening_innerdiv7 .job_detail .short_detail").slideToggle();
  });



	$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist2').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.development'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});	


  $(' input,  textarea').each(function() {
    $(this).on('focus', function() {
      $(this).parent('.f-style').addClass('active');
	  $(this).parent('.f-style').removeClass('deactive');
    });

    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
        $(this).parent('.f-style').removeClass('active');
		$(this).parent('.f-style').addClass('deactive');
      }
    });

    if ($(this).val() != '') $(this).parent('.f-style').addClass('active');
  });


  $('.client_saycrausal').owlCarousel({
    loop:true,
    margin:30,
	  autoplay:true,
	  nav:false,
	  dots:true,
    responsiveClass:true,
    responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:3,
          nav:false,
          loop:true
      }
    }
  })
});