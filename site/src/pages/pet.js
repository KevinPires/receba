import { useEffect, useState } from 'react'
import '../pages/pet.scss'


import { clientePet, listarTodosPets  } from '../api/petApi'


export default function Index(){
    const [nome, setNome] = useState('');
    const [pets, setPets] = useState([]);

   async function carregarTodosPets(){
        const resp = await listarTodosPets();
        setPets(resp);
    }
    
    useEffect(()=> {
    carregarTodosPets();
    }, [])
    
    async function salvarClick(){
        try {
            const r = await clientePet(nome)
            alert('Pet Cadastrado com sucesso')
        } catch (err) {
            alert(err.response.data.erro);
        }
    }

    return(
       <main>
        <label>Cadastrar Pet</label> 
        <br/>
        <input type='text' placeholder='nome do pet' value={nome} onChange={e=> setNome(e.target.value)}/>

        <div>
            <button onClick={salvarClick}>Registrar</button>
        </div>

        <table>
                 <thead>
                    <tr>
                        <th>Nome do pet</th>
                    </tr>
                </thead>
                <tbody>

                    {pets.map(item => 
                        
                        <tr>
                            <td>{item.nome}</td>
                               
                        </tr>
                        )}
                   
                </tbody>
                        
        </table>
       </main>
      
       
      
    )
}