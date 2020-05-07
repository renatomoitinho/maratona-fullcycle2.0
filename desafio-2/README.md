
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Migration
```
npm run typeorm migration:run
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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## :)

```
curl -X POST -H 'Content-Type: application/json' -d '{"aula": "Full Cycle: Arquitetura e Estudo de Caso"}' http://127.0.0.1:3000/maratona

curl http://127.0.0.1:3000/maratona

```

## Run with Docker

```
docker run -d -p 3000:3000 --name desafio-2 renatofullcycle/desafio-2:latest && docker logs -f desafio-2

```

## License

  Nest is [MIT licensed](LICENSE).
