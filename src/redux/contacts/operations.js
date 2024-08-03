import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_BASE_API_PREFIX;
// const BASE_URL = '/api/v1';
const BASE_TOKEN = import.meta.env.VITE_BASE_API_TOKEN;
// const BASE_TOKEN = 'VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${BASE_TOKEN}`);
      return headers;
    },
  }),
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => '/contacts?page=1&sort=created:desc',
    }),
    getContactById: builder.query({
      query: contactId => `/contact/${contactId}`,
    }),
    createContact: builder.mutation({
      query: newContact => ({
        url: '/contact',
        method: 'POST',
        body: newContact,
      }),
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  useCreateContactMutation,
} = contactsApi;
