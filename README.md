Recipe Discovery App

I built this Recipe Discovery App project as a student at Per Scholas to showcase my foundational React skills. The app allows users to browse diverse recipe categories, search for specific meals, view detailed ingredients and cooking instructions, and manage a personal list of favorite recipes.

Project Goal
My primary goal for this project was to build a real-world, dynamic web application that successfully integrates core React concepts. I focused on managing global state, handling asynchronous data from a third-party API, and creating a seamless user experience using client-side routing.

Features

* Browse Categories: Explore a wide variety of meal categories right from the homepage.
* Category Filtering: Click into any category to view all related recipes.
* Live Search: Quickly search for specific meals using the search bar.
* Detailed Recipe Views: Open any recipe to view a complete list of ingredients, measurements, and step-by-step instructions.
* Favorites Management: Save and remove favorite recipes seamlessly across the app.
* Persistent Storage: Used localStorage so that user favorites remain saved even after refreshing the browser.
* UX Enhancements: Clean UI states that show explicit loading spinners and descriptive error messages when fetching data.

 Tools & Technologies Used

* React (via Vite for a fast development build environment)
* React Router (for multi-page navigation without page reloads)
* Context API (for global state management of favorite recipes)
* Fetch API (to communicate with the external database)
* TheMealDB API (the open-source data source for all meal information)

Skills Demonstrated

* State Management: Utilized useState for local component UI states and the Context API to eliminate prop-drilling for favorites.
* Side Effects: Used useEffect hooks to handle API synchronization and local storage updates.
* Custom Hooks: Built reusable custom hooks to abstract data fetching logic and clean up component code.
* Component Architecture: Designed reusable, modular components (like cards, search bars, and loading states).
* Asynchronous Programming: Handled API promises, including loading states and error boundaries.

How to Run the Project Locally
To get this project running on your local machine, follow these steps:

1. Clone or open the project in VS Code.
2. Install the dependencies by running the following command in your terminal:bash
3. Start the local development server:bashnpm run dev
4. Open the local link provided in your terminal (usually <http://localhost:5173>) in your web browser.

Challenges & Takeaways

Building this app pushed me out of my comfort zone and helped me grow significantly as a developer. Some of the key challenges I faced included:

* Managing Global State with Context API: At first, passing the "favorites" data between distant components led to messy prop-drilling. Implementing the Context API was challenging to set up initially, but it was incredibly rewarding to see how smoothly the application shared state once the provider was established.

* Syncing Local Storage with React State: Ensuring that the favorite recipes persisted after a page refresh required a deep understanding of the component lifecycle. I had to learn how to properly orchestrate useState and useEffect together so localStorage would accurately update whenever a user added or removed a meal.

* Data Wrangling with TheMealDB API: The structure of the data returned by TheMealDB for ingredients is unique (e.g., separate keys like strIngredient1, strIngredient2, etc.). I had to write custom JavaScript logic to dynamically loop through these keys, filter out empty values, and pair them with their corresponding measurements before rendering them on the screen.
* Handling Asynchronous UX UI States: Network requests aren't instant, and sometimes they fail. It was a great learning experience designing custom hooks that gracefully managed loading and errorstates, ensures the user is never stuck looking at a blank page.

Author
Dr. Chantell McDowell
Per Scholas Student
