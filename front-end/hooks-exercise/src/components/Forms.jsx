import React, { useState } from 'react'

function Forms()  {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();
  
    return (
      <div>
        <form className="bg-slate-400 flex flex-col" action="">
          <label htmlFor="name">
            Nome Completo:
            <input
              type="text"
              value={name}
              id="name"
              onChange={({ target }) => setName(target.value)}
            />
          </label>
          <label htmlFor="age">
            Idade:
            <input
              type="number"
              value={age}
              id="age"
              onChange={({ target }) => setAge(target.value)}
            />
          </label>
          <label htmlFor="city">
            Cidade:
            <input
              type="text"
              value={location}
              id="city"
              onChange={({ target }) => setLocation(target.value)}
            />
          </label>
          <label htmlFor="fundamentos">
            Fundamentos
            <input
              type="radio"
              name="modulo"
              id="fundamentos"
              value="Fundamentos"
              checked={module === 'Fundamentos'}
              onChange={({ target }) => setModule(target.value)}
            />
          </label>
          <label htmlFor="frontend">
            Front-end
            <input
              type="radio"
              name="modulo"
              id="frontend"
              value="Front-end"
              checked={module === 'Front-end'}
              onChange={({ target }) => setModule(target.value)}
            />
          </label>
          <label htmlFor="backend">
            Back-end
            <input
              type="radio"
              name="modulo"
              id="backend"
              value="Back-end"
              checked={module === 'Back-end'}
              onChange={({ target }) => setModule(target.value)}
            />
          </label>
          <label htmlFor="cs">
            Ciência da Computação
            <input
              type="radio"
              name="modulo"
              id="cs"
              value="Ciência da computação"
              checked={module === 'Ciência da computação'}
              onChange={({ target }) => setModule(target.value)}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              console.log('Click!');
            }}
          >
            Submeter
          </button>
        </form>
      </div>
    )
  }

export default Forms;
