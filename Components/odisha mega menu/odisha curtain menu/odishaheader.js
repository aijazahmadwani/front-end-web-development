/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
    File Name :			header.js
    Description :		JS file for header component
    Author Name :		Swetak Amrutav
    Date Created :		19-Dec-2018
    Developed By :		Sabyasachi
    Developed On :		17-Dec-2018
    Updated On :		20-Jan-2020
    Updated By :		Swetak Amrutav
    Updated Reason :	menu links

  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/




$(document).ready(function () {
    $('.curtain-menu').removeClass('showMenu');
    $('body').removeClass('menuActive');


    //$("#main_menu li:first").addClass("active");
    $("#main_menu>li:nth-child(1)").addClass("active");

    if ($(window).width() > 960) {
        var e = $(window).height();
        if ($(document).height() >= e) {
            $(".nav-custom-bg").removeClass("fixed"), $(window).scroll(function () {
                $(this).scrollTop() >= 20 ? ($(".nav-custom-bg").addClass("fixed"), $("#topbg").slideUp()) : ($(".nav-custom-bg").removeClass("fixed"), $("#topbg").slideDown())
            })
        }
    }

});

// Start code: Add font size
var min = 10;
var max = 18;
var reset = 16;

function increaseFontSize() {
    var p = document.getElementsByTagName('body');
    for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        } else {
            var s = 16;
        }
        if (s != max) {
            s += 1;
        }
        p[i].style.fontSize = s + "px"
    }
}

function decreaseFontSize() {
    var p = document.getElementsByTagName('body');
    for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        } else {
            var s = 16;
        }
        if (s != min) {
            s -= 1;
        }
        p[i].style.fontSize = s + "px"
    }
}

function reSetFontSize() {
    var p = document.getElementsByTagName('body');
    for (i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        } else {
            var s = 16;
        }
        if (s != reset) {
            s = 16;
        }
        p[i].style.fontSize = s + "px"
    }
}
// End code: Add font size



// Material Button (Wave Effect)
(function (window) {
    'use strict';

    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);

    // Find exact position of element
    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem, win,
            box = { top: 0, left: 0 },
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += (a + ':' + obj[a] + ';');
            }
        }

        return style;
    }

    var Effect = {

        // Effect delay
        duration: 750,

        show: function (e, element) {

            // Disable right click
            if (e.button === 2) {
                return false;
            }

            var el = element || this;

            // Create ripple
            var ripple = document.createElement('div');
            ripple.className = 'waves-ripple';
            el.appendChild(ripple);

            // Get click coordinate and element witdh
            var pos = offset(el);
            var relativeY = (e.pageY - pos.top);
            var relativeX = (e.pageX - pos.left);
            var scale = 'scale(' + ((el.clientWidth / 100) * 10) + ')';

            // Support for touch devices
            if ('touches' in e) {
                relativeY = (e.touches[0].pageY - pos.top);
                relativeX = (e.touches[0].pageX - pos.left);
            }

            // Attach data to element
            ripple.setAttribute('data-hold', Date.now());
            ripple.setAttribute('data-scale', scale);
            ripple.setAttribute('data-x', relativeX);
            ripple.setAttribute('data-y', relativeY);

            // Set ripple position
            var rippleStyle = {
                'top': relativeY + 'px',
                'left': relativeX + 'px'
            };

            ripple.className = ripple.className + ' waves-notransition';
            ripple.setAttribute('style', convertStyle(rippleStyle));
            ripple.className = ripple.className.replace('waves-notransition', '');

            // Scale the ripple
            rippleStyle['-webkit-transform'] = scale;
            rippleStyle['-moz-transform'] = scale;
            rippleStyle['-ms-transform'] = scale;
            rippleStyle['-o-transform'] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity = '1';

            rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
            rippleStyle['transition-duration'] = Effect.duration + 'ms';

            rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
            rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

            ripple.setAttribute('style', convertStyle(rippleStyle));
        },

        hide: function (e) {
            TouchHandler.touchup(e);

            var el = this;
            var width = el.clientWidth * 1.4;

            // Get first ripple
            var ripple = null;
            var ripples = el.getElementsByClassName('waves-ripple');
            if (ripples.length > 0) {
                ripple = ripples[ripples.length - 1];
            } else {
                return false;
            }

            var relativeX = ripple.getAttribute('data-x');
            var relativeY = ripple.getAttribute('data-y');
            var scale = ripple.getAttribute('data-scale');

            // Get delay beetween mousedown and mouse leave
            var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
            var delay = 350 - diff;

            if (delay < 0) {
                delay = 0;
            }

            // Fade out ripple after delay
            setTimeout(function () {
                var style = {
                    'top': relativeY + 'px',
                    'left': relativeX + 'px',
                    'opacity': '0',

                    // Duration
                    '-webkit-transition-duration': Effect.duration + 'ms',
                    '-moz-transition-duration': Effect.duration + 'ms',
                    '-o-transition-duration': Effect.duration + 'ms',
                    'transition-duration': Effect.duration + 'ms',
                    '-webkit-transform': scale,
                    '-moz-transform': scale,
                    '-ms-transform': scale,
                    '-o-transform': scale,
                    'transform': scale,
                };

                ripple.setAttribute('style', convertStyle(style));

                setTimeout(function () {
                    try {
                        el.removeChild(ripple);
                    } catch (e) {
                        return false;
                    }
                }, Effect.duration);
            }, delay);
        },

        // Little hack to make <input> can perform waves effect
        wrapInput: function (elements) {
            for (var a = 0; a < elements.length; a++) {
                var el = elements[a];

                if (el.tagName.toLowerCase() === 'input') {
                    var parent = el.parentNode;

                    // If input already have parent just pass through
                    if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                        continue;
                    }

                    // Put element class and style to the specified parent
                    var wrapper = document.createElement('i');
                    wrapper.className = el.className + ' waves-input-wrapper';

                    var elementStyle = el.getAttribute('style');

                    if (!elementStyle) {
                        elementStyle = '';
                    }

                    wrapper.setAttribute('style', elementStyle);

                    el.className = 'waves-button-input';
                    el.removeAttribute('style');

                    // Put element as child
                    parent.replaceChild(wrapper, el);
                    wrapper.appendChild(el);
                }
            }
        }
    };


    /**
     * Disable mousedown event for 500ms during and after touch
     */
    var TouchHandler = {
        /*
         * uses an integer rather than bool so there's no issues with needing to
         * clear timeouts if another touch event occurred within the 500ms.
         * Cannot mouseup between touchstart and touchend, nor in the 500ms
         * after touchend.
         */
        touches: 0,
        allowEvent: function (e) {
            var allow = true;

            if (e.type === 'touchstart') {
                TouchHandler.touches += 1; // push
            } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                setTimeout(function () {
                    if (TouchHandler.touches > 0) {
                        TouchHandler.touches -= 1; // pop after 500ms
                    }
                }, 500);
            } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                allow = false;
            }

            return allow;
        },
        touchup: function (e) {
            TouchHandler.allowEvent(e);
        }
    };


    /**
     * Delegated click handler for .waves-effect element. returns null when
     * .waves-effect element not in "click tree"
     */
    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    /**
     * Bubble the click and show effect if .waves-effect elem was found
     */
    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    Waves.displayEffect = function (options) {
        options = options || {};

        if ('duration' in options) {
            Effect.duration = options.duration;
        }

        // Wrap input inside <i> tag
        Effect.wrapInput($$('.waves-effect'));

        if ('ontouchstart' in window) {
            document.body.addEventListener('touchstart', showEffect, false);
        }

        document.body.addEventListener('mousedown', showEffect, false);
    };

    /**
     * Attach Waves to an input element (or any element which doesn't bubble
     * mouseup/mousedown events). Intended to be used with dynamically loaded
     * forms/inputs, or where the user doesn't want a delegated click handler.
     */
    Waves.attach = function (element) {
        // FUTURE: automatically add waves classes and allow users
        // to specify them with an options param? Eg. light/classic/button
        if (element.tagName.toLowerCase() === 'input') {
            Effect.wrapInput([element]);
            element = element.parentElement;
        }

        if ('ontouchstart' in window) {
            element.addEventListener('touchstart', showEffect, false);
        }

        element.addEventListener('mousedown', showEffect, false);
    };

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function () {
        Waves.displayEffect();
    }, false);

})(window);


$(document).ready(function () {
    $(".forgotflip").click(function () {
        $(".loginfirstbx").slideUp();
        $(".loginfirstbx").hide();
        $(".signupbox").hide();
        $(".forgotpasswordbx").slideDown();
        $(".forgotheading").show();
        $(".loginheading").hide();
        $('#typeOfLogin').addClass('forgot');
        $('#typeOfLogin').removeClass('login');
        $(".usertype").show();
        $(".sociallogin").hide();
        $(".signupfirstbx").hide();
        $('#loginError').text('');
        $(".activateTravelBox").hide();
        $(".signuptravelagent").hide();
        $(".signuphotelier").hide();

    });
    $(".backlogin").click(function () {
        $(".forgotpasswordbx").hide();
        $(".signupbox").hide();
        $(".loginfirstbx").slideDown();
        $(".loginfirstbx").show();
        $(".forgotheading").hide();
        $(".loginheading").show();
        $('#typeOfLogin').removeClass('forgot');
        $('#typeOfLogin').removeClass('signup');
        $('#typeOfLogin').addClass('login');
        $(".usertype").show();
        $(".signupfirstbx").hide();
        $('#loginError').text('');
        if ($('#Agent').is(':checked')) {
            $(".baseline").hide();
            $(".sociallogin").hide();
            $(".signuptravelagent").show();
        }
        if ($('#Hotelier').is(':checked')) {
            $(".baseline").hide();
            $(".sociallogin").hide();
            $(".signuphotelier").show();
        }
        $(".activateTravelBox").hide();
    });
    $(".signupflip").click(function () {
        $('#typeOfLogin').removeClass('login');
        $('#typeOfLogin').addClass('signup');
        $(".signupbox").slideDown();
        $(".loginfirstbx").hide();
        $(".forgotpasswordbx").hide();
        $(".usertype").hide();
        $(".backlogin").show();
        $(".sociallogin").show();
        $(".signupfirstbx").show();
        $('#loginError').text('');
        $(".activateTravelBox").hide();

    });
    $("#Visitor").click(function () {
        if ($('.forgotpasswordbx').css('display') == 'none') {
            $(".baseline").show();
        }
        $(".signuptravelagent").hide();
        $(".signuphotelier").hide();
        $(".activateTravelBox").hide();
        $(".loginWarningModal").hide();
        $(".signupbiker").hide();
    });
    $("#Agent").click(function () {
        if ($('.forgotpasswordbx').css('display') == 'none') {
            $(".signuptravelagent").show();
        }
        $(".signuphotelier").hide();
        $(".activateTravelBox").hide();
        $(".baseline").hide();
        $(".signupbiker").hide();
    });
    $("#Hotelier").click(function () {
        if ($('.forgotpasswordbx').css('display') == 'none') {
            $(".signuphotelier").show();
        }
        $(".signuptravelagent").hide();
        $(".activateTravelBox").hide();
        $(".baseline").hide();
        $(".loginWarningModal").hide();
        $(".signupbiker").hide();
    });
    $("#Biker").click(function () {
        $(".signupbiker").show();
        $(".signuptravelagent").hide();
        $(".activateTravelBox").hide();
        $(".signuphotelier").hide();
        $(".baseline").hide();
        $(".loginWarningModal").hide();

    });
    $(".activate--click").click(function () {
        $(".forgotpasswordbx").hide();
        $(".loginfirstbx").hide();
        $(".signupfirstbx").hide();
        $(".activateTravelBox").show();
        $(".usertype").hide();
        $(".signuptravelagent").hide();
        $(".signuphotelier").hide();
        $(".baseline").hide();
    });
    $("#activateTravelBck").click(function () {
        $("#signinmodal .modal-content").css("min-height", "580px");
    });
    $("#activateTA").click(function () {
        $(".loginWarningModal").hide();
        $("#signinmodal .modal-content").css("min-height", "450px");
    });
});

$(document).ready(function () {
    //Widget- Get In Touch
    setTimeout(function () {
        $("#formWidgetHandle").addClass("showHandle");
    }, 5000);

    $("#formWidgetHandle").on("click", function () {
        $(".form-widget__content").addClass("show");
    });
    $("#closeWidgetForm").on("click", function () {
        $(".form-widget__content").removeClass("show");
    });


    //FAB widget
    $("#fabWidgetHandle").on("click", function () {
        $(this).toggleClass("fab-close");
        $("body").toggleClass("bg-layer");
        $("#fabWidgetContent").toggleClass("show");

        var fab_close = $("#fabWidgetHandle").hasClass("fab-close");
        if (fab_close) {
            $(".fab-widget__handle.fab-close").css("background-image", "url(/content/dam/tourism/home/structure/fab-widget/close.png)");
        } else {
            var imagePath = "url(" + $('#widgetGif').val() + ")";
            $(".fab-widget__handle").css("background-image", imagePath);
        }


    });
});

//Menu Toggle Icon
$(".menu-close-icon").click(function () {
    $(this).toggleClass("cross");
});


$(".menu-toggle-icon").click(function () {
    var urlPath = window.location.href;

    if ((urlPath.includes("/en.html"))
        || (urlPath.includes("/en/trail-details"))
        || (urlPath.includes("/en/road-trip-detail"))
        || (urlPath.includes("/en/sand-art-festival-registration"))
        || (urlPath.includes("/en/sand-art-festival-guideline"))
        || (urlPath.includes("/en/guideline-for-your-safety"))
        || (urlPath.includes("/en/biker-registration"))
        || (urlPath.includes("/en/monuments-reopened"))
        || (urlPath.includes("/en/safety-first-hotel"))
        || (urlPath.includes("/en/blog-details"))
        || (urlPath.includes("/en/changePassword"))
        || (urlPath.includes("/en/forgotPassword"))
        || (urlPath.includes("/en/myProfile"))
        || (urlPath.includes("/en/myNotifications"))
        || (urlPath.includes("/en/myContributions"))
        || (urlPath.includes("/en/myFavorites"))
        || (urlPath.includes("/en/the-taste-of-odisha"))
        || (urlPath.includes("/en/art-architecture"))
        || (urlPath.includes("/en/history-climate-cities"))
        || (urlPath.includes("/en/cultural-heritage"))
        || (urlPath.includes("/en/travel-advisory"))
        || (urlPath.includes("/en/search"))
        || (urlPath.includes("/en/privacy-policies"))
        || (urlPath.includes("/en/gajalaxmi-palace"))
        || (urlPath.includes("/en/Killa-Dalijoda"))
        || (urlPath.includes("/en/dhenkanal_palace"))
        || (urlPath.includes("/en/belgadia-palace"))
        || (urlPath.includes("/en/screen-reader"))
        || (urlPath.includes("/en/bookingDetails"))
        || (urlPath.includes("/en/ratha-jatra"))) {
        //$('.curtain-menu').addClass('showMenu');
        //$('body').addClass('menuActive');
    } else {
        $(".main-menu>li").removeClass('active');
        $('.curtain-menu').removeClass('showMenu');
        if ((urlPath.includes("/discover/")) || (urlPath.includes("/about-odisha/")) || (urlPath.includes("/attractions/")) || (urlPath.includes("/major-cities/"))) {
            $(".main-menu>li:nth-child(1)").addClass("active");
            $(".menu-left-section ul li:nth-child(1)").addClass("showMedia");
            $('.curtain-menu').addClass('showMenu');
        } else if ((urlPath.includes("/experience/")) || (urlPath.includes("/activities/")) || (urlPath.includes("/themes/"))) {
            $(".main-menu>li:nth-child(2)").addClass("active");
            $(".menu-left-section ul li:nth-child(2)").addClass("showMedia");
            $('.curtain-menu').addClass('showMenu');
        } else if ((urlPath.includes("/plan/")) || (urlPath.includes("/trip-organizer/")) || (urlPath.includes("/food-accomodation/")) || (urlPath.includes("/important-information/"))) {
            $(".main-menu>li:nth-child(3)").addClass("active");
            $(".menu-left-section ul li:nth-child(3)").addClass("showMedia");
            $('.curtain-menu').addClass('showMenu');
        } else if ((urlPath.includes("/dot/")) || (urlPath.includes("/quickLinks/"))) {
            $(".main-menu>li:nth-child(5)").addClass("active");
            $(".menu-left-section ul li:nth-child(5)").addClass("showMedia");
            $('.curtain-menu').addClass('showMenu');
        }
    }

});
$(".menu-close-icon").click(function () {
    $('.curtain-menu').removeClass('showMenu');
    $('body').removeClass('menuActive');
});

$(".main-menu>li.menu__theme .menu__dropdown li a").click(function () {
    $('.curtain-menu').toggleClass('showMenu');
    $('.menu-toggle-icon').removeClass('cross');
});

//Main menu item on Hover add active class

//var rightSectionColor = ["#27150b","#251f09","#091c22"];

/*function chnageRightSectionColor(menupos){
  $(".menu-right-section").css("background-color", rightSectionColor[menupos-1]);
}

function chnageLeftSectionPhoto(menupos){
  $(".menu-left-section ul li").removeClass("showMedia");
  //$(".menu-left-section ul li:nth-child(2)").addClass("showMedia");
}*/

$(document).ready(function () {
    //fav-widget BG color
    $(".fab-widget__content__item").each(function () {
        var widgetColor = $(this).find("#imgBgColor").val();
        $(this).find(".fab-item__link img").css("background-color", widgetColor);
    });

    var imagePath = "url(" + $('#widgetGif').val() + ")";
    $(".fab-widget__handle").css("background-image", imagePath);


    // Floaing Widget
    $(".widget-handle a").click(function () {
        $(".widget-content").addClass("showSection");
    });

    $(".widget-close").click(function () {
        $(".widget-content").removeClass("showSection");
    });


    // Floaing Livefyre carousel
    $(".floating-carousellivefyre .carousellivefyre-icon a").click(function () {
        $(".floating-carousellivefyre .livefyre-div").addClass("showSection");
    });

    $(".widget-close").click(function () {
        $(".floating-carousellivefyre .livefyre-div").removeClass("showSection");
    });


    // Change BG color on hover
    $(".main-menu>li:nth-child(1)").hover(function () {
        $(".menu-right-section").css("background-color", "#27150b");;
    });

    $(".main-menu>li:nth-child(2)").hover(function () {
        $(".menu-right-section").css("background-color", "#251f09");;
    });

    $(".main-menu>li:nth-child(3)").hover(function () {
        $(".menu-right-section").css("background-color", "#091c22");;
    });

    $(".main-menu>li:nth-child(4)").hover(function () {
        $(".menu-right-section").css("background-color", "#190f0f");;
    });

    $(".main-menu>li:nth-child(5)").hover(function () {
        $(".menu-right-section").css("background-color", "#12211e");;
    });

    var viewportWidth = $(window).width();
    var limit = 576;
    if (viewportWidth > limit) {
        $(".menu-left-section ul li:nth-child(1)").addClass("showMedia");

        // Change Leftside IMG on hover

        // Change Leftside IMG on hover
        $(".main-menu>li:nth-child(1)").hover(function () {
            $(".main-menu>li").removeClass('active');
            $(this).addClass('active');
            $(".menu-left-section ul li").removeClass("showMedia");
            $(".menu-left-section ul li:nth-child(1)").addClass("showMedia");
        });

        $(".main-menu>li:nth-child(2)").hover(function () {
            $(".main-menu>li").removeClass('active');
            $(this).addClass('active');
            $(".menu-left-section ul li").removeClass("showMedia");
            $(".menu-left-section ul li:nth-child(2)").addClass("showMedia");
        });

        $(".main-menu>li:nth-child(3)").hover(function () {
            $(".main-menu>li").removeClass('active');
            $(this).addClass('active');
            $(".menu-left-section ul li").removeClass("showMedia");
            $(".menu-left-section ul li:nth-child(3)").addClass("showMedia");
        });

        $(".main-menu>li:nth-child(4)").hover(function () {
            $(".main-menu>li").removeClass('active');
            $(this).addClass('active');
            $(".menu-left-section ul li").removeClass("showMedia");
            $(".menu-left-section ul li:nth-child(4)").addClass("showMedia");
        });

        $(".main-menu>li:nth-child(5)").hover(function () {
            $(".main-menu>li").removeClass('active');
            $(this).addClass('active');
            $(".menu-left-section ul li").removeClass("showMedia");
            $(".menu-left-section ul li:nth-child(5)").addClass("showMedia");
        });
    }

    //For Mobile Menu
    if (viewportWidth < limit) {
        $(".menu__theme").removeClass("active");
        $(document).on('click', ".main-menu .menu__theme", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            }
            else {
                $(".menu__theme").removeClass("active");
                $(this).addClass("active");
                $(".menu-right-section").animate({
                    scrollTop: 0
                }, 600);
            }
        });
    }

    //About text read more for attractions
    $('#showMoreLess').on('click', function () {
        if ($(this).data('num') == 1) {
            $(this).data('num', 2);
            $(this).text('Read Less');
            $('#stripedText').hide();
            $('#allContent').show();
        } else {
            $(this).data('num', 1);
            $('#allContent').hide();
            $('#stripedText').show();
            $(this).text('Read More');
        }
    });


});

function postAjaxUserValidation(data, callback) {
    $.ajax({
        type: 'POST',
        url: '/tourism/auth',
        data: data,
        dataType: "json",
        async: false,
        success: function (data) {
            var jsonResponse;

            if (data == '') {
                //alert("FORWARD TO ERROR");
            } else {
                if (typeof data === 'string') {
                    jsonResponse = JSON.parse(data);
                } else {
                    jsonResponse = data;
                }
            }

            checkUserPageLoad(jsonResponse);
        },
        error: function (xhr) {
            console.log(xhr.status);
            //alert("Technical Error");
        }
    });
}
$('.hidesearchbar').click(function () {
    $('#topsearch').removeClass('active');
})

$('#txtSearch').keypress(function (e) {
    var key = e.which;
    var txtSearchId = $("#txtSearch").val();

    if (txtSearchId == "trail(s)" || txtSearchId == "trails" || txtSearchId == "package" || txtSearchId == "packages" || txtSearchId == "itinerary" || txtSearchId == "itineraries") {
        txtSearchId = "trail";
    }
    var data = {
        "txtSearchId": txtSearchId
    };
    if (key == 13)  // the enter key code
    {
        if ($('#txtSearch').val() == '') {
            $('#txtSearch').attr('placeholder', 'Please enter search text...');
            return false;
        } else {
            postAjaxGlobalSerach(data);
            return true;
        }
    }
});

$(".searchbtn").click(function () {
    $("#topsearch").fadeIn();
    $("#txtSearch").focus();
});

$(".hidesearchbar").click(function () {
    $("#topsearch").fadeOut();
});

function postAjaxGlobalSerach(keyword) {
    $.ajax({
        type: 'POST',
        url: '/tourism/globalSearch',
        data: keyword,
        beforeSend: function () { $('.progress').show() },
        success: function (data) {
            if (data == '') {
                //alert("FORWARD TO ERROR");
            } else {
                if (typeof data === 'string') {
                    localStorage.setItem('result', data);
                    localStorage.setItem('keyword', keyword.txtSearchId);
                    window.location.href = location.origin + "/content/tourism/en/search.html?keyword=" + keyword.txtSearchId;
                } else {
                    localStorage.setItem('result', data);
                    window.location.href = location.origin + "/content/tourism/en/search.html?keyword=" + keyword.txtSearchId;
                }
            }

            //console.log(keyword);


        },
        error: function (xhr) {
            console.log(xhr.status);
            //alert("Error");
        }//,async: false
    });
}
function showSignUp(r) {
    if (r == 1) {
        $('.baseline ').css('display', 'block');
        $('.sociallogin ').css('display', 'block');
    }
    else {
        $('.baseline ').css('display', 'none');
        $('.sociallogin').css('display', 'none');
    }

}
//**************************************Analytics Section Start*************************************

function analyticsHeader1(headerItem1) {
    var typeOfLink = "Navigation";
    if ((headerItem1 == 'A') || (headerItem1 == 'A-') || (headerItem1 == 'A+') || (headerItem1 == 'Light theme') || (headerItem1 == 'Dark theme')) {
        typeOfLink = "Design Change";
    }
    if ((headerItem1 == 'Sign In') || (headerItem1 == 'Forgot Password') || (headerItem1 == 'Back to Login') || (headerItem1 == 'Global Search')) {
        typeOfLink = "Pop Up";
    }
    customLinkClickAnalytics(currentPage + ': Header : ' + headerItem1, typeOfLink);
}

function analyticsHeader2() {
    delete digitalData.linkClick;
    delete digitalData.form;
    delete digitalData.filter;
    delete digitalData.error;
    $("#signin input:text").focus(function () {
        delete digitalData.linkClick;
        if (!$("#signin input:text").val()) {
            _satellite.track('login_starts');
        }
    });
}

function analyticsHeader4() {
    delete digitalData.linkClick;
    delete digitalData.form;
    delete digitalData.filter;
    delete digitalData.error;
    _satellite.track('registration_starts');
}
function analyticsHeader5(title) {
    var nameLink = currentPage + " Header: widget : " + title;
    customLinkClickAnalytics(nameLink, 'Navigation');
}

function analyticsLoginStart() {
    delete digitalData.linkClick;
    delete digitalData.internalSearch;
    delete digitalData.form;
    delete digitalData.filter;
    delete digitalData.error;
    var tlength = $("#userName").val().length;
    var plength = $("#password").val().length;
    var clength = $("#captcha").val().length;

    if ((tlength == 1 && plength == 0 && clength == 0) || (tlength == 0 && plength == 1 && clength == 0)) {
        // console.log(tlength);
        _satellite.track('login_starts');
    }
}

function analyticsRegistrationStart() {
    delete digitalData.linkClick;
    delete digitalData.internalSearch;
    delete digitalData.form;
    delete digitalData.filter;
    delete digitalData.error;
    var visitorNamelength = $("#visitorName").val().length;
    var visitorEmailength = $("#visitorEmail").val().length;
    var visitorPhonelength = $("#visitorPhone").val().length;
    var captchalength = $("#captcha").val().length;

    if ((visitorNamelength == 1 && visitorEmailength == 0 && visitorPhonelength == 0 && captchalength == 0) || (visitorNamelength == 0 && visitorEmailength == 1 && visitorPhonelength == 0 && captchalength == 0) || (visitorNamelength == 0 && visitorEmailength == 0 && visitorPhonelength == 1 && captchalength == 0)) {
        _satellite.track('registration_starts');
    }
}

function analyticsForgotPasswordStart() {
    var visitorEmailengthForgetPass = $("#userEmail").val().length;
    var captchalength1 = $("#captcha").val().length;

    if ((visitorEmailengthForgetPass == 1)) {
        /*var form =  {
                "form"	:	{
                    "formName":currentPage+" :Header : Forget Password Form", 
                    "formType":"Forget Password"
                    }
            }
        $.extend( digitalData, form );
     _satellite.track('formStart');  */
        formStartAnalytics("Forget Password Form", "Submit:Forgot PassWord");
    }
}

function analyticsFabWidget1() {
    var fab_closeA = $("#fabWidgetHandle").hasClass("fab-close");
    if (fab_closeA) {
        customLinkClickAnalytics("Home:Header:Fab-widget-close", "Pop Up");
    } else {
        customLinkClickAnalytics("Home:Header:Fab-widget-Logo", "Pop Up");
    }
}
function analyticsFabWidget2(title) {
    customLinkClickAnalytics("Home:Header:Fab-Widget:" + title, "Navigation");
}

function analyticsGetInTouch() {
    customLinkClickAnalytics(currentPage + ":Header:Get In Touch", "Pop Up");
}
function analyticsGetInTouchClose() {
    customLinkClickAnalytics(currentPage + ":Header:Get In Touch:Cross Icon", "Pop Up");
}
//**************************************Analytics Section end*************************************





















//Color-switcher Script Start
$(document).ready(function () {
    var lstorageThemeval = localStorage.getItem("webtheme");

    //alert(lstorageval);
    if (lstorageThemeval !== "") {

        $('.theme-list a').removeClass('active');
        $('body').addClass(lstorageThemeval);
        $('#' + lstorageThemeval).addClass('active');
    }

    if (lstorageThemeval == null) {

        localStorage.removeItem('webtheme');
    }

    $('.theme-list a').on('click', function () {
        $('.theme-list a').removeClass('active');
        $(this).addClass('active');
        $('body').attr('class', '');
        var themeid = $(this).attr("id");

        if (typeof (Storage) !== "undefined") {

            localStorage.setItem("webtheme", themeid);
            var lstorageThemeval = localStorage.getItem("webtheme");
            //alert(lstorageThemeval);
            $('body').addClass(lstorageThemeval);

        }
    });

    $('#custom').on('click', function () {
        localStorage.removeItem('webtheme');
        $('body').attr('class', '');
    })
});
//Color-switcher Script End

















var password, encPassword, userType, affiliatedUserType = 0;
var currentPageHeader = $("#currentPageName").val();

$(document).ready(function () {
    /*Check User Login Session*/
    var data = { "methodId": "2" };
    postAjaxLogin(data, checkUser);

    /*Add value to captcha*/
    $("#captchaImageLogin").attr('src', location.origin + '/tourism/captcha');

    /*All Hide elements goes here*/
    //Loader
    $("#loaderLogin").hide();
    $("#loaderEmail").hide();
    $("#loaderForgetLogin").hide();
    $('#loaderSignupLogin').hide();
    $('#loaderSignupLogin').hide();
    $('#loaderActiveTA').hide();
    //fa-eye
    $("#showPassLogin").hide();
    $("#showPass").hide();

    //Small Text
    $("#userNameRequired").hide();
    $("#passwordRequired").hide();
    $("#captchaRequired").hide();
    $("#taEmailRequired").hide();
    $("#visitorNameRequired").hide();
    $("#visitorEmailRequired").hide();
    $("#visitorPhoneRequired").hide();
    $("#visitorPasswordRequired").hide();
    $("#visitorConfirmPasswordRequired").hide();
    $("#termsRequired").hide();
    $("#userEmailRequired").hide();

    //Message Modal
    $(".loginErrorModal").hide();
    $(".loginWarningModal").hide();
    $(".loginSuccessModal").hide();

    $('#fb-btn').hide();
    $('#gSignIn').hide();

    /*Block Cut, Copy, Paste on Password*/
    $('#visitorPassword').on("cut copy paste", function (e) {
        e.preventDefault();
    });
    $('#visitorConfirmPassword').on("cut copy paste", function (e) {
        e.preventDefault();
    });
    $('#password').on("cut copy paste", function (e) {
        e.preventDefault();
    });
    if (currentPageHeader == 'program-page' || currentPageHeader == 'training-program' || currentPageHeader == 'affiliate-program') {
        $("#myProfile").closest('li').remove();
        $("#myFavorites").closest('li').remove();
        $("#myContributions").closest('li').remove();
        $("#myNotifications").closest('li').remove();
        $("#changePassword").closest('li').remove();
    }

    //***********Facebook Login Javascript SDK Start************//

    window.fbAsyncInit = function () {
        FB.init({
            appId: '847221036224513',
            cookie: true,
            xfbml: true,
            version: 'v11.0'
        });

        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });

    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    //***********Facebook Login Javascript SDK End************//
});
//----hide show functionalities for social login buttons-----//
function visitorSignup() {
    $('#fb-btn').hide();
    $('#gSignIn').hide();
}
function visitorBackToLogin() {
    $('#fb-btn').show();
    $('#gSignIn').show();
}
//facebook callback functions start
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    if (response.status == "connected") {
        console.log("Logged in and authenticated");
        $('#loginType').val("Facebbok");
        $("#signinmodal").modal('hide');
        testAPI();
    } else {
        console.log("Not authenticated");
    }
}
function testAPI() {
    FB.api('/me?fields=id,first_name,last_name,email', function (response) {
        if (response && !response.error) {

            localStorage.loginStatus = "SUCCESS";
            var userName = response.first_name;
            var userId = response.id;
            if (userName.length > 8) {
                userName = userName.substr(0, 8) + "..";
            }
            var welcomeText = "Hello " + userName;
            $("#visitorNameMenu").show();
            $("#visitorNameMenu").css("display", "inline");
            $("#visitorNameMenu").text(welcomeText);
            $("#userLoginMenu").hide();
            $("#captcha").val('');
            //Analytics
            digitalData.user.hashedUserId = getEncUserId(response.id);
            digitalData.user.login.loginStatus = "Logged-In";
            _satellite.track('login_completed');
            if (localStorage.userName == undefined && localStorage.userId == undefined) {
                localStorage.setItem("userName", userName);
                localStorage.setItem("userId", userId);
            }
            $("#myProfile").closest('li').remove();
            $("#myFavorites").closest('li').remove();
            $("#myNotifications").closest('li').remove();
            $("#changePassword").closest('li').remove();
            saveUserData(response, $('#loginType').val());
        }
    })
}
//facebook callback functions end
//goggle Sign-in success callback
function onSuccess(googleUser) {
    // Get the Google profile data (basic)
    $('#loginType').val("Google");
    $("#signinmodal").modal('hide');
    // Retrieve the Google account data
    gapi.client.load('oauth2', 'v2', function () {
        var request = gapi.client.oauth2.userinfo.get({
            'userId': 'me'
        });
        request.execute(function (resp) {
            // Display the user details
            localStorage.loginStatus = "SUCCESS";
            var userName = resp.given_name;
            var userId = resp.id;
            if (userName.length > 8) {
                userName = userName.substr(0, 8) + "..";
            }
            var welcomeText = "Hello " + userName;
            $("#visitorNameMenu").show();
            $("#visitorNameMenu").css("display", "inline");
            $("#visitorNameMenu").text(welcomeText);
            $("#userLoginMenu").hide();
            $("#captcha").val('');
            //Analytics
            digitalData.user.hashedUserId = getEncUserId(resp.id);
            digitalData.user.login.loginStatus = "Logged-In";
            _satellite.track('login_completed');
            if (localStorage.userName == undefined && localStorage.userId == undefined) {
                localStorage.setItem("userName", userName);
                localStorage.setItem("userId", userId);
            }
            $("#myProfile").closest('li').remove();
            $("#myFavorites").closest('li').remove();
            $("#myNotifications").closest('li').remove();
            $("#changePassword").closest('li').remove();
            saveUserData(resp, $('#loginType').val());
        });
    });
}
//Save user data to the database
function saveUserData(userData, loginType) {
    if (loginType == "Google") {
        var data = { "methodId": "20", "oauth_provider": "google", "userData": JSON.stringify(userData) };
        postAjaxLogin(data, socialDataSave);
    } else if (loginType == "Facebook") {
        var data = { "methodId": "21", "oauth_provider": "facebook", "userId": userData.id, "firstName": userData.first_name, "lastName": userData.last_name, "email": userData.email };
        postAjaxLogin(data, socialDataSave);
    }

}
function socialDataSave(callbackMsg) {
    console.log(callbackMsg);
}
//google Sign-in failure callback
function onFailure(error) {
    //alert(error);
    $(".loginErrorModal").text("");
    $(".loginErrorModal").text("Login Failed");
    $(".loginErrorModal").show().delay(5000).fadeOut();
}

//goggle Sign out the user
/*function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementsByClassName("userContent")[0].innerHTML = '';
        document.getElementsByClassName("userContent")[0].style.display = "none";
        document.getElementById("gSignIn").style.display = "block";
    });
    
    auth2.disconnect();
}*/
//onclick onchange for affiliate checkbox
$('input[type="radio"]').on('click change', function (e) {
    userType = $('input[name=loginType]:checked').val();
    if (userType == "4" || userType == "2") {
        $('.affliateChek').hide();
        $('.forgotflip').show();
    } else if (userType == "1") {
        $('.affliateChek').show();
    }
    if (userType == "2") {
        $('#fb-btn').show();
        $('#gSignIn').show();
    } else {
        $('#fb-btn').hide();
        $('#gSignIn').hide();
    }
    var affiliateCheck = $('input[name=checkAffiliate]:checked').val();
    if ((userType == "1") && (affiliateCheck == "checked")) {
        $('.forgotflip').hide();
        $('.signuptravelagent').hide();
    } else {
        $('.forgotflip').show();
    }
});
//onclick for affliate checkbox
function affliateOnclick() {
    var affiliateCheck = $('input[name=checkAffiliate]:checked').val();
    userType = $('input[name=loginType]:checked').val();
    if ((userType == "1") && (affiliateCheck == "checked")) {
        $('.forgotflip').hide();
        $('.signuptravelagent').hide();
    } else {
        $('.forgotflip').show();
        $('.signuptravelagent').show();
    }
}
/*Callback for Check User Login Session*/
var checkUser = function checkUser(loginResponseData) {
    if (loginResponseData.responseStatus == "SUCCESS") {
        loginSuccess(loginResponseData);
    } else if (loginResponseData.responseStatus == "FAILURE") {
        $("#visitorNameMenu").hide();
        $("#userLoginMenu").show();
    }
}

/*Implementation of password show/hide goes here*/
$("#password").keyup(function () {
    var length = $("#password").val().length;
    if (length > 0) {
        $("#showPassLogin").show();
    }
});

var inputPassLogin = document.getElementById('password');
inputPassLogin.onkeyup = function () {
    var key = event.keyCode || event.charCode;
    if (key == 8 || key == 46) {
        var length = $("#password").val().length;
        if (length == 0) {
            $("#showPassLogin").hide();
        }
    }
};

$("#visitorPassword").keyup(function () {
    var length = $("#visitorPassword").val().length;
    if (length > 0) {
        $("#showPass").show();
    }
});

var inputPassSignup = document.getElementById('visitorPassword');
inputPassSignup.onkeyup = function () {
    var key = event.keyCode || event.charCode;
    if (key == 8 || key == 46) {
        var length = $("#visitorPassword").val().length;
        if (length == 0) {
            $("#showPass").hide();
        }
    }
};

function showPasswordLogin() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        $("#showPassLogin").removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
        x.type = "password";
        $("#showPassLogin").removeClass("fa-eye-slash").addClass("fa-eye");
    }
}

function showPassword() {
    var x = document.getElementById("visitorPassword");
    if (x.type === "password") {
        x.type = "text";
        $("#showPass").removeClass("fa-eye").addClass("fa-eye-slash");
    } else {
        x.type = "password";
        $("#showPass").removeClass("fa-eye-slash").addClass("fa-eye");
    }
}

/*Login Starts*/

function loginUserHome() {
    $('#loginType').val("Website Login");
    //Remove earlier cookies
    delete_cookie('JSESSIONID');
    //Validate
    var isValid = validateLoginForm();

    if (isValid) {
        password = $('#password').val();
        encPassword = OnEncryptPwd(password);
        $("#password").val(encPassword);
        var userName = $("#userName").val();
        var captcha = $('#captcha').val();
        userType = $('input[name=loginType]:checked').val();
        var affiliateCheck = $('input[name=checkAffiliate]:checked').val();

        if ((userType == "1") && (affiliateCheck == "checked")) {
            affiliatedUserType = 1;
            var data = { "methodId": "19", "userName": userName, "password": encPassword, "captchaValue": captcha };
            postAjaxLogin(data, affiliateloginResponse);
        } else {
            if (userType == "2") { //Visitor
                var data = { "methodId": "1", "userName": userName, "password": encPassword, "captchaValue": captcha };
                postAjaxLogin(data, loginResponse);
            } else if ((userType == "1") || (userType == "4")) { //Travel Agent & Hotelier
                var data = { "methodId": "14", "userName": userName, "password": encPassword, "userType": userType, "captchaValue": captcha };
                postAjaxLogin(data, agentLogin);
            }
        }
    }
}
//Affiliate login callback
function affiliateloginResponse(loginResponseData) {
    $(".loginErrorModal").text("");

    if (loginResponseData.responseStatus == "FAILURE") {
        if (loginResponseData.responseMessage == "INVALID_CAPTCHA") {
            $(".loginErrorModal").text("! Invalid Captcha");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_CAPTCHA");

            $("#password").val('');
            $("#captcha").val('');
        } else if (loginResponseData.responseMessage == "INVALID_USERNAME_PASSWORD") {
            $(".loginErrorModal").text("! Invalid Username or Password");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_USERNAME_PASSWORD");

            $("#userName").val('');
            $("#password").val('');
            $("#captcha").val('');
        } else {
            $(".loginErrorModal").text("! " + loginResponseData.responseMessage);
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", loginResponseData.responseMessage);

            $("#userName").val('');
            $("#password").val('');
            $("#captcha").val('');
        }
        //Reload Captcha
        reloadCaptchaLogin();
    }
    if (loginResponseData.responseStatus == "SUCCESS") {
        //Login Success
        affiliateloginSuccess(loginResponseData);
        //Reload the page
        location.reload();
    }
}
function affiliateloginSuccess(loginResponseData) {
    localStorage.loginStatus = loginResponseData.responseStatus;
    var userName = loginResponseData.userProfile.fullName;
    var userId = loginResponseData.userProfile.userId;
    if (userName.length > 8) {
        userName = userName.substr(0, 8) + "..";
    }
    var welcomeText = "Hello " + userName;
    $("#visitorNameMenu").show();
    $("#visitorNameMenu").css("display", "inline");
    $("#visitorNameMenu").text(welcomeText);
    $("#userLoginMenu").hide();
    $("#captcha").val('');

    if (affiliatedUserType == 1) {
        setTimeout(function () {
            window.location.replace(location.origin + "/content/tourism/en/program-page.html");
        }, 300);
    }
}
//Delete Cookie
var delete_cookie = function (name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

//Login Validation
function validateLoginForm() {
    //Login Form Error Analytics
    formAnalytics("Log In Form", "Submit:Log In");

    var userName = $("#userName").val();
    var password = $('#password').val();
    var captcha = $('#captcha').val();
    var message;

    //Blank Check
    if (userName == '') {
        message = "Blank Username";
        $("#userName").focus();
        $("#userNameRequired").text("* This field is required");
        $("#userNameRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    } else if (userName != '') {
        var isValid = validateEmail(userName);

        if (!isValid) {
            message = "Invalid Email";
            $("#userName").focus();
            $("#userNameRequired").text("Invalid email format");
            $("#userNameRequired").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", message);

            return false;
        } else {
            $("#userNameRequired").hide();
            $("#userNameRequired").text("* This field is required");
        }
    }

    if (password == '') {
        message = "Blank Password";
        $("#password").focus();
        $("#passwordRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    } else if (captcha == '') {
        message = "Blank Captcha";
        $("#captcha").focus();
        $("#captchaRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    }

    return true;
}

//Validate Email on Keyup
$("#userName").keyup(function () {
    var userName = $("#userName").val();
    if (userName != '') {
        var isValid = validateEmail(userName);

        if (!isValid) {
            message = "Invalid Email";
            $("#userName").focus();
            $("#userNameRequired").text("Invalid email format");
            $("#userNameRequired").show().delay(5000).fadeOut();
        } else {
            $("#userNameRequired").hide();
            $("#userNameRequired").text("* This field is required");
        }
    }
});

$("#taEmail").keyup(function () {
    var taEmail = $("#taEmail").val();
    if (taEmail != '') {
        var isValid = validateEmail(taEmail);

        if (!isValid) {
            message = "Invalid Email";
            $("#taEmail").focus();
            $("#taEmailRequired").text("Invalid email format");
            $("#taEmailRequired").show().delay(5000).fadeOut();
        } else {
            $("#taEmailRequired").hide();
            $("#taEmailRequired").text("* This field is required");
        }
    }
});

//Callback Visitor Login
var loginResponse = function loginResponse(loginResponseData) {
    //Analytics
    formAnalytics("Log In Form", "Submit:Log In");

    $(".loginErrorModal").text("");

    if (loginResponseData.responseStatus == "FAILURE") {
        if (loginResponseData.responseMessage == "INVALID_CAPTCHA") {
            $(".loginErrorModal").text("! Invalid Captcha");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_CAPTCHA");

            $("#password").val('');
            $("#captcha").val('');
        } else if (loginResponseData.responseMessage == "INVALID_USERNAME_PASSWORD") {
            $(".loginErrorModal").text("! Invalid Username or Password");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_USERNAME_PASSWORD");

            $("#userName").val('');
            $("#password").val('');
            $("#captcha").val('');
        } else {
            $(".loginErrorModal").text("! " + loginResponseData.responseMessage);
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", loginResponseData.responseMessage);

            $("#userName").val('');
            $("#password").val('');
            $("#captcha").val('');
        }
        //Reload Captcha
        reloadCaptchaLogin();
    }
    if (loginResponseData.responseStatus == "SUCCESS") {
        //-----to prevent usercheck on page load for social login in header.js-----//
        localStorage.setItem("LoginType", "Website Login");
        //Login Success
        loginSuccess(loginResponseData);

        /*if(affiliatedUserType == 1){
            window.location.href=location.origin+"/content/tourism/en/program-page.html";
        }*/
        //Reload the page
        location.reload();
    }
}

//Visitor Login Success
function loginSuccess(loginResponseData) {
    localStorage.loginStatus = loginResponseData.responseStatus;
    var userName = loginResponseData.userProfile.fullName;
    var userId = loginResponseData.userProfile.userId;
    if (userName.length > 8) {
        userName = userName.substr(0, 8) + "..";
    }
    var welcomeText = "Hello " + userName;
    $("#visitorNameMenu").show();
    $("#visitorNameMenu").css("display", "inline");
    $("#visitorNameMenu").text(welcomeText);
    $("#userLoginMenu").hide();
    $("#captcha").val('');
    //Analytics
    digitalData.user.hashedUserId = getEncUserId(loginResponseData.userProfile.userId);
    digitalData.user.login.loginStatus = "Logged-In";
    _satellite.track('login_completed');
    if (localStorage.userName == undefined && localStorage.userId == undefined) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("userId", userId);
    }
    if (localStorage.pageName != undefined && localStorage.pageName == "TRAIL") {
        var data = { "userId": userId, "userType": "2", "agentId": localStorage.agentid, "agentType": "1", "tourId": localStorage.tourId, "PAGE": "TRAIL_TOURS", "methodParam": "saveEnquiry", "message": localStorage.message };
        postAjaxAfterSave(data, inquiryData);
    }
}
//****************added for trail section
function postAjaxAfterSave(data, callback) {
    $.ajax({
        type: 'POST',
        url: '/tourism/trailtour',
        data: data,
        success: function (data) {
            callback(data);
        },
        error: function (xhr) {
            console.log(xhr.status);
            //alert("Technical Error");
        }
    });
}
var inquiryData = function inquiryData(jsonResponse) {
    if (jsonResponse == 'SAVED') {
        //location.reload();
        //$('#alertModalMsg').modal('hide');
        $('#alertModalTrail').modal('show');
        setTimeout(function () {
            localStorage.removeItem("pageName");
            localStorage.removeItem("agentid");
            localStorage.removeItem("tourId");
            localStorage.removeItem("message");
        }, 200);
    }
}
// Callback TA & Hotelier Login
var agentLogin = function agentLogin(agentLoginResponse) {
    //Analytics
    formAnalytics("Log In Form", "Submit:Log In");

    $(".loginErrorModal").text("");

    if (agentLoginResponse.responseStatus == "FAILURE") {
        if (agentLoginResponse.responseMessage == "INVALID_CAPTCHA") {
            $(".loginErrorModal").text("! Invalid Captcha");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_CAPTCHA");

            $("#password").val('');
            $("#captcha").val('');
        } else if (agentLoginResponse.responseMessage == "INVALID_USERNAME_PASSWORD") {
            $(".loginErrorModal").text("! Invalid Username or Password");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_USERNAME_PASSWORD");

            $("#userName").val('');
            $("#password").val('');
            $("#captcha").val('');
        } else if (agentLoginResponse.responseMessage == "USER_INACTIVE") {
            $(".loginWarningModal").show().delay(15000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "USER_INACTIVE");

            $("#userName").val('');
            $("#password").val('');
            $("#captcha").val('');
        }
        //Reload Captcha
        reloadCaptchaLogin();
    }
    if (agentLoginResponse.responseStatus == "SUCCESS") {
        var queryParam = agentLoginResponse.responseMessage;
        if (queryParam != undefined) {
            window.location.href = location.origin + "/tourism/agentLogin?randomLogin=" + queryParam;
        } else {
            $(".loginErrorModal").text("! Unable to Proceed. Try again later.");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            $("#userName").val('');
            $("#password").val('');
            $("#captcha").val('');
            $(".loginErrorModal").text("");
            //Reload Captcha
            reloadCaptchaLogin();
        }
    }
}



/*Login Ends*/

/*Logout Starts*/

function logoutUser() {
    var socialLoginType = $('#loginType').val();

    if (socialLoginType == "Facebook") {
        FB.logout(function (response) {

        });
    }
    var logoutData = { "methodId": "4" };
    postAjaxLogin(logoutData, usrlogout);
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    $('#livefyreComment').val('');

    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById("gSignIn").style.display = "block";
    });

    auth2.disconnect();
}

//Logout Callback
var usrlogout = function usrlogout(logoutResponse) {
    if (logoutResponse.responseStatus == "SUCCESS") {

        delete_cookie('JSESSIONID');

        $("#userLoginMenu").show();
        $("#visitorNameMenu").hide();
        $("#VisitorList").collapse('hide');
        //Analytics
        digitalData.user.hashedUserId = hashedUserIdAna;
        digitalData.user.login.loginStatus = "Logged-Out";
        deleteObject();
        _satellite.track('logouts');

        if (currentPageHeader == 'program-page' || currentPageHeader == 'training-program' || currentPageHeader == 'affiliate-program') {
            setTimeout(function () {
                window.location.replace(location.origin + "/content/tourism/en/program-page.html");
            }, 300);
        }
        location.reload();
    } else if (logoutResponse.responseStatus == "FAILURE") {
        if (logoutResponse.responseMessage == "ACTIVE_USER_SESSION_NO") {

            delete_cookie('JSESSIONID');

            $("#userLoginMenu").show();
            $("#visitorNameMenu").hide();
            $("#VisitorList").collapse('hide');
            reloadCaptchaLogin();
        } else {
            alert("Unable to proceed. Try again later.");
            //Analytics
            formErrorAnalytics("Custom Error", "Unable to proceed. Try again later.");
        }
    }
}

/*Logout Ends*/


/* Password Encryption */

function OnEncryptPwd(normalPass) {
    var encPassword = makeid() + btoa(normalPass) + makeid();
    return encPassword;
}

function getEncUserId(userId) {
    var encUserId = btoa(userId);
    return encUserId;
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

/* Captcha Reload */

function reloadCaptchaLogin() {
    //Analytics
    customLinkClickAnalytics(currentPageHeader + " :Header : Reset Captcha", "Reset");

    var d = new Date();
    $('#captchaImageLogin').attr('src', location.origin + '/tourism/captcha?a=' + d.getTime());
    $('#captcha').val('');
}

/* RegEx Variables */
var regexPhone = new RegExp(/^(?=.*\d)(?=.*[1-9]).{1,10}$/gm);

/* Email Validation */
function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) {
        return false;
    }
    return true;
}

/* Phone Validation */
function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.match(regexPhone)) {
        return true;
    } else {
        return false;
    }
}

/* Password Validation - Min 6, Max 10, Min 1 Alphabet, Min 1 Number, Min 1 Special Character */
function validatePassword(password) {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    return regularExpression.test(password);
}

/*Sign Up Starts*/

function signupVisitor() {
    //Analytics
    delete digitalData.linkClick;
    delete digitalData.filter;

    var x = document.getElementById("visitorPassword");
    if (x.type === "text") {
        x.type = "password";
    }

    //Validate Sign up form
    var isValid = validateSignUpForm();

    if (isValid) {
        var visitorName = $("#visitorName").val();
        var visitorEmail = $("#visitorEmail").val();
        var visitorPhone = $("#visitorPhone").val();
        var visitorPassword = $("#visitorPassword").val();
        var visitorConfirmPassword = $("#visitorConfirmPassword").val();

        var encPassword = OnEncryptPwd(visitorPassword);
        $("#visitorPassword").val(encPassword);
        var encConfirmPassword = OnEncryptPwd(visitorConfirmPassword);
        $("#visitorConfirmPassword").val(encConfirmPassword);
        var captcha = $('#captcha').val();

        var data = { "methodId": "3", "visitorName": visitorName, "visitorEmail": visitorEmail, "visitorPhone": visitorPhone, "visitorPassword": encPassword, "visitorConfirmPassword": encConfirmPassword, "captchaValue": captcha, "type": "user" };
        postAjaxLogin(data, signupResponse);
    }
}

// Sign Up Validation
function validateSignUpForm() {
    //Analytics
    formAnalytics("Sign Up Form", "Submit:Sign Up");

    var visitorName = $("#visitorName").val();
    var visitorEmail = $("#visitorEmail").val();
    var visitorPhone = $("#visitorPhone").val();
    var visitorPassword = $("#visitorPassword").val();
    var visitorConfirmPassword = $("#visitorConfirmPassword").val();
    var captcha = $('#captcha').val();
    var message;

    // Blank Check
    if (visitorName == '') {
        message = "Blank Visitor Name";
        $("#visitorName").focus();
        $("#visitorNameRequired").text("* This field is required");
        $("#visitorNameRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    } else if (visitorEmail == '') {
        message = "Blank Visitor Email";
        $("#visitorEmail").focus();
        $("#visitorEmailRequired").text("* This field is required");
        $("#visitorEmailRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    } else if (visitorEmail != '') {
        var isValid = validateEmail(visitorEmail);

        if (!isValid) {
            message = "Invalid Email";
            $("#visitorEmail").focus();
            $("#visitorEmailRequired").text("Invalid email format");
            $("#visitorEmailRequired").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", message);

            return false;
        } else {
            $("#visitorEmailRequired").hide();
            $("#visitorEmailRequired").text("* This field is required");
        }
    }

    if (visitorPhone == '') {
        message = "Blank Visitor Phone";
        $("#visitorPhone").focus();
        $("#visitorPhoneRequired").text("* This field is required");
        $("#visitorPhoneRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    }

    if (visitorPhone != '') {
        var isValid = validatePhoneNumber(visitorPhone);

        if (!isValid) {
            message = "Invalid Phone Number";
            $("#visitorPhone").focus();
            $("#visitorPhoneRequired").text("* Invalid phone number");
            $("#visitorPhoneRequired").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", message);

            return false;
        } else {
            $("#visitorPhoneRequired").hide();
            $("#visitorPhoneRequired").text("* This field is required");
        }
    }

    if (visitorPassword == '') {
        message = "Blank Visitor Password";
        $("#visitorPassword").focus();
        $("#visitorPasswordRequired").text("* This field is required");
        $("#visitorPasswordRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    } else if (visitorConfirmPassword == '') {
        message = "Blank Visitor Confirm Password";
        $("#visitorConfirmPassword").focus();
        $("#visitorConfirmPasswordRequired").text("* This field is required");
        $("#visitorConfirmPasswordRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    } else if (captcha == '') {
        message = "Blank Captcha";
        $("#captcha").focus();
        $("#captchaRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    }

    /*if($("#termsCheckbox").prop('checked') == false) {
        message="Accept Terms & Conditions";
        $(".required--field").css("top", "55px");
        $("#termsRequired").show().delay(5000).fadeOut();
        setTimeout(function() {
            $(".required--field").css("top", "41px");
        }, 7000);
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    }*/


    if (visitorPassword != '') {
        var isValid = validatePassword(visitorPassword);
        if (!isValid) {
            message = "Invalid password format";
            $("#visitorPassword").focus();
            $("#visitorPasswordRequired").text("* Invalid password format");
            $("#visitorPasswordRequired").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", message);

            return false;
        }
    }

    if ((visitorConfirmPassword != '') || (visitorPassword != '')) {
        if (visitorPassword != visitorConfirmPassword) {
            message = "Password and Confirm Password should be same";
            $("#visitorConfirmPassword").focus();
            $("#visitorConfirmPasswordRequired").text("* Passwords do not match");
            $("#visitorConfirmPasswordRequired").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", message);
            return false;
        } else {
            $("#visitorConfirmPasswordRequired").hide();
            $("#visitorConfirmPasswordRequired").text("* This field is required");
        }
    }

    return true;
}

//Email validation key up
$("#visitorEmail").keyup(function () {
    var visitorEmail = $("#visitorEmail").val();
    if (visitorEmail != '') {
        var isValid = validateEmail(visitorEmail);

        if (!isValid) {
            message = "Invalid Email";
            $("#visitorEmail").focus();
            $("#visitorEmailRequired").text("Invalid email format");
            $("#visitorEmailRequired").show().delay(5000).fadeOut();
        } else {
            $("#visitorEmailRequired").hide();
            $("#visitorEmailRequired").text("* This field is required");
        }
    }
});

//Phone Validation Key Up
$('#visitorPhone').keypress(function (event) {
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regexPhone.test(key)) {
        event.preventDefault();
        return false;
    }
});

//Password validation key up
$("#visitorPassword").keyup(function () {
    var visitorPassword = $("#visitorPassword").val();
    if (visitorPassword != '') {
        var isValid = validatePassword(visitorPassword);

        if (!isValid) {
            message = "Invalid password format";
            $("#visitorPassword").focus();
            $("#visitorPasswordRequired").text("* Invalid password format");
            $("#visitorPasswordRequired").show().delay(5000).fadeOut();
        } else {
            $("#visitorPasswordRequired").hide();
            $("#visitorPasswordRequired").text("* This field is required");
        }
    }
});

//Confirm password validation key up
$("#visitorConfirmPassword").keyup(function () {
    var visitorPassword = $("#visitorPassword").val();
    var visitorConfirmPassword = $("#visitorConfirmPassword").val();
    if (visitorConfirmPassword != '') {
        if (visitorPassword != visitorConfirmPassword) {
            message = "Password and Confirm Password should be same";
            $("#visitorConfirmPassword").focus();
            $("#visitorConfirmPasswordRequired").text("* Passwords do not match");
            $("#visitorConfirmPasswordRequired").show().delay(5000).fadeOut();
            return false;
        } else {
            $("#visitorConfirmPasswordRequired").hide();
            $("#visitorConfirmPasswordRequired").text("* This field is required");
        }
    }
});

// Check Duplicate email ID
$("#visitorEmail").blur(function () {
    var visitorEmail = $("#visitorEmail").val();

    if (visitorEmail != '') {
        $("#loaderEmail").show();
        var data = { "methodId": "16", "visitorEmail": visitorEmail };

        setTimeout(function () {
            $.ajax({
                type: 'POST',
                url: '/tourism/auth',
                data: data,
                dataType: "json",
                async: false,
                success: function (data) {
                    $("#loaderEmail").hide();
                    var jsonResponse;
                    if (data == '') {
                        //alert("FORWARD TO ERROR");
                    } else {
                        if (typeof data === 'string') {
                            jsonResponse = JSON.parse(data);
                        } else {
                            jsonResponse = data;
                        }
                    }
                    if (jsonResponse.responseStatus == "FAILURE") {
                        $(".loginWarningModal").text("! This Email ID is registered with us. Please Sign In");
                        $(".loginWarningModal").show().delay(5000).fadeOut();
                        //Analytics
                        formAnalytics("Sign Up Form", "Submit:Sign Up");
                        formErrorAnalytics("Custom Error", "This Email ID is registered with us. Please Sign In");

                        $("#visitorEmail").val('');
                        $("#visitorEmail").focus();
                    } else {
                        $(".loginWarningModal").text('');
                    }
                },
                error: function (xhr) {
                    console.log(xhr.status);
                    $("#loaderEmail").hide();
                }
            });
        }, 1000);
    }
});

//Callback for Sign Up
function signupResponse(signupResponseData) {
    $("#showPass").hide();
    if (signupResponseData.responseStatus == "FAILURE") {
        if (signupResponseData.responseMessage == "INVALID_CAPTCHA") {
            $(".loginErrorModal").text("! Invalid Captcha");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_CAPTCHA");

            $("#visitorPassword").val('');
            $("#visitorConfirmPassword").val('');
            $('#captcha').val('');
        } else if (signupResponseData.responseMessage == "USER_EXISTS") {
            $(".loginWarningModal").text("! This Email ID is registered with us. Please Sign In");
            $(".loginWarningModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "USER_EXISTS");

            $("#visitorName").val('');
            $("#visitorEmail").val('');
            $("#visitorPhone").val('');
            $("#visitorPassword").val('');
            $("#visitorConfirmPassword").val('');
            $('#captcha').val('');
        } else {
            var message;
            if (signupResponseData.responseMessage == undefined) {
                message = " Unable to proceed. Try again later."
            } else {
                message = signupResponseData.responseMessage;
            }

            $(".loginErrorModal").text("! " + message);
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", message);

            $("#visitorName").val('');
            $("#visitorEmail").val('');
            $("#visitorPhone").val('');
            $("#visitorPassword").val('');
            $("#visitorConfirmPassword").val('');
            $('#captcha').val('');
        }
        //Reload the captcha
        reloadCaptchaLogin();
    }
    if (signupResponseData.responseStatus == "SUCCESS") {
        if (signupResponseData.responseMessage == "USER_REGISTER_SUCCESS_WITHOUT_MAIL") {
            $(".loginSuccessModal").text("Registration Successfull. Unable to verify your email.");
            $(".loginSuccessModal").show().delay(5000).fadeOut();
        }
        $(".loginSuccessModal").text("Registration Successfull. Check your email.");
        $(".loginSuccessModal").show().delay(5000).fadeOut();
        //Analytics
        _satellite.track('registration_completed');
        _satellite.track('login_starts');

        setTimeout(function () {
            //Login the user
            loginSuccess(signupResponseData);
        }, 12000);

        if (localStorage.pageName != undefined && localStorage.pageName == "TRAIL") {
            var data = { "userId": userId, "userType": "2", "agentId": localStorage.agentid, "agentType": "1", "tourId": localStorage.tourId, "PAGE": "TRAIL_TOURS", "methodParam": "saveEnquiry", "message": localStorage.message };
            postAjaxAfterSave(data, inquiryData);
        }

        if (document.getElementById("livefyreComment").value == 'livefyreActive') {
            localStorage.setItem("userName", signupResponseData.userProfile.fullName);
            localStorage.setItem("userId", signupResponseData.userProfile.userId);
        }

        //Reload the page
        location.reload();
    }
}
/*Sign Up Ends*/

/* Forgot Password Starts */

function forgotPasswordUser() {
    var userEmail = $("#userEmail").val();
    var captcha = $('#captcha').val();
    var userType = $('input[name=loginType]:checked').val();
    //Validate Form
    var isValid = validateForgotPasswordForm();
    if (isValid) {
        var data = { "methodId": "5", "userEmail": userEmail, "captchaValue": captcha, "userType": userType };
        postAjaxLogin(data, forgotPasswordMethod);
    }
}

function validateForgotPasswordForm() {
    //Analytics
    formAnalytics("Forgot PassWord Form", "Submit:Forgot PassWord");

    var loginType = $('input[name=loginType]:checked').val();
    var userEmail = $("#userEmail").val();
    var captcha = $('#captcha').val();
    var message;

    /* Blank Check */

    if (userEmail == '') {
        message = "Blank Email";
        $("#userEmail").focus();
        $("#userEmailRequired").text("* This field is required");
        $("#userEmailRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    } else if (userEmail != '') {
        var isValid = validateEmail(userEmail);

        if (!isValid) {
            message = "Invalid Email";
            $("#userEmail").focus();
            $("#userEmailRequired").text("Invalid email format");
            $("#userEmailRequired").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", message);

            return false;
        } else {
            $("#userEmailRequired").hide();
            $("#userEmailRequired").text("* This field is required");
        }
    }

    if (captcha == '') {
        message = "Blank Captcha";
        $("#captcha").focus();
        $("#captchaRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    }

    return true;
}

//Email validation key up
$("#userEmail").keyup(function () {
    var userEmail = $("#userEmail").val();
    if (userEmail != '') {
        var isValid = validateEmail(userEmail);

        if (!isValid) {
            message = "Invalid Email";
            $("#userEmail").focus();
            $("#userEmailRequired").text("Invalid email format");
            $("#userEmailRequired").show().delay(5000).fadeOut();
        } else {
            $("#userEmailRequired").hide();
            $("#userEmailRequired").text("* This field is required");
        }
    }
});

//Callback For forgot password
var forgotPasswordMethod = function forgotPasswordResponse(forgotPasswordResponseData) {
    if (forgotPasswordResponseData.responseStatus == "SUCCESS") {
        $(".loginSuccessModal").text(forgotPasswordResponseData.userMessage);
        $(".loginSuccessModal").show().delay(5000).fadeOut();
        //Analytics
        formSubmitAnalytics("Forgot Password Form", "Submit:Forgot Password");

        $("#captcha").val('');
        $("#userEmail").val('');
    } else if (forgotPasswordResponseData.responseStatus == "FAILURE") {
        if (forgotPasswordResponseData.responseMessage == "INVALID_CAPTCHA") {
            $(".loginErrorModal").text("! Invalid Captcha");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_CAPTCHA");

            $("#captcha").val('');
        } else {
            $(".loginErrorModal").text("! " + forgotPasswordResponseData.userMessage);
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", forgotPasswordResponseData.userMessage);

            $("#captcha").val('');
            $("#userEmail").val('');
        }
    }
    reloadCaptchaLogin();
}

/* Forgot Password Ends */

/* Activate Travel Agent Starts */

function activateTA() {
    var taEmail = $("#taEmail").val();
    var captcha = $('#captcha').val();
    var isValid = validateActivationTA();
    if (isValid) {
        var data = { "methodId": "13", "taEmail": taEmail, "captchaValue": captcha };
        postAjaxLogin(data, travelAgentActivation);
    }
}

function validateActivationTA() {
    //Analytics
    formAnalytics("Forgot PassWord Form", "Submit:Activate Travel Agent");

    var taEmail = $("#taEmail").val();
    var captcha = $('#captcha').val();
    var message;

    /* Blank Check */

    if (taEmail == '') {
        message = "Blank Email";
        $("#taEmail").focus();
        $("#taEmailRequired").text("* This field is required");
        $("#taEmailRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    } else if (taEmail != '') {
        var isValid = validateEmail(taEmail);

        if (!isValid) {
            message = "Invalid Email";
            $("#taEmail").focus();
            $("#taEmailRequired").text("Invalid email format");
            $("#taEmailRequired").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", message);

            return false;
        } else {
            $("#taEmailRequired").hide();
            $("#taEmailRequired").text("* This field is required");
        }
    }

    if (captcha == '') {
        message = "Blank Captcha";
        $("#captcha").focus();
        $("#captchaRequired").show().delay(5000).fadeOut();
        //Analytics
        formErrorAnalytics("Field Error", message);

        return false;
    }

    return true;
}

//Email validation key up
$("#taEmail").keyup(function () {
    var taEmail = $("#taEmail").val();
    if (taEmail != '') {
        var isValid = validateEmail(taEmail);

        if (!isValid) {
            message = "Invalid Email";
            $("#taEmail").focus();
            $("#taEmailRequired").text("Invalid email format");
            $("#taEmailRequired").show().delay(5000).fadeOut();
        } else {
            $("#taEmailRequired").hide();
            $("#taEmailRequired").text("* This field is required");
        }
    }
});

//Callback for activateTA
function travelAgentActivation(activationResponseData) {
    if (activationResponseData.responseStatus == "SUCCESS") {
        $(".loginSuccessModal").text(activationResponseData.userMessage);
        $(".loginSuccessModal").show().delay(5000).fadeOut();
        //Analytics
        formSubmitAnalytics("Travel Agent Activation Form", "Submit:Activate Travel Agent");

        $("#captcha").val('');
        $("#taEmail").val('');
    } else if (activationResponseData.responseStatus == "FAILURE") {
        if (activationResponseData.responseMessage == "INVALID_CAPTCHA") {
            $(".loginErrorModal").text("! Invalid Captcha");
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", "INVALID_CAPTCHA");

            $("#captcha").val('');
        } else {
            $(".loginErrorModal").text("! " + activationResponseData.userMessage);
            $(".loginErrorModal").show().delay(5000).fadeOut();
            //Analytics
            formErrorAnalytics("Field Error", activationResponseData.userMessage);

            $("#captcha").val('');
            $("#taEmail").val('');
        }
    }
    reloadCaptchaLogin();
}

/* Activate Travel Agent Ends */

/* Common AJAX goes here */
function postAjaxLogin(data, callback) {
    $("#loaderLogin").show();
    $("#loaderForgetLogin").show();
    $("#loaderSignupLogin").show();
    $("#btnLogin").addClass("disabled");
    $("#btnForgotPassword").addClass("disabled");
    $("#btnSignUp").addClass("disabled");

    setTimeout(function () {
        $.ajax({
            type: 'POST',
            url: '/tourism/auth',
            data: data,
            dataType: "json",
            async: false,
            success: function (data) {
                $("#loaderLogin").hide();
                $("#loaderForgetLogin").hide();
                $('#loaderSignupLogin').hide();
                $("#btnLogin").removeClass("disabled");
                $("#btnForgotPassword").removeClass("disabled");
                $("#btnSignUp").removeClass("disabled");

                var jsonResponse;

                if (data == '') {
                    //alert("FORWARD TO ERROR");
                } else {
                    if (typeof data === 'string') {
                        jsonResponse = JSON.parse(data);
                    } else {
                        jsonResponse = data;
                    }
                }
                callback(jsonResponse);
            },
            error: function (xhr) {
                console.log(xhr.status);
                $("#loaderLogin").hide();
                $("#loaderForgetLogin").hide();
                $('#loaderSignupLogin').hide();
                $("#btnLogin").removeClass("disabled");
                $("#btnForgotPassword").removeClass("disabled");
                $("#btnSignUp").removeClass("disabled");
            }
        });
    }, 100);

}



function  openHeader() {
    $('.curtain-menu').addClass('showMenu');
}