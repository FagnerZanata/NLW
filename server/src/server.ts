import express, { request, response } from 'express'
const app = express();

app.use(express.json());


//rota: endereco
//Recurso: entidade

//Request param: Parametros na propria rota que identificam um recurso
// Query param: Parametros no propria rota geralmente opcionais


const users = [
    'Diego',
    'Rogério',
    'Maria'
];


app.get('/users', (request, response) => {

    console.log('Listagem de usuários');

    const search = String(request.query.search);


    console.log('Search: ' + search);

    const filterduser = search ? users.filter(user => user.includes(search)) : users;


    response.json(filterduser);
});


app.get('/users/:id', (request, response) => {

    console.log('Listagem de usuário unico');

    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) =>{
    const data = request.body;

    console.log(data);
    
    
    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);
