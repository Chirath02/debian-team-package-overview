$(".popover-hover").popover({
    trigger: "manual",
    html: true,
    animation: true
}).on("mouseenter", function () {
    var _this = this;
    $(this).popover("show");
    $(".popover").on("mouseleave", function () {
        $(_this).popover('hide');
    });
}).on("mouseleave", function () {
    var _this = this;
    setTimeout(function () {
        if (!$(".popover:hover").length) {
            $(_this).popover("hide");
        }
    }, 100);
});



$('.toggle').on('click', function (e) {
    var icon = e.target;
    if (icon.classList.contains('fa-chevron-up')) {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
    else {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
});
