const stations = [
    'Karachi City', 'Lahore Junction', 'Rawalpindi', 'Peshawar Cantt',
    'Multan Cantt', 'Quetta', 'Faisalabad', 'Hyderabad Junction',
    'Sukkur', 'Bahawalpur', 'Sialkot Junction'
];

function initializeAutocomplete(inputId) {
    const input = document.getElementById(inputId);
    const datalist = document.createElement('datalist');
    datalist.id = `${inputId}-list`;
    
    stations.forEach(station => {
        const option = document.createElement('option');
        option.value = station;
        datalist.appendChild(option);
    });
    
    input.setAttribute('list', datalist.id);
    document.body.appendChild(datalist);
}

// Initialize autocomplete for both station inputs
document.addEventListener('DOMContentLoaded', function() {
    initializeAutocomplete('fromStation');
    initializeAutocomplete('toStation');
});