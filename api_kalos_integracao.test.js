const request = require('supertest')
const app = request('https://kaloscorp.cyclic.app')


describe('Testes de integração de API - KALOS CORP - Aluno', () => {
    test('Deve listar todos os alunos', async () => {
        const response = await app.get('/kalos/aluno')

        expect(response.status).toBe(200)
        expect(response.body.alunos).toBeInstanceOf(Array)
    })

    test('Deve listar aluno com base no ID', async () => {
        const response = await app.get('/kalos/aluno/id/16')

        expect(response.status).toBe(200)
        expect(response.body.aluno).toBeInstanceOf(Object)
    })

    // test('Deve cadastrar um aluno', async () => {

    // // id - vanessa - 38
    // // id - simon - 39
    //     const newStudent = {
    //         nome: "Simon Souza",
    //         data_nascimento: "1990-01-01",
    //         telefone: "11123425678",
    //         email: "Simon@gmail.com",
    //         foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62di2AWmqJArJVOc8J4r2NlzG9ab7xR9-aJgH7yXinA&s",
    //         cpf: "12345678950",
    //         senha: "SimonSouza",
    //         questao_condicao_medica: "-",
    //         questao_lesoes: "Corte acidental",
    //         questao_medicamento: "Anti-inflamatorios",
    //         peso: "70.5",
    //         altura: "1.75",
    //         objetivo: "Melhorar minha saúde",
    //         id_genero: 1
    //     }

    //     const response = await app.post('/kalos/aluno').send(newStudent)

    //     expect(response.status).toBe(201)
    //     expect(response.body.aluno.nome).toBe(newStudent.nome)
    // })

    test('Deve atualizar um aluno existente com base no id', async () => {

        const updateStudent = {
            nome: "Vanessa Souza",
            data_nascimento: "1990-04-04",
            telefone: "11123425678",
            email: "leonickabba@gmail.com",
            foto: "https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142836522?dimensions=1024x1024",
            cpf: "12345678950",
            senha: "vanessaSouza",
            questao_condicao_medica: "Diabetes, Asma",
            questao_lesoes: "Braço quebrado",
            questao_medicamento: "Glifage Xr 500mg",
            peso: "70.5",
            altura: "1.75",
            objetivo: "Melhorar minha saúde",
            id_genero: 2
        }

        const response = await app.put('/kalos/aluno/id/38').send(updateStudent)

        expect(response.status).toBe(200)
        expect(response.body.aluno).toBeInstanceOf(Object)
    })

    test('Deve listar a academia que o aluno faz parte', async () => {
        const id_aluno = 38
        const response = await app.get(`/kalos/alunoAcademia/idAluno/${id_aluno}`)

        expect(response.status).toBe(200)
        expect(response.body.academias[0].id_aluno).toBe(id_aluno)
        expect(response.body.academias).toBeInstanceOf(Array)
    })

    test('Deve listar os treinos daquele aluno', async () => {
        const id_aluno = 38
        const response = await app.get(`/kalos/treinoNivelCategoria/idAluno/${id_aluno}`)

        expect(response.status).toBe(200)
        expect(response.body.informacoes).toBeInstanceOf(Array)
    })

    // test('Deve adicionar o aluno na academia', async () => {
    //     const insert_aluno_academia = {
    //         id_academia: 51,
    //         id_aluno: 39
    //     }

    //     const response = await app.post(`/kalos/alunoAcademia`).send(insert_aluno_academia)

    //     expect(response.status).toBe(201)
    //     expect(response.body.aluno_academia).toBeInstanceOf(Object)

    // })

    test('Deve adiconar o aluno nos treinos da academia', async () => {
        const insert_aluno_academia_treino = {
            id_aluno: 38,
            id_treino_nivel_categoria: 31
        }

        const response = await app.post(`/kalos/alunoTreino`).send(insert_aluno_academia_treino)

        expect(response.status).toBe(201)
        expect(response.body.aluno_treino).toBeInstanceOf(Object)

    })

    test('Deve deletar a conta do aluno', async () => {
        const id_aluno = 38
        const response = await app.delete(`/kalos/aluno/id/${id_aluno}`)

        expect(response.status).toBe(200)
    })

})

describe('Testes de integração de API - KALOS CORP - Academia', () => {

    test('Deve listar todas as academias', async () => {
        const response = await app.get('/kalos/academia?page=2')

        expect(response.status).toBe(200)
        expect(response.body.academias).toBeInstanceOf(Array)
    }, 30000)

    test('Deve listar a academia com base no id', async () => {
        const response = await app.get('/kalos/academia/id/51')

        expect(response.status).toBe(200)
        expect(response.body.academia).toBeInstanceOf(Object)
    })

    test('Deve cadastrar uma academia', async () => {
        const newGym = {
            nome: "SmartFit Teste integração",
            email: "bluefitTesteIntegração@gmail.com",
            senha: "senha_segura",
            telefone: "123-456-7890",
            cnpj: "12345678901234",
            foto: "https://bluefit.com.br/themes/bluefit-20/assets/images/shareimg.jpg",
            descricao: "Descrição da academia",
            cor_primaria: "#5353ec",
            cor_secundaria: "#eaeaea",
            data_abertura: "2022-07-02",
            razao_social: "Razão Social",
            facebook: "facebook.com",
            whatsapp: "whatsapp.com",
            instagram: "instagram.com",
            logradouro: "Avenida De Testessss",
            numero: "791",
            bairro: "Centro",
            complemento: "-",
            cep: "09877-450",
            cidade: "Itapevi",
            estado: "SP",
            id_categoria: 2,
            status: "Ativo",
            tags: [1, 3]
        }

        const response = await app.post(`/kalos/academia`).send(newGym)

        expect(response.status).toBe(201)
        expect(response.body.academia).toBeInstanceOf(Array)
    })

    test('Deve atualizar os dados de uma academia', async () => {

        // ID - 60
        // NÃO AVALIADO
        const updateGym = {
            nome: "SmartFit Teste integração",
            email: "SmartFitTesteIntegração@gmail.com",
            senha: "senha_segura",
            telefone: "123-456-7890",
            cnpj: "12345678901234",
            foto: "https://www.smartfit.com.br/news/wp-content/uploads/2022/08/Franquia-Smart-Fit-800x533.jpg",
            descricao: "Descrição da academia",
            cor_primaria: "#5353ec",
            cor_secundaria: "#eaeaea",
            data_abertura: "2022-07-02",
            razao_social: "Razão Social",
            facebook: "facebook.com",
            whatsapp: "whatsapp.com",
            instagram: "instagram.com",
            logradouro: "Avenida De Testessss",
            numero: "791",
            bairro: "Centro",
            complemento: "-",
            cep: "09877-450",
            cidade: "Itapevi",
            estado: "SP",
            id_categoria: 2,
            status: "Ativo",
            tags: [1, 3]
        }

        // const response = await app.put(`/kalos/academia`).send(updateGym)

        // expect(response.status).toBe(201)
        // expect(response.body.academia).toBeInstanceOf(Array)
    })

    test('Deve criar um treino na academia', async () => {

        // NÃO AVALIADO
        const newTreino = {
            "nome": "Treino Teste de Integração",
            "descricao": "Treino criado para demonstração de teste de integração",
            "foto": "kkkkkkkscr.png",
            "data_criacao": "2023-10-29",
            "id_nivel": 1,
            "id_categoria_treino": 3,
            "id_academia": 60,
            "exercicios": [
                {
                    "id_exercicio": 1,
                    "id_serie": 4,
                    "id_repeticao": 5
                },
                {
                    "id_exercicio": 2,
                    "id_serie": 5,
                    "duracao": "00:12:00"
                },
                {
                    "id_exercicio": 3,
                    "id_serie": 6,
                    "id_repeticao": 7
                }
            ]
        }
    })

    test('Deve atualizar um treino na academia', async () => {
        const updateTreino = {

        }
    })

    test('Deve deletar um treino na academia', async () => {

    })

    test('Deve listar todos os alunos de uma determinada academia', async () => {
        const response = await app.get('/kalos/alunoAcademia/idAcademia/51')

        expect(response.status).toBe(200)
        expect(response.body.alunos).toBeInstanceOf(Array)
    })

    test('Deve listar todos os treinos que aquela academia possui', async () => {
        const response = await app.get('/kalos/treinoNivelCategoria/idAcademia/51')

        expect(response.status).toBe(200)
        expect(response.body.informacoes).toBeInstanceOf(Array)
    })

    test('Deve deletar uma academia', async () => {

    })

})

// npx jest
// npx jest --coverage