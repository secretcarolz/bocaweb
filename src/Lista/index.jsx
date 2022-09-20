export const Lista = ({odas}) =>{
    return(
        <div className = 'lista'>
      <p> {odas.lenght} odas </p>
        {odas.map(oda => (
          <div className=" post">
          <div key={oda._id}>
            <h1> nome: {oda.nome}</h1>
            <p> usuario: {oda.usuario}</p>
            <p> descricao: {oda.descricao}</p>
            <p> data_inclusao: {oda.data}</p>
            <p> palavras_chave: {oda.palavra}</p>
          </div>

          </div>
        ))}
        </div>
    )
}