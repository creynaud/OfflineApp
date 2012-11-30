<div class="stationDetail">
    <div class="stationDetailHeader">
        <div class="stationStatus" style="color: {{status}}">
            o
        </div>
        <div class="stationDetailName">
            {{stationName}}
        </div>
    </div>
    <div class="stationWind">
        <div class="stationWindCurrent">
            <div class="stationWindCurrentTitle">
                Current wind:
            </div>
            Max: {{windMax}}<br/>
            Average: {{windAverage}}<br/>
            Trend: {{windTrend}}<br/>
        </div>
        <div class="stationWindHistory">
            <div class="stationWindHistoryTitle">
                History wind:
            </div>
            Min: {{windHistoryMin}}<br/>
            Max: {{windHistoryMax}}<br/>
            Average: {{windHistoryAverage}}<br/>
        </div>
    </div>
    <div class="stationAir">
        <div class="stationAirTitle">
            Air:
        </div>
        Temperature: {{airTemperature}}<br/>
        Humidity: {{airHumidity}}<br/>
    </div>
</div>