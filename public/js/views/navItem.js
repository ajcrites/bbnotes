// nav item view

var MOB = MOB || {};

MOB.NavItemView = Backbone.View.extend({
    tagName: 'li',
    className: 'navigation-item',
    template: _.template($('script.nav-item').html()),

    events: {
        'click': 'highlight'
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        if (this.model.attributes.path === Backbone.history.fragment) {
            this.highlight();
        }

        return this;
    },

    highlight: function () {
        this.$el.addClass('selected').siblings().removeClass('selected');
    }
});
