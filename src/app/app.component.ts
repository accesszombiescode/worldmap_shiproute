import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'worldmap_shiproute';

  map!:mapboxgl.Map;
 // style = 'mapbox://styles/mapbox/satellite-streets-v11';
// style = 'mapbox://stylee/mapbox/streets-v11';
//style = 'mapbox://styles/mapbox/dark-v10'
  style = 'mapbox://styles/mapbox/light-v10'
//style = 'mapbox://styles/mapbox/satellite-streets-v11',

  lat = 12.0911;
  lng = 85.8211;
  zoom = 5;
  fontSizePx = this.lat;
  constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }
  ngOnInit(): void { this.buildMap(); }

  buildMap() {

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [114.181723, 22.291412],
      zoom: 15,
    });


const source = new mapboxgl.Marker({color:'blue',draggable:true}).setLngLat([114.26737, 22.57358])
.setPopup(new mapboxgl.Popup().setHTML("<h1>Source</h1>")) // add popup
.addTo(this.map)
const destination = new mapboxgl.Marker({color: '#37E2D5',draggable:true}).setLngLat([114.16092, 22.28739])
.setPopup(new mapboxgl.Popup().setHTML("<h1>Destination</h1>")) // add popup
.addTo(this.map)


// const shipPosition = new mapboxgl.Marker({color: '#37E2D5',draggable:true}).setLngLat([114.405583, 22.506414])
// .setPopup(new mapboxgl.Popup().setHTML("<h1>Ship Position</h1>")) // add popup
// .addTo(this.map);

this.map.on('load', () =>{
this.map.addSource('source1',{
type:'geojson',
data:{
  type:'Feature',
  properties:{},
  geometry:{
    type:'LineString',
    coordinates:[   [114.26737, 22.57358], [114.264322, 22.564059], [114.266625, 22.562775], [114.274889, 22.558267], [114.279067, 22.557207], [114.281997, 22.560301], [114.286533, 22.560212], [114.291577, 22.561490], [114.297593, 22.563154], [114.297888, 22.563268], [114.301670, 22.561930], [114.312939, 22.564685]
    ,[114.312939, 22.564685], [114.322287, 22.571683], [114.327011, 22.571868], [114.331519, 22.569982], [114.336668, 22.567630], [114.362376, 22.564706], [114.376834, 22.559082], [114.377380, 22.550353], [114.389388, 22.533733], [114.397370, 22.520948],[114.405583, 22.506414]]
  }
}

});
this.map.addLayer({
  id:'source1',
  type:'line',
  source:'source1',
  layout:{
    "line-join":'round',
    "line-cap":'round'
  },
  paint:{
    "line-color":'#607EAA',
    "line-width":4
  }
});
});


this.map.on('load', () =>{
  this.map.addSource('destination1',{
  type:'geojson',
  data:{
    type:'Feature',
    properties:{},
    geometry:{
      type:'LineString',
      coordinates:[   
      [114.405583, 22.506414], [114.408355, 22.503801], [114.404088, 22.488725], [114.417308, 22.472300], [114.420845, 22.467935], [114.421107, 22.467589], [114.423201, 22.464798], [114.423581, 22.464235], [114.423637, 22.464155], [114.425090, 22.461641], [114.425727, 22.460200], [114.437792, 22.431211], [114.438047, 22.430597], [114.442467, 22.428477], [114.456625, 22.422598], [114.462918, 22.409696], [114.463828, 22.407471], [114.478208, 22.370268], [114.467531, 22.367739], [114.432004, 22.344496], [114.415298, 22.333286], [114.406014, 22.314416], [114.403903, 22.310253], [114.401018, 22.295375], [114.400071, 22.290405], [114.393547, 22.289797], [114.393298, 22.289761], [114.379961, 22.287094], [114.377093, 22.282823], [114.372417, 22.278234],
       [114.368220, 22.274926], [114.365228, 22.272796], [114.360692, 22.269533], [114.358777, 22.268148], [114.358746, 22.267442], [114.358643, 22.266256], [114.351886, 22.264837], [114.351433, 22.264140], [114.350276, 22.262690], [114.348220, 22.261057], [114.348176, 22.260953], [114.348125, 22.260850], [114.347655, 22.260703], [114.344303, 22.258976], [114.343986, 22.258785], [114.338889, 22.258535], [114.325677, 22.257455], [114.325041, 22.256500], [114.324779, 22.256068], [114.324499, 22.255046], [114.322493, 22.248441], [114.322489, 22.248422], [114.321650, 22.248761], [114.309547, 22.253804], [114.307256, 22.254074], [114.302758, 22.256012], [114.301865, 22.256389], [114.301483, 22.256524], [114.300167, 22.257338], [114.298286, 22.258305], [114.298115, 22.258389], [114.297959, 22.258780], [114.297250, 22.259664], [114.297102, 22.259837], [114.293861, 22.261020], [114.293032, 22.262189], [114.291923, 22.262681], [114.286654, 22.261622], [114.286306, 22.261792], [114.282670, 22.260009], [114.281962, 22.259614], [114.281106, 22.258792], [114.276519, 22.255886], [114.275781, 22.255701], [114.268138, 22.251554], [114.267139, 22.254263], [114.266066, 22.257549], [114.265536, 22.263820], [114.262026, 22.267289], [114.258822, 22.269485], [114.258157, 22.269891], [114.257637, 22.270142], [114.254454, 22.277928], [114.254178, 22.280731], [114.252924, 22.280772], [114.251886, 22.280791], [114.248219, 22.280262], [114.239181, 22.283325], [114.239054, 22.284251], [114.234306, 22.286825], [114.232829, 22.288849], [114.232555, 22.288815], [114.231705, 22.288983], [114.229094, 22.289952], [114.228327, 22.290449], [114.226347, 22.291715], [114.225520, 22.293555], [114.221092, 22.296592], [114.213544, 22.293447], [114.211714, 22.295842], [114.206441, 22.304062], [114.202555, 22.303606], [114.201259, 22.303018], [114.201001, 22.302680], [114.198104, 22.299950], [114.194480, 22.297129], [114.194262, 22.296745], [114.188108, 22.294879], [114.187329, 22.294040], [114.187068, 22.293667], [114.185156, 22.292804], [114.182791, 22.291477], [114.181723, 22.291412], [114.16124, 22.28774], [114.16092, 22.28739]]
      }
  }
  
  });
  this.map.addLayer({
    id:'destination1',
    type:'line',
    source:'destination1',
    layout:{
      "line-join":'round',
      "line-cap":'round'
    },
    paint:{
      "line-color":'#EF5B0C',
      "line-width":4
    }
  });
  });

  source.on('dragend',onDragEnd);
var setBounds = new mapboxgl.LngLatBounds([114.26737, 22.57358],[114.16092, 22.28739]);

this.map.fitBounds(setBounds,{padding:100})







this.map.on('load', () => {
  // Load an image from an external URL.
  this.map.loadImage('../assets/mapbox-icon.png',
    (error: any, image: any) => {
      if (error) throw error;
      this.map.addImage('ship', image);
      // Add a data source containing one point feature.
      this.map.addSource('point', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [114.405583, 22.506414]
              }
              ,
              'properties': {}
            }
          ]
        }
      });

      // Add a layer to use the image to represent the data.
      this.map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'point', // reference the data source
        'layout': {
          'icon-image': 'ship', // reference the image
          'icon-size': 0.25,
          'icon-rotate':190
        }
      });
    }
  );
});
  
const lngLat = source.getLngLat();
console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);

function onDragEnd() {
  var lngLat = source.getLngLat();
  console.log(lngLat);
}



  }
}
