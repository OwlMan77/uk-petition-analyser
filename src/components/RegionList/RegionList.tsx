import { UKRegion } from "../../services/types";
import './RegionList.css';

interface Props {
    region_by_percentage: Record<UKRegion, number>;
}

const RegionList = ({ region_by_percentage }: Props) => {

    const rows = Object.entries(region_by_percentage).map(([name, percentage]) => {
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
        </table>
    );
}

export default RegionList;
