import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../../api/apiUrl'
import { setCredentials, logOut } from '../../features/auth/authSlice'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;
        if (token) {
            headers.set("authentication",`Bearer ${token}`)
        }
        return headers;
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await (baseQuery(args, api, extraOptions))
    if (result?.error?.status === 403) {
        console.log('sending refresh token');
        //send refresh token to get new access token
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const user = api.getState().auth.user;
            //store the new token;
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            //retry the original query with new access token
            result = await baseQuery(args,api,extraOptions)
        } else {
            api.disparch(logOut())
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth
})