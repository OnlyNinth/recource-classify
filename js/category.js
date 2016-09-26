(function ($) {
    var methods = {
        init: function (options) {
            var $cateContainer = $('<div>').addClass('cate-container');
            var $ul = $('<ul>').addClass('category-ul clearfix');
            $.each(options, function (i, c) {
                $ul.append([
                    '<li class="', c['type'], '">',
                        '<a href="', c['url'], '">',
                            '<div class="name">', c['name'],'</div>',
                        '</a>',
                    '</li>'
                ].join(''));
            });
            $cateContainer.append($ul);
            return $(this).append($cateContainer);
        }
    };
    $.fn.category = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }
    };
})(jQuery);