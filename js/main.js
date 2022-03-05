// //Change Background



// $('.icon-geur i ').on('click', function() {
//     $(this).toggleClass('fa-spin');
//     $('.setting-box').toggleClass('open');
// });




// var colors = localStorage.getItem('background-change');
// if (colors != null) {
//     $('body').css('--main-color', colors);
//     $('.box-color .color-list li').each(function(e) {
//         $(this).removeClass('active');
//         if ($(this).data('color') === colors) {
//             $(this).addClass('active')
//         }
//     })

// }

// $('.box-color .color-list li').on('click', function() {

//     $('body').css('--main-color', $(this).data('color'));
//     $(this).addClass('active').siblings().removeClass('active');
//     localStorage.setItem('background-change', $(this).data('color'))

// });

// // #............................ 
// let statuse = true;
// let IntervalClear;
// //check The Localstroge
// let LocalstrogeChange = localStorage.getItem('random-jq-background');
// if (LocalstrogeChange !== null) {
//     if (LocalstrogeChange === 'true') {
//         statuse = true;

//     } else {
//         statuse = false;

//     }
//     //remove Class Active
//     $('.random-background span').removeClass('active');
//     if (LocalstrogeChange === 'true') {
//         $('.random-background .yes').addClass('active');

//     } else {
//         $('.random-background .no').addClass('active');


//     }

// }
// $('.random-background span').on('click', function() {


//     $(this).addClass('active').siblings().removeClass('active');
//     if ($(this).data('random') === 'yes') {
//         statuse = true;
//         ImageChange();
//         localStorage.setItem('random-jq-background', true);
//     } else {
//         statuse = false;
//         clearInterval(IntervalClear);
//         localStorage.setItem('random-jq-background', false);

//     }

// });


// let imgList = ['1.png', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];


// function ImageChange() {
//     if (statuse === true) {
//         IntervalClear = setInterval(() => {
//             let randomImage = Math.floor(Math.random() * imgList.length);
//             $('.landing').css('background-image', 'url("../img/' + imgList[randomImage] + '")')
//         }, 1000)
//     }

// }
// ImageChange()


// // Fill the progress 
// $(window).scroll(function() {
//     if ($(this).scrollTop() > $(this).offset().top) {
//         $('.skills .content-skill .progress span').each(function() {
//             $(this).animate({
//                 width: $(this).attr('data-width'),

//             });
//         });
//     };
// });


// $(window).scroll(function() {
//     if ($(this).scrollTop() > $('.skills').offset().top - 100) {
//         $('.skills .progress span').each(function() {
//             $(this).animate({
//                 width: $(this).attr('data-width')
//             }, 100)
//         })

//     }
// });


// popup in Page


// $('.box-image img').on('click', function() {

//     let overlay = document.createElement('div');
//     overlay.className = 'overlay-pop';
//     document.body.appendChild(overlay);
//     //create pop box
//     let popBox = document.createElement('div');
//     popBox.className = 'box-pop';

//     //create Image in pop box
//     let Images = document.createElement('img');
//     Images.className = 'img-box';
//     Images.src = $(this).attr('src');
//     popBox.appendChild(Images);

//     document.body.appendChild(popBox);
//     //create The button Close
//     let CloseSpan = document.createElement('span');
//     let closeText = document.createTextNode('X');
//     CloseSpan.className = 'close-pop';
//     CloseSpan.appendChild(closeText);
//     popBox.appendChild(CloseSpan);


// });

// document.addEventListener('click', function(e) {
//     if (e.target.className === 'close-pop') {
//         e.target.parentNode.remove();
//         document.querySelector('.overlay-pop').remove();
//     }
// })

// //show and hide  bullets

// let localStrorgeBulletget = localStorage.getItem('show_and_hide_poulets');
// if (localStrorgeBulletget != null) {
//     $('.random-bullet > span ').removeClass('active');
//     if (localStrorgeBulletget === 'show') {
//         $('.nav-bullets').css('display', 'block')
//         $('.random-bullet .show').addClass('active');

//     } else {
//         $('.nav-bullets').css('display', 'none')

//         $('.random-bullet .hide').addClass('active');


//     }
// }
// $('.random-bullet > span ').on('click', function() {
//     $(this).addClass('active').siblings().removeClass('active');


//     if ($(this).data('random') === 'show') {
//         $('.nav-bullets').css('display', 'block')
//         localStorage.setItem('show_and_hide_poulets', $(this).data('random'));
//     } else {
//         $('.nav-bullets').css('display', 'none');
//         localStorage.setItem('show_and_hide_poulets', $(this).data('random'));

//     }
// })


// $('.option-box .reset').on('click', function() {
//     localStorage.clear();
//     $(window).reload();
// });