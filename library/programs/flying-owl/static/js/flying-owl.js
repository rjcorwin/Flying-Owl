(function ($) {

  $.flyingOwl = {}

  /*
   * By the time this loads, everyting from the file system is in localStorage
   */
  $.flyingOwl.bootstrap = function() {

    // The library has been loaded. Move on to the topic list.
    $("#message").html(
      "Your library has been loaded. <a href='programs/flying-Owl/templates/topic-list.html'>Click here to see the topic list.</a>"
    )
    

  }

  $.flyingOwl.init = function() {
    $.flyingOwl.topics.init()
  }

  $.flyingOwl.topics = {

    data: {},

    init: function () {
      this.read()
    },

    read: function() {
      this.data = JSON.parse(localStorage.getItem('flyingOwlTopics'))
      if (!this.data) {  
        alert("We could not find the content for your Library :-(.  Is it missing?")
      }
      console.log(this.data)
    },

    refreshView: function(path = "") {

      var currentTopic = this.data
      // If our currentTopic isn't correct, fix it.
      if(currentTopic.path != path || path == "") {
        
        // Build a walkway
        var pathArray = path.split("/")
        for(var i=0, l=pathArray.length; i<l; i++) {
          if(i==0) {
            pathArray[i] = "/"
          }
          else {
            pathArray[i] = pathArray[i-1] + pathArray[i] + "/"
          }
        }
        // The last entry doesn't make sense, drop it
        pathArray.pop()

        // Walk up the the path redefining currentTopic as we go
        for(var i=0, l=pathArray.length; i<l; i++) {
          if(i != 0) { 
            for(var c=0, len=currentTopic.children.length; c<len; c++) {
              if(currentTopic.children[c].path == pathArray[i]) {
                currentTopic = currentTopic.children[c]
                break
              }  
            }
          }
        }

      }

      // Send the children for output
      var topicTemplate = Handlebars.compile($("#topic-template").html())
      $.each(currentTopic.children, function(key, topic) {
        // Print the path and title
        $("body").append(topicTemplate(topic))
      })

    }

  }

  $.flyingOwl.libraryCard = {

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