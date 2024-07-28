// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => (
                {
                    method: "GET",
                    url: '/products',
                }
            ),
        }),
        getProductsByFilter: builder.query({
            query: (filter) => {
                // logic to handle multiple query filters in a single endpoint
                let urlRoute = `/products?`;
                let finalUrl = '';
                for (const key in filter) {
                    if (filter[key]) {
                        urlRoute = urlRoute + `&${[key]}=${filter[key]}`
                    }
                }
                finalUrl = urlRoute.replace('&', '');
                console.log(finalUrl);
                return {
                    method: "GET",
                    url: finalUrl,
                }
            }
        }),
        getSingleProduct: builder.query({
            query: (productId) => `/products/${productId}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetSingleProductQuery, useGetProductsByFilterQuery } = productApi