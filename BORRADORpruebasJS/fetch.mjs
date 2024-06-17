import fetch from 'node-fetch';

const getMessage = async() => {
    const response = await fetch("http://localhost:3000/");
    // const data = await response.json();
    const data = await response.json();
    return data
}

const arrayData = await getMessage()

//console.log(" mensaje :",arrayData[0].messages)
//const replacedatatext = arrayData[2].text.replace(arrayData[2].amount,`<span>${arrayData[2].amount}</span>`).replace(arrayData[2].descriptionCategory,`<span>${arrayData[2].descriptionCategory}</span>`)

// const messagereplace = arrayData[0].messages.replace("(","<span>").replace(")","</span>").replace("(","<span>").replace(")","</span>")

const messagereplace = arrayData[0].messages.replaceAll("(","<span>").replaceAll(")","</span>")

console.log(arrayData[0])

console.log(messagereplace)




