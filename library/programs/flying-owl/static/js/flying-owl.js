(function ($) {

  $.flyingOWL = {}

  $.flyingOWL.init = function() {

    // The library has been loaded. Move on to the topic list.
    $("#message").html(
      "Your library has been loaded. <a href='programs/flying-owl/templates/topic-list.html'>Click here to see the topic list.</a>"
    )
    

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

  $.flyingOWL.libraryCard = {

    data: {},

    init: function () {
      this.read()
      this.refreshView()
    },

    read: function() {
      if (dataCallback.data['libraryCard']) {  
        this.data = dataCallback.data['libraryCard']
      }
      else {
        alert("We could not find your library card :-(.  Is it missing?")
      }

    },

    refreshView: function() {
      console.log(this.data)
    },

    save: function() {

    }

  }

})(jQuery);