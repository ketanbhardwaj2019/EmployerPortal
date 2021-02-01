import {actionTypes, urls} from '../../constants';

export const fetchConfig = () => async dispatch => {
    try {

     
        const response = await fetch (`${document.location.origin}${urls.ENV_CONFIG}`);
        const contentData =  await response.json();
        dispatch({
            type: actionTypes.FETCH_CONFIG_SUCCESS,
            payload: contentData,
            isLoading: false
        });
    }
    catch{
        dispatch(fetchFailed());
    }
}

export const fetchFailed = () => ({
    type: actionTypes.FETCH_FAILED,
    isLoading: false
})

