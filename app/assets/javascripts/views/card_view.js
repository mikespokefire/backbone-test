var CardView = Backbone.View.extend({
  tagName: 'li',
  className: 'card',

  render: function() {
    this.$el.text(this.model.get('name'));
    return this;
  }
});
