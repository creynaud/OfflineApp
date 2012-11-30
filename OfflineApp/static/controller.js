/* TODO what about localization in templates? */
/* TODO templates with completion in the IDE? */
/* TODO keep user position in stations list when back is pressed:
   push the info to history and use this in showStations?
 */

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function startController() {
    // Revert to a previously saved state
    window.addEventListener('popstate', function(event) {
        dispatchToView();
    });
}

function dispatchToView() {
    var page = getParameterByName("page");
    if (page === 'stations') {
        showStations();
    } else if (page === 'detail') {
        var stationId = getParameterByName("stationId");
        var stationName = getParameterByName("stationName");
        showStationDetail(stationName, stationId);
    } else {
        showStations();
    }
}

function showStations() {
    window.history.pushState(null, null, "?page=stations");
    var json = $.getJSON('/static/stations.json');
    var template = $.get('/static/stations.tpl');
    $.when(json, template).done(function () {
        var stations = $.parseJSON(json.responseText);
        var html = Mustache.to_html(template.responseText, stations);
        $('#stations').show();
        $('#stations').html(html);
        $('#stationDetail').hide();
        $('#stationsMap').hide();
    })
}

function showStationDetail(name, id) {
    window.history.pushState(null, null, "?page=detail&stationId=" + id + "&stationName=" + name);
    var json = $.getJSON('/static/station.json');
    var template = $.get('/static/station.tpl');
    $.when(json, template).done(function () {
        var station = $.parseJSON(json.responseText);
        station.stationName = name;
        var html = Mustache.to_html(template.responseText, station);
        $('#stations').hide();
        $('#stationDetail').show();
        $('#stationDetail').html(html);
        $('#stationsMap').hide();
    })
}