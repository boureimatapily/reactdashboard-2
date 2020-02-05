import React, { Component } from 'react'
import CompagnyForm from './CompagnyForm';



class Compagny extends Component {
    constructor(props) {
        super(props)
        this.state = {
            compagnyName: '',
            location: '',
            market: '',
            date: '',
            id: '',
            CompagnyData: [
                {
                    compagnyName: 'comp1',
                    location: 'lagos',
                    market: 'Real state',
                    date: "Dec,15 2016",
                    id: "0"
                },
                {
                    compagnyName: 'comp2',
                    location: 'Accra',
                    market: 'Local business',
                    date: "Dec,12 2016",
                    id: "1"
                },
                {
                    compagnyName: 'comp3',
                    location: 'Bamako',
                    market: 'E-commerce',
                    date: "Dec,20 2016",
                    id: "2"
                },
                {
                    compagnyName: 'comp4',
                    location: 'Kumassi',
                    market: 'E-commerce',
                    date: "Dec,20 2017",
                    id: "3"
                }
            ]
        }
        this.handlechange = this.handlechange.bind(this);
    }


    handlechange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name)
    }

    addstartup = () => {
        const laststartup = this.state.CompagnyData;
        const { compagnyName, market, location, date } = this.state
        this.setState({
            CompagnyData: [...laststartup, {
                compagnyName,
                location,
                market,
                date,
                id: laststartup.length + 1

            }]

        })
        this.setState({
            compagnyName: '',
            location: '',
            market: '',
            date: '',
            id: '',
        })

    };

    remove = () => {
        this.state.CompagnyData.filter(comp => comp.id !== 3)
    }
    update = () => {
        this.state.CompagnyData.map(comp => (comp.id == 5) ? {
            compagnyName: 'comp11', location: 'lagosAbuja',
            market: 'Real state', date: "Dec,15 2016", id: "0"
        } : (comp))
    }


    render() {
        const { compagnyName, location, market, date, id, handlechange, addstartup, CompagnyData } = this.state


        return (
            <div>

                <table className="table table-striped tableitem">
                    <tbody>
                        <tr>
                            <th>Compagny</th>
                            <th>Market/Industry</th>
                            <th>Location</th>
                            <th>Joined</th>
                            <th>Action</th>
                        </tr>

                        {
                            this.state.CompagnyData.map(ent => (
                                <tr key={ent.id}>
                                    <td>{ent.compagnyName}</td>
                                    <td>{ent.market}</td>
                                    <td>{ent.location}</td>
                                    <td>{ent.date}</td>
                                    <td>{
                                        <button type="button" onClick={this.update} className="btn btn-primary">
                                            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                                        </button>}

                                        {<button type="button" onClick={this.remove} className="btn btn-danger btnpadding">
                                            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                        </button>
                                        }
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                    <tfoot>
                        <button className="btn btn-default" data-toggle="modal" data-target="#addstartup" >
                            Add Startup <span className="caret"></span>
                        </button>
                    </tfoot>
                </table>

                {/*Add startup */}

                <div className="modal fade" id="addstartup" tabIndex="-1" role="dialog" aria-labelledby="addstartup" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Startup</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <CompagnyForm addstartup={this.addstartup}
                                    {...this.state}
                                    handlechange={this.handlechange}

                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" onClick={this.addstartup} className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )

    }
}

export default Compagny




// const Compagny = (props) => {
//     return (
//         <div>

//             <table className="table table-striped CompagnyItem">

//                 <tr>
//                     <td>{props.name}</td>
//                     <td>{props.market}</td>
//                     <td>{props.location}</td>
//                     <td>{props.date}</td>
//                     <td>
//                         <button type="button" className="btn btn-primary"> 
//                         <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
//                         </button>
//                         <button type="button" className="btn btn-danger btnpadding"> 
//                         <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
//                         </button>
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     )
// }

// export default Compagny
