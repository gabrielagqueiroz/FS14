export const Button = (props) => {
    return (
        <>
            <div className={`col-md-${props.width}`}>
                <button className="btn btn-primary" type={props.tipo}>{props.nome}</button>
            </div>
        </>
    )
}
