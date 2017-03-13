import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
const withLoadingSpinner=(Component)=>{
    return function composedComponent({isLoading,...props}){
        return isLoading? <LoadingSpinner isLoading={isLoading} />:<Component {...props} />
    }
}
export default withLoadingSpinner;