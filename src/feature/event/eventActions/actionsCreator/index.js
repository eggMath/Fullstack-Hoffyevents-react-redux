
import {CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT} from '../actionsType'


export const createEvent = (event) => {
     return {
         type:CREATE_EVENT,
         payload:{
             event
         }
     }
}

export const updatedEvent = (event) => {
     return {
          type:UPDATE_EVENT,
          payload:{
              event
          }
     }
}

export const deleteEvent = (eventId) => {
    return {
        type:DELETE_EVENT,
        payload:{
            eventId
        }
    }
}