; +function ($) {
    'use strict';

    var DataKey = 'lte.searchmore';

    var Default = {
        animationSpeed: 500,
        collapseTrigger: '[data-widget="more"]',
        collapseIcon: 'fa-angle-double-up',
        expandIcon: 'fa-angle-double-down',
        isCollapse: false
    };

    var Selector = {
        data: '.SearchBox',
        collapsed: '.hide-box',
        header: '.SearchHeader',
        body: '.SearchBody'
    };

    var ClassName = {
        collapsed: 'hide-box'
    };

    var Event = {
        collapsed: 'collapsed.searchmore',
        expanded: 'expanded.searchmore'
    };

    var SearchMore = function (element, options) {
        this.element = element;
        this.options = options;

        this._setUpListeners();
        this.load();
    };

    SearchMore.prototype.load = function () {
        var isCollapse = $(this.element).is(Selector.collapsed);
        if (isCollapse) {
            this.collapse();
        } else {
            this.expand();
        }
    };

    SearchMore.prototype.toggle = function () {
        var isOpen = !$(this.element).is(Selector.collapsed);

        if (isOpen) {
            this.collapse();
        } else {
            this.expand();
        }
    };

    SearchMore.prototype.expand = function () {
        var expandedEvent = $.Event(Event.expanded);
        var collapseIcon = this.options.collapseIcon;
        var expandIcon = this.options.expandIcon;

        $(this.element).removeClass(ClassName.collapsed);

        $(this.element)
          .children(Selector.header)
          .find('.' + expandIcon)
          .removeClass(expandIcon)
          .addClass(collapseIcon);

        $(this.element).children(Selector.body)
          .slideDown(this.options.animationSpeed, function () {
              $(this.element).trigger(expandedEvent);
          }.bind(this));
    };

    SearchMore.prototype.collapse = function () {
        var collapsedEvent = $.Event(Event.collapsed);
        var collapseIcon = this.options.collapseIcon;
        var expandIcon = this.options.expandIcon;

        $(this.element)
          .children(Selector.header)
          .find('.' + collapseIcon)
          .removeClass(collapseIcon)
          .addClass(expandIcon);

        $(this.element).children(Selector.body)
          .slideUp(this.options.animationSpeed, function () {
              $(this.element).addClass(ClassName.collapsed);
              $(this.element).trigger(collapsedEvent);
          }.bind(this));
    };

    SearchMore.prototype._setUpListeners = function () {
        var that = this;

        $(this.element).on('click', this.options.collapseTrigger, function (event) {
            if (event) event.preventDefault();
            that.toggle($(this));
            return false;
        });
    };

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data(DataKey);

            if (!data) {
                var options = $.extend({}, Default, $this.data(), typeof option == 'object' && option);
                $this.data(DataKey, new SearchMore($this, options));
            }

            if (typeof option == 'string') {
                if (typeof data[option] == 'undefined') {
                    throw new Error('No method named ' + option);
                }
                data[option]();
            }
        });
    }

    var old = $.fn.SearchMore;

    $.fn.SearchMore = Plugin;
    $.fn.SearchMore.Constructor = SearchMore;

    $.fn.SearchMore.noConflict = function () {
        $.fn.SearchMore = old;
        return this;
    };

    $(window).on('load', function () {
        $(Selector.data).each(function () {
            Plugin.call($(this));
        });
    });

}(jQuery);


