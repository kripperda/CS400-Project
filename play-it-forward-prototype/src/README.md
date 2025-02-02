This README.md dscribes tht process of how to run test units for the Play It Forward application. The application will display listings for the application with the parameters specified. Continue reading to understand how to run the application within Docker with the files provided.

Requirements:
In order to run this container you'll need Docker installed: Docker desktop
node.js
GitHub files: https://github.com/kripperda/Team-PlayItForward/tree/main
    Found under play-it-forward prototype/src'

Usage:
Download all files from the GitHub repository. 
The Docker file found in the GitHub repsitory should load the Docker image into Docker desktop.
The Docker file contains the instructions that Docker uses to build the image.
    FROM node:18.16.0-alpine3.17
    RUN mkdir -p /opt/app
    WORKDIR /opt/app
    COPY src/package.json src/package-lock.json 
    RUN npm install
    COPY src/ .
    EXPOSE 5432
    CMD [ "npm", "start"]
Click the Docker Image titled ###### to open up the Image.
    If we want to inspect the image and its contents, we need to run it, i.e. essentially firing up a container. We can inspect the container, but for now we won't do anything. Navigate to your machine's home directory first, then run the code below, one line at a time, observing the outputs.
Run the Docker Image (in the upper right corner of the Docker Desktop) to create a container.
    By default, Docker saves a version of the container to our local machine every time you run the image. This can clutter your disk space, and adding the flag --rm ensures that this does not happen, i.e. the container gets deleted after finishing the image run with exit.
Once you have run all containers you need you can exit with the 'exit' command.

Open a browser window and insert http://localhost:3000/ into the address bar.
    This browser page will return the test units.

Built with
Visual Studio `Code
Docker Desktop
Node.js

Special Thanks!
https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application
