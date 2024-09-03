import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Petition, PetitionSummary } from './types';
import { getPetitionSummary } from '../utils/petition';

// https://petition.parliament.uk/petitions/${id}.json

export const petitionApi = createApi({
    reducerPath: 'petitionApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://petition.parliament.uk/petitions'}),
    endpoints: (builder) => ({
        getPetitionById: builder.query<PetitionSummary, string>({
            query: (id: string) => `/${id}.json`,
            transformResponse: (petition: Petition) => {
                return getPetitionSummary(petition)
            }
        })
    })
    
})


export const { useGetPetitionByIdQuery } = petitionApi;
