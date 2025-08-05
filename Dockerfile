# Stage 1 - Build Angular app
FROM node:20-alpine AS builder
WORKDIR /app

# Najpierw kopiujemy tylko pliki zależności
COPY package*.json ./
RUN npm install

# Teraz dopiero kopiujemy resztę projektu
COPY . .

# Budujemy aplikację
RUN npm run build

# Stage 2 - Serve with nginx
FROM nginx:1.17.1-alpine
COPY --from=builder /app/dist/rf-frontend /usr/share/nginx/html
EXPOSE 80
