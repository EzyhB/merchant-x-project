FROM node:alpine
WORKDIR '/merchant-x'

COPY package.json .
RUN npm install --force
COPY  . .
CMD ["npm", "start"]
