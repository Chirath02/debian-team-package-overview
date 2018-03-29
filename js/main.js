

$("#description").popover({
        trigger: "manual" ,
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
        }, 300);
});


$('#ready-to-upload-table').on('hide.bs.collapse', function () {
  var icon = document.getElementById('ready-to-upload-arrow');
  icon.classList.remove('fa-chevron-up');
  icon.classList.add('fa-chevron-down');
});


$('#ready-to-upload-table').on('show.bs.collapse', function () {
  var icon = document.getElementById('ready-to-upload-arrow');
  icon.classList.remove('fa-chevron-down');
  icon.classList.add('fa-chevron-up');
});

