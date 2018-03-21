

  const index =(state=[],action)=>{
     switch(action.type){
        
     case  "ADD_LIST":
     console.log(action.key)
     return [
             ...state,
      {    key:action.key,
             name:action.name,
             numb:action.numb,
             signature:action.signature,
             chat:[]
      }
     ]
  
     case "DELETE_LIST":
     console.log(state)
     if(state.length>0){
        const arr = [...state]
        arr.splice(action.key,1)
        return arr
      }else{
        return []
      }
      case "SAVE_LIST":
  
      console.log(action)
      state.map((item,index)=>{
      if(action.arr.key===index){
  
 
       return state.splice(index,1,action.arr)
      }
      })
     default:
     return state
   }
 }

  export default index
