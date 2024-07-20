import {
  CreateDekcArg,
  DecksListResponse,
  GetDeckByIdArgs,
  GetDecksArgs,
} from '@/services/decks/decks.types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      createDesk: builder.mutation<void, CreateDekcArg>({
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      getDeckById: builder.query<DecksListResponse, GetDeckByIdArgs>({
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        query: args => ({
          params: args ?? undefined,
          url: `v1/decks`,
        }),
      }),
    }
  },
  reducerPath: 'flashcardsApi',
})

export const { useCreateDeskMutation, useGetDeckByIdQuery, useGetDecksQuery } = flashcardsApi
