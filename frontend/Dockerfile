FROM node:14

WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY frontend/package*.json ./
RUN npm install

# Copie o restante dos arquivos do projeto
COPY frontend/ ./

EXPOSE 3001
CMD ["npm", "start"]
