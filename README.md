# Desafios Turma Full-stack Abril 2024

--------------------
Como contribuir:

- Crie um fork do repositório;
- Dentro da pasta ``Resoluções``, crie uma pasta com o seu nome;
- dentro da pasta com o seu nome, crie uma pasta com o nome do desafio;
- coloque as suas respostas dentro da pasta com o nome do desafio.

```
  -- 📁 Resoluções
      -- 📁 Lucas Eduardo
        -- 📁 Easy
          -- 📁 Arrays
            -- 📁 index.js
```

- Para que seu código passe por um review da galera, abra um Pull Request

--------------------
--------------------
Como criar novos desafios?:

- Crie um fork do repositório;
- Dentro da pasta ``Desafios``, escolha uma dentre as pastas ``Easy``, ``Medium`` ou ``Hard`` (a dificuldade que se adequa ao desafio);
- Dentro da pasta escolhida, escolha a pasta que define o tipo de desafio (array, string, fundamentals, ...);
- Dentro desta pasta, crie a pasta contendo o nome do seu desafio. Insira um ``enunciado.md`` para explicá-lo, um ``index.js`` para permitir a resolução e um ``index.test.js`` contendo os testes de validação do desafio;
- Por fim, no ``package.json`` que está na raíz do código-fonte, insira um script de teste que testa o código (ex: npx jest NomedoDesafio).

Ex:
``` 
  -- 📁 Desafios
    -- 📁 Easy
      -- 📁 Fundamentals
        -- 📁 HelloWorld
          -- 📁 index.js
          -- 📁 index.test.js
          -- 📁 enunciado.md
```


- Sobre os testes em Jest: 
  - Faça um "describe". Neste describe, insira o título do seu desafio. Por exemplo: 
   ```
     describe("HelloWorld", ()=>{
     //... seus testes
     })
   ```
  - é essencial que insira o título do desafio no describe, para que no package.json, você insira: 
   ```
     "scripts": {
       "HelloWorld": "npx jest HelloWorld"
     },
   ```
  - Assim, as pessoas poderão testar as suas respostas ao usar o comando "npm run ``título do seu desafio``".
    
- Para que seu código passe por um review da galera, abra um Pull Request
