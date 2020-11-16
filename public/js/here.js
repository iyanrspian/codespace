if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position =>{
        localCoord = position.coords;
        objLocalCoord = {
            lat: localCoord.latitude,
            lng: localCoord.longitude
        };

        // Initialize the platform object:
        let platform = new H.service.Platform({
            'apikey': window.hereApiKey
        });

        // Obtain the default map types from the platform object
        let defaulLayers = platform.createDefaultLayers();

        // Instantiate (and display) a map object:
        let map = new H.Map(
            document.getElementById('mapContainer'),
            defaulLayers.vector.normal.map,
            {
                zoom: 13,
                center: objLocalCoord,
                pixelRatio: window.devicePixelRatio || 1
            });
            window.addEventListener('resize', ()=> map.getViewPort().resize());

        let ui = H.ui.UI.createDefault(map, defaulLayers);
        let mapEvents = new H.mapevents.MapEvents(map);
        let behavior = new H.mapevents.Behavior(mapEvents);
    })
} else {
    console.error("Geolocation isn't supported")
}
