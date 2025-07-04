import CountryList from "../../components/CountryList/CountryList";
import PercentageCircle from "../../components/PercentageCircle/PercentageCircle";
import RegionList from "../../components/RegionList/RegionList";
import { useGetPetitionByIdQuery } from "../../services/petitions";
import './Petition.css';

type Props = {
    id: string;
}

const ViewPetition = ({ id }: Props) => {
  const { data, isLoading, error } = useGetPetitionByIdQuery(id);

  if (error) {
    return <div className="error">There was an error with the ID submitted, please check your ID and try again.</div>
  }

  if (isLoading || !data) {
    return <div className="loading">Loading...</div>
  }

  const { action, state, background, url_to_page, total_invalid_signatures, total_valid_signatures, percentage_valid, invalid_countries, valid_percentage_by_region, debate, government_response, departments } = data;

  return <div className="success">
   <h2>{action}</h2>
   <section>
    <div><b>URL:</b> <a href={url_to_page} target="_blank" rel="noopener noreferrer">{url_to_page}</a> </div>
    <div><b>Status: {state}</b></div>
   </section>

   <section>
    <h3>Description</h3>
    <p>{background}</p>
   </section>

   {government_response &&
   <section>
    <h3>Government involvement</h3>

    {departments?.length > 0 && <>
    <h4>Department</h4>
     {departments[0].name}
    </>}
    <h4>Response</h4>
    <blockquote>"{government_response.summary}"</blockquote>
   </section>
   }

   <section>
     <h3>Statistics</h3>
     <div className="stats">
     <div className="stat-subsection">
        <h4>Percentage of regions voting</h4>
        <RegionList region_by_percentage={valid_percentage_by_region} />
      </div>

      <div className="stat-subsection">
        <h4>Non-UK countries voting</h4>
        <CountryList countries={invalid_countries} total_count={total_invalid_signatures}/>
      </div>

      <div className="stat-subsection">
        <h4> Signature Stats</h4>
        <div><b>Total valid signatures</b>: {total_valid_signatures}</div> 
        <div><b>Total invalid signatures</b>: {total_invalid_signatures}</div> 
        <hr />
        <div><b>Percentage signatures from UK</b>:</div>
        <PercentageCircle percentage={percentage_valid} />
      </div>
    </div>
   </section>
   
   {debate &&
   <section>
    <h3>Debate</h3>
    <p>{debate.overview}</p>
    <div><b>Video URL:</b> <a href={debate.video_url} target="_blank" rel="noopener noreferrer">{debate.video_url}</a> </div>
   </section>
   }

  </div>

}

export default ViewPetition;