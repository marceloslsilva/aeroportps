
mapboxgl.accessToken =
  'pk.eyJ1IjoibWFyY2Vsb2xtc2lsdmEiLCJhIjoiY2t3cGRtdnMyMDhsazJvcnR2M2Ric282eSJ9.uus1HR47tEE_5vKGMtp42A';

var map = new mapboxgl.Map({
  container: 'mapcontainer',
  style: 'mapbox://styles/mapbox/streets-v11', //custom stylesheet
  center: [ -0.10865029361348627,51.51920997102493], // starting position [lng, lat]
  zoom: 9, // starting zoom

});


function zoomToCoordinates(lon, lat, legendaText, imgSrc) {
  var legendaElement = document.getElementById('legenda');
  var imgWidth = "300px"; // Defina o tamanho da largura da imagem
  var imgHeight = "200px"; // Defina o tamanho da altura da imagem
  var legendaHTML =
    "<p>" + legendaText + "</p>" +
    "<img src='" + imgSrc + "' alt='Legenda da Imagem'style='width: " + imgWidth + "; height: " + imgHeight + "'>";
    
  legendaElement.innerHTML = legendaHTML;

  map.flyTo({
    center: [lon, lat],
    zoom: 14,
    speed: 1.5
  });
}
/////////////////////////////////////////////////////////////////////////////

var imageHTML = '<img src="https://cdn.countryflags.com/thumbs/portugal/flag-round-250.png" alt="Descrição da Imagem" width="30px" height="30x" margin-right="10x">';
var imageHTML1 = '<img src="https://cdn-icons-png.flaticon.com/256/5373/5373322.png" alt="Descrição da Imagem" width="30px" height="30x" margin-right="10x">';

map.on('load', function() {
  map.addSource('murals', {
    'type': 'geojson',
    'data': muralsData
  });

  map.addLayer({
    'id': 'murals',
    'type': 'fill',
    'source': 'murals',
    'layout': {},
    'paint': {
      'fill-color': '#088',
      'fill-opacity': 0.4
    }
  });
});


map.on('load', () => {
  map.addSource('track', {
    'type': 'geojson',
    'data': trackData
  });
  map.addLayer({
    'id': 'track',
    'type': 'line',
    'source': 'track',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#da1a35',
      'line-width': 4
    }
  });
});
map.on('load', () => {
  map.addSource('track3', {
    'type': 'geojson',
    'data': track3Data
  });
  map.addLayer({
    'id': 'track3',
    'type': 'line',
    'source': 'track3',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#00afad',
      'line-width': 4,
    }
  });
});
map.on('load', () => {
  map.addSource('track1', {
    'type': 'geojson',
    'data': track1Data
  });
  map.addLayer({
    'id': 'track1',
    'type': 'line',
    'source': 'track1',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#00afad',
      'line-width': 4,
    }
  });
});
map.on('load', () => {
  map.addSource('track11', {
    'type': 'geojson',
    'data': track11Data
  });
  map.addLayer({
    'id': 'track11',
    'type': 'line',
    'source': 'track11',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#00afad',
      'line-width': 4,
    }
  });
});
map.on('load', () => {
  map.addSource('track4', {
    'type': 'geojson',
    'data': track4Data
  });
  map.addLayer({
    'id': 'track4',
    'type': 'line',
    'source': 'track4',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#da1a35',
      'line-width': 4,

    }
  });
});
map.on('load', () => {
  map.addSource('track2', {
    'type': 'geojson',
    'data': track2Data
  });
  map.addLayer({
    'id': 'track2',
    'type': 'line',
    'source': 'track2',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#7443b9',
      'line-width': 4,
    }
  });
});
map.on('load', () => {
  map.addSource('track5', {
    'type': 'geojson',
    'data': track5Data
  });
  map.addLayer({
    'id': 'track5',
    'type': 'line',
    'source': 'track5',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#30104d',
      'line-width': 4,
    }
  });
});
map.on('load', () => {
  map.addSource('track55', {
    'type': 'geojson',
    'data': track55Data
  });
  map.addLayer({
    'id': 'track55',
    'type': 'line',
    'source': 'track55',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#30104d',
      'line-width': 4,
    }
  });
});
map.on('click', 'track', function (e) {
  let coordinates = e.features[0].geometry.coordinates;
  let properties = e.features[0].properties;

  let popupContent = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stansted_express_logo.svg/2560px-Stansted_express_logo.svg.png" width="70" height="50" alt="Descrição da Imagem">';

  let popup = new mapboxgl.Popup({
    className: "Mypopup",
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates[0])
    .setHTML(popupContent)
    .addTo(map);

  map.on('mouseleave', 'track', function () {
    popup.remove();
  });
});
map.on('click', 'track', function (e) {

  document.getElementById('legenda').innerHTML =
  "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
  "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"

});
map.on('mouseenter', 'track', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'track', function () {
  map.getCanvas().style.cursor = '';
});
map.on('click', 'track55', function (e) {
  let coordinates = e.features[0].geometry.coordinates;
  let properties = e.features[0].properties;

  let popupContent = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stansted_express_logo.svg/2560px-Stansted_express_logo.svg.png" width="70" height="50" alt="Descrição da Imagem">';

  let popup = new mapboxgl.Popup({
    className: "Mypopup",
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates[0])
    .setHTML(popupContent)
    .addTo(map);

  map.on('mouseleave', 'track55', function () {
    popup.remove();
  });
});
map.on('click', 'track55', function (e) {

  document.getElementById('legenda').innerHTML =
  "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
  "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"

});
map.on('mouseenter', 'track55', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'track55', function () {
  map.getCanvas().style.cursor = '';
});
map.on('click', 'track4', function (e) {
  let coordinates = e.features[0].geometry.coordinates;
  let properties = e.features[0].properties;

  let popupContent = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stansted_express_logo.svg/2560px-Stansted_express_logo.svg.png" width="70" height="50" alt="Descrição da Imagem">';

  let popup = new mapboxgl.Popup({
    className: "Mypopup",
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates[0])
    .setHTML(popupContent)
    .addTo(map);

  map.on('mouseleave', 'track4', function () {
    popup.remove();
  });
});
map.on('click', 'track4', function (e) {

  document.getElementById('legenda').innerHTML =
  "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
  "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"

});
map.on('mouseenter', 'track4', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'track4', function () {
  map.getCanvas().style.cursor = '';
});

map.on('click', 'track2', function (e) {
  let coordinates = e.features[0].geometry.coordinates;
  let properties = e.features[0].properties;

  let popupContent = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stansted_express_logo.svg/2560px-Stansted_express_logo.svg.png" width="70" height="50" alt="Descrição da Imagem">';

  let popup = new mapboxgl.Popup({
    className: "Mypopup",
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates[0])
    .setHTML(popupContent)
    .addTo(map);

  map.on('mouseleave', 'track2', function () {
    popup.remove();
  });
});
map.on('click', 'track2', function (e) {

  document.getElementById('legenda').innerHTML =
  "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
  "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"

});
map.on('mouseenter', 'track2', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'track2', function () {
  map.getCanvas().style.cursor = '';
});
map.on('click', 'track5', function (e) {
  let coordinates = e.features[0].geometry.coordinates;
  let properties = e.features[0].properties;

  let popupContent = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Stansted_express_logo.svg/2560px-Stansted_express_logo.svg.png" width="70" height="50" alt="Descrição da Imagem">';

  let popup = new mapboxgl.Popup({
    className: "Mypopup",
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates[0])
    .setHTML(popupContent)
    .addTo(map);

  map.on('mouseleave', 'track5', function () {
    popup.remove();
  });
});
map.on('click', 'track5', function (e) {

  document.getElementById('legenda').innerHTML =
  "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
  "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"

});
map.on('mouseenter', 'track5', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'track5', function () {
  map.getCanvas().style.cursor = '';
});
map.on('click', 'track3', function (e) {
  let coordinates = e.features[0].geometry.coordinates;
  let properties = e.features[0].properties;

  let popupContent = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/DLR_roundel.svg/150px-DLR_roundel.svg.png" width="70" height="50" alt="Descrição da Imagem">';

  let popup = new mapboxgl.Popup({
    className: "Mypopup",
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates[0])
    .setHTML(popupContent)
    .addTo(map);

  map.on('mouseleave', 'track3', function () {
    popup.remove();
  });
});
map.on('click', 'track3', function (e) {

  document.getElementById('legenda').innerHTML =
  "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
  "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"

});
map.on('mouseenter', 'track3', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'track3', function () {
  map.getCanvas().style.cursor = '';
});

map.on('click', 'track1', function (e) {
  let coordinates = e.features[0].geometry.coordinates;
  let properties = e.features[0].properties;

  let popupContent = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/DLR_roundel.svg/150px-DLR_roundel.svg.png" width="70" height="50" alt="Descrição da Imagem">';

  let popup = new mapboxgl.Popup({
    className: "Mypopup",
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates[0])
    .setHTML(popupContent)
    .addTo(map);

  map.on('mouseleave', 'track1', function () {
    popup.remove();
  });
});
map.on('click', 'track1', function (e) {

  document.getElementById('legenda').innerHTML =
  "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
  "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"

});
map.on('mouseenter', 'track1', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'track1', function () {
  map.getCanvas().style.cursor = '';
});

map.on('click', 'track11', function (e) {
  let coordinates = e.features[0].geometry.coordinates;
  let properties = e.features[0].properties;

  let popupContent = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/DLR_roundel.svg/150px-DLR_roundel.svg.png" width="70" height="50" alt="Descrição da Imagem">';

  let popup = new mapboxgl.Popup({
    className: "Mypopup",
    closeButton: true,
    closeOnClick: true,
  })
    .setLngLat(coordinates[0])
    .setHTML(popupContent)
    .addTo(map);

  map.on('mouseleave', 'track11', function () {
    popup.remove();
  });
});
map.on('click', 'track11', function (e) {

  document.getElementById('legenda').innerHTML =
  "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
  "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"

});
map.on('mouseenter', 'track11', function () {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'track11', function () {
  map.getCanvas().style.cursor = '';
});
const generateLayer = (layerName, img, sourceData) => {
  return map.loadImage(
    img,
    (error, image) => {
      if (error) throw error;
      const img = `${layerName}-img`;
      map.addImage(img, image);
      // Add a symbol layer
      map.addLayer({
        'id': layerName,
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data': sourceData
        },
        'layout': {
          'icon-image': img,
          'icon-size': 0.03
        }
      });
      
    }
  );
}



/////////////////////////////////////////////////////////////////////////////
// Begin once map assets are loaded
map.on('load', function (e) {
  generateLayer('tree', 'https://cdn.pixabay.com/photo/2012/04/23/17/29/airport-39335_1280.png', treeData);
  generateLayer('sem', "https://cdn.pixabay.com/photo/2012/04/23/17/06/metro-39112_960_720.png", semData);
  
 


  ///////////////////////////////////////////////////////////////////////////
  // Build mouseover popups for murals (disable for touchscreens)
  if (!('ontouchstart' in window)) {
    map.on('click', 'sem', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'sem', function () {
        popup.remove();

      });
    });
    map.on('click', 'murals', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'murals', function () {
        popup.remove();

      });
    });


    map.on('click', 'tree', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Name;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'tree', function () {
        popup.remove();

      });
    });
    // Build mouseover popups for studios

  }

  /////////////////////////////////////////////////////////////////////////////
  // When user clicks on a map feature, open the content

  map.on('click', 'sem', function (e) {

 
    document.getElementById('legenda').innerHTML =
    "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
    "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"
  
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Arbutus_unedo" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  map.on('click', 'murals', function (e) {

 
    document.getElementById('legenda').innerHTML =
    "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
    "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>"
  
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Arbutus_unedo" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'tree', function (e) {
    document.getElementById('legenda').innerHTML =
    "<ul>" + "<li>" + imageHTML + '<span>' + e.features[0].properties.Nome + '</span>' + "</li>" + 
    "<li>" + imageHTML1 + '<span>' + e.features[0].properties.Name + '</span>' + "</li>"+ "<ul>" +  
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Acer_campestre" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });



  // Change the cursor to a pointer when the mouse is over a symbol layer.
  map.on('mouseenter', 'murals', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'sem', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'tree', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back from a pointer when it leaves.
  map.on('mouseleave', 'murals', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'sem', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseleave', 'tree', function () {
    map.getCanvas().style.cursor = '';
  });


});

//function to reset map

