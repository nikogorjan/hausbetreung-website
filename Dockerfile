# ---- Stage 1: Build the Next.js app ----
    FROM node:18-alpine AS builder

    # Set working directory
    WORKDIR /app
    
    # Copy package.json and package-lock.json
    COPY package*.json ./
    
    # Install dependencies
    RUN npm install
    
    # Copy all files
    COPY . .
    
    # Build the Next.js application
    RUN npm run build
    
    # ---- Stage 2: Run the Next.js app ----
    FROM node:18-alpine
    
    # Set NODE_ENV to production
    ENV NODE_ENV production
    
    # Create and use the /app directory
    WORKDIR /app
    
    # Copy built files from the previous stage
    COPY --from=builder /app ./
    
    # Expose the port
    EXPOSE 3000
    
    # Start the Next.js app
    CMD ["npm", "start"]
    