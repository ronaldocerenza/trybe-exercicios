- INICIANDO UM PROJETO

- Em uma nova pasta, inicie uma aplicação utilizando o comando
```
npm init -y
```

- Configure os scripts de teste e linter no arquivo package.json (se a tag scripts já existir, basta substituir os valores pelos descritos abaixo):
```
  "scripts": {
    "test": "mocha -r ts-node/register ./tests/**/*.{test,spec}.[t,j]s",
    "lint": "eslint  -c .eslintrc.json src/**/*.[t,j]s"
  },
```

- Coloque as dependências que vamos utilizar em desenvolvimento no arquivo package.json:
```
"devDependencies": {
    "typescript": "4.4.2",
    "ts-node": "10.2.1",
    "eslint": "7.32.0",
    "eslint-config-trybe-backend": "1.0.4",
    "eslint-plugin-import": "2.26.0",
    "eslint-plugin-mocha": "10.0.4",
    "eslint-plugin-sonarjs": "0.13.0",
    "chai": "4.3.4",
    "mocha": "9.1.1",
    "sinon": "11.1.2",
    "@typescript-eslint/eslint-plugin": "4.30.0",
    "@typescript-eslint/parser": "4.30.0",
    "@types/chai": "4.2.21",
    "@types/mocha": "9.0.0",
    "@types/node": "17.0.35",
    "@types/sinon": "10.0.2"
  },
```

- Instale as dependências com o comando ```npm i``````

- Crie o arquivo de configuração do TypeScript com o comando ```npx tsc --init```

- Adicione um arquivo ```.eslintrc.json``` na raiz do projeto, com o seguinte conteúdo:

```
{
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "trybe-backend"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "ignorePatterns": ["tests/", "node_modules/"],
    "env": { "es2021": true },
    "plugins": ["@typescript-eslint"],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error",
        "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }]
    }
}
```