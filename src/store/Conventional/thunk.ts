import { Dispatch } from 'redux'
import { CHEF_LOADING } from './actionTypes'
//to change to backend api when available
const apiLink = 'https://run.mocky.io/v3/3ec882fc-be6e-44fb-aac8-0ef9524f1b36'

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
