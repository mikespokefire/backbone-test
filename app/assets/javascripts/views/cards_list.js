var CardsList = Backbone.View.extend({
  tagName: 'ul',
  className: 'card-list',

  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
    this.collection.fetch({ reset: true });
  },

  render: function() {
    var cards = [];
    this.collection.forEach(function(card) {
      var cardView = new CardView({
        model: card
      });
      cards.push(cardView.render().$el);
    });

    this.$el.append(cards);
    $('body').append(this.$el);

    return this;
  }
});
