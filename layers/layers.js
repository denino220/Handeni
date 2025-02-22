ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([37.735262, -5.628173, 37.757697, -5.617149]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Boundary_1 = new ol.format.GeoJSON();
var features_Boundary_1 = format_Boundary_1.readFeatures(json_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_1.addFeatures(features_Boundary_1);
var lyr_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_1, 
                style: style_Boundary_1,
                popuplayertitle: "Boundary",
                interactive: true,
                title: '<img src="styles/legend/Boundary_1.png" /> Boundary'
            });
var format_Area_2 = new ol.format.GeoJSON();
var features_Area_2 = format_Area_2.readFeatures(json_Area_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Area_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_2.addFeatures(features_Area_2);
var lyr_Area_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_2, 
                style: style_Area_2,
                popuplayertitle: "Area",
                interactive: false,
                title: '<img src="styles/legend/Area_2.png" /> Area'
            });
var format_shamba_handenicoordinate_3 = new ol.format.GeoJSON();
var features_shamba_handenicoordinate_3 = format_shamba_handenicoordinate_3.readFeatures(json_shamba_handenicoordinate_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_shamba_handenicoordinate_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shamba_handenicoordinate_3.addFeatures(features_shamba_handenicoordinate_3);
var lyr_shamba_handenicoordinate_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shamba_handenicoordinate_3, 
                style: style_shamba_handenicoordinate_3,
                popuplayertitle: "shamba_handeni coordinate",
                interactive: true,
                title: '<img src="styles/legend/shamba_handenicoordinate_3.png" /> shamba_handeni coordinate'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Boundary_1.setVisible(true);lyr_Area_2.setVisible(true);lyr_shamba_handenicoordinate_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Boundary_1,lyr_Area_2,lyr_shamba_handenicoordinate_3];
lyr_Boundary_1.set('fieldAliases', {'Distance': 'Distance', });
lyr_Area_2.set('fieldAliases', {'AREA': 'AREA', });
lyr_shamba_handenicoordinate_3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Name': 'Name', });
lyr_Boundary_1.set('fieldImages', {'Distance': 'TextEdit', });
lyr_Area_2.set('fieldImages', {'AREA': 'TextEdit', });
lyr_shamba_handenicoordinate_3.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Name': 'TextEdit', });
lyr_Boundary_1.set('fieldLabels', {'Distance': 'no label', });
lyr_Area_2.set('fieldLabels', {'AREA': 'no label', });
lyr_shamba_handenicoordinate_3.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'Name': 'no label', });
lyr_shamba_handenicoordinate_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});