import React, {useEffect} from 'react';
import {dashboardApi} from "../../../api/dashboardApi.js";

function Dashboard() {
    const fetch = async ()=>{
        try {
           const res = await dashboardApi.sumOrderTo5MonthRecent()
            console.log(res.data)
        }catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
        fetch()
    },[])
    return (
        <div>
            <p>abasd</p>
        </div>
    );
}

export default Dashboard;