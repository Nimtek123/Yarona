// Initialize your app
var myApp = new Framework7({
    modalTitle: 'Yarona',
    fastClicks:false,
    panelLeftBreakpoint: 768
});

// Export selectors engine
var $$ = Dom7;

// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    domCache:false,
});
//myApp.init();
var classList = $$('body')[0].classList;
classList.add('theme-' + 'deeporange');
classList.add('layout-' + 'dark');
$$('body').on('touchstart','.pac-container', function(e){e.stopImmediatePropagation();});


                                      