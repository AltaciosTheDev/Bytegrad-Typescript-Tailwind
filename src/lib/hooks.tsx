import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContextProvider"

export function useTodosContext() {//normal function that uses a hook in there
      const context = useContext(TodosContext)
      //when TodosContext is null (TTC | null) must guard against it
      if(!context){
        throw new Error('Forgot to add provider')
      }
      return context 
}