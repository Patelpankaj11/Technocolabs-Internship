// Foursquare API Info
const clientId = 'DHA2TG5MVK2TTUMTBB5O1EHPDUB24S1L4I4BOLUWNYIUDPIK';
const clientSecret = 'WECOEXI1KE3E22KXRJZIOESSUBB3G1ZGVJ20WHY0NTG5R352';
const url = 'https://foursquare.com/developers/register';

// OpenWeather Info
const openWeatherKey = 'c4bd5ff1c1167a5e8e87723c7abd718e';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = () => {
    jgnpnlgllnnbbttjoykmvpjpk4

}

const getForecast = () => {

}


// Render functions
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        // Add your code here:

        let venueContent = '';
        $venue.append(venueContent);
    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
    // Add your code here:

    let weatherContent = '';
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues()
    getForecast()
    return false;
}

$submit.click(executeSearch)