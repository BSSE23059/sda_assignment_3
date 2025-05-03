document.addEventListener('DOMContentLoaded', () => {
    if (!auth.checkAuth()) {
        return;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.querySelector('form');
    
    // Add alert container
    const alertContainer = document.createElement('div');
    alertContainer.id = 'alertContainer';
    registerForm.insertBefore(alertContainer, registerForm.firstChild);

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validation
        if (password !== confirmPassword) {
            showAlert('Passwords do not match', 'danger');
            return;
        }

        if (password.length < 8) {
            showAlert('Password must be at least 8 characters long', 'danger');
            return;
        }

        try {
            await auth.register(firstName, lastName, email, password);
            showAlert('Registration successful! Redirecting to login...', 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
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