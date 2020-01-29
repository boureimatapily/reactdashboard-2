import React from 'react'

const AllStartup = () => {
    return (
        <div>

            <div className="panel panel-danger"> {/*  panel */}
                <div className="panel-heading">
                    <h3 className="panel-title ">AllStartup</h3> {/* panel title */}
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
                                <table className="table table-hover">
                                   <tr>
                                       <th>Compagny</th>
                                       <th>Market/Industry</th>
                                       <th>Location</th>
                                       <th>Joined</th>
                                       <th>Approve</th>
                                       <th>Action</th>
                                       
                                   </tr>
                                   <tr>
                                       <td>Compagny Name</td>
                                       <td>Real Estate</td>
                                       <td>Lagos</td>
                                       <td>Dec,12 2016</td>
                                       <td>
                                           <button type="button" className="btn btn-success"> <span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
                                        </td>
                                       <td>
                                       <button type="button" className="btn btn-primary"> <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
                                       <button type="button" className="btn btn-danger"> <span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                                       </td>
                                   </tr>
                                   <tr>
                                       <td>Compagny Name</td>
                                       <td>Real Estate</td>
                                       <td>Lagos</td>
                                       <td>Dec,12 2016</td>
                                       <td>
                                           <button type="button" className="btn btn-success"> <span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
                                        </td>
                                       <td>
                                       <button type="button" className="btn btn-primary"> <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
                                       <button type="button" className="btn btn-danger"> <span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                                       </td>
                                   </tr>
                                   <tr>
                                       <td>Compagny Name</td>
                                       <td>Real Estate</td>
                                       <td>Lagos</td>
                                       <td>Dec,12 2016</td>
                                       <td>
                                           <button type="button" className="btn btn-success"> <span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
                                        </td>
                                       <td>
                                       <button type="button" className="btn btn-primary"> <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
                                       <button type="button" className="btn btn-danger"> <span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                                       </td>
                                   </tr>
                                </table>
                            </div>
                    </div>
                </div>
            </div> {/* panel */}

        </div>
    )
}

export default AllStartup
