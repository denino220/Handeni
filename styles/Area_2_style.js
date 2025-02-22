var size = 0;
var placement = 'point';

var style_Area_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.9000000000000017;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("AREA") !== null) {
        labelText = String(feature.get("AREA"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(152,125,183,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
