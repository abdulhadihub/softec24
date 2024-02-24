FROM node:20-alpine

# Create app directory
WORKDIR /app

# Set environment variables
ENV MONGO_URI="mongodb+srv://ConnectIn:ConnectIn@cluster0.3gpbxdl.mongodb.net/pucon"
ENV JWT_SECRET="secret"
ENV PORT=5000

# Install app dependencies
COPY package*.json .

RUN npm install

# Bundle app source
COPY . .

# Build the app
# RUN npm run build

EXPOSE 5000

CMD [ "npm", "run", "dev" ]