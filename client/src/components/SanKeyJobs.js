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
];




function SankeyJobs() {

  const { stats } = useAppContext()
  console.log(stats)





  return (
    <Sankey id="sankey"
      dataSource={data1}
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
        width={8}
        padding={30}>
      </Node>

    </Sankey>
  );













}

export default SankeyJobs;