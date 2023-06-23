jQuery(
  (function ($) {
    "use strict";
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 50) {
        $(".main-nav").addClass("menu-shrink");
      } else {
        $(".main-nav").removeClass("menu-shrink");
      }
    });
    jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
    $(".home-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      smartSpeed: 1000,
      autoplay: false,
      autoplayTimeout: 9000,
      autoplayHoverPause: true,
      navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>",
      ],
    });
    $(".testimonial-slider").owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      dots: false,
      smartSpeed: 1000,
      animateOut: "fadeOut",
      autoplay: false,
      autoplayTimeout: 9000,
      autoplayHoverPause: true,
      navText: [
        "<i class='icofont-simple-left'></i>",
        "<i class='icofont-simple-right'></i>",
      ],
    });
    $(".search-toggle").addClass("closed");
    $(".search-toggle .search-icon").on("click", function (e) {
      if ($(".search-toggle").hasClass("closed")) {
        $(".search-toggle").removeClass("closed").addClass("opened");
        $(".search-toggle, .search-area").addClass("opened");
        $("#search-terms").focus();
      } else {
        $(".search-toggle").removeClass("opened").addClass("closed");
        $(".search-toggle, .search-area").removeClass("opened");
      }
    });
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: true,
      focusOnSelect: true,
      prevArrow: false,
      nextArrow: false,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: true,
      responsive: [
        { breakpoint: 3000, setting: { slidesToShow: 3 } },
        { breakpoint: 1400, setting: { slidesToShow: 2 } },
        { breakpoint: 800, setting: { slidesToShow: 1 } },
      ],
    });
    $(".odometer").appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
    $(".popup-youtube").magnificPopup({
      disableOn: 300,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
    $(".accordion > li:eq(0) .faq-head").addClass("active").next().slideDown();
    $(".accordion .faq-head").on("click", function (j) {
      var dropDown = $(this).closest("li").find(".faq-content");
      $(this)
        .closest(".accordion")
        .find(".faq-content")
        .not(dropDown)
        .slideUp(300);
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this)
          .closest(".accordion")
          .find(".faq-head.active")
          .removeClass("active");
        $(this).addClass("active");
      }
      dropDown.stop(false, true).slideToggle(300);
      j.preventDefault();
    });
    let getDaysId = document.getElementById("days");
    if (getDaysId !== null) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      let countDown = new Date("September 22, 2023 00:00:00").getTime();
      setInterval(function () {
        let now = new Date().getTime();
        let distance = countDown - now;
        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, second);
    }
    jQuery(window).on("load", function () {
      jQuery(".loader").fadeOut(500);
    });
    new WOW().init();
    $("body").append(
      '<div id="toTop" class="back-to-top-btn"><i class="icofont-hand-drawn-up"></i></div>'
    );
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $("#toTop").fadeIn();
      } else {
        $("#toTop").fadeOut();
      }
    });
    $("#toTop").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 900);
      return false;
    });
    $(".newsletter-form")
      .validator()
      .on("submit", function (event) {
        if (event.isDefaultPrevented()) {
          formErrorSub();
          submitMSGSub(false, "Please enter your email correctly.");
        } else {
          event.preventDefault();
        }
      });
    function callbackFunction(resp) {
      if (resp.result === "success") {
        formSuccessSub();
      } else {
        formErrorSub();
      }
    }
    function formSuccessSub() {
      $(".newsletter-form")[0].reset();
      submitMSGSub(true, "Thank you for subscribing!");
      setTimeout(function () {
        $("#validator-newsletter").addClass("hide");
      }, 4000);
    }
    function formErrorSub() {
      $(".newsletter-form").addClass("animated shake");
      setTimeout(function () {
        $(".newsletter-form").removeClass("animated shake");
      }, 1000);
    }
    function submitMSGSub(valid, msg) {
      if (valid) {
        var msgClasses = "validation-success";
      } else {
        var msgClasses = "validation-danger";
      }
      $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
      url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
      callback: callbackFunction,
    });
  })(jQuery)
);

const logoLight = document.querySelector(".icon-light");
const logoDark = document.querySelector(".icon-dark");
function setTheme(themeName) {
  localStorage.setItem("medsev_theme", themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("medsev_theme") === "theme-dark") {
    setTheme("theme-light");
    logoDark.style.display = "none";
    logoLight.style.display = "block";
  } else {
    setTheme("theme-dark");
    logoLight.style.display = "none";
    logoDark.style.display = "block";
  }
}
(function () {
  if (localStorage.getItem("medsev_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
