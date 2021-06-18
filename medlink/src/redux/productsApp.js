import remove from 'lodash.remove'

// Action Types

export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const READ_PRODUCT = 'READ_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'


// Action Creators

export function createproduct(product) {
  return {
    type: CREATE_PRODUCT,
    payload: product
  }
}

export function readproduct(productId) {
  return {
    type: READ_PRODUCT,
    payload: productId
  }
}

export function updateproduct({newProduct, index}){
  return {
    type: UPDATE_PRODUCT,
    payload: {newProduct, index}
  }
}

export function deleteproduct(id) {
  return {
    type: DELETE_PRODUCT,
    payload: id
  }
}

// reducer

const initialState = []

function productsReducer(state = initialState, action) {
  const { payload } = action
  switch (action.type) {
    case CREATE_PRODUCT: {
      let check = false
      state.forEach(item => {
        if (item.name === payload.name)
          check = true
      })

      if (check) {
        alert('NAME EXITED')
        return state
      }
      //newArr =  [...state] => copy mang state sang newArr
      const newState = [
        payload,         
        ...state,
      ]

      return newState
    }
      

    case DELETE_PRODUCT: {
      const newState = [...state]
      const deletedState = newState.filter(x => (x.id !== payload))

      return deletedState
    }

    case UPDATE_PRODUCT: {
      let check = false
      console.log(payload)
      state.forEach(item => {
        if (item.name === payload.product.name)
          check = true
      })

      if (check) {
        alert('NAME EXITED')
        return state
      }
      
      let newState = [
        ...state
      ]
      
      newState[payload.index] = payload.product
      //clm me no quen return
      return newState
    }

    

    default:
      return state

    // case READ_PRODUCT:
      
  }
}




export default productsReducer;
