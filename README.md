This React application fetches and displays a list of users from an external API, implements a dark and light theme toggle, enables sorting and searching functionalities, and provides detailed views of individual user information. It uses 'react-router-dom' for routing, 'Context API' for global state management, and React functional and class components for UI rendering.
Main Components:
App.js:
Key Functionalities:
  - Fetches user data from an external API (`https://jsonplaceholder.typicode.com/users`).
  - Manages global state like theme, search input, and user data via the 'Context API'.
  - Routes between 'Home', 'UserDetails', and 'NotFound' components.
State Variables:
  - isDarkTheme: Boolean for toggling between dark and light themes.
  - userlist and initail: Arrays to store user data for filtering and restoring purposes.
  - searchinput: String for search functionality.
  - activeOptionId: Tracks the sorting order (A-Z, Z-A, or None).
  - userdetails: Stores detailed information about a single user.
Helper Methods:
  - users(): Fetches and formats the user data for display.
  - toggleTheme(): Toggles between light and dark themes.
  - onsearch(): Filters the user list based on the search input.
  - onsort(): Sorts users based on the selected option (A-Z, Z-A, None).
  - onchangeinput(): Updates 'searchinput' and triggers filtering.
  - changeSortby(): Updates sorting preference and triggers sorting.

Global State Management
Context.js
- Provides global access to key states and methods via 'Context.Consumer' or 'useContext':
  - Theme toggle.
  - User data filtering and sorting.
  - Access to user details for detailed views.
Core UI Components
Home Component:
Purpose: Displays the list of users with options for searching, sorting, and theme toggling.
  Features:
  - Renders user cards from the 'userlist'.
  - Implements search functionality tied to 'onsearch' and 'onchangeinput'.
  - Adjusts layout and styles dynamically based on 'isDarkTheme'.
Navbar Component:
Purpose: A header with theme toggle, search input, and sort options.
- Features:
  - Toggles between dark and light themes using 'toggleTheme'.
  - Handles search input changes.
  - Dropdown menu for sorting options (A-Z, Z-A, None).
  - Dynamically styled based on 'isDarkTheme'.
UserCard Component:
Purpose: Displays a single user’s summary (name, email, city) and links to their details.
  Features:
  - Dynamically adjusts its style based on 'isDarkTheme'.
  - Navigates to `/users/:id` on click.
UserDetails Component:
  Purpose: Displays detailed information about a single user, including:
  - Personal info: Name, username, email, phone.
  - Address: Street, suite, city, zipcode.
  - Geo-coordinates: Latitude, longitude.
  - Company details: Name, tagline, and business area.
Implementation:
  - Used 'useParams' from 'react-router-dom' to fetch the user ID.
  - Fetches user details using the 'id' and updates local states.
  - Renders sections for user info, address, geography, and company details.
NotFound Component:
- Purpose: Displays a message and image when no users are found or the route doesn’t match.
- Features:
  - Light and dark themes for styling.
  - Encourages users to search with other names.
API Integration:
- Data is fetched from `https://jsonplaceholder.typicode.com/users`.
- Endpoints:
  - `/users`: List of all users.
  - `/users/:id`: Details of a specific user.
