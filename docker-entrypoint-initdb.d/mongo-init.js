db = db.getSiblingDB('db_platzivideos');
db.createUser(
    {
        user: 'api_user',
        pwd: 'api1234',
        roles: [{ role: 'readWrite', db: 'db_platzivideos' }],
    },
);
db.createCollection('users');