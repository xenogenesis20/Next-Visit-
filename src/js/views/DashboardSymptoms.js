import React from 'react'
import { YourSymptoms} from "../component/YourSymptoms"

export const DashboardSymptoms = () => {
    return (
        <div className="dashboard-wrapper d-flex">
        <div className="side-nav">
            <SideNav />
        </div>
        <div className="sypmtom-column">
            <YourSymptoms/>
        </div>
    </div>
    )
}
