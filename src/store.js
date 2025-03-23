export const initialStore=()=>{
  return{
    // 3 variables for starwars api
    people:[],
    vehicles:[],
    planets:[]
  }
}

export default function storeReducer(store, action = {}) {
  
  if(action.type=="set_people"){
    console.log("action:", action)
    return{
      ...store,
      people: action.payload
    }
  }
  
  if(action.type=="set_vehicles"){
    return{
      ...store,
      vehicles: action.payload
    }
  }

  if(action.type=="set_planets"){
    return{
      ...store,
      planets: action.payload
    }
  }
  
  
  
  
  
  
  
  
  
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
