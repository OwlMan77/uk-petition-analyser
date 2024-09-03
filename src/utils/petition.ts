import { Petition, PetitionSummary } from "../services/types";

interface ValidSignatureResult {
    valid: number;
    invalid: number;
    percentageValid: number;
}

export function totalValidSignatures (petition: Petition): ValidSignatureResult {
    const valid = petition.data.attributes.signatures_by_country.find((country) => country.name === "United Kingdom")?.signature_count ?? 0
    const invalid = petition.data.attributes.signatures_by_country.filter((country) => country.name !== "United Kingdom").reduce((prev, current) => prev + current.signature_count, 0);
    return {valid, invalid, percentageValid: (valid / (valid + invalid)) * 100};
}

export function listInvalidCountries (petition: Petition): {name: string; signature_count: number}[] {
    return petition.data.attributes.signatures_by_country.filter((country) => country.name !== "United Kingdom" && country.signature_count !== 0 ).sort(({ signature_count: sigCountA  }, { signature_count: sigCountB }) => {
        return sigCountB - sigCountA;
    }).map(
        ({ name, signature_count }) => (
            {name, signature_count}
        )
    );
}

export function totalSignaturePercentageByRegion(petition: Petition, validSignatures: number): Record<string, number> {
    const signatureByRegion: Record<string, number> = {}
    petition.data.attributes.signatures_by_region.forEach(({name, signature_count}) => {
        signatureByRegion[name] = (signature_count / validSignatures) * 100;
    });
    return signatureByRegion;
}

export function getPetitionSummary(petition: Petition): PetitionSummary {
    const {id, attributes: {action, debate, background, additional_details, state, government_response}, departments} = petition.data
    const {valid: total_valid_signatures, invalid: total_invalid_signatures, percentageValid: percentage_valid} = totalValidSignatures(petition);

    return {
        action,
        debate,
        state,
        government_response,
        additional_details,
        background,
        departments,
        valid_percentage_by_region: totalSignaturePercentageByRegion(petition, total_valid_signatures),
        total_valid_signatures,
        total_invalid_signatures,
        percentage_valid,
        invalid_countries: listInvalidCountries(petition),
        url_to_page: `https://petition.parliament.uk/petitions/${id}`,
    }
}