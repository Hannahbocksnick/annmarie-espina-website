// A $( document ).ready() block.
$( document ).ready(function() {

        $('.hamburger-button').click(function(){
           $(this).toggleClass('active');
           $('.mobile-menu').fadeToggle(1000);
       });

//Animate on scroll activate

    AOS.init({
        duration: 500, // values from 0 to 3000, with step 50ms
    }
    );

//Slick Slider Activate    
    $('.slider-container').slick({
        // Setting name: setting-value
    });
   
});

