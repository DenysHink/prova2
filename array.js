let usuarios = []

console.log(usuarios)

function adicionarUsuarios(nome, email, idade){

if(typeof(nome)!= "string" && typeof(idade)!= "number" && typeof(email)!= "string"){
    console.log("Dados não válidos")
}else{
    usuarios.push({

        nome: nome,
        email: email,
        idade: idade
      }  )
    }
}

adicionarUsuarios("Dennis","dennis@gmail.com", 16)
adicionarUsuarios("Thiago","thiago@gmail.com", 17)


function listarUsuarios(){
    usuarios.forEach((usuario, index) => {
        console.log(`${usuario.nome}\n${usuario.idade}\n${usuario.email}`)
    })
}
listarUsuarios()
