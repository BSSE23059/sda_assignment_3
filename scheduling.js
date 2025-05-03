const scheduleForm = document.getElementById('scheduleForm');
const scheduleTable = document.getElementById('scheduleTable').getElementsByTagName('tbody')[0];

// Load existing schedules from localStorage
let schedules = JSON.parse(localStorage.getItem('trainSchedules')) || [];

// Form validation and submission
scheduleForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading spinner
    showSpinner();
    
    const newSchedule = {
        id: Date.now(),
        trainName: document.getElementById('trainName').value,
        fromStation: document.getElementById('fromStation').value,
        toStation: document.getElementById('toStation').value,
        departureDate: document.getElementById('departureDate').value,
        departureTime: document.getElementById('departureTime').value,
        arrivalDate: document.getElementById('arrivalDate').value,
        arrivalTime: document.getElementById('arrivalTime').value
    };
    
    // Validate stations are different
    if (newSchedule.fromStation === newSchedule.toStation) {
        showAlert('From and To stations cannot be the same!', 'danger');
        hideSpinner();
        return;
    }
    
    // Add to array and localStorage
    schedules.push(newSchedule);
    localStorage.setItem('trainSchedules', JSON.stringify(schedules));
    
    // Update table
    addScheduleToTable(newSchedule);
    
    // Show success message
    showAlert('Schedule added successfully!', 'success');
    
    // Clear form
    scheduleForm.reset();
    hideSpinner();
});

// Add schedule to table
function addScheduleToTable(schedule) {
    const row = scheduleTable.insertRow();
    row.dataset.id = schedule.id;
    
    row.innerHTML = `
        <td>${schedule.trainName}</td>
        <td>${schedule.fromStation}</td>
        <td>${schedule.toStation}</td>
        <td>${schedule.departureDate} ${schedule.departureTime}</td>
        <td>${schedule.arrivalDate} ${schedule.arrivalTime}</td>
        <td>
            <button class="btn btn-sm btn-warning edit-btn">Edit</button>
            <button class="btn btn-sm btn-danger delete-btn">Delete</button>
        </td>
    `;
}

// Delete schedule
scheduleTable.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this schedule?')) {
            const row = e.target.closest('tr');
            const id = parseInt(row.dataset.id);
            
            schedules = schedules.filter(schedule => schedule.id !== id);
            localStorage.setItem('trainSchedules', JSON.stringify(schedules));
            
            row.remove();
            showAlert('Schedule deleted successfully!', 'success');
        }
    }
});

// Show alert message
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.querySelector('.card-body').insertBefore(alertDiv, scheduleForm);
    
    // Auto dismiss after 3 seconds
    setTimeout(() => alertDiv.remove(), 3000);
}

// Show/hide loading spinner
function showSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'spinner-border text-success';
    spinner.setAttribute('role', 'status');
    spinner.innerHTML = '<span class="visually-hidden">Loading...</span>';
    
    document.querySelector('.card-body').appendChild(spinner);
}

function hideSpinner() {
    const spinner = document.querySelector('.spinner-border');
    if (spinner) spinner.remove();
}

// Load existing schedules on page load
window.addEventListener('load', function() {
    schedules.forEach(schedule => addScheduleToTable(schedule));
});