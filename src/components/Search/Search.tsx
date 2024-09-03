import { useState } from 'react';
import './Search.css';

type Props = {
  onSearch: (term: string) => void;
}

const Search = ({ onSearch }: Props) => {
    const [searchTerm, setSearchTerm] = useState('');

    return <div>
        <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        <button onClick={() => onSearch(searchTerm)}>Search</button>
    </div>
}

export default Search;