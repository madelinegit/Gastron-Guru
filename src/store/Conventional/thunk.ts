import { Dispatch } from 'redux'
import { CHEF_LOADING } from './actionTypes'
//to change to backend api when available
const apiLink = 'https://run.mocky.io/v3/ef3f1e59-97f5-4dcf-8e97-e22160e2d587'

//thunk to load chefs
export const loadChefs = () => async (dispatch: Dispatch) => {
  try {
    const apiData = await fetch(apiLink)
    const chefData = await apiData.json()
    dispatch({ type: CHEF_LOADING, payload: chefData.chefs })
    console.log(chefData.chefs)
    console.log('from thunk')
  } catch (err) {
    console.error(err)
  }
}
