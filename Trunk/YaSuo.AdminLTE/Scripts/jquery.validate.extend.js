(function ($, window, undefined) {

    var selector = {
        IgnoreElement: ".ignore, .select2-search__field"
        , ErrorBox: "em"
        , ParentElement: ".form-group"
        , SuccessElement: "has-success"
        , ErrorElement: "has-error"
        , HelpElement: ".help-block i"
        , TipElement: "fa-bell-o"
        , TipSuccessElement: "fa-check"
        , TipErrorElement: "fa-close"
    };

    function Highlight(element, errorClass, validClass) {
        $(element)
            .parents(selector.ParentElement)
                .removeClass(selector.SuccessElement)
                .addClass(selector.ErrorElement)
            .find(selector.HelpElement)
                .removeClass(selector.TipElement)
                .removeClass(selector.TipSuccessElement)
                .addClass(selector.TipErrorElement);
    }

    function Unhighlight(element, errorClass, validClass) {
        $(element)
            .parents(selector.ParentElement)
                .removeClass(selector.ErrorElement)
                .addClass(selector.SuccessElement)
            .find(selector.HelpElement)
                .removeClass(selector.TipElement)
                .removeClass(selector.TipErrorElement)
                .addClass(selector.TipSuccessElement);
    }

    function OnFocusin(element) {
        $(element).valid();
    }

    function OnFocusout(element) {
        $(element).valid();
    }

    function ErrorPlacement(error, element) {

    }

    $.validator.setDefaults({
        ignore: selector.IgnoreElement
        , errorElement: selector.ErrorBox
        , onfocusin: OnFocusin
        , onfocusout: OnFocusout
        , errorPlacement: ErrorPlacement
        , highlight: Highlight
        , unhighlight: Unhighlight
    })

    $(function () {
        jQuery.validator.addMethod("Test2", function (value, element, params) {

            return this.optional(element) || value == params;
        }, "错误提示消息");
    })

}(jQuery, window))