// this sets the background color of the master UIView
Titanium.UI.setBackgroundColor('#000');

// load module
var titaniumBarcode = require('com.mwaysolutions.barcode');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});
var win1 = Ti.UI.createWindow({ backgroundColor:'white' });

var tab1 = Titanium.UI.createTab({
    id: 'Tab1',
    title: 'Tab1',
    window: win1
  });

var barcodeLabel = Titanium.UI.createLabel({
    color: '#000',
    top: 60,
    text: 'Barcode: N/A',
    textAlign: 'center',
    font: { fontSize:48 },
    width: 'auto'
  });

win1.add(barcodeLabel);

var barcodeButton = Titanium.UI.createButton({
    title: 'Scan barcode',
    top: 200
  });

barcodeButton.addEventListener('click', function (e) {
    titaniumBarcode.scan({
        success: function (data) {
          if(data && data.barcode) {
            barcodeLabel.text = 'Barcode:' + data.barcode;
          } else {
            alert(JSON.stringify(data));
          }
        },

        error: function (err) {
          alert('Error while scanning: ' + err);
        },

        cancel: function () {
          alert('Scan cancelled');
        }
      });

  });

win1.add(barcodeButton);

var win2 = Ti.UI.createWindow({
    backgroundColor:'black'
  });

var tab2 = Titanium.UI.createTab({
    id:'tab2',
    title: 'Tab2',
    window:win2
  });

//  add tabs
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();
