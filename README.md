# textEditor

## Description
This application is a text editor that runs in the browswer. It is a single-page application that meets PWA criteria. This application also useds a variety of data persistence measures in case one of the options is not supported for the browser. It also is able to function offline.

## Table of Contents

[Development](#Development)

[Usage](#Usage)

[Installation](#Installation)

[Questions](#Questions)

## Development
This application was developed using javaScript, node, express, webpack, and concurrently. It also uses service workers to improve its functionality offline.

## Usage
In the command-line, the user inputs "npm run start" to run the application.

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

![Screenshot](./Screen%20Shot%202022-08-24%20at%208.27.45%20PM.png)

## Installation
To run this application, the user must have node.js installed on their device and a system for running command-line applications, such as terminal.

When code is downloaded, the user must run "npm install" followed by "npm run build" prior to running "npm run start".

## Questions
If you have any questions or note any issues with this application please contact me at:

[Github](https://www.github.com/edanahy22)

[Email](mailto:elainedanahy2022@u.northwestern.edu)