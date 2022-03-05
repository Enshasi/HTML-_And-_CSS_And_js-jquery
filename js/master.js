let landingPage = document.querySelector('.landing-page');
let arrayImage = ['1.png', '3.jpg', '4.jpg', '5.jpg'];

//Check in localstroge 
let mainColor = window.localStorage.getItem('background-color');

if (mainColor != null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('background-color'));

    document.querySelectorAll('.color-list li ').forEach((element) => {
        element.classList.remove('active');
        if (element.dataset.color === mainColor) {
            element.classList.add('active')
        }
    });
}

//Change Color
const myList = document.querySelectorAll('.color-list li ');
//Loop All Li 
myList.forEach((li) => {
    //add Click in li
    li.addEventListener('click', (e) => {
        // console.log(e.target.dataset.color);
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        //set localStroge
        window.localStorage.setItem('background-color', e.target.dataset.color);
        //remove Class Active All Element

        myList.forEach((el) => {
            el.classList.remove('active')
        });

        e.target.classList.add('active')

    });
});
//Change Image Background


let optionBackground = true;
let change;
//check in localstroge
let changeBackImag = localStorage.getItem('background_option');
if (changeBackImag != null) {
    if (changeBackImag === 'true') {
        optionBackground = true
    } else {
        optionBackground = false

    }
    document.querySelectorAll('.option-box .random-background span').forEach((e) => {
        e.classList.remove('active')
    });
    if (changeBackImag === 'true') {
        document.querySelector('.yes').classList.add('active')
    } else {
        document.querySelector('.no').classList.add('active')
    }

}

//change Background
let backColor = document.querySelectorAll('.option-box .random-background span');
backColor.forEach((el) => {
    el.addEventListener('click', (e) => {
        backColor.forEach((elment) => {
            elment.classList.remove('active')
        });
        e.target.classList.add('active');
        if (e.target.dataset.background === 'yes') {
            optionBackground = true;
            changeBackground();
            localStorage.setItem('background_option', true)
        } else {
            optionBackground = false;
            clearInterval(change);
            localStorage.setItem('background_option', false)
        }
    });
});

//Toggle spin Class On Icon
let iconToggle = document.querySelector('.toogle-icon .icon-gear');
let settingBox = document.querySelector('.setting-box');

iconToggle.onclick = function() {
    //Stop move Icon 
    this.classList.toggle('fa-spin');
    //add class open and Show the setting box 
    settingBox.classList.toggle('open');;
};

//Get Number Random


function changeBackground() {
    if (optionBackground === true) {
        change = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * arrayImage.length);
            landingPage.style.backgroundImage = "url('image/" + arrayImage[randomNumber] + "')";
            // console.log(randomNumber)
        }, 10000);
    }
}

changeBackground();


//fill progrees in auto scroll window 

let skilles = document.querySelector('.skills ');
let progress = document.querySelectorAll('.skills .box .skill-progress span');

// window.scrollY >= skilles.offsetTop - 100 
window.onscroll = function() {
    if (window.scrollY > skilles.offsetTop) {
        progress.forEach((pro) => {
            pro.style.width = pro.dataset.progress;
        });
    }
};

//image and add Popup 


let galleryImg = document.querySelectorAll('.gallery img');
//Loop All img 
galleryImg.forEach((img) => {

    img.addEventListener('click', e => {
        //Create Ovelay
        let popup = document.createElement('div');
        popup.className = 'popup';
        document.body.appendChild(popup);

        //create popup box
        let popupBox = document.createElement('div');
        popupBox.className = 'popupBox';


        //add title alt
        if (img.alt !== null) {
            //crate heading 
            let heading = document.createElement('h3');
            let textHeading = document.createTextNode(img.alt);
            heading.className = 'heading';
            heading.appendChild(textHeading);
            popupBox.appendChild(heading);
        }


        //create Img  insert popbox

        let popupImg = document.createElement('img');
        popupImg.className = 'popupImg';

        popupImg.src = img.src;

        popupBox.appendChild(popupImg);

        document.body.appendChild(popupBox);

        //Create close 
        let spanClose = document.createElement('span');
        let closeText = document.createTextNode('X');
        spanClose.className = 'close';
        spanClose.appendChild(closeText);
        popupBox.appendChild(spanClose);

    });


});

document.addEventListener('click', function(e) {
    if (e.target.className == 'close') {
        document.querySelector('.popup').remove();
        document.querySelector('.popupBox').remove();
    }
});

//Navigation Bullets scroll 


let allbullet = document.querySelectorAll('.nav-bullets .bullet .bullet-pointer > div ');
let allLink = document.querySelectorAll('.landing-page .link li > a ');

function scrolles(element) {
    element.forEach((e) => {
        e.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: "smooth"
            });
        })
    })

}
scrolles(allbullet);
scrolles(allLink);


//Function Work Add and Remove Class Active 

function toogleActive(ev) {
    ev.target.parentElement.document.querySelector('.active').forEach((e) => {
        e.calssList.remove('active')
    })
    ev.target.calssList.add('active')
}


//show and hide bullets 
let optionSpan = document.querySelectorAll('.bullets-option span');
let AllBulets = document.querySelector('.nav-bullets');
let BuletsLocalStorge = localStorage.getItem('bullets');

if (BuletsLocalStorge !== null) {
    optionSpan.forEach((e) => {
        e.classList.remove('active');
    });
    if (BuletsLocalStorge === 'show') {
        AllBulets.style.display = 'block';
        document.querySelector('.bullets-option .yes').classList.add('active');
    } else {
        AllBulets.style.display = 'none';
        document.querySelector('.bullets-option .no').classList.add('active');
    }
}
optionSpan.forEach((span) => {
    span.addEventListener('click', (e) => {
        if (e.target.dataset.displaye === 'show') {
            AllBulets.style.display = 'block';

        } else {
            AllBulets.style.display = 'none';
        }
        optionSpan.forEach((ele) => {
            ele.classList.remove('active');
        });
        e.target.classList.add('active');
        localStorage.setItem('bullets', e.target.dataset.displaye);
    });
});

let dom = document.querySelectorAll('.bullet-pointer > div');
let dom2 = document.querySelector('.bullet-top ');

dom.forEach((e) => {
    e.addEventListener('click', function() {
        dom2.style.display = 'block';
    });
})

//Clear or remove LocalStorge

let buttonReset = document.querySelector('.setting-box .reset');
buttonReset.onclick = function() {
    // localStorage.clear(); // First Way 
    localStorage.removeItem('background-color');
    localStorage.removeItem('background_option');
    localStorage.removeItem('bullets');
    window.location.reload();
}

//ShoW And hide The mune

let MunButton = document.querySelector('.mune-icon ');
let Linkes = document.querySelector('  .header-area .link');
MunButton.onclick = function(e) {
        this.classList.toggle('mune-active');
        Linkes.classList.toggle('open');
        e.stopPropagation();
    }
    //Click any Element To Page Close Linkes 

document.addEventListener('click', function(e) {
    if (e.target !== MunButton && e.target !== Linkes) {

        if (Linkes.classList.contains('open')) {

            MunButton.classList.toggle('mune-active');

            Linkes.classList.toggle('open');
        }

    }
});

Linkes.onclick = function(e) {
    e.stopPropagation();
}