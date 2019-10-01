# Configuração do Jest

A configuração do Jest pode ser definida no package.json do seu projeto ou através do arquivo de configuração
jest.config.json.

$ jest --config jest.config.js

### Options



```
"jest": {

    "coverageThreshold": {
      "global": {
        "branches": 90,
        "functions": 90,
        "lines": 90,
        "statements": 90
      }
    },

    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],

    "coveragePathIgnorePatterns": [
      "<rootDir>/src/core/unit-test",
      "actions.js"
    ],

    "setupFiles": [
      "<rootDir>/src/core/unit-test/setup.js"
    ],

    "testRegex": "/__tests__/.*.spec.js$",
    "moduleNameMapper": {
      "^.+\\.(css|scss|svg|png)$": "<rootDir>/src/core/unit-test/jest-stub.js",
      "^mocks(.*)$": "<rootDir>/stub"
    },

    "coverageReporters": [
      "lcov",
      "text"
    ]

  }
```

## coverageThreshold

 - usado para configurar a imposição de limite mínimo para os resultados da cobertura. 

 Por exemplo, com a seguinte configuração, o jest falhará se houver menos de 80% de cobertura de branch, line e function coverage, ou se houver mais de 10 instruções não descobertas:

```

 "jest": {

    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }

  }

```

### Para coverage Global e por path:

```
"coverageThreshold": {
      "global": {
        "branches": 50,
        "functions": 50,
        "lines": 50,
        "statements": 50
      },
      "./src/components/": {
        "branches": 40,
        "statements": 40
      },
      "./src/reducers/**/*.js": {
        "statements": 90
      },
      "./src/api/very-important-module": {
        "branches": 100,
        "functions": 100,
        "lines": 100,
        "statements": 100
      }
}
```

O Jest falhará se:

 - O './src/components' diretório tem menos de 40% de cobertura.
 - Um dos arquivos correspondentes à './src/reducers/**/*.js' glob possui menos de 90% de cobertura.
 - O './src/api/very-important-module.js' arquivo tem menos de 100% de cobertura.
 - Todo arquivo restante combinado possui menos de 50% de cobertura ( global).



## coverageReporters

 - Uma lista de nomes de relatórios que Jest usa ao escrever coverage reports.
 Default: ["json", "lcov", "text"]

```

"coverageReporters": ["json", "lcov", "text"],

```



## snapshotSerializers

- Definir uma lista de caminhos para os módulos serializadores de captura instantânea, que o Jest deve usar 
  para teste de snapshot testing.

```

// meu-modulo-serializador
module.exports = {
  print(val, serialize, indent) {
    return 'foo arrumado: ' + serialize(val.foo);
  },

  test(val) {
    return val && val.hasOwnProperty('foo');
  },
};

```

## coveragePathIgnorePatterns

- informações de cobertura serão ignoradas de acordo com a lista informada.

Example: 
```
    
    "coveragePathIgnorePatterns": [
        "<rootDir>/build/",
        "<rootDir>/node_modules/"
    ],

```

## setupFiles

- Uma lista de caminhos para os módulos que executam algum código para configurar ou instalar o ambiente de teste.
  Também é importante notar que o setupFiles será executado antes do setupFilesAfterEnv.

## testRegex

- O padrão ou padrões que Jest usa para detectar arquivos de teste. Por padrão, ele procura arquivos .js, .jsx, .ts e .tsx  dentro das pastas __tests__, bem como arquivos com sufixo .test ou .spec (por exemplo, component.test.js ou component.spec.js). Ele também encontrará arquivos chamados test.js ou spec.js.

 - Veja também testMatch [array], mas observe que você não pode especificar as duas opções.

```

    "testRegex": (/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$,

```

- visualização do padrão regex:

```
├── __tests__
│   └── component.spec.js # test  
│   └── anything  # test  
├── package.json  # not test  
├── foo.test.js   # test  
├── bar.spec.jsx  # test  
└── component.js  # not test  
```

## moduleNameMapper

- Define um mapa de expressões regulares para nomes de módulos que permitem esboçar recursos, como imagens ou estilos com um único módulo.
- Módulos que são mapeados para um alias são "não simuláveis por padrão", independentemente se auto simulação (automocking, em inglês) está habilitado ou não.

```
{  
  
  "moduleNameMapper": {  
    "^image![a-zA-Z0-9$_-]+$":   "GlobalImageStub",  
    "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",  
    "module_name_(.*)":          "<rootDir>/substituted_module_$1.js"  
  }  

}
```
