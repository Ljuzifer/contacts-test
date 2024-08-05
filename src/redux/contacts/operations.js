import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_BASE_API_PREFIX
    : import.meta.env.VITE_BASE_FULL_API;
const BASE_TOKEN = import.meta.env.VITE_BASE_API_TOKEN;

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

    deleteContact: builder.mutation({
      query: contactId => ({
        // return {
        url: `/contact/${contactId}`,
        method: 'DELETE',
        // };
      }),
    }),

    updateTags: builder.mutation({
      query: data => {
        const { contactId, ...body } = data;
        return {
          url: `/contacts/${contactId}/tags`,
          method: 'PUT',
          body,
        };
      },
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateTagsMutation,
} = contactsApi;
