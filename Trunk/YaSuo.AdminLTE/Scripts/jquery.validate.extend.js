
$.validator.setDefaults({
    ignore: ".ignore"
    , errorElement: "em"
    , onfocusin: function (element) { $(element).valid(); }
    , onfocusout: function (element) { $(element).valid(); }
    , errorPlacement: function (error, element) { }
    , highlight: function (element, errorClass, validClass) {
        $(element).parents(".form-group").removeClass("has-success").addClass("has-error")
            .find(".help-block i").removeClass("fa-bell-o").removeClass("fa-check").addClass("fa-times-circle-o");
    }
    , unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".form-group").removeClass("has-error").addClass("has-success")
            .find(".help-block i").removeClass("fa-bell-o").removeClass("fa-times-circle-o").addClass("fa-check");
    }
});


