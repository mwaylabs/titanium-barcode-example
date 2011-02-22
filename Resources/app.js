// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// open a single window
var window = Ti.UI.createWindow({
    backgroundColor:'white'
  });

var label = Ti.UI.createLabel();
window.add(label);
window.open();

var titaniumBarcode = require('com.mwaysolutions.barcode');

titaniumBarcode.scan({
    success:function(data) {
      if(data && data.barcode) {
        var label = Titanium.UI.createLabel({
            text:'Barcode: ' + data.barcode,
            textAlign:'center',
            width:'auto'
          });

        window.add(label);
      } else {
        alert(JSON.stringify(data));
      }
    },

    error:function(err) { 
      alert("Error!! " + err); 
    },

    cancel:function() { 
      alert("cancel"); 
    }
  });

