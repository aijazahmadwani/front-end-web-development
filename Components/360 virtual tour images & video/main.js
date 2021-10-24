// viewer = pannellum.viewer('panorama', {
//     "type": "equirectangular",
//     "panorama": "./images/0vcl1c4r-a-living-room-filled-with-furniture-and-a-tv.jpeg",
//     "autoLoad": true,
//     "autoRotate": -2,
//     "title": "Just a sample demo for 360 panoromas",
//     "author": "Aijaz Ahmad Wani",
//     "compass": true,
//     "northOffset": 247.5,
//     "pitch": 2.3,
//     "yaw": -135.4,
//     "hfov": 120,
//     "showControls": false,
//     /*
//   * Uncomment the next line to print the coordinates of mouse clicks
//   * to the browser's developer console, which makes it much easier
//   * to figure out where to place hot spots. Always remove it when
//   * finished, though.
//   */
//     "hotSpotDebug": true,
//     "hotSpots": [
//         {
//             "pitch": -6.45,
//             "yaw": -100.27,
//             "type": "info",
//             "text": "Baltimore Museum of Art",
//             "URL": "./images/4e90l1p-360-panorama-view-house-interior.jpeg"
//         },
//         {
//             "pitch": -4,
//             "yaw": 142.4,
//             "type": "info",
//             "text": "My Computer"
//         }
//     ]
    
// });



// Make buttons work
document.getElementById('pan-up').addEventListener('click', function (e) {
    viewer.setPitch(viewer.getPitch() + 10);
});
document.getElementById('pan-down').addEventListener('click', function (e) {
    viewer.setPitch(viewer.getPitch() - 10);
});
document.getElementById('pan-left').addEventListener('click', function (e) {
    viewer.setYaw(viewer.getYaw() - 10);
});
document.getElementById('pan-right').addEventListener('click', function (e) {
    viewer.setYaw(viewer.getYaw() + 10);
});
document.getElementById('zoom-in').addEventListener('click', function (e) {
    viewer.setHfov(viewer.getHfov() - 10);
});
document.getElementById('zoom-out').addEventListener('click', function (e) {
    viewer.setHfov(viewer.getHfov() + 10);
});
document.getElementById('fullscreen').addEventListener('click', function (e) {
    viewer.toggleFullscreen();
});




viewer = pannellum.viewer('panorama', {
    "default": {
        "firstScene": "circle",
        "author": "Aijaz Ahmad Wani",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        "autoRotate": -2,
        "showControls": false
    },

    "scenes": {
        "circle": {
            "title": "Room 1",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "./images/0vcl1c4r-a-living-room-filled-with-furniture-and-a-tv.jpeg",
            "hotSpots": [
                {
                    "pitch": -2.1,
                    "yaw": 132.9,
                    "type": "scene",
                    "text": "next room ",
                    "sceneId": "house"
                }
            ]
        },

        "house": {
            "title": "previous room",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "./images/4e90l1p-360-panorama-view-house-interior.jpeg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});