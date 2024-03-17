FROM node:18-alpine

WORKDIR /todo-react-redux/

COPY public/ /todo-react-redux/public
COPY src/ /todo-react-redux/src
COPY package.json /todo-react-redux/

RUN yarn install

CMD ["yarn", "dev"]
