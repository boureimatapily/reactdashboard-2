import React from 'react'

const Compagny = (props) => {
    return (
        <div>

            <table className="table table-hover">

                <tr>
                    <td>{props.name}</td>
                    <td>{props.market}</td>
                    <td>{props.location}</td>
                    <td>{props.date}</td>
                    <td>
                        <button type="button" className="btn btn-primary"> 
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </button>

                        <button type="button" className="btn btn-danger btnpadding"> 
                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Compagny
