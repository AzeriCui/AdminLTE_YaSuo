(function ($) {

    $.fn.WyUpload = function (options) {
        var defaults = {
            Name: "fileWyUpload",
            IFrameName: "iframe",
            FormName: "form",
            FileFormat: [".jpg", ".png"],
            Url: "",
            OnComplete: function (result) { },
        }
        var settings = $.extend(defaults, options)

        var random = Math.random();
        settings.IFrameName = settings.IFrameName + settings.Name + random;
        settings.FormName = settings.FormName + settings.Name + random;

        var fileElement = $("#" + settings.Name);
        var fileParent = fileElement.parent();

        var iframeElement = AddIframe(settings);
        var formElement = AddForm(settings).append(fileElement);

        $(document.body).append(iframeElement).append(formElement);


        var iframeDom = document.getElementById(settings.IFrameName)
        if (iframeDom.attachEvent) {
            iframeDom.attachEvent("onload", function () {
                GetResult(iframeElement, formElement, fileElement, fileParent, settings);
            })
        }
        else {
            iframeDom.onload = function () {
                GetResult(iframeElement, formElement, fileElement, fileParent, settings);
            }
        }

        formElement.submit();

        return false;
    }

    function GetResult(iframeElement, formElement, fileElement, fileParent, settings) {

        var result = $.parseJSON(iframeElement.contents().find("body").html());
        fileElement.val("");
        fileElement.appendTo(fileParent);
        formElement.remove();
        iframeElement.remove();
        settings.OnComplete(result);
    }

    function AddIframe(settings) {
        return $("<iframe />")
            .css({ "display": "none" })
            .attr("id", settings.IFrameName)
            .attr("name", settings.IFrameName);
    }

    function AddForm(settings) {
        return $("<form />")
            .css({ "display": "none" })
            .attr("id", settings.FormName)
            .attr("name", settings.FormName)
            .attr("method", "post")
            .attr("enctype", "multipart/form-data")
            .attr("target", settings.IFrameName)
            .attr("action", settings.Url);
    }

}(jQuery));
