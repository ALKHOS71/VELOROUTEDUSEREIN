var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SIGNALISATIONCYCLABLE_1 = new ol.format.GeoJSON();
var features_SIGNALISATIONCYCLABLE_1 = format_SIGNALISATIONCYCLABLE_1.readFeatures(json_SIGNALISATIONCYCLABLE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SIGNALISATIONCYCLABLE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SIGNALISATIONCYCLABLE_1.addFeatures(features_SIGNALISATIONCYCLABLE_1);
var lyr_SIGNALISATIONCYCLABLE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SIGNALISATIONCYCLABLE_1, 
                style: style_SIGNALISATIONCYCLABLE_1,
                interactive: true,
                title: '<img src="styles/legend/SIGNALISATIONCYCLABLE_1.png" /> SIGNALISATION CYCLABLE'
            });
var format_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2 = new ol.format.GeoJSON();
var features_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2 = format_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2.readFeatures(json_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2.addFeatures(features_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2);
var lyr_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2, 
                style: style_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2,
                interactive: true,
                title: '<img src="styles/legend/BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2.png" /> BOUCLE DE DECOUVERTE DE LA VELOROUTE N°1'
            });
var format_VELOROUTEDUSEREIN_3 = new ol.format.GeoJSON();
var features_VELOROUTEDUSEREIN_3 = format_VELOROUTEDUSEREIN_3.readFeatures(json_VELOROUTEDUSEREIN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VELOROUTEDUSEREIN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VELOROUTEDUSEREIN_3.addFeatures(features_VELOROUTEDUSEREIN_3);
var lyr_VELOROUTEDUSEREIN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VELOROUTEDUSEREIN_3, 
                style: style_VELOROUTEDUSEREIN_3,
                interactive: true,
                title: '<img src="styles/legend/VELOROUTEDUSEREIN_3.png" /> VELOROUTE DU SEREIN'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SIGNALISATIONCYCLABLE_1.setVisible(false);lyr_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2.setVisible(true);lyr_VELOROUTEDUSEREIN_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SIGNALISATIONCYCLABLE_1,lyr_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2,lyr_VELOROUTEDUSEREIN_3];
lyr_SIGNALISATIONCYCLABLE_1.set('fieldAliases', {'ID': 'ID', });
lyr_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2.set('fieldAliases', {'ID': 'ID', 'LINEAIRE': 'LINEAIRE', });
lyr_VELOROUTEDUSEREIN_3.set('fieldAliases', {'ID': 'ID', 'LINEAIRE': 'LINEAIRE', });
lyr_SIGNALISATIONCYCLABLE_1.set('fieldImages', {'ID': 'TextEdit', });
lyr_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2.set('fieldImages', {'ID': 'TextEdit', 'LINEAIRE': '', });
lyr_VELOROUTEDUSEREIN_3.set('fieldImages', {'ID': 'TextEdit', 'LINEAIRE': 'TextEdit', });
lyr_SIGNALISATIONCYCLABLE_1.set('fieldLabels', {'ID': 'inline label', });
lyr_BOUCLEDEDECOUVERTEDELAVELOROUTEN1_2.set('fieldLabels', {'ID': 'inline label', 'LINEAIRE': 'inline label', });
lyr_VELOROUTEDUSEREIN_3.set('fieldLabels', {'ID': 'inline label', 'LINEAIRE': 'inline label', });
lyr_VELOROUTEDUSEREIN_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});