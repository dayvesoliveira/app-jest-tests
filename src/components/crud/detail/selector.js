
const crudDetail = state  => state.crudDetailReducer

export const loading      = (state) => crudDetail(state).loading
export const error        = (state) => crudDetail(state).error
export const fetchDetail  = (state) => crudDetail(state).detail
	