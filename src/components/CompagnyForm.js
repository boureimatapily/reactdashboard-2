import React, { Component } from 'react'

export default class CompagnyForm extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     compagnyName: '',
        //     location: '',
        //     market: '',
        //     date: '',
        //     id: ''
        // }
        //this.handlechange = this.handlechange.bind(this);
        //this.addnew = this.addnew.bind(this);
    }

    // handlechange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    //     console.log(e.target.name)
    // }
    
    // addnew(){
    //     this.props.addstartup(this.state.compagnyName, this.state.location,
    //         this.state.market, this.state.date)
    //     // this.setState({
    //     //     compagnyName: '',
    //     //     location: '',
    //     //     market: '',
    //     //     date: '',    

    //     // })
    // };


render() {
    const {compagnyName ,location, market, date, id, addstartup,handlechange, CompagnyData} = this.props
    return (
        <div>

            <form>
            
                <div className="form-group">
                    <label htmlFor="CompagnyName">Compagny Name</label>
                    <input type="text" value={compagnyName} name="compagnyName" onChange={handlechange} className="form-control" id="compagnyName" placeholder="compagny Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" value={location} name="location" onChange={handlechange} className="form-control" id="location" placeholder="location" />
                </div>
                <div className="form-group">
                    <label htmlFor="market">Market/Industry</label>
                    <input type="text" value={market} name="market" onChange={handlechange} className="form-control" id="market" placeholder="Market" />
                </div>
                <div className="Date">
                    <label htmlFor="Date">Date</label>
                    <input type="date" value={date} name="date" onChange={handlechange} className="form-control" id="date" placeholder="date" />
                </div>

                {/* <button  onClick={addstartup} className="btn btn-primary">Add Startup</button> */}
            </form>


        </div>
    )
}
}
