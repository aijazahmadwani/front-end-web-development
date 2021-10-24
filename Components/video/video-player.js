let vid = videojs('gulmarg', {
    autoplay: 'muted',
    controls: 'true',
    poster: './video-poster.jpg',
    loop: 'true',
    aspectRation: '4:3',
    fluid: 'true',
    playbackRates: [0.25, 0.5, 1, 1.5, 2],
    plugins: {
        hotkeys: {

        }
    }

});