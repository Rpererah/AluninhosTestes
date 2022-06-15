import React from 'react'

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const numbers2 = [11, 22, 33, 44, 55];
  const livros=[{key:1,livro:'harry potter'},{key:2,livro:'divergente'},{key:3,livro:'divergente'},{key:4,livro:'jogos vorazes'},{key:5,livro:'Anjo mecanico'}];
  return (
    <div>

      <ul>
        {numbers.map((number)=><li>{number}</li>)}
      </ul>
      <br />
      <br />
      <ul>
        {numbers2.map((number2)=><li key={number2}>{number2}</li>)}
      </ul>
      <br />
      <br />
      <ol>
        {livros.map(({key,livro})=><li key={key}>{livro}</li>)}
      </ol>
    </div>
  )
}
