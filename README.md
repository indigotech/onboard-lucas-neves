
# Onboarding - Backend

## Project's Description
First contact with Taqtile. Backend development with NodeJs.

## Environment and tools

- [Node.js](https://nodejs.org/en/) - 
- [Typescript](https://www.typescriptlang.org/) - 4.4.2
- [Apollo](https://www.apollographql.com/) - 3.3.0
- [GraphQL](https://graphql.org/) - 15.5.2
- [PostgreSQL](https://www.postgresql.org/) - 11.2
- [TypeORM](https://github.com/typeorm/typeorm) - 0.2.37
- [TypeDI](https://github.com/pleerock/typedi) - 0.10.0

## Steps to run and debug

### Installing npm dependencies

- Run `$ npm install` to install your npm dependencies

### Run Docker for DB

- Run docker on your pc.
- Then:
```$ docker-compose up -d```

### Run DB migrations

```$ npm run typeorm:cli migration:run```

### Run the project locally

```npm run dev:server``` 
