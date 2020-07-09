let materias= document.querySelectorAll('#div_materias a');

console.log(materias);

let materia = [{
    titulo: 'Pesquisa e inovação',
    info: 'Pesquisa e inovação é a materia em que ...',
    conteudos: ['Contextualização', '...']
},
{
    titulo: 'Algoritmo',
    info: 'Na informatica, algoritmo é um conjunto das regras e procedimentos lógicos perfeitamente definidos que levam à solução de um problema em um número finito de etapas.',
    conteudos: ['Contextualização', '...']
},
{
    titulo: 'Banco de dados',
    info: 'Banco de dados é...',
    conteudos: ['Variaves', 'Operadores matemáticos', 'Condicionais', 'Laços de repetição']
},
{
    titulo: 'Arquitetura computacional',
    info: 'Permite entender a arquitetura das maquinas que utilizamos..',
    conteudos: ['Sistemas de numeração', 'Portas lógicas']
},
{
    titulo: 'Tecnologia da informação',
    info: 'Teoria...',
    conteudos: ['Backlog', 'Metodologias', 'Governaça de TI']
}]

for(var cont=0;cont<materias.length;cont++){
    materias[cont].setAttribute('onclick',`mudarConteudo(${cont-1})`);
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