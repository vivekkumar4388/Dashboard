import React from 'react'
import BarChart from './BarChart';
import PieChart from './PieChart';

const Dashboard = () => {
  return (
    <div className="barchar">
    <table cellpadding="0" cellspacing="0" border="0" role="presentation">
     <tr>
       <td align="center" valign="top">
       <h2> likelihood BarChart</h2>
       <BarChart/>
       </td>
    </tr>
   <tr>
     <td align="center" valign="top">
       <h2> Intensity PieChart</h2>
        <PieChart/>
       </td>
  </tr>
</table> 
    
    </div>
  )
};

export default Dashboard;
