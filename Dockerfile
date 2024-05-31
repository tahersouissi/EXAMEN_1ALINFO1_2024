FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]


# FROM node:18.13.0 as build

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# RUN npm install -g @angular/cli

# COPY . .

# RUN ng build --configuration=production

# FROM nginx:latest

# COPY --from=build app/dist/aftas-angular /usr/share/nginx/html

# EXPOSE 80
