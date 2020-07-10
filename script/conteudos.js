let materias= document.querySelectorAll('#div_materias a');
let materias2 = document.querySelectorAll("#MateriasId div div a");
console.log(materias2);

for(var cont=0;cont<materias.length;cont++){
    materias[cont].setAttribute('onclick',`mudarConteudo(${cont-1})`);
}
for(var cont=0;cont<materias2.length;cont++){
    materias2[cont].setAttribute('onclick',`mudarConteudo(${cont})`);
}

function mudarConteudo(id_materia){
    console.log(id_materia);
    titulo.innerHTML = materia[id_materia].titulo;
    descMat.innerHTML = materia[id_materia].info;
    conteudos.innerHTML = addConteudos(id_materia);
}

function addConteudos(id_materia){
    console.log('cheguei aqui');
    let contMat = `<h4>Conteúdos</h4>`;
    for(let cont=0;cont<materia[id_materia].conteudos.length;cont++){
        contMat+= `<a href="#lorem${cont+1}">${materia[id_materia].conteudos[cont]}</a>`;
    }
    return contMat;
}