import React from 'react'
import StartupDashboard from './StartupDashboard'
import AllStartup from './AllStartup'


const MainContent = () => {
    return (
        <div>
            <div className="container">                         
                <div className="row"> {/* breadcrumb */}
                    <div className="col-lg-12">
                        <ol className="breadcrumb breadcrumbheader">
                            <li><a href="#">Dashboard</a></li>
                        </ol>
                    </div>
                </div>
                <div className="row">  {/* MainContent*/}
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-3">  {/* StartupDashboard.js  */}
                                <StartupDashboard />
                            </div>
                            <div className="col-lg-9">  {/* AllStartup.js */} 
                                <AllStartup />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainContent
