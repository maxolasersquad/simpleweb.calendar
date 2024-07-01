# Simple Calendar Web App

This project is an experiment in developing a web application using ChatGPT, including this README, which was also
written by ChatGPT. The application is a simple calendar that displays months and allows navigation between them. The
project also demonstrates deploying a React application using Docker.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [License](#license)

## Introduction

This project showcases the use of ChatGPT in developing a simple calendar web application. The app displays months and
allows users to navigate between them using back and forward buttons. Additionally, it updates the URL to reflect the
currently viewed month/year.

## Features

- Display a calendar for a specific month and year.
- Navigate between months using back and forward buttons.
- Update the URL to reflect the currently viewed month/year.
- Handle URL parameters to initialize the calendar view.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Docker

### Installation

1. Clone the repository:

```bash
git clone https://gitlab.com/simplewebb/calendar.git
cd calendar
```

### Running the Application

To run the application locally using Docker, follow these steps:

1. Build the Docker image:

```bash
docker build -t simple-calendar-web-app .
```

2. Run the Docker container:

```bash
docker run -p 3000:80 simple-calendar-web-app
```

This will start the application inside a Docker container and make it accessible at http://localhost:3000.

## Live Deployment

The application is also deployed and can be viewed live at: https://calendar.simplewebb.app
