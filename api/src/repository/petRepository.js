import { con } from './connection.js'

export async function clientePet (pet){

    const comando = `
    insert into tb_pet (nm_pet)
	values(?)`
        const [resposta] = await con.query (comando, [pet.nome]);
        
        
      
        return resposta[0];

        
}
export async function listarTodos (){
    const comando =
    `select  id_pet   id,
     nm_pet			  nome
            from tb_pet`;
    const [linhas]= await con.query(comando);
    return linhas;
}