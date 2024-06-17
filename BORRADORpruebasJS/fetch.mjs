import fetch from 'node-fetch';

const getMessage = async() => {
    const response = await fetch("http://localhost:3000/");
    // const data = await response.json();
    const data = await response.stringify();
    return data
}

const arrayData = await getMessage()

console.log(" mensaje :",arrayData[0].mensajes)

const arraySplit = arrayData[0].mensajes.split(/(\(|\))/)

console.log(arraySplit)

// const dataGoalsForVip = ref([])
// let store

// //servicio
// async function getGoalsToBeVipService({commit}){
//     let urlService = 'https://leonisavirtualtest.leonisa.com/dev/order-power-service/service/'
//     // return await axios.get(`${urlService}metasParaserVip/${codCia}/${cedula}/${campaing}`)
//     return await axios.get(`${urlService}metasParaserVip/${window.userSessionData?.codigoCompania}/${window.userSessionData?.cedula}/${window.userSessionData?.campana}`)
// }


// const requestGoalSToBeVip = async ()=>{
//     const response = await  store.dispatch('getGoalsToBeVipService')
//     dataGoalsForVip.value = response.data.desStatus

// }




