## Introduction

This project, while an assignment for my Senior Seminar class, was to help in learning about React. This project was to learn how to use React combined with other resources to create a comprehensive, adaptive, and powerful web application. This project was also to learn how to incorporate various means of testing via Enzyme and Jest. This project also incorporates continuous integration and automatic deployment via Travis CI for practice and experience with combining Github and other powerful tools. This web application is designed to utilize Searching and Table components to create a table of links that can direct the user to various sites to learn more about React topics. The web application boasts a search function to look for specific topics and integrates cookie management to save recent searches for long periods of use. 

## Technical Features
This project utilizes React principles and libraries to create a powerful web application. It also utilizes:

> Javascript for web application development - This is what was used to create the components that make up the UI and mechanics that make up the web applicaiton

> Jest and Enzyme for creating unit and integration tests - This is utilized in conjuncture with continuous integration to practice testing the web application using Enzyme and Jest. These tests tested that the search function was operating correctly, that the search bar and button are properly rendered and that the table for the web application is rendered.

>Continuous integration via Travis CI - The GitHub account is connected to the Travis CI website that manages integration of new pushes to the repo. It also automatically published the web application to GitHub Pages for immediate availability.

>State cookie management - The project uses the Universal Cookie manager to store, maintain, and retrieve cookies

## Try Out
The following link will direct you to the deployment of the web application: <br >

https://jthommiller.github.io/CSC496-HackerNewsApp/

## Screenshots

![Screenshot of main page](https://github.com/jthommiller/CSC496-HackerNewsApp/blob/master/Screenshots/MainScreen.png?raw=true)

![Screenshot of first search](https://github.com/jthommiller/CSC496-HackerNewsApp/blob/master/Screenshots/Search1.png?raw=true)

## Contributions
I was lucky to have help on this project:

Chase Dawson (https://github.com/AztianPahola) made a couple of pull requests that added more tests for more coverage, updated the design of the table and added state cookie management! The details can be found here: https://github.com/jthommiller/CSC496-HackerNewsApp/pull/1

## Getting Started
Run the following commands to get started with the application!

Clone the application repo to the desired location on your local machine
### 'git clone https://github.com/jthommiller/CSC496-HackerNewsApp.git'

Inside the project directory run the following commands:
### 'npm install'

### 'npm install --save-dev enzyme'

### 'npm install --save-dev enzyme-adapter-react-16'

### 'npm install universal-cookie'

### 'npm run build'


