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

    test('Deve atualizar um aluno existente', async () => {

        // NAO AVALIADO - 26/10
        const updateStudent = {
            nome: "Vanessa Souza",
            data_nascimento: "1990-01-01",
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

        const response = await app.update('/kalos/aluno/id/38').send(updateStudent)

        expect(response.status).toBe(200)
        expect(response.body.aluno).toBeInstanceOf(Object)
    })

})

describe('Testes de integração de API - KALOS CORP - Academia', () => {

})

// npx jest
// npx jest --coverage