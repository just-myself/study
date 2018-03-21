import { Provider } from "react-redux"
import configureStore from "./store/configureStore"

const store =configureStore();
render(
  
     <Provider store={store}>

        <Hello></Hello>


     </Provider>


)