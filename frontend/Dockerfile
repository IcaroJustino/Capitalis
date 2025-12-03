FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Usar servidor web simples em vez de nginx
FROM node:20-alpine
RUN npm install -g http-server
WORKDIR /app
COPY --from=build /app/dist/frontend ./dist
EXPOSE 80
CMD ["http-server", "dist", "-p", "80", "-a", "0.0.0.0", "--cors", "-c-1"]
