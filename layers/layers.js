var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DepartamentosdeGuatemalaGeoJSON_1 = new ol.format.GeoJSON();
var features_DepartamentosdeGuatemalaGeoJSON_1 = format_DepartamentosdeGuatemalaGeoJSON_1.readFeatures(json_DepartamentosdeGuatemalaGeoJSON_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosdeGuatemalaGeoJSON_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosdeGuatemalaGeoJSON_1.addFeatures(features_DepartamentosdeGuatemalaGeoJSON_1);
var lyr_DepartamentosdeGuatemalaGeoJSON_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosdeGuatemalaGeoJSON_1, 
                style: style_DepartamentosdeGuatemalaGeoJSON_1,
                interactive: true,
    title: 'Departamentos de Guatemala - GeoJSON<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_0.png" /> Alta Verapaz<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_1.png" /> Baja Verapaz<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_2.png" /> Belice<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_3.png" /> Chimaltenango<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_4.png" /> Chiquimula<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_5.png" /> El Progreso<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_6.png" /> Escuintla<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_7.png" /> Guatemala<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_8.png" /> Huehuetenango<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_9.png" /> Izabal<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_10.png" /> Jalapa<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_11.png" /> Jutiapa<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_12.png" /> Petén<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_13.png" /> Quetzaltenango<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_14.png" /> Quiché<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_15.png" /> Retalhuleu<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_16.png" /> Sacatepéquez<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_17.png" /> San Marcos<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_18.png" /> Santa Rosa<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_19.png" /> Sololá<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_20.png" /> Suchitepéquez<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_21.png" /> Totonicapán<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_22.png" /> Zacapa<br />\
    <img src="styles/legend/DepartamentosdeGuatemalaGeoJSON_1_23.png" /> <br />'
        });
var format_MunicipiosdeGuatemalaGeoJSON_2 = new ol.format.GeoJSON();
var features_MunicipiosdeGuatemalaGeoJSON_2 = format_MunicipiosdeGuatemalaGeoJSON_2.readFeatures(json_MunicipiosdeGuatemalaGeoJSON_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipiosdeGuatemalaGeoJSON_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosdeGuatemalaGeoJSON_2.addFeatures(features_MunicipiosdeGuatemalaGeoJSON_2);
var lyr_MunicipiosdeGuatemalaGeoJSON_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosdeGuatemalaGeoJSON_2, 
                style: style_MunicipiosdeGuatemalaGeoJSON_2,
                interactive: true,
    title: 'Municipios de Guatemala - GeoJSON<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_0.png" /> Alta Verapaz<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_1.png" /> Baja Verapaz<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_2.png" /> Belice<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_3.png" /> Chimaltenango<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_4.png" /> Chiquimula<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_5.png" /> El Progreso<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_6.png" /> Escuintla<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_7.png" /> Guatemala<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_8.png" /> Huehuetenango<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_9.png" /> Izabal<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_10.png" /> Jalapa<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_11.png" /> Jutiapa<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_12.png" /> Petén<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_13.png" /> Quetzaltenango<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_14.png" /> Quiché<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_15.png" /> Retalhuleu<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_16.png" /> Sacatepéquez<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_17.png" /> San Marcos<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_18.png" /> Santa Rosa<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_19.png" /> Sololá<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_20.png" /> Suchitepéquez<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_21.png" /> Totonicapán<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_22.png" /> Zacapa<br />\
    <img src="styles/legend/MunicipiosdeGuatemalaGeoJSON_2_23.png" /> <br />'
        });
var format_Centrosypuestosdevacunacin_3 = new ol.format.GeoJSON();
var features_Centrosypuestosdevacunacin_3 = format_Centrosypuestosdevacunacin_3.readFeatures(json_Centrosypuestosdevacunacin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrosypuestosdevacunacin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrosypuestosdevacunacin_3.addFeatures(features_Centrosypuestosdevacunacin_3);
var lyr_Centrosypuestosdevacunacin_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrosypuestosdevacunacin_3, 
                style: style_Centrosypuestosdevacunacin_3,
                interactive: true,
                title: '<img src="styles/legend/Centrosypuestosdevacunacin_3.png" /> Centros y puestos de vacunación'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DepartamentosdeGuatemalaGeoJSON_1.setVisible(true);lyr_MunicipiosdeGuatemalaGeoJSON_2.setVisible(false);lyr_Centrosypuestosdevacunacin_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DepartamentosdeGuatemalaGeoJSON_1,lyr_MunicipiosdeGuatemalaGeoJSON_2,lyr_Centrosypuestosdevacunacin_3];
lyr_DepartamentosdeGuatemalaGeoJSON_1.set('fieldAliases', {'DEPARTAMENTO': 'DEPARTAMENTO', });
lyr_MunicipiosdeGuatemalaGeoJSON_2.set('fieldAliases', {'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', });
lyr_Centrosypuestosdevacunacin_3.set('fieldAliases', {'DEPARTAMENTO': 'DEPARTAMENTO', 'MUNICIPIO': 'MUNICIPIO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'COD_CENTRO': 'COD_CENTRO', 'CENTRO DE VACUNACIÓN': 'CENTRO DE VACUNACIÓN', 'DIRECCIÓN': 'DIRECCIÓN', 'ENLACE WAZE': 'ENLACE WAZE', 'ENLACE GOOGLE MAPS': 'ENLACE GOOGLE MAPS', 'MODALIDAD': 'MODALIDAD', 'REQUISITOS': 'REQUISITOS', 'ENLACE REGISTRO': 'ENLACE REGISTRO', 'TIPO DE VACUNA Y DOSIS - GRUPO POBLACIONAL Y ACCESO': 'TIPO DE VACUNA Y DOSIS - GRUPO POBLACIONAL Y ACCESO', 'DÍAS DE ATENCIÓN': 'DÍAS DE ATENCIÓN', 'HORARIO': 'HORARIO', 'AFL_16102021': 'AFL_16102021', 'CV_16102021:': 'CV_16102021:', 'EP_16102021:': 'EP_16102021:', 'VR_16102021:': 'VR_16102021:', 'DA_16102021:': 'DA_16102021:', 'AFL_17102021': 'AFL_17102021', 'CV_17102021:': 'CV_17102021:', 'EP_17102021:': 'EP_17102021:', 'VR_17102021:': 'VR_17102021:', 'DA_17102021:': 'DA_17102021:', 'AFL_18102021': 'AFL_18102021', 'CV_18102021:': 'CV_18102021:', 'EP_18102021:': 'EP_18102021:', 'VR_18102021:': 'VR_18102021:', 'DA_18102021:': 'DA_18102021:', 'TDA': 'TDA', });
lyr_DepartamentosdeGuatemalaGeoJSON_1.set('fieldImages', {'DEPARTAMENTO': 'Hidden', });
lyr_MunicipiosdeGuatemalaGeoJSON_2.set('fieldImages', {'MUNICIPIO': 'Hidden', 'DEPARTAMENTO': 'Hidden', });
lyr_Centrosypuestosdevacunacin_3.set('fieldImages', {'DEPARTAMENTO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LATITUD': 'Hidden', 'LONGITUD': 'Hidden', 'COD_CENTRO': 'Hidden', 'CENTRO DE VACUNACIÓN': 'TextEdit', 'DIRECCIÓN': 'TextEdit', 'ENLACE WAZE': 'TextEdit', 'ENLACE GOOGLE MAPS': 'TextEdit', 'MODALIDAD': 'TextEdit', 'REQUISITOS': 'TextEdit', 'ENLACE REGISTRO': 'TextEdit', 'TIPO DE VACUNA Y DOSIS - GRUPO POBLACIONAL Y ACCESO': 'ExternalResource', 'DÍAS DE ATENCIÓN': 'TextEdit', 'HORARIO': 'TextEdit', 'AFL_16102021': 'Hidden', 'CV_16102021:': 'Hidden', 'EP_16102021:': 'Hidden', 'VR_16102021:': 'Hidden', 'DA_16102021:': 'Hidden', 'AFL_17102021': 'Hidden', 'CV_17102021:': 'Hidden', 'EP_17102021:': 'Hidden', 'VR_17102021:': 'Hidden', 'DA_17102021:': 'Hidden', 'AFL_18102021': 'Hidden', 'CV_18102021:': 'Hidden', 'EP_18102021:': 'Hidden', 'VR_18102021:': 'Hidden', 'DA_18102021:': 'Hidden', 'TDA': 'Hidden', });
lyr_DepartamentosdeGuatemalaGeoJSON_1.set('fieldLabels', {});
lyr_MunicipiosdeGuatemalaGeoJSON_2.set('fieldLabels', {});
lyr_Centrosypuestosdevacunacin_3.set('fieldLabels', {'DEPARTAMENTO': 'inline label', 'MUNICIPIO': 'inline label', 'CENTRO DE VACUNACIÓN': 'inline label', 'DIRECCIÓN': 'inline label', 'ENLACE WAZE': 'inline label', 'ENLACE GOOGLE MAPS': 'inline label', 'MODALIDAD': 'inline label', 'REQUISITOS': 'inline label', 'ENLACE REGISTRO': 'inline label', 'TIPO DE VACUNA Y DOSIS - GRUPO POBLACIONAL Y ACCESO': 'inline label', 'DÍAS DE ATENCIÓN': 'inline label', 'HORARIO': 'inline label', });
lyr_Centrosypuestosdevacunacin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});