function showStations() {
    var json = $.getJSON('/static/stations.json');
    var template = $.get('/static/stations.tpl');
    $.when(json, template).done(function () {
        var t = template.responseText;
        var j = json.responseText;
        console.log(t);
        console.log(j);
        var html = Mustache.to_html(t, $.parseJSON(j));
        $('#stations').show();
        $('#stations').html(html);
        $('#stationDetail').hide();
        $('#stationsMap').hide();
    })
}

function showStationDetail(name, id) {
    // TODO regarder l'extension hash de deck.js pour voir comment reloader en fonction du pound
    var json = $.getJSON('/static/station.json');
    var template = $.get('/static/station.tpl');
    $.when(json, template).done(function () {
        var t = template.responseText;
        var j = json.responseText;
        console.log(t);
        console.log(j);
        var html = Mustache.to_html(t, $.parseJSON(j));
        $('#stations').hide();
        $('#stationDetail').show();
        $('#stationDetail').html(html);
        $('#stationsMap').hide();
    })
}