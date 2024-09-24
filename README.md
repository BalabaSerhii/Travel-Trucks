TravelTrucks Frontend Application
Overview
This project is a frontend web application developed for the company TravelTrucks, which specializes in camper van rentals. The goal of the application is to provide users with an intuitive platform to browse available camper rentals, view detailed camper information, read customer reviews, and book their chosen camper.

Features
Home Page: The main landing page that introduces the company and provides an overview of the available services.
Catalog Page: A page displaying a list of all available campers for rent, fetched from the provided API. Users can apply filters to narrow down their search.
Camper Detail Page: For each camper, there is a detailed page displaying its description, images, customer reviews, and a booking form.
API Integration
The application uses a provided backend API to fetch the necessary data for campers and their details. The main API endpoints used are:

GET /campers: Retrieves a list of all available campers. It also allows filtering options to refine the results.
GET /campers/
: Retrieves the details of a specific camper by its ID.
Technologies Used
Frontend Framework: React
Styling:CSS framework/library
API Interaction: Axios or Fetch API is used for making HTTP requests.
