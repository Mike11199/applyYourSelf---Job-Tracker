import Wrapper from '../assets/wrappers/SankeyChart'

import Sankey, {
  Tooltip,
  Link,
  Node,
  
} from 'devextreme-react/sankey';
import { useAppContext } from '../context/appContext';

function customizeLinkTooltip(info) {
  return {
    html: `<b>From:</b> ${info.source}<br/><b>To:</b> ${info.target}<br/><b>Weight:</b> ${info.weight}`,
  };
}

const data1 = [
  { source: 'Applications', target: 'Coding Assessments', weight: 2 },
  { source: 'Applications', target: 'Phone Interviews', weight: 8 },
  { source: 'Phone Interviews', target: 'Behavioral Interviews', weight: 4 },
  { source: 'Behavioral Interviews', target: 'Technical Interviews', weight: 2 },
  { source: 'Coding Assessments', target: 'Technical Interviews', weight: 1 },
  { source: 'Technical Interviews', target: 'Accepted', weight: 1 },
  { source: 'Pending', target: 'Technical Interviews', weight: 13 },
  { source: 'Pending', target: 'Technical Interviews', weight: 2},
];

const data2 = [

  { source: 'pending', target: 'coding_assessment', weight: 1 },
  { source: 'pending', target: 'coding_assessment', weight: 1 },
  { source: 'pending', target: 'coding_assessment', weight: 1 },
  { source: 'pending', target: 'behavioral_interview', weight: 1 },
  { source: 'pending', target: 'phone_interview', weight: 1 },
  { source: 'pending', target: 'rejected/archived', weight: 1 },
  { source: 'pending', target: 'technical_interview', weight: 1 },
  { source: 'pending', target: 'rejected/archived', weight: 1 },
  { source: 'pending', target: 'technical_interview', weight: 1 },
  { source: 'behavioral_interview', target: 'technical_interview', weight: 1 },
  
  
  
]


function SankeyJobs() {

  const { stats, MasterData_Sankey_Final } = useAppContext()
  console.log(stats)
  console.log(MasterData_Sankey_Final)





  return (
    <Wrapper>
    <h4 style={{textAlign:"center", marginTop:"150px", marginBottom:"40px"}}>Sankey Chart - Application Outcomes</h4>    
   
    <p style={{display:"flex", marginBottom:"50px"}}>**Warning!  This chart will crash if circular references are added.  
    For example, do not add assessments after interviews to a particular job's history if other jobs have assessments before interviews. 
    This will cause a circular error.</p>
    
    <div className='SankeyChart'>
    <Sankey id="sankey"
      dataSource={MasterData_Sankey_Final}
      sourceField="source"
      targetField="target"
      weightField="weight"  
      
      // title="Commodity Turnover in 2017"
    >
      <Tooltip
        enabled={true}
        customizeLinkTooltip={customizeLinkTooltip}
      >
      </Tooltip>
 

      <Link
        colorMode="gradient">
      </Link>
      <Node
        width={15}        
        padding={250}>
        
      </Node>

    </Sankey>
    </div>
    </Wrapper>
  );













}

export default SankeyJobs;