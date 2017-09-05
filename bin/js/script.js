$(function () {
    function t(t) {
        console.log(t)
    }

    $('.fbx').fancybox();

    var e, i, a = /((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/, n = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var r = "", o = [], l = !1, d = !1;
    $("form").ajaxForm({
        clearForm: !0, resetForm: !0, beforeSubmit: function (e, i) {
            $("input").removeClass("err-form"), l = !1, o[0] = i.find(".submit"), o[1] = i.find(".submit").text(), i.addClass("dis");
            var s = new RegExp("^[-0-9a-z._]+@[-0-9a-z.]+.[a-z]{2,4}$", "i"), c = "";
            for (var m in e) {
                if ("phone" == e[m].name && !a.test(e[m].value))return i.removeClass("dis").find('input[name="phone"]').addClass("err-form invalid"), !1;
                if ("phone" == e[m].name && "" == e[m].value)return i.removeClass("dis").find('input[name="phone"]').addClass("err-form"), !1;
                if ("city" == e[m].name && "" == e[m].value)return i.removeClass("dis").find('input[name="city"]').addClass("err-form"), !1;
                if ("phone" == e[m].name && "" != e[m].value)for (var u = 0; u <= 9; u++)if (c = new RegExp(u.toString() + u.toString() + u.toString() + u.toString() + u.toString() + u.toString() + u.toString()), c.test(e[m].value))return i.removeClass("dis").find('input[name="phone"]').addClass("err-form"), !1;
                if ("name" == e[m].name && "" == e[m].value)return i.removeClass("dis").find('input[name="name"]').addClass("err-form"), !1;
                if ("email" == e[m].name && "" != e[m].value && !s.test(e[m].value))return i.removeClass("dis").find('input[name="email"]').addClass("err-form"), !1;
                if ("email" == e[m].name && !n.test(e[m].value))return i.removeClass("dis").find('input[name="phone"]').addClass("err-form invalid"), !1;
                "target" == e[m].name && (r = e[m].value), "dwnld" == e[m].name && (l = !0, t(l)), "sendmail" == e[m].name && (d = !0, mailInput = $(i).find("[name='email']"), t(mailInput), n.test(mailInput.val()) ? $("#thnx2-a").click() : mailInput.addClass("err-form"))
            }
            return !0
        }, success: function () {
            if (l) {
                var t = document.getElementById("dwnld");
                onload = t.click(), l = !1
            }
            console.log("THENKU"), d ? d = !1 : $("#thnx-a").click()
        }
    });

    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".sec1-slider .slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prevArrow",
        nextArrow: ".nextArrow"
    });

    $(".sec3-slider .slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prevArrow3",
        nextArrow: ".nextArrow3"
    });

    $(".food-slider .slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prevArrow4",
        nextArrow: ".nextArrow4"
    });

    $(".tables-slider .slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prevArrow6",
        nextArrow: ".nextArrow6"
    });

    $(".chairs-slider .slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prevArrow7",
        nextArrow: ".nextArrow7"
    });

    $(".stools-slider .slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prevArrow8",
        nextArrow: ".nextArrow8"
    });

    $(".sec5-slider .slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ".prevArrow5",
        nextArrow: ".nextArrow5"
    });

    $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
    });

    $(".tables-slider, .chairs-slider, .stools-slider").addClass("slider-none");

    $(".tab").click(function () {
        if(!($(this).hasClass("tab-active")) ){
            $(".food-slider, .tables-slider, .chairs-slider, .stools-slider").addClass("slider-none");
            $(".control-text").addClass(".control-none");
            $(".tab.tab-active").removeClass("tab-active");
            $(this).addClass("tab-active");
            $($(this).attr("href")).removeClass("slider-none");
        }
        return false;
    });
});