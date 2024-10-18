
# PlanItNow

Welcome to **PlanItNow**, a web application designed for both event organizers and service providers. This platform simplifies the event planning process by providing a user-friendly interface for managing events and resources effectively.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Database Structure](#database-structure)
- [User Flow](#user-flow)
  - [Organizer Flow](#organizer-flow)
  - [Service Provider Flow](#service-provider-flow)
- [Installation](#installation)
- [Sample Login](#sample-login)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Categories**: Users can choose between two categories: Organizer or Service Provider.
- **Event Planning**: Organizers can create and manage events with details like name, date, and budget.
- **Event Categories**: Organizers can select from various event categories (e.g., cultural, tech, weddings).
- **Resource Person Selection**: Choose from different suppliers based on your event's needs and budget.
- **Charity Donations**: Option to allocate a portion of the event budget to charity.
- **Budget Management**: Provides a detailed price list based on selected resource persons.
- **Analytics Dashboard**: View insights on events, tickets sold, revenue generated, and more.
- **Account Management**: Users can update profile information and change passwords.

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: Ballerina
- **Database**: Ballerina Database

## Database Structure

The application uses the following database structure:

- **Database Name**: `ballerina`
- **Tables**:
  - `users`
  - `budget`
  - `charity`
  - `events`

## User Flow

### Organizer Flow

1. **Home Page**: Users select their category (Organizer or Service Provider).
2. **Registration/Login**: If an organizer, they must register or log in.
3. **Create Event**: Navigate to the new event page to enter details (name, date, budget) and create the event.
4. **Event Category Selection**: Choose from categories (cultural, tech, weddings, etc.).
5. **Resource Person Selection**: Select suppliers based on needs and budget (currently demonstrating only the photographer category).
6. **Charity Contribution**: Option to donate part of the budget to charity.
7. **Budget Page**: Review the estimated budget based on selected resources.
8. **SMS Notifications**: Service providers receive SMS alerts for selected resources.
9. **Analytics Page**: View event details, ticket sales, revenue, and other statistics.
10. **Account Management**: Update profile and password settings.
11. **Logout**: Return to the login page.

### Service Provider Flow

1. **Home Page**: Service providers select their category and log in.
2. **Dashboard**: View upcoming events, new reviews, account settings, and existing packages.
3. **Booking Page**: Access active, pending, canceled, and fulfilled bookings.
4. **Account Management**: Update account information and change password.
5. **Logout**: Exit the application.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   bash
   git clone https://github.com/yourusername/PlanItNow.git
   cd PlanItNow
   

2. Install the necessary dependencies for both the frontend and backend:
   bash
   cd frontend
   npm install
   cd ../backend
   ballerina build
   

3. Start the backend server:
   bash
   ballerina run <main_file.bal>
   

4. Start the frontend:
   bash
   cd frontend
   npm start
   

5. Access the application at `http://localhost:3000`.

## Sample Login

- **Email**: `admin@gmail.com`
- **Password**: `admin123`

## Future Enhancements

- Implement an AI algorithm to suggest resource persons based on the organizer's estimated budget.
- Expand service provider categories and functionalities.
- Enable organizers to conduct charity events directly through the platform.

## Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue for any enhancements or bugs.

## License

This project is licensed under the MIT License.

