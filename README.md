# A Basic Store Api with Nestjs, TypeORM, Crud, Swagger & ProstgreSql

## Api Usage:

```bash
# Link a Product to a Category
$ POST localhost:3000/products/:id/categories/:categoryId

# Get Products
$ localhost:3000/products

# Get 1 Product
$ localhost:3000/products/:id

# Get Categories
$ localhost:3000/categories

# Get 1 Category
$ localhost:3000/categories/:id

# Get Posts within a Category
$ localhost:3000/categories/:id/products

# You can use the swagger ui for the rest:
localhost:3000
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```