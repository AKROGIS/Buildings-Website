/**
 * Created by regan_sarwas on 7/8/14.
 */
var NPMap = {
    center: {
        lat: 62,
        lng: -152
    },
    div: 'map',
    overlays: [{
        cluster: true,
        popup: {
            title: '{{Short_Desc}}',
            description: '<table>' +
                '<tr><td class="att_name">Category</td><td>{{Category}}</td></tr>' +
                '<tr><td class="att_name">Occupant</td><td>{{Occupant}}</td></tr>' +
                '<tr><td class="att_name">Cost</td><td>{{Cost}}</td></tr>' +
                '<tr><td class="att_name">Size</td><td>{{Size}}</td></tr>' +
                '<tr><td class="att_name">Acquired</td><td>{{Date}}</td></tr>' +
                '</table>',
            media:[{
                type:"fmss",
                id:"Title"
            }]
        },
        styles: {
            point: {
                'marker-symbol': 'warehouse'
            }
        },
        tooltip: '{{Title}}',
        type: 'csv',
        url: 'data/BldgWithPhotos.csv'
    },{
        cluster: true,
        popup: {
            title: 'Geotagged Building Photo',
            description:'Building {{Title}} is not in the Buildings geodatabase. ' +
                'Please help by adding an accurate location to the geodatabase.' ,
            media:[{
                type:"fmss",
                id:"Title"
            }]
        },
        styles: {
            point: {
                'marker-symbol': 'building'
            }
        },
        tooltip: '{{Title}}',
        type: 'csv',
        url: 'data/PhotosNoBldg.csv'
    },{
        type:'arcgisserver',
        opacity: 0.5,
        tiled: false,
        minZoom:5,
        url: 'http://165.83.60.69:6080/arcgis/rest/services/Testing/poi_pt_default/FeatureServer'
    }],
    zoom: 5,
    maxZoom: 20
};
