import React from 'react'


    const userContext = React.createContext()

    const userprovider = userContext.Provider
    const userConsumer = userContext.Consumer
  
export {userConsumer,userprovider}