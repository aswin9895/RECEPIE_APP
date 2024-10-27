import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { json } from 'react-router-dom'

export const fetchAllRecepies = createAsyncThunk('recepies/fetchAllRecepies', async () => {
    const result = await axios.get("https://dummyjson.com/recipes")
    // console.log(result);
    sessionStorage.setItem("allRecepies",JSON.stringify(result.data.recipes))
    return result.data.recipes

})


const recepieSlice = createSlice({
    name: 'recepies',
    initialState: {
        allRecepies: [],
        dummyRecepies: [],
        loading: false,
        error: ""
    },
    reducers: {
        // searchKey
        searchBar: (state, searchKey) => {
            state.allRecepies = state.dummyRecepies.filter(item => item.cuisine.toLowerCase().includes(searchKey.payload))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllRecepies.fulfilled, (state, apiResult) => {
            state.allRecepies = apiResult.payload
            state.dummyRecepies = apiResult.payload
            state.loading = false
            state.error = ""
        }),
            builder.addCase(fetchAllRecepies.pending, (state, apiResult) => {
                state.allRecepies = [],
                    state.dummyRecepies = [],
                    state.loading = true
                state.error = ""
            }),
            builder.addCase(fetchAllRecepies.rejected, (state, apiResult) => {
                state.allRecepies = [],
                    state.dummyRecepies = [],
                    state.loading = false
                state.error = "Something Wrong"
            })
    }
})

export const { searchBar } = recepieSlice.actions
export default recepieSlice.reducer