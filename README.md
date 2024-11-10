# URL Shortner

## What it does?
> - Take the original URL from the user and return the shortned URL.
> - Keep the track of clicks on the URL.

## Routes Of Application
- POST => `/url`: Generates a new shortned URL.
- GET => `/:id`: Redirect to the Original URL.
- GET => `/url/analytics/:id`: Return the number of clicks on the shortened URL.
