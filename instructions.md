# Setup Steps for Week 20 Homework #
1. Copy create-react-express folder from week 20, activity 07

2. Make sure Mongo is running (mongod on Windows)

3. Install mongo npm package (in the root folder -- same directory as server.js)

4. Install mongoose (also in the root folder)

5. Check that Axios is installed in the client folder

6. For full schema examples, look at week 18, activity 18

   - Library.js has examples for both properties and refs (collection relations)

   - server.js has an example of configuring mongoose and setting up the models

7. Week 20, exercise 08 has an example of client->server communication

8. Refer to to do list, and bookmark list apps for general React attack methodologies

Instructions


This application requires at minimum 2 pages, check out the following mockup images for each page:


Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.


Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.


Start by using the 07-Ins_Mern example as a base for your application.


Add code to connect to a MongoDB database named googlebooks using the mongoose npm package.


Using mongoose, then create a Book schema.


At a minimum, books should have each of the following fields:




title - Title of the book from the Google Books API


authors - The books's author(s) as returned from the Google Books API


description - The book's description as returned from the Google Books API


image - The Book's thumbnail image as returned from the Google Books API


link - The Book's information link as returned from the Google Books API


Creating documents in your books collection similar to the following: