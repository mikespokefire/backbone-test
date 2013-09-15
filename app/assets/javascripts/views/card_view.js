var CardView = Backbone.View.extend({
  tagName: 'li',
  className: 'card',

  render: function() {
    var html = JST['templates/card']({
      card: this.model
    });
    this.$el.html(html);

    return this;
  }
});
