export default (state, action) => {
    console.log(state)
    console.log(action)
    
    switch(action.type) {
      case 'GET_ITEM_BY_ID':
      //   const selecteditem = () => {
      //   const name= ''
      //   for (var index = 0; index < state.items.length; index++) {
      //     if (state.items[index] === action.payload[index]) {
      //       name=state.items[index].name
      //     }
      //     return name
      //  }
      // }
     //const name =  '';
    //  const index = 0;
    // const selecteditem= state.items.map((item) => {
    // if (item[index] === action.payload[index]) {
    //   console.log(item.name)
    //    return item.name
    //       }
          //return item.name
       //}
    //)
      
// const selecteditem = state.items.map(item =>{
//  if(item.id === action.payload){
//     return selecteditem 
           
//   }
// })

const selecteditem = state.items.find((item)=>item.id === action.payload)
      

      return {
        ...state,
      items: selecteditem,
      };
      
      default:
        return state;
    }
    
  }