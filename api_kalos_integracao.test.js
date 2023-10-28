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

    // id - vanessa - 38
    //     const newStudent = {
    //         nome: "Vanessa Souza",
    //         data_nascimento: "1990-01-01",
    //         telefone: "11123425678",
    //         email: "leonickabba@gmail.com",
    //         foto: "https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142836522?dimensions=1024x1024",
    //         cpf: "12345678950",
    //         senha: "vanessaSouza",
    //         questao_condicao_medica: "Diabetes",
    //         questao_lesoes: "Braço quebrado",
    //         questao_medicamento: "Glifage Xr 500mg",
    //         peso: "70.5",
    //         altura: "1.75",
    //         objetivo: "Melhorar minha saúde",
    //         id_genero: 2
    //     }

    //     const response = await app.post('/kalos/aluno').send(newStudent)

    //     expect(response.status).toBe(201)
    //     expect(response.body.aluno.nome).toBe(newStudent.nome)
    // })

    // test('Deve atualizar um aluno existente com base no id', async () => {

    //     const updateStudent = {
    //         nome: "Vanessa Souza",
    //         data_nascimento: "1990-01-01",
    //         telefone: "11123425678",
    //         email: "leonickabba@gmail.com",
    //         foto: "https://img.r7.com/images/rosto-humano-irreal-inteligencia-artificial-19022019142836522?dimensions=1024x1024",
    //         cpf: "12345678950",
    //         senha: "vanessaSouza",
    //         questao_condicao_medica: "Diabetes, Asma",
    //         questao_lesoes: "Braço quebrado",
    //         questao_medicamento: "Glifage Xr 500mg",
    //         peso: "70.5",
    //         altura: "1.75",
    //         objetivo: "Melhorar minha saúde",
    //         id_genero: 2
    //     }

    //     const response = await app.put('/kalos/aluno/id/38').send(updateStudent)

    //     expect(response.status).toBe(200)
    //     expect(response.body.aluno).toBeInstanceOf(Object)
    // })
    
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

    test('Deve deletar a conta do aluno', async () => {
        
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
        
    })

    test('Deve atualizar os dados de uma academia', async () => {
        
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