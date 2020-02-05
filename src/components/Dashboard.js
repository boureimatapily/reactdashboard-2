import React from 'react'
import MainContent from './MainContent'
import CompagnyForm from './CompagnyForm'

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">  {/* panel */}
              <div className="panel-heading">
                <div className="row panelhead"> {/* panelhead */}
                  <div className="col-lg-9 paneldashboard paneldashboardRight">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard
                  </div>
                  <div className="col-lg-3 paneldashboard">
                    <button className="btn btn-default" data-toggle="modal" data-target="#addstartup" >
                      Add Startup <span className="caret"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="panel-body"> {/* panel body */}
                <MainContent />
              </div>
            </div>   {/* panel */}
          </div>
        </div>

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
                              <CompagnyForm />
                             </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>


      </div>
    </div>
  )
}

export default Dashboard
