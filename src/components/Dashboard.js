import React from 'react'
import MainContent from './MainContent'

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
                    <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>Dashboard
                  </div>
                  <div className="col-lg-3 paneldashboard">
                    <button class="btn btn-default">
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
      </div>
    </div>
  )
}

export default Dashboard
