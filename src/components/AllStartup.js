import React from 'react'
import Compagny from './Compagny'


class AllStartup extends React.Component {
   

    render(){
        
    return (
        <div>

            <div className="panel panel-danger"> {/*  panel */}
                <div className="panel-heading addstartuptitle">
                    <h3 className="panel-title">AllStartup</h3> {/* panel title */}
                </div>
                <div className="panel-body"> {/* panel body */}
                    <div className="searchbox"> {/* search box */}
                        <div>
                            <form>
                                <div className="form-group">
                                    <input type="search" className="form-control" id="search" placeholder="Filter Startup" />
                                </div>
                            </form>
                        </div>
                        <div>
                            <Compagny /> 
                             {/* <table className="table table-striped tableitem">
                                <tbody>
                                <tr>
                                    <th>Compagny</th>
                                    <th>Market/Industry</th>
                                    <th>Location</th>
                                    <th>Joined</th>
                                    <th>Action</th>
                                </tr>
                                
                               {
                                    CompagnyData.map(ent => (
                                    <tr key={ent.id}>
                                    <td>{ent.compagnyName}</td>
                                    <td>{ent.market}</td>
                                    <td>{ent.location}</td>
                                    <td>{ent.date}</td> 
                                    <td>{
                                        <button type="button" className="btn btn-primary"> 
                                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                        </button>}
                                        
                                       { <button type="button" className="btn btn-danger btnpadding"> 
                                        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                        </button>
                                        }
                                        </td>
                                    </tr>
                                    )  )
                                }  
                                
                                </tbody>
                            </table>  */}
                            <div>
                           
 
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* panel */}

        </div>
    )
                            }
}

export default AllStartup
