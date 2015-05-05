Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow();

var beforeDepart = Ti.UI.createTableViewSection({ headerTitle: 'Before Departure' });
//sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Apples' }));
//sectionFruit.add(Ti.UI.createTableViewRow({ title: 'Bananas' }));

var inCountry = Ti.UI.createTableViewSection({ headerTitle: 'While In Country' });

var beforeReturn = Ti.UI.createTableViewSection({ headerTitle: 'Before We Return' });

//sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Carrots' }));
//sectionVeg.add(Ti.UI.createTableViewRow({ title: 'Potatoes' }));

var table = Ti.UI.createTableView({
    data: [beforeDepart, inCountry, beforeReturn]
});

table.addEventListener('click', function(e){
    Ti.API.info(e.rowData.title);
    Ti.API.info(e.section.headerTitle);
});

win.add(table);
win.open();