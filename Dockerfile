# Stage 1
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=builder /app/dist/rf-frontend /usr/share/nginx/html
EXPOSE 80
