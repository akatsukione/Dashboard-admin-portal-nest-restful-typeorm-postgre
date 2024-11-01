# Installing Nest.js

This guide will walk you through the process of setting up Nest.js on your development environment.

## Prerequisites

Before starting, make sure you have the following installed:

- Node.js (version 14.x or higher)
- npm (Node Package Manager)

## Step 1: Install Nest CLI

First, we need to install the Nest CLI globally on your system. Open your terminal and run the following command:

`npm install -g @nestjs/cli`

This command installs the Nest CLI globally, allowing you to create new Nest.js projects and generate various components throughout your development process.

## Step 2: Create a New Nest.js Project

Now that we have the Nest CLI installed, let's create a new Nest.js project. Navigate to the directory where you want to create your project and run:

`nest new my-project-name`

Replace `my-project-name` with your desired project name. The CLI will prompt you with a few questions about your project structure and features.

## Step 3: Navigate to the Project Directory

Once the installation is complete, navigate to your newly created project directory:

`cd my-project-name`

## Step 4: Start the Development Server

To start the development server, run:

`npm run start:dev`

This command starts the Nest CLI dev server, which watches your files and automatically restarts the server when you make changes.

## Step 5: Access Your Application

By default, Nest.js applications run on `http://localhost:3000`. Open your web browser and navigate to this URL to see your application running.

## Additional Commands

Here are some useful commands you might need:

- Start the production server: `npm run start`
- Generate a module: `nest generate module users`
- Generate a controller: `nest generate controller users`
- Generate a service: `nest generate service users`

## Troubleshooting

If you encounter any issues during installation or execution, try the following:

1. Ensure Node.js and npm are correctly installed and up to date.
2. Check that you have sufficient permissions to execute the necessary commands.
3. Clear your npm cache and reinstall dependencies: `npm cache clean --force` followed by `rm -rf node_modules package-lock.json` and then `npm install`.

With these steps, you should now have a working Nest.js project set up and ready for development. Remember to refer to the official Nest.js documentation for more advanced features and best practices as you continue building your application.

4. Lists (using both ordered and unordered list syntax)
5. Emphasis (bold text using **text**)

The formatting is consistent throughout the guide, making it easy to read and understand. The use of headers, lists, and code blocks helps to organize the information clearly.
