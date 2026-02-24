'use client'
import { useState } from 'react'

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    senha: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aqui faremos a chamada para a sua API Java
    const response = await fetch('http://127.0.0.1:8080/usuarios/cadastrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      alert('Usuário cadastrado com sucesso!')
    } else {
      alert('Erro ao cadastrar.')
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Sophinance</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input 
          type="text" placeholder="Nome" className="p-2 border rounded text-black"
          onChange={e => setFormData({...formData, nome: e.target.value})}
        />
        <input 
          type="email" placeholder="Email" className="p-2 border rounded text-black"
          onChange={e => setFormData({...formData, email: e.target.value})}
        />
        <input 
          type="text" placeholder="CPF" className="p-2 border rounded text-black"
          onChange={e => setFormData({...formData, cpf: e.target.value})}
        />
        <input 
          type="password" placeholder="Senha" className="p-2 border rounded text-black"
          onChange={e => setFormData({...formData, senha: e.target.value})}
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Cadastrar
        </button>
      </form>
    </main>
  )
}