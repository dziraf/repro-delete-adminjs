Attempt to reproduce: https://github.com/SoftwareBrothers/adminjs/issues/1155

Optional: DB setup
```bash
$ docker-compose up -d
$ docker exec -it mongodb_repro /bin/sh
$ mongo admin -u root -p password
$ use mongodb_repro
$ db.createUser({ "user": "rafal", "pwd": "password", "roles": ["readWrite"] })
```
Credentials to DB are hardcoded in `src/app.ts`, you might want to change them if yours are different.

Installation:
```bash
$ yarn install
$ yarn build
$ yarn start
```

Available under `http://localhost:3000/admin`
