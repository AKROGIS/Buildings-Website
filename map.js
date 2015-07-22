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
            title: '{{FMSS_Id}}',
            description: '<p>{{Desc}}</p>' +
            '<table>' +
                '<tr><td class="att_name">Park Id</td><td>{{Park_Id}}</td></tr>' +
                '<tr><td class="att_name">Occupant</td><td>{{Occupant}}</td></tr>' +
                '<tr><td class="att_name">Cost</td><td>{{Cost}}</td></tr>' +
                '<tr><td class="att_name">Size</td><td>{{Size}}</td></tr>' +
                '<tr><td class="att_name">Acquired</td><td>{{Year}}</td></tr>' +
                '<tr><td class="att_name">Status</td><td>{{Status}}</td></tr>' +
                '</table>',
            media:[{
                type:"fmss",
                id:"FMSS_Id"
            }]
        },
        styles: {
            point: {
                'marker-symbol': 'warehouse'
            }
        },
        tooltip: '{{FMSS_Id}}',
        type: 'csv',
        url: 'data/buildings.csv'
    }
    ,{
         type:'arcgisserver',
         opacity: 0.5,
         tiled: false,
         minZoom:15,
         url: 'http://inpakrovmais:6080/arcgis/rest/services/Building_Footprints/MapServer'
         }
        ,{
          type: 'wms',
          layers: 'BestDataAvailableLayer',
          transparent: true,
          url: 'http://wms.alaskamapped.org/bdl',
          minZoom:15
        }
    ],
    zoom: 5,
    maxZoom: 20
};
