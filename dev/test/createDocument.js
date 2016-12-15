

 var jsdom =   require('jsdom');
 (function(exports){
    
    function createDocument() {
      const document = jsdom.jsdom(undefined);
      const window = document.defaultView;
      global.document = document;
      global.window = window;
    
      Object.keys(window).forEach((key) => {
        if (!(key in global)) {
        global[key] = window[key];
      }
    });
    
      return document;
    }
   exports.createDocument = createDocument;
 }(this));