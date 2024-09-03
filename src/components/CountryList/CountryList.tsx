import { PetitionSummary } from "../../services/types";
import './CountryList.css';

interface Props {
    countries: PetitionSummary['invalid_countries']
    total_count: number;
}

const CountryList = ({ countries, total_count }: Props) => {

    const rows = countries.map(({name, signature_count}) => {
        return (<tr key={`${name}`}>
            <td>{name}</td>
            <td>{signature_count}</td>
        </tr>)
    }) 
    return (
        <table>
            <thead>
                <tr>
                    <td>Country</td>
                    <td>Signatures</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total count:</td>
                    <td>{total_count}</td>
                </tr>
            </tfoot>
        </table>
    );
}

export default CountryList;
