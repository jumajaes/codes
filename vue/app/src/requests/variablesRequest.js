import { reactive } from 'vue'
import { getMessage } from './solicitudMetasVip'

export const dataRequest = reactive(
    
    {
        dataGoalsToBeVip: await getMessage()
        
    } 
)