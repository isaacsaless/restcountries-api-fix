<div align="center">
    <h1>RestCountries API Fix</h1>
    <h5 align="center">
        Uma API que funciona como um wrapper da RestCountries API, permitindo consultas com nomes de países em português.
    </h5>
    <p align="center">
        &middot;
        <a target="_blank" href="https://restcountries.com">RestCountries Original</a>
        &middot;
    </p>
</div>

## Sobre
<p>
  Esta API funciona como um fork/wrapper da famosa RestCountries API, mas com uma funcionalidade adicional muito útil: ela aceita nomes de países em português! 
</p>
<p>
  A RestCountries API original só aceita nomes de países em inglês, o que pode ser um obstáculo para usuários brasileiros. Esta API resolve esse problema traduzindo automaticamente os nomes dos países do português para o inglês usando o LibreTranslate, e então consultando a RestCountries API para retornar os dados completos do país.
</p>
<p>
  Agora você pode buscar por "Brasil" ao invés de "Brazil", "Japão" ao invés de "Japan", e assim por diante!
</p>  

## Feito com
* <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
* <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
* <img src="https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white"/>
* <img src="https://img.shields.io/badge/undici-000000?style=for-the-badge&logo=node.js&logoColor=white"/>
<br>

## Como usar

A API possui um endpoint principal:

### GET `/fix-restcountries`

**Parâmetros:**
- `pais` (obrigatório): O nome do país em português ou inglês

**Exemplo de uso:**
```bash
# Buscar por Brasil
GET /fix-restcountries?pais=Brasil

# Buscar por Japão  
GET /fix-restcountries?pais=Japão

# Também funciona com nomes em inglês
GET /fix-restcountries?pais=Germany
```

**Resposta de sucesso:**
```json
{
  "success": true,
  "data": [
    {
      "name": {
        "common": "Brazil",
        "official": "Federative Republic of Brazil"
      },
      "capital": ["Brasília"],
      "region": "Americas",
      "population": 215313498
      // ... outros dados do país
    }
  ]
}
```

## Utilização

### Configuração Local

Para executar a aplicação localmente, siga os passos abaixo:

1. **Clone o repositório**
   ```bash
   git clone https://github.com/isaacsaless/restcountries-api-fix.git
   cd restcountries-api-fix
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Ou execute a versão compilada**
   ```bash
   npm run build
   npm start
   ```

A aplicação estará disponível em `http://localhost:3000` (ou na porta configurada).

### Configuração com Docker

```bash
docker build -t restcountries-api-fix .
docker run -p 3000:3000 restcountries-api-fix
```

## Contribuições
### Você pode contribuir com este código enviando um pull request. Basta seguir estas instruções:
<br>

1. Faça um fork desse repositório;
2. Crie uma nova branch com sua funcionalidade: (`git checkout -b feature/NovaFeature`);
3. Faça um commit das suas mudanças: (`git commit -m 'Adicionada NovaFeature`);
4. Realize um push para o repositório original: (`git push origin feature/NovaFeature`);
5. Crie um pull request.

<p>E está pronto, simples assim! 🎉</p>

## Licença

Distribuído sob a Licença MIT. Consulte `LICENSE.txt` para mais informações.

## Contato

Isaac Sales - [isaac-sales](https://www.linkedin.com/in/isaac-sales/) - isaacnascimentosales@gmail.com

Link do projeto: [https://github.com/isaacsaless/restcountries-api-fix](https://github.com/isaacsaless/restcountries-api-fix)

## Agradecimentos

* [MIT License](https://opensource.org/license/mit)
* [RestCountries API](https://restcountries.com/) - A API original que inspirou este projeto
* [LibreTranslate](https://libretranslate.com/) - Serviço de tradução utilizado para converter nomes em português
