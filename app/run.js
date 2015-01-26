/**
 * Created by regan_sarwas on 7/8/14.
 */
/*
 * This runs at the bottom of the body, after the npmap bootstrap code is loaded, but not initialized;
 * The DOM is ready at this point, but not NPMap or Leaflet
 */

if (config) {
    if (config.title) {
        $('#title').html(config.title);
    }
    if (config.subtitle) {
        $('#subtitle').html(config.subtitle);
    }
}

// Will be called by the npmap bootstrap code (line 88 in function callback) when everything is ready.
function npmapReady() {
    initSearch();   //in modified version of leaflet-search.js
    setupSearch();  //in main.js
}