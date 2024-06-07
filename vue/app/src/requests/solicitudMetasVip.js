

export const getMessage = async () => {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
  
    // const dataMessage = data.then((result) => {
    //     result
    //   }).catch((err) => {
    //     console.log(err)
    //   });
  
    return data
  }


