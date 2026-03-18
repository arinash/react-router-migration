# Kotlin Homepage - Migrarion to React Router 7 Framework Mode

The goal of this project was to migrate a Kotlin homegape https://kotlinlang.org from original legacy React setup to React Router 7 Framework Mode with Server-Side Rendering (SSR).

The original source project is a stripped-down version of a past revision of the https://kotlinlang.org website containing only the homepage.

## Features

- Use of React Router 7 Framework Mode
- Server-side rendering

## Getting Started

### Prerequisites

- Node.js (>=18.0.0 recommended)
- (Optional) Docker, if you want to build and run using Docker

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

### Notes
- The project contains only one page, navigation links are non-functional by design — this has not been changed in accordance with the assignment.
- It was decided not to use Header and Footer since they use require() function which is not defined in Vite's SSR.
