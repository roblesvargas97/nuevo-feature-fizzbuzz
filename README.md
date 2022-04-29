# Nueva Feature FizzBuzz

Proyecto realizado por Jesus Uriel Robles Vargas, para la Semana 4 del proyecto LaunchX(Innovaccion Virtual) impartido por el Misssion Comander Carlo Gilmar.




## Comandos

Arranca el servidor:

```bash
  node server.js
```

Comprueba los test realizados en jest con el comando:

```bash
  npm test
```
resuelve los errores de sintaxis con el comando:

```bash
  npm linter-fix"
```

Instala las dependencias que requiere el proyecto:

```bash
  npm install
```

## Referencias de la api

#### Metodo GET explorers
Retorna los explorers de acuerdo al parametro.

```http
  GET /v1/explorers/:mission
```

| Parametro | Tipo     | Ejemplo                |
| :-------- | :------- | :------------------------- |
| `mission` | `string` | `/v1/explorers/node` |



![Logo](https://i.imgur.com/9sEpLRK.gif)

#### Metodo GET name explorers
Retorna los nombres de los explorers de acuerdo al parametro.

```http
  GET /v1/explorers/usernames/:mission
```

| Parametro | Tipo     | Ejemplo                |
| :-------- | :------- | :------------------------- |
| `mission` | `string` | `/v1/explorers/usernames/node` |


![App Screenshot](https://i.imgur.com/QZg9yn0.gif)
#### Metodo GET quantity name explorers
Retorna la cantidad de los explorers de acuerdo al parametro.

```http
  GET /v1/explorers/amount/:mission
```

| Parametro | Tipo     | Ejemplo                |
| :-------- | :------- | :------------------------- |
| `mission` | `string` | `/v1/explorers/amount/node` |


![App Screenshot](https://i.imgur.com/ivwvMsw.gif)

#### Metodo GET FizzBuzz
- Retorna fizzBuzz si el Parametro es multiplo de 3 y 5.
- Retorna Buzz si el Parametro es multiplo de 5.
- Retorna Fizz si el Parametro es multiplo de 3.


```http
  GET /v1/fizzbuzz/:score
```

| Parametro | Tipo     | Ejemplo                |
| :-------- | :------- | :------------------------- |
| `score` | `number` | `/v1/fizzbuzz/30` |


![App Screenshot](https://i.imgur.com/8UrEotP.gif)

## Aprendizaje

- Pruebas Unitarias con Jest y Supertest.
- TDD.
- Uso de Express.
- Aplicacion de Regex.
- Eslint.

## Autor

- [@roblesvargas97](https://github.com/roblesvargas97)


