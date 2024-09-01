# Frontend
FROM node:16 AS frontend
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend ./
RUN npm run build

# Backend
FROM node:16
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend ./
COPY --from=frontend /app/build /app/build
CMD ["node", "server.js"]
