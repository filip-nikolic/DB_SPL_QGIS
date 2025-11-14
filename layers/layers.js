var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LWL_Plan_1 = new ol.format.GeoJSON();
var features_LWL_Plan_1 = format_LWL_Plan_1.readFeatures(json_LWL_Plan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LWL_Plan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LWL_Plan_1.addFeatures(features_LWL_Plan_1);
var lyr_LWL_Plan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LWL_Plan_1, 
                style: style_LWL_Plan_1,
                popuplayertitle: 'LWL_Plan',
                interactive: true,
    title: 'LWL_Plan<br />\
    <img src="styles/legend/LWL_Plan_1_0.png" /> Neubau<br />\
    <img src="styles/legend/LWL_Plan_1_1.png" /> Bestand<br />' });
var format_Verllegprotokol_2 = new ol.format.GeoJSON();
var features_Verllegprotokol_2 = format_Verllegprotokol_2.readFeatures(json_Verllegprotokol_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Verllegprotokol_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Verllegprotokol_2.addFeatures(features_Verllegprotokol_2);
var lyr_Verllegprotokol_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Verllegprotokol_2, 
                style: style_Verllegprotokol_2,
                popuplayertitle: 'Verllegprotokol',
                interactive: true,
    title: 'Verllegprotokol<br />\
    <img src="styles/legend/Verllegprotokol_2_0.png" /> nicht endverlegt<br />\
    <img src="styles/legend/Verllegprotokol_2_1.png" /> verlegt<br />' });
var format_VAMlocations_3 = new ol.format.GeoJSON();
var features_VAMlocations_3 = format_VAMlocations_3.readFeatures(json_VAMlocations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VAMlocations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VAMlocations_3.addFeatures(features_VAMlocations_3);
var lyr_VAMlocations_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VAMlocations_3, 
                style: style_VAMlocations_3,
                popuplayertitle: 'VAM locations',
                interactive: true,
                title: '<img src="styles/legend/VAMlocations_3.png" /> VAM locations'
            });
var format_DB_GeoStreckennetz_4 = new ol.format.GeoJSON();
var features_DB_GeoStreckennetz_4 = format_DB_GeoStreckennetz_4.readFeatures(json_DB_GeoStreckennetz_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DB_GeoStreckennetz_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DB_GeoStreckennetz_4.addFeatures(features_DB_GeoStreckennetz_4);
var lyr_DB_GeoStreckennetz_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DB_GeoStreckennetz_4, 
                style: style_DB_GeoStreckennetz_4,
                popuplayertitle: 'DB_Geo-Streckennetz',
                interactive: true,
                title: '<img src="styles/legend/DB_GeoStreckennetz_4.png" /> DB_Geo-Streckennetz'
            });
var format_Locations_new_5 = new ol.format.GeoJSON();
var features_Locations_new_5 = format_Locations_new_5.readFeatures(json_Locations_new_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locations_new_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locations_new_5.addFeatures(features_Locations_new_5);
var lyr_Locations_new_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locations_new_5, 
                style: style_Locations_new_5,
                popuplayertitle: 'Locations_new',
                interactive: true,
    title: 'Locations_new<br />\
    <img src="styles/legend/Locations_new_5_0.png" /> Mast<br />\
    <img src="styles/legend/Locations_new_5_1.png" /> BBU-Hotel<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_LWL_Plan_1.setVisible(true);lyr_Verllegprotokol_2.setVisible(true);lyr_VAMlocations_3.setVisible(true);lyr_DB_GeoStreckennetz_4.setVisible(true);lyr_Locations_new_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LWL_Plan_1,lyr_Verllegprotokol_2,lyr_VAMlocations_3,lyr_DB_GeoStreckennetz_4,lyr_Locations_new_5];
lyr_LWL_Plan_1.set('fieldAliases', {'id': 'id', 'LWL_Plan': 'LWL_Plan', 'Cable': 'Cable', 'Status': 'Status', });
lyr_Verllegprotokol_2.set('fieldAliases', {'id': 'id', 'Baustelle': 'Baustelle', 'Kabelnum': 'Kabelnum', 'Kabeltype': 'Kabeltype', 'radius(mm)': 'radius(mm)', 'Trommelnum': 'Trommelnum', 'von Ort': 'von Ort', 'von km': 'von km', 'Metrier': 'Metrier', 'bis Ort': 'bis Ort', 'bis km': 'bis km', 'bis Metr': 'bis Metr', 'KLangeSOLL': 'KLangeSOLL', 'KLangeIST': 'KLangeIST', 'Recht/Link': 'Recht/Link', 'Besonderh.': 'Besonderh.', });
lyr_VAMlocations_3.set('fieldAliases', {'fid': 'fid', 'VAM_ID': 'VAM_ID', 'VAM_Km': 'VAM_Km', 'Braitengrad': 'Braitengrad', 'Langengrad': 'Langengrad', });
lyr_DB_GeoStreckennetz_4.set('fieldAliases', {'mifcode': 'mifcode', 'strecke_nr': 'strecke_nr', 'richtung': 'richtung', 'laenge': 'laenge', 'von_km_i': 'von_km_i', 'bis_km_i': 'bis_km_i', 'von_km_l': 'von_km_l', 'bis_km_l': 'bis_km_l', 'elektrifiz': 'elektrifiz', 'bahnnutzun': 'bahnnutzun', 'geschwindi': 'geschwindi', 'strecke_ku': 'strecke_ku', 'gleisanzah': 'gleisanzah', 'bahnart': 'bahnart', 'kmspru_typ': 'kmspru_typ', 'kmspru_t00': 'kmspru_t00', });
lyr_Locations_new_5.set('fieldAliases', {'Objektkennung': 'Objektkennung', 'Objekt': 'Objekt', 'Aktive-Alternative': 'Aktive-Alternative', 'Kilometer': 'Kilometer', 'Bundesland': 'Bundesland', 'Landkreis': 'Landkreis', 'Region': 'Region', 'Objekt Lage am Gleis': 'Objekt Lage am Gleis', 'Objekthöhe': 'Objekthöhe', 'Höhe über NN': 'Höhe über NN', 'Abstand OM zu Gleismitte': 'Abstand OM zu Gleismitte', 'Abstand OM zu Grundstücksgrenze': 'Abstand OM zu Grundstücksgrenze', 'Böschung?': 'Böschung?', 'Objekt-Fundamentgröße': 'Objekt-Fundamentgröße', 'KFS vorhanden': 'KFS vorhanden', 'TB-Abschnitt': 'TB-Abschnitt', 'Längengrad': 'Längengrad', 'Breitengrad': 'Breitengrad', 'Bau (Zugang nur Gleis)?': 'Bau (Zugang nur Gleis)?', 'GSM-R': 'GSM-R', 'Umweltschutz': 'Umweltschutz', 'Kampfmittelverdacht': 'Kampfmittelverdacht', 'Datum-KMB': 'Datum-KMB', 'Az-KMB': 'Az-KMB', 'Empfehlung KMB': 'Empfehlung KMB', 'Baulos': 'Baulos', 'Baukoordinator': 'Baukoordinator', 'Bombardierung': 'Bombardierung', 'Gemeinde': 'Gemeinde', 'Kleinkampfmittel': 'Kleinkampfmittel', 'Aktueller Status': 'Aktueller Status', 'Höhe über OK-Schiene': 'Höhe über OK-Schiene', 'Flur': 'Flur', 'Flurstück': 'Flurstück', 'Gemarkung': 'Gemarkung', 'Reptilien': 'Reptilien', 'Amphibien': 'Amphibien', 'Abstand z. Gleisachse': 'Abstand z. Gleisachse', 'Freeze-Status': 'Freeze-Status', });
lyr_LWL_Plan_1.set('fieldImages', {'id': 'TextEdit', 'LWL_Plan': 'TextEdit', 'Cable': 'TextEdit', 'Status': 'TextEdit', });
lyr_Verllegprotokol_2.set('fieldImages', {'id': 'TextEdit', 'Baustelle': 'TextEdit', 'Kabelnum': 'TextEdit', 'Kabeltype': 'TextEdit', 'radius(mm)': 'TextEdit', 'Trommelnum': 'TextEdit', 'von Ort': 'TextEdit', 'von km': 'TextEdit', 'Metrier': 'Range', 'bis Ort': 'TextEdit', 'bis km': 'TextEdit', 'bis Metr': 'Range', 'KLangeSOLL': 'Range', 'KLangeIST': 'Range', 'Recht/Link': 'TextEdit', 'Besonderh.': 'TextEdit', });
lyr_VAMlocations_3.set('fieldImages', {'fid': 'TextEdit', 'VAM_ID': 'TextEdit', 'VAM_Km': 'TextEdit', 'Braitengrad': 'TextEdit', 'Langengrad': 'TextEdit', });
lyr_DB_GeoStreckennetz_4.set('fieldImages', {'mifcode': 'TextEdit', 'strecke_nr': 'TextEdit', 'richtung': 'TextEdit', 'laenge': 'TextEdit', 'von_km_i': 'TextEdit', 'bis_km_i': 'TextEdit', 'von_km_l': 'TextEdit', 'bis_km_l': 'TextEdit', 'elektrifiz': 'TextEdit', 'bahnnutzun': 'TextEdit', 'geschwindi': 'TextEdit', 'strecke_ku': 'TextEdit', 'gleisanzah': 'TextEdit', 'bahnart': 'TextEdit', 'kmspru_typ': 'TextEdit', 'kmspru_t00': 'TextEdit', });
lyr_Locations_new_5.set('fieldImages', {'Objektkennung': 'TextEdit', 'Objekt': 'TextEdit', 'Aktive-Alternative': 'TextEdit', 'Kilometer': 'TextEdit', 'Bundesland': 'TextEdit', 'Landkreis': 'TextEdit', 'Region': 'TextEdit', 'Objekt Lage am Gleis': 'TextEdit', 'Objekthöhe': 'TextEdit', 'Höhe über NN': 'TextEdit', 'Abstand OM zu Gleismitte': 'TextEdit', 'Abstand OM zu Grundstücksgrenze': 'TextEdit', 'Böschung?': 'TextEdit', 'Objekt-Fundamentgröße': 'TextEdit', 'KFS vorhanden': 'TextEdit', 'TB-Abschnitt': 'TextEdit', 'Längengrad': 'TextEdit', 'Breitengrad': 'TextEdit', 'Bau (Zugang nur Gleis)?': 'TextEdit', 'GSM-R': 'TextEdit', 'Umweltschutz': 'TextEdit', 'Kampfmittelverdacht': 'TextEdit', 'Datum-KMB': 'TextEdit', 'Az-KMB': 'TextEdit', 'Empfehlung KMB': 'TextEdit', 'Baulos': 'TextEdit', 'Baukoordinator': 'TextEdit', 'Bombardierung': 'TextEdit', 'Gemeinde': 'TextEdit', 'Kleinkampfmittel': 'TextEdit', 'Aktueller Status': 'TextEdit', 'Höhe über OK-Schiene': 'TextEdit', 'Flur': 'Range', 'Flurstück': 'TextEdit', 'Gemarkung': 'TextEdit', 'Reptilien': 'TextEdit', 'Amphibien': 'TextEdit', 'Abstand z. Gleisachse': 'TextEdit', 'Freeze-Status': 'TextEdit', });
lyr_LWL_Plan_1.set('fieldLabels', {'id': 'no label', 'LWL_Plan': 'no label', 'Cable': 'no label', 'Status': 'no label', });
lyr_Verllegprotokol_2.set('fieldLabels', {'id': 'no label', 'Baustelle': 'no label', 'Kabelnum': 'no label', 'Kabeltype': 'no label', 'radius(mm)': 'no label', 'Trommelnum': 'no label', 'von Ort': 'no label', 'von km': 'no label', 'Metrier': 'no label', 'bis Ort': 'no label', 'bis km': 'no label', 'bis Metr': 'no label', 'KLangeSOLL': 'no label', 'KLangeIST': 'no label', 'Recht/Link': 'no label', 'Besonderh.': 'no label', });
lyr_VAMlocations_3.set('fieldLabels', {'fid': 'no label', 'VAM_ID': 'no label', 'VAM_Km': 'no label', 'Braitengrad': 'no label', 'Langengrad': 'no label', });
lyr_DB_GeoStreckennetz_4.set('fieldLabels', {'mifcode': 'no label', 'strecke_nr': 'no label', 'richtung': 'no label', 'laenge': 'no label', 'von_km_i': 'no label', 'bis_km_i': 'no label', 'von_km_l': 'no label', 'bis_km_l': 'no label', 'elektrifiz': 'no label', 'bahnnutzun': 'no label', 'geschwindi': 'no label', 'strecke_ku': 'no label', 'gleisanzah': 'no label', 'bahnart': 'no label', 'kmspru_typ': 'no label', 'kmspru_t00': 'no label', });
lyr_Locations_new_5.set('fieldLabels', {'Objektkennung': 'no label', 'Objekt': 'no label', 'Aktive-Alternative': 'no label', 'Kilometer': 'no label', 'Bundesland': 'no label', 'Landkreis': 'no label', 'Region': 'no label', 'Objekt Lage am Gleis': 'no label', 'Objekthöhe': 'no label', 'Höhe über NN': 'no label', 'Abstand OM zu Gleismitte': 'no label', 'Abstand OM zu Grundstücksgrenze': 'no label', 'Böschung?': 'no label', 'Objekt-Fundamentgröße': 'no label', 'KFS vorhanden': 'no label', 'TB-Abschnitt': 'no label', 'Längengrad': 'no label', 'Breitengrad': 'no label', 'Bau (Zugang nur Gleis)?': 'no label', 'GSM-R': 'no label', 'Umweltschutz': 'no label', 'Kampfmittelverdacht': 'no label', 'Datum-KMB': 'no label', 'Az-KMB': 'no label', 'Empfehlung KMB': 'no label', 'Baulos': 'no label', 'Baukoordinator': 'no label', 'Bombardierung': 'no label', 'Gemeinde': 'no label', 'Kleinkampfmittel': 'no label', 'Aktueller Status': 'no label', 'Höhe über OK-Schiene': 'no label', 'Flur': 'no label', 'Flurstück': 'no label', 'Gemarkung': 'no label', 'Reptilien': 'no label', 'Amphibien': 'no label', 'Abstand z. Gleisachse': 'no label', 'Freeze-Status': 'no label', });
lyr_Locations_new_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});