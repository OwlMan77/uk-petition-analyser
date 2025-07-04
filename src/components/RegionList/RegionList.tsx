import { UKRegion } from "../../services/types";
import './RegionList.css';

interface Props {
    region_by_percentage: Record<UKRegion, number>;
}

const RegionList = ({ region_by_percentage }: Props) => {

    const regions = Object.entries(region_by_percentage);

    const highestVotingRegion =  regions.sort(([, percentageA], [, percentageB]) => {
        return percentageB - percentageA;
    })[0][0]

    const rows = regions.map(([name, percentage]) => {
        return (<tr key={`${name}`}>
            <td>{name}</td>
            <td>{percentage.toFixed(2)}%</td>
        </tr>)
    }) 
    return (
        <table>
            <thead>
                <tr>
                    <td>Region</td>
                    <td>% of valid signatures</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
            <tfoot>
                <tr>
                    <td>Highest voting region:</td>
                    <td>{highestVotingRegion}</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default RegionList;
