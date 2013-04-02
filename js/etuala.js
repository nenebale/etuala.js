var trigger_data_attribute = "etuala-trigger", // name of the trigger's data attribute
    modal_data_attribute = "etuala", // name of the model's data attribute
    Sizzle,
    body = Sizzle("body")[0], // body element
    url_hash = window.location.hash,
    cover,
    modal,
    modal_key,
    triggers,

Etuala = {

  init: function() {
    Etuala.addCover();
    Etuala.bindAllTriggers();
    Etuala.checkUrlHash(url_hash);
  },

  addCover: function() {
    cover = document.createElement("div");
    cover.className = "etuala-cover";
    body.insertBefore(cover, body.firstChild);
  },

  bindAllTriggers: function() {
    triggers = Etuala.findAllTriggers();
    if (triggers.length > 0) {
      triggers.forEach(Etuala.bindClick);
    }
  },

  findAllTriggers: function() {
    return Sizzle("[data-" + trigger_data_attribute + "]"); // all triggers in the page
  },

  bindClick: function( element ) {
    element.addEventListener("click",
    function () {
      modal_key = element.getAttribute( "data-" + trigger_data_attribute );
      Etuala.showModal( modal_key );
    },
    false);
  },

  showModal: function( modal_key ) {
    modal = Sizzle("[data-" + modal_data_attribute + "='" + modal_key + "']")[0];
    if ( modal !== undefined ) {
      Etuala.addClass( modal, "pre-active");
      window.setTimeout(function() {
        Etuala.addClass( body, "etuala-active");
        Etuala.addClass( modal, "active");
        Etuala.addClass( cover, "active");
      }, 20);
      cover.addEventListener("click",
      function () {
        Etuala.hideActiveModal();
      },
      false);
      cover.addEventListener("touchleave",
      function () {
        Etuala.hideActiveModal();
      },
      false);
      document.addEventListener( 'keyup', Etuala.onDocumentKeyUp, false );
      window.location.hash = modal_key;
      if (event !== undefined) {
        event.preventDefault();
      }
    }
  },

  addClass: function( element, name ) {
    element.className += " " + name;
  },

  hideActiveModal: function() {
    modal = Sizzle( ".etuala.pre-active" )[0];
    if (modal !== null) {
      Etuala.removeClass( modal, "active");
      Etuala.removeClass( cover, "active" );
      Etuala.removeClass( body, "etuala-active" );
      window.setTimeout(function() {
        Etuala.removeClass( modal, "pre-active");
      }, 300);
    }
    window.location.hash = "";
  },

  onDocumentKeyUp: function( event ) {
    if (event.keyCode === 27) {
      Etuala.hideActiveModal();
    }
  },

  removeClass: function( element, name ) {
    element.className = element.className.replace( " " + name, "" );
  },

  checkUrlHash: function( url_hash ) {
    if (url_hash !== "" && url_hash !== undefined && url_hash.length > 1) {
      url_hash = url_hash.substring(1);
      window.setTimeout(function() {
        Etuala.showModal( url_hash );
      }, 500);
    }
  }

};

Etuala.init();