import { realizarSorteio } from "./realizarSorteios"

describe('dado um sorteio de amigo secreto', ()=>{
    test('cada participante não sorteie o próprio nome ', ()=> {
        const participantes = [
            'ana', 'josé', 'flavio', 'joão', 'renata'
        ]
        const sorteio = realizarSorteio(participantes)
            participantes.forEach(participante => {
                const amigoSecreto = sorteio.get(participante)
                expect(amigoSecreto).not.toEqual(participante)
            })
    })
})