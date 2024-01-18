
$('#owl-carousel1').owlCarousel({
  items:1,
  //autoHeight: true,
  lazyLoad:true,
  loop:true,
  pagination:true,
  navigation:true,
  dots:true,
  nav: true,
        navText: [
          '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M18.9999 3.16659C10.2552 3.16659 3.16659 10.2552 3.16659 18.9999C3.16659 27.7447 10.2552 34.8333 18.9999 34.8333C27.7447 34.8333 34.8333 27.7447 34.8333 18.9999C34.8333 10.2552 27.7447 3.16659 18.9999 3.16659Z" stroke="white" stroke-width="2.08333" stroke-linejoin="round"/><path d="M21.375 11.875L14.25 19L21.375 26.125" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M19.0001 34.8334C27.7448 34.8334 34.8334 27.7448 34.8334 19.0001C34.8334 10.2553 27.7448 3.16675 19.0001 3.16675C10.2553 3.16675 3.16675 10.2553 3.16675 19.0001C3.16675 27.7448 10.2553 34.8334 19.0001 34.8334Z" stroke="white" stroke-width="2.08333" stroke-linejoin="round"/><path d="M16.625 26.125L23.75 19L16.625 11.875" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        
        ],
  margin:10
});


$('#owl-carousel2').owlCarousel({
  items:4,
  loop:true,
  navigation:true,
  nav: true,
        navText: [
          '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M18.9999 3.16659C10.2552 3.16659 3.16659 10.2552 3.16659 18.9999C3.16659 27.7447 10.2552 34.8333 18.9999 34.8333C27.7447 34.8333 34.8333 27.7447 34.8333 18.9999C34.8333 10.2552 27.7447 3.16659 18.9999 3.16659Z" stroke="white" stroke-width="2.08333" stroke-linejoin="round"/><path d="M21.375 11.875L14.25 19L21.375 26.125" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none"><path d="M19.0001 34.8334C27.7448 34.8334 34.8334 27.7448 34.8334 19.0001C34.8334 10.2553 27.7448 3.16675 19.0001 3.16675C10.2553 3.16675 3.16675 10.2553 3.16675 19.0001C3.16675 27.7448 10.2553 34.8334 19.0001 34.8334Z" stroke="white" stroke-width="2.08333" stroke-linejoin="round"/><path d="M16.625 26.125L23.75 19L16.625 11.875" stroke="white" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        
        ],
        responsive:{ //Адаптация в зависимости от разрешения экрана
          0:{
              items:2
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      },
  margin:10
});
