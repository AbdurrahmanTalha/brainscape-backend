FROM node:18-alphine

WORKDIR /app

RUN yarn install




COPY . .


 # Starting our application
CMD [ "node", "index.js" ]

# Exposing server port
EXPOSE 5000