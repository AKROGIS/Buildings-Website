/**
 * Created by regan_sarwas on 7/8/14.
 */
/*
 * This runs at the bottom of the body, after the npmap bootstrap code
 */

if (config) {
    if (config.title) {
        $('#title').html(config.title);
    }
    if (config.subtitle) {
        $('#subtitle').html(config.subtitle);
    }
}

var map = NPMap.config.L
map.on('click', function(e) {window.alert(e.latlng)});





(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var f = n[o] = {
                exports: {}
            };
            t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, f, f.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [
        function (require, module, exports) {

        }, {}
    ],
    2: [
        function (require, module, exports) {
            module.exports = require(1)
        }, {}
    ],
    79: [
        function (require, module, exports) {
            var handlebars = require('handlebars'),
                reqwest = require('reqwest');

            handlebars.registerHelper('toLowerCase', function (str) {
                return str.toLowerCase();
            });
            module.exports = {
                _checkDisplay: function(node, changed) {
                    if (node.style && node.style.display === 'none') {
                        changed.push(node);
                        node.style.display = 'block';
                    }
                },  unescapeHtml: function(unsafe) {
                    return unsafe
                        .replace(/&amp;/g, '&')
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                        .replace(/&quot;/g, '\"')
                        .replace(/&#039;/g, '\'');
                }
            };

        }, {
            "./lazyloader.js": 75,
            "handlebars": 21,
            "reqwest": 28
        }
    ]
}, {}, [30]);