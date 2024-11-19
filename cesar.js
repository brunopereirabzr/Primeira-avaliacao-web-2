function criptografia(mensagem, chave, converter){
    let mensagemCrip = Array(mensagem.length)
    for(let i = 0;i<mensagem.length;i++){
        mensagemCrip[i] = converter(mensagem[i], chave)
    }
    return mensagemCrip
}

function cifraLetra(letra, chave){
    let alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let letraConvertida

    for(let i = 0; i<alfa.length;i++){
        if(letra == alfa[i]){
            letraConvertida = alfa[i+chave]
        }
    }
    return letraConvertida
}

function decifrarLetra(letra, chave){
    let alfa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let letraConvertida
    for(let i = 0; i<alfa.length;i++){
        if(letra == alfa[i]){
            letraConvertida = alfa[i-chave]
        }
    }
    return letraConvertida
}

export default {criptografia,cifraLetra, decifrarLetra}