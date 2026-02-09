FROM node:20-alpine

WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./
COPY yarn.lock* ./

# Устанавливаем зависимости
RUN npm install -g yarn && yarn install --frozen-lockfile

# Копируем исходный код
COPY . .

# Сборка Nuxt
RUN yarn build

# Запуск
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]