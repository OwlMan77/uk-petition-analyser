export type UKRegion = 'North East' | 'North West' | 'Yorkshire and The Humber' | 'East Midlands' | 'West Midlands' | 'East of England' | 'London' | 'South East' | 'South West' | 'Wales' | 'Scotland' | 'Northern Ireland';

export interface Petition {
    links: Link;
    data: Data;
}

export interface Link {
    self: string;
}

export interface Data {
    type: string;
    id: number;
    attributes: Attributes;
    departments: Department[];
    topics: unknown[];
}

export interface Attributes {
    action: string;
    background: string;
    additional_details: string;
    committee_note: string;
    state: string;
    signature_count: number;
    created_at: string;  // ISO 8601 date string
    updated_at: string;  // ISO 8601 date string
    rejected_at: string | null;
    opened_at: string;
    closed_at: string;
    moderation_threshold_reached_at: string;
    response_threshold_reached_at: string;
    government_response_at: string;
    debate_threshold_reached_at: string;
    scheduled_debate_date: string;
    debate_outcome_at: string;
    creator_name: string | null;
    rejection: unknown;
    government_response: GovernmentResponse;
    debate: Debate;
    signatures_by_country: SignatureBy[];
    signatures_by_constituency: SignatureByConstituency[];
    signatures_by_region: SignatureBy[];
}

export interface GovernmentResponse {
    responded_on: string;
    summary: string;
    details: string;
    created_at: string;
    updated_at: string;
}

export interface Debate {
    debated_on: string;
    transcript_url: string;
    video_url: string;
    debate_pack_url: string;
    public_engagement_url: string | null;
    debate_summary_url: string | null;
    overview: string;
}

export interface Department {
    acronym: string;
    name: string;
    url: string;
}

export interface SignatureBy {
    name: string;
    code: string;
    signature_count: number;
}

export interface SignatureByConstituency extends SignatureBy {
    mp: string | null;
}

export interface PetitionSummary {
    action: string;
    state: string;
    background: string;
    additional_details: string;
    government_response: GovernmentResponse;
    debate: Debate;
    departments: Department[];
    url_to_page: string;
    invalid_countries: Omit<SignatureBy, 'code'>[];
    total_valid_signatures: number;
    total_invalid_signatures: number;
    percentage_valid: number;
    valid_percentage_by_region: Record<UKRegion, number>
}