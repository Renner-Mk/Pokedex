import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPagination } from "../../types/pagination";

const initialState: IPagination = {
  currentPage: 1,
  PerPage: 8,
  totalOfPage: 0
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      return { ...state, currentPage: action.payload }
    },
    changeRowsPerPage: (state, action: PayloadAction<number>) => {
      return { ...state, rowsPerPage: action.payload }
    }
  }
})

export const { changePage, changeRowsPerPage } = paginationSlice.actions
export default paginationSlice.reducer