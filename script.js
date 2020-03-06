$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});



// /* -------------------- MAP ------------------*/
var map1, map2;

var myStyle = [
    {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }, {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }, {
        featureType: "water",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }
];

function drawMap() {

    var mapOptions = {
        zoom: 13,
        mapTypeControl: false,
        fullscreenControl: false,
        gestureHandling: 'none',
        zoomControl: false,
        streetViewControl: false,
    }

    mapOptions.center = new google.maps.LatLng(50.805832, -1.087222); // Portsmouth
    map1 = new google.maps.Map(document.getElementById("mapCanvas1"), mapOptions);

    mapOptions.center = new google.maps.LatLng(-33.865143, 151.209900); // Sydney
    map2 = new google.maps.Map(document.getElementById("mapCanvas2"), mapOptions);

    map1.set('styles', myStyle); //Apply the stylings to make the maps blank
    map2.set('styles', myStyle);

    // Listen for click on map
    google.maps.event.addListener(map1, 'click', function (event) {
        // Add marker
        addMarker({ coords: event.latLng });
    });

    // Listen for click on map
    google.maps.event.addListener(map2, 'click', function (event) {
        // Add marker
        addMarker({ coords: event.latLng });
    });

    // Array of markers
    var markers = [{
        coords: {
            lat: -33.856634,
            lng: 151.215278
        },
        map: map2,
        //iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: 'Sydney Opera House'
    },
    {
        coords: {
            lat: 50.79557,
            lng: -1.10851
        },
        map: map1,
        content: 'Spinnaker Tower'
    },
    {
        coords: {
            lat: 50.80221,
            lng: -1.10885
        },
        map: map1,
        content: 'Mary Rose Museum'
    },
    {
        coords: {
            lat: 50.82469,
            lng: -1.11744
        },
        map: map1,
        content: 'Portsmouth Harbour'
    },
    {
        coords: {
            lat: 50.77799,
            lng: -1.08882
        },
        map: map1,
        content: 'Southsea Castle'
    },
    {
        coords: {
            lat: 50.80706,
            lng: -1.08721
        },
        map: map1,
        content: 'Charles Dickens Birthplace Museum'
    },
    {
        coords: {
            lat: 50.80361,
            lng: -1.07666
        },
        map: map1,
        content: 'St Mary&#39;s Church'
    },
    {
        coords: {
            lat: 33.8712,
            lng: 151.2133
        },
        map: map1,
        content: 'St Mary&#39;s Cathedral'
    },
    {
        coords: {
            lat: -33.85457,
            lng: 151.20361
        },
        map: map2,
        content: 'Walsh Bay'
    },
    {
        coords: {
            lat: -33.87315,
            lng: 151.20611
        },
        map: map2,
        content: 'Sydney Town Hall'
    },
    {
        coords: {
            lat: -33.90647,
            lng: 151.2035
        },
        map: map2,
        content: 'Green Square'
    },
    {
        coords: {
            lat: -33.8636,
            lng: 151.21144
        },
        map: map2,
        content: 'Museum of Sydney'
    },
    {
        coords: {
            lat: -33.86737,
            lng: 151.19522
        },
        map: map2,
        content: 'The Star Sydney'
    },
    {
        coords: {
            lat: -33.86418,
            lng: 151.21657
        },
        map: map2,
        content: 'Royal Botanic Gardens'
    },
    {
        coords: {
            lat: -33.85457,
            lng: 151.20361
        },
        map: map2,
        content: 'Walsh Bay'
    },
    ];


    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: props.map,
        });

        // Check for customicon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check for general info
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            // Look for mouseover to display info on the 2 maps
            marker.addListener('mouseover', function () {
                infoWindow.open(map2, marker);
            });
            marker.addListener('mouseout', function () {
                infoWindow.close(map2, marker);
            });
            marker.addListener('mouseover', function () {
                infoWindow.open(map1, marker);
            });
            marker.addListener('mouseout', function () {
                infoWindow.close(map1, marker);
            });

            marker.addListener('click', function () {
                inf
            })
        }
    }
}