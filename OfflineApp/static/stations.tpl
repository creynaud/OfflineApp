{{#stationInfo}}
    <div class="station" onClick="showDetail('{{shortName}}', '{{id}}')">
        <div class="stationStatus" style="color: {{maintenanceStatus}}">
            o
        </div>
        <div class="stationName">
            {{shortName}}
        </div>
        <div class="stationHeight">
            {{altitude}} m
        </div>
        <div class="stationClear">
        </div>
    </div>
{{/stationInfo}}