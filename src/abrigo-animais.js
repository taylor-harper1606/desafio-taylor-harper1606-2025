class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
      
    //verificação de input de outros tipos
      if (typeof brinquedosPessoa1 === 'string' ||
          typeof brinquedosPessoa2 === 'string' ||
          typeof ordemAnimais === 'string') {
          return "ERRO: Dados inválidos!";
      }
      
      //criação de arrays
      const listaNomes = ["Rex", "Mimi", "Fofo", "Zero", "Bola", "Bebe", "Loco",]
      const listaBrinquedos = ["RATO", "BOLA", "LASER", "CAIXA", "NOVELO", "SKATE"];

      const listaAnimais = [];
      listaAnimais.push = ["Rex", "cão", "RATO", "BOLA"];
      listaAnimais.push = ["Mimi", "gato", "BOLA", "LASER"];
      listaAnimais.push = ["Fofo", "gato", "BOLA", "RATO", "LASER"];
      listaAnimais.push = ["Zero", "gato", "RATO", "BOLA"];
      listaAnimais.push = ["Bola", "cão", "CAIXA", "NOVELO"];
      listaAnimais.push = ["Bebe", "cão", "LASER", "RATO", "BOLA"];
      listaAnimais.push = ["Loco", "jabuti", "SKATE", "RATO"];

      //preparação de input para operações
      var p1 = brinquedosPessoa1.split(',');
      var p2 = brinquedosPessoa2.split(',');
      var animais = ordemAnimais.split(',');

      //checagem de animais/brinquedos duplicados ou inválidos
        //animais
      if (animais[0] === animais[1]) {
        return "ERRO: Animal duplicado!";
      }
      
      for (let i = 0; i < listaNomes.length; index++) {
        if (animais[0] !== listaNomes[i]) {
          return "ERRO: Animal 1 inválido!";
        }
        if (animais[1] !== listaNomes[i]) {
          return "ERRO: Animal 2 inválido!";
        }
      }

        //pessoa 1
      if (p1[0] === p1[1]) {
        return "ERRO: Brinquedo da pessoa 1 duplicado!";
      }

      for (let i = 0; i < listaBrinquedos.length; index++) {
        if (p1[0] !== listaBrinquedos[i]) {
          return "ERRO: Brinquedo 1 da pessoa 1 inválido!";
        }
        if (p1[1] !== listaBrinquedos[i]) {
          return "ERRO: Brinquedo 2 da pessoa 1 inválido!";
        }
      }

        //pessoa 2
      if (p2[0] === p2[1]) {
        return "ERRO: Brinquedo da pessoa 2 duplicado!";
      }

      for (let i = 0; i < listaBrinquedos.length; index++) {
        if (p1[0] !== listaBrinquedos[i]) {
          return "ERRO: Brinquedo 1 da pessoa 2 inválido!";
        }
        if (p1[1] !== listaBrinquedos[i]) {
          return "ERRO: Brinquedo 2 da pessoa 2 inválido!";
        }
      }
      
      

  }
}

export { AbrigoAnimais as AbrigoAnimais };
