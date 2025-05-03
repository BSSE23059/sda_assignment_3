# Pakistan Railways Management System

A web-based railway management system built with HTML, CSS, and JavaScript that allows users to manage train schedules, book tickets, and handle user authentication.

## Features

### 1. User Authentication
- Secure login and registration system
- Local storage-based session management
- Password validation and confirmation
- User-friendly alerts and notifications

### 2. Train Schedule Management
- Add new train schedules
- View existing schedules in a tabular format
- Edit and delete schedules
- Real-time validation of station selections
- Persistent storage using localStorage

### 3. Ticket Booking System
- User-friendly booking interface
- Station selection
- Dynamic fare calculation
- Booking confirmation system

### 4. Interactive UI Components
- Responsive design using Bootstrap 5
- Loading spinners for async operations
- Alert messages for user feedback
- Confirmation dialogs for critical actions
- Form validation with real-time feedback

## Project Structure
```
├── login.html           # User login page
├── register.html        # User registration page
├── scheduling.html      # Train schedule management
├── ticket_booking.html  # Ticket booking interface
├── train_timings.html   # Train schedule display
├── js/
│   ├── auth.js         # Authentication logic
│   ├── login.js        # Login page functionality
│   ├── register.js     # Registration page functionality
│   └── scheduling.js   # Schedule management logic
```

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5.3.0
- Font Awesome 6.4.0
- Local Storage API

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pakistan-railways.git
```

2. Open the project in your preferred code editor (VS Code recommended)

3. Launch the application:
   - Open `railway_reservation.html` in your web browser
   - Or use a local development server

## Usage

### User Registration
1. Navigate to the registration page
2. Fill in required details (name, email, password)
3. Submit the form to create an account

### Login
1. Enter registered email and password
2. Upon successful login, you'll be redirected to the ticket booking page

### Managing Train Schedules
1. Navigate to the scheduling page
2. Add new schedules using the form
3. View, edit, or delete existing schedules
4. All changes are automatically saved to localStorage

### Booking Tickets
1. Select departure and arrival stations
2. Choose travel date and time
3. View fare calculation
4. Confirm booking

## Security Features
- Basic password hashing (for demonstration)
- Form validation
- Session management
- Protected routes

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements
- Backend integration
- Payment gateway integration
- Email notifications
- Mobile responsive design improvements
- Advanced search and filter options
- Seat selection system

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments
- Pakistan Railways for inspiration
- Bootstrap team for the amazing UI framework
- Font Awesome for the icons