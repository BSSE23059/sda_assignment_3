class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    }

    register(firstName, lastName, email, password) {
        // Check if user already exists
        if (this.users.find(user => user.email === email)) {
            throw new Error('User already exists');
        }

        // Create new user
        const user = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            password: this.hashPassword(password) // In real apps, use proper hashing
        };

        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
        return true;
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email);
        if (!user || user.password !== this.hashPassword(password)) {
            throw new Error('Invalid credentials');
        }

        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }));
        this.isAuthenticated = true;
        return true;
    }

    logout() {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('currentUser');
        this.isAuthenticated = false;
        window.location.href = 'login.html';
    }

    checkAuth() {
        if (!this.isAuthenticated) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }

    // Simple password hashing (for demo purposes only)
    hashPassword(password) {
        return btoa(password);
    }
}

const auth = new Auth();