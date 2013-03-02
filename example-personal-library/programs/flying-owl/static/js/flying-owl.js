(function ($) {
  $.flyingOWL = {}

  $.flyingOWL.init = function() {

    // Get ready for flight
    $.flyingOWL.library.init()
    $.flyingOWL.scoreCard.init()

  }

  $.flyingOWL.library = {

    data: {},

    init: function () {
      this.read()
      this.refreshView()
    },

    read: function() {
      if (dataCallback.data['library']) {  
        this.data = dataCallback.data['library']
      }
      else {
        alert("We could not find the content for your Library :-(.  Is it missing?")
      }

    },

    refreshView: function() {
      console.log(this.data)
      $.each(this.data.content, function(key, resource) {
        
      })
    }

  }

  $.flyingOWL.scoreCard = {

    data: {},

    init: function () {
      this.read()
      this.refreshView()
    },

    read: function() {
      if (dataCallback.data['scoreCard']) {  
        this.data = dataCallback.data['scoreCard']
      }
      else {
        alert("We could not find your score card :-(.  Is it missing?")
      }

    },

    refreshView: function() {
      console.log(this.data)
    },

    save: function() {

    }

  }

  $.flyingOWL.player = {}


})(jQuery);