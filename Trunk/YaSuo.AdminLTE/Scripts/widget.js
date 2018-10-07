/*
<div class="FoldedBox" data-folded="true">
    <div class="FoldedHeader">
        <button data-widget="folded"><i class="fa fa-angle-double-up"></i></button>
    </div>
    <div class="FoldedBody">
    </div>
</div>
*/
; (function ($, window, undefined) {
    "use strict";

    var dataKey = "wy.js.folded";

    var defaults = {
        animationSpeed: 500
        , collapseTrigger: "[data-widget='folded']"
        , collapseIcon: "fa-angle-double-up"
        , expandIcon: "fa-angle-double-down"
    }

    var selector = {
        box: ".FoldedBox"
        , header: ".FoldedHeader"
        , body: ".FoldedBody"
        , collapse: "folded"
    };

    var event = {
        collapsed: "collapsed.folded"
        , expanded: "expanded.folded"
    };

    var Folded = function (element, options) {
        this.element = element;
        this.options = options;

        this._SetUpListeners();

        this.Load();
    };

    Folded.prototype._SetUpListeners = function () {
        var _this = this;
        $(_this.element).on("click", _this.options.collapseTrigger, function (event) {
            if (event) {
                event.preventDefault();
            }
            _this.Toggle();
            return false;
        });
    };

    Folded.prototype.Toggle = function () {
        var isOpen = !$(this.element).data(selector.collapse);
        if (isOpen) {
            this.Collapse();
        } else {
            this.Expand();
        }
    };

    Folded.prototype.Collapse = function () {
        var collapsedEvent = $.Event(event.collapsed);
        var collapseIcon = this.options.collapseIcon;
        var expandIcon = this.options.expandIcon;

        $(this.element)
            .children(selector.header)
                .find("." + collapseIcon)
                    .removeClass(collapseIcon)
                    .addClass(expandIcon);

        $(this.element)
            .children(selector.body)
                .slideUp(this.options.animationSpeed, function () {
                    $(this.element).data(selector.collapse, true);
                    $(this.element).trigger(collapsedEvent);
                }
            .bind(this));
    };

    Folded.prototype.Expand = function () {
        var expandedEvent = $.Event(event.expanded);
        var collapseIcon = this.options.collapseIcon;
        var expandIcon = this.options.expandIcon;
        $(this.element)
            .children(selector.header)
                .find("." + expandIcon)
                    .removeClass(expandIcon)
                    .addClass(collapseIcon);

        $(this.element).children(selector.body)
            .slideDown(this.options.animationSpeed, function () {
                $(this.element).data(selector.collapse, false);
                $(this.element).trigger(expandedEvent);
            }
        .bind(this));
    };

    Folded.prototype.Load = function () {
        var isCollapse = $(this.element).data(selector.collapse);
        if (isCollapse) {
            this.Collapse();
        } else {
            this.Expand();
        }
    };

    function Plugin(option) {
        return this.each(function () {
            var _this = $(this);
            var data = _this.data(dataKey);

            if (!data) {
                var options = $.extend({}, defaults, option);
                _this.data(dataKey, new Folded(_this, options));
            }
        });
    }

    var old = $.fn.Folded;

    $.fn.Folded = Plugin;
    $.fn.Folded.Constructor = Folded;

    $.fn.Folded.noConflict = function () {
        $.fn.Folded = old;
        return this;
    };

    $(window).on("load", function () {
        $(selector.box).each(function () {
            Plugin.call($(this));
        });
    });

}(jQuery, window))
;
