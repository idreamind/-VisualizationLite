/**
 * Created by dreamind on 22.07.2015.
 */

(function() {
    'use strict';

    angular
        .module('Vis')
        .controller('Main', Main);

    function Main() {
        var cm = this;

        // Initialization:
        cm.interval = 1;
        cm.state    = 'No streams';
        cm.solution = 'single';
        cm.ratio    = '0.0';
        cm.age      = '0.0';
        cm.lat      = '53.930020';
        cm.lon      = '27.631554';
        cm.rms      = '0.0';
        cm.sat      = '0';
    }
})();
