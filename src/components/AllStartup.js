import React from 'react'
import Compagny from './Compagny'

const companyData = [
    {
        companyName: 'comp1',
        location: 'lagos',
        market: 'Real state',
        date:"Dec,15 2016"
    },
    {
        companyName: 'comp2',
        location: 'Accra',
        market: 'Real state',
        date:"Dec,12 2016"
    },
    {
        companyName: 'comp3',
        location: 'Bamako',
        market: 'Real state',
        date:"Dec,20 2016"
    }
]


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
                            <table className="table">
                                <tr>
                                    <td>Compagny</td>
                                    <td>Market/Industry</td>
                                    <td>Location</td>
                                    <td>Joined</td>
                                    <td>Action</td>
                                </tr>
                                
                            </table>
                            <div className="compagnyitem">

                                {
                                    companyData.map(ent => (
                                        <Compagny name={ent.companyName}
                                         market={ent.market} 
                                         location={ent.location} 
                                         date={ent.date}
                                         />

                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* panel */}

        </div>
    )
}

export default AllStartup
