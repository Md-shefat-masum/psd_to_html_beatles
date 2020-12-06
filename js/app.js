const hamburger = document.querySelector('.hamburgers');
const navAllLinks = document.querySelector('.nav-all-links');

hamburger.addEventListener('click', () => {
    navAllLinks.classList.toggle('open')
})


function initall() {
    $(document).ready(function () {



        $('#banner').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            // fade: true,
            // cssEase: 'linear',
            dots: true,
            arrows: true,
        });

        $('.team_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            centerPadding: '60px',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });


        $(".services").owlCarousel({
            loop: true,
            nav: true,
            margin: 30,
            dots: false,
            animateOut: 'fadeIn',
            animateIn: 'flipInX',
            autoplay: true,
            items: 3
        });

        $('.gallery_view').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        $('.gallery2').magnificPopup({
            delegate: 'a',
            type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler your-special-css-class">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen>            </iframe>' +
                    '</div>'
            }
        });

        $('.team_modal_btn').on('click', function () {
            let name = $(this).data('name');
            let image = $(this).data('image');
            let get_image = $(this)[0].parentNode.children[0].children[0].currentSrc;

            $('#sajal_modalLabel').html(name);
            $('#sajal_modalImage').attr('src', get_image);


            console.log(get_image, $($(this)[0].parentNode).find('.image'));
            // console.log(name,image);
        });

        $('.gallery_button').on('click', function (e) {
            e.preventDefault();
        })

        $('.filter-container').filterizr();

    })
}


// let student = new Object();

// student.name = 'sulaiman'
// student.last_name = 'mainul vai'

// let student = {
//     name: 'sulaiman',
//     last_name: 'biswas',

//     academic_information: {
//         versity: 'National Universtiy',
//         subject: 'Chemestry',
//         session: '2018-19'
//     },

//     personal_information: {
//         carent_address: {
//             house_no: '4 no road',
//         },
//         permenent_address: {
//             house_no: '4 no road',
//             parental_information:{
//                 father:'',
//                 mother:"",

//                 alternative: {
//                     relation: 'boro vai',
//                     name: 'korim'
//                 }

//             }
//         },
//     }

// };

// let a = b = c = d = e = 0;
// c= 10;
// console.log(a,b,c,d,e);

// key = 'permenent_address';
// let editedname  = student.personal_information.permenent_address.parental_information.alternative.name = 'rahim';
// console.log(student.personal_information[key], editedname);

// for (const key in student) {
//     if (student.hasOwnProperty(key)) {
//         const element = student[key];
//         // console.log(key, element)

//         if( key === 'academic_information'){
//             for (const key2 in element) {
//                 if (element.hasOwnProperty(key2)) {
//                     const element2 = element[key2];
//                     // console.log(element2);
//                 }
//             }
//         }
//     }
// }

// let json = JSON.stringify(student);

// console.log(student, json);

// console.log(JSON.parse(json).name);