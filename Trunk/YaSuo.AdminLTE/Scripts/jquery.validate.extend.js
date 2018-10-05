(function ($, window, undefined) {
    var Selector = {
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
            .parents(Selector.ParentElement)
                .removeClass(Selector.SuccessElement)
                .addClass(Selector.ErrorElement)
            .find(Selector.HelpElement)
                .removeClass(Selector.TipElement)
                .removeClass(Selector.TipSuccessElement)
                .addClass(Selector.TipErrorElement);
    }

    function Unhighlight(element, errorClass, validClass) {
        $(element)
            .parents(Selector.ParentElement)
                .removeClass(Selector.ErrorElement)
                .addClass(Selector.SuccessElement)
            .find(Selector.HelpElement)
                .removeClass(Selector.TipElement)
                .removeClass(Selector.TipErrorElement)
                .addClass(Selector.TipSuccessElement);
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
        ignore: Selector.IgnoreElement
        , errorElement: Selector.ErrorBox
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