# nowdigitaleasy

CRUD opretion .

## Technologies Used

List the main technologies and frameworks used in your project.

- Node.js
- Express.js
- MongoDB
- Mongoose

## Setup

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure your database connection in `config/db.js`.
4. Start the server using `npm start`.

## API Endpoints

- **GET /api**
  - *Description*: Welcome page
  - *Response*: HTML with a welcome message.

- **POST /api/users**
  - *Description*: Add a new user to the database.
  - *Request Body*: JSON with user details (name, role, email, phoneNumber).
  - *Response*: JSON with the newly created user.

- **GET /api/users**
  - *Description*: Get all users from the database.
  - *Response*: JSON array of users.

- **GET /api/users/:id**
  - *Description*: Get a single user by ID from the database.
  - *Response*: JSON with user details.

- **DELETE /api/users/:id**
  - *Description*: Delete a user by ID from the database.
  - *Response*: JSON with a success message.

- **PUT /api/users/:id**
  - *Description*: Update a user by ID in the database.
  - *Request Body*: JSON with updated user details.
  - *Response*: JSON with the updated user.

