(function() {
    'use strict';

    var origScrollIntoView = Element.prototype.scrollIntoView;

    Element.prototype.scrollIntoView = function(options) {
        var drawerContent = this.closest('#nhs-courseindex-sidebar .drawercontent');

        if (drawerContent) {
            var containerRect = drawerContent.getBoundingClientRect();
            var itemRect = this.getBoundingClientRect();
            var offset = itemRect.top - containerRect.top;
            var targetScrollTop = drawerContent.scrollTop + offset - (drawerContent.clientHeight / 2) + (itemRect.height / 2);

            drawerContent.scrollTo({
                top: Math.max(0, targetScrollTop),
                behavior: (options && options.behavior) ? options.behavior : 'auto'
            });
            return;
        }

        return origScrollIntoView.apply(this, arguments);
    };
})();