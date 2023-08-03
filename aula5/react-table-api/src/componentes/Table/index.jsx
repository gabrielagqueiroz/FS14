export default function Table(props){
   
    console.log(props.data)

    return(
        <div>
            <table className="table table-success table-striped">
            <thead>
                <tr>
                {props.colunas.map((coluna, index) =>  <th key={index} scope="col">{coluna}</th>)}
                </tr>
            </thead>
            <tbody>
               
                    {props.data.map((user, index) => {
                        return(
                            <tr>
                            <th key={index} scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.website}</td>
                            <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                            </tr>
                        )
                        console.log(user)
                    })}
                    
            </tbody>
            </table>
        </div>
    )
}