# Introdução ao CRUD

O objetivo desse projeto é criar um CRUD de clientes com todas as operações necessárias para o gerenciamento dos dados. As operações a serem implementadas são: criar, remover, achar todos, achar um e atualizar.
Considerações Gerais:

- Para representar o banco de dados, deve ser criado um array para simular o banco de dados. Para fins de teste, é válido criar uma função para adicionar alguns clientes de forma automática.
- A definição dos campos do objeto que vai representar um cliente fica a cargo do desenvolvedor, mas deve ter mais de 4 campos, sendo um deles o ID privado.
- A operação de criar vai receber o objeto e adicioná-lo no banco de dados caso o ID seja único.
- As operações de remover e achar um recebem o ID do cliente e retornam o objeto caso exista. É válido implementar uma busca por nome ou algum outro campo.
- A operação de update recebe o ID do cliente e os campos que serão atualizados. O ID não é atualizado.

Um pouco sobre

ID:
O ID é a representação do objeto cliente dentro do sistema. Esse ID deve ser único. Como esse ID é único, pode-se utilizar outro campo como o e-mail para validar se o cliente já está cadastrado.

Controllers:
O lugar onde ficam as requisições. Em um sistema real, as funções responsáveis por controlar as rotas e requisições ficam nesse arquivo. Por agora, vamos trabalhar sem as requisições, simulando apenas com funções.

Services:
O lugar onde ficam as funções que realizam a lógica da aplicação. Uma requisição chama uma função do service para realizar alguma tarefa.

Repository:
O lugar onde ficam os acessos ao banco de dados. O service, quando precisa de algo do banco, chama o repository.

Existe um nível de dependência, o controller precisa de um service que precisa de um repository. Isso pode ser melhor explicado posteriormente, mas por agora, basta seguir o exemplo que foi dado no controller e replicar no service com o repository.

As operações podem ser feitas pelo código mesmo, sem a necessidade de input de dados.

Essa atividade trabalhará conceitos de classes, array, objetos e arquitetura.