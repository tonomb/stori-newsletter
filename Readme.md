# Stori FullStack Engineer Technical Challenge

Thanks for your interest in joining Stori. At this stage, we ask you to solve the following challenge. Best of luck!

For this challenge you will need to code a simple newsletter sending app. The app should consist of both front and back end. You can either make completely separate components (like a SPA + a rest api) or a front + back combo (for example, a php website that can be both the UI and send the newsletters).
We prefer that you code in Python, Javascript/Typescript or Golang; but other languages are ok too. Package your code in one or more Docker images. Include any build or run scripts, Dockerfiles or docker-compose files needed to build and execute your code.

### Bonus points

1. Email is personalized and using html format
2. Recipient user can opt for only unsubscribe from specific newsletters
3. A statistics dashboard is provided (number of sent mails, number of recipients, etc.)
4. Newsletter sending can be scheduled

### Delivery and code requirements

Your project must meet these requirements:

1. Admin user can upload a pdf or png image (the newsletter)
2. Admin user can submit an email list of recipients of the newsletter
3. Admin user can add a single email to the recipient list
4. Admin user can click a button to trigger the newsletter submission
5. PDF of png document should be attached to the email
6. Recipient users can click a "unsubscribe" link contained in the email, the user should not receive any more emails.

## Running App

The exercise [docker](https://www.docker.com/) to be installed.

1. In the repo root directory, run `make local` to run the docker containers.

1. Which should start the **React client at port 3000**.

1. and the **server on port 4000**

## Technical Notes

- The server is running with NestJs
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- Using [axios](https://github.com/axios/axios) as the API client on the frontend
- The server is running on port 4000.

Thank you Stori! 🙏
