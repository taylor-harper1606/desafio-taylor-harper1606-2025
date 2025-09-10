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

      const tabelaAnimais = [];
      tabelaAnimais.push = ["Rex", "cão", "RATO", "BOLA"];
      tabelaAnimais.push = ["Mimi", "gato", "BOLA", "LASER"];
      tabelaAnimais.push = ["Fofo", "gato", "BOLA", "RATO", "LASER"];
      tabelaAnimais.push = ["Zero", "gato", "RATO", "BOLA"];
      tabelaAnimais.push = ["Bola", "cão", "CAIXA", "NOVELO"];
      tabelaAnimais.push = ["Bebe", "cão", "LASER", "RATO", "BOLA"];
      tabelaAnimais.push = ["Loco", "jabuti", "SKATE", "RATO"];

      //preparação de input para operações
      var p1 = brinquedosPessoa1.split(',');
      var p2 = brinquedosPessoa2.split(',');
      var animais = ordemAnimais.split(',');

      //ATUALIZAR!! CÓDIGO FEITO PARA SOMENTE 2 ANIMAIS POR VEZ!

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
      
      //Adotar animais pessoa 1
      for (let i = 0; i < animais.length; i++) {
        const animalAdotando = animais[i];
        for (let j = 0; j < tabelaAnimais.length; j++) {
          const animalVerificando = tabelaAnimais[j];
          if (animalVerificando[1] === animalAdotando ) {
            
          }
        }
        
      }

  }
}

export { AbrigoAnimais as AbrigoAnimais };
