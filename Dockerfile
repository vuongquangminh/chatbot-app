FROM node:20

WORKDIR /src

# 1. Copy riêng file khai báo dependencies
COPY package.json yarn.lock ./

RUN yarn install

# 3. Copy toàn bộ source code (đè lên sau)
COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host"]
