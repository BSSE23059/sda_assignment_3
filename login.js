document.addEventListener('DOMContentLoaded', () => {
    if (!auth.checkAuth()) {
        return;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    
    const alertContainer = document.createElement('div');
    alertContainer.id = 'alertContainer';
    loginForm.insertBefore(alertContainer, loginForm.firstChild);

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            await auth.login(email, password);
            showAlert('Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'ticket_booking.html'; // Changed redirect URL
            }, 1500);
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    });

    function showAlert(message, type) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show`;
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        alertContainer.innerHTML = '';
        alertContainer.appendChild(alert);

        if (type === 'success') {
            setTimeout(() => alert.remove(), 1500);
        }
    }
});