FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Set the environment variables
ENV NODE_ENV=production
ENV API_URL=http://localhost:8080

EXPOSE 3000

CMD ["npm", "start"]