# Gunakan Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy semua file ke dalam container
COPY . .

# Jalankan aplikasi
CMD ["node", "index.js"]
