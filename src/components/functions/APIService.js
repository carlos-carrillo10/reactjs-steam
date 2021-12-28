export async function Get(url, params, headers)
{
    try{
            const requestOptions = {
              method: 'GET',
              headers: headers
          };
           
            const response = await fetch(url, requestOptions)
            const data = await response.json();
           return { success: true, data};
      }
      catch(error)
      {
        console.error('APIService - Get: '+error)
        return { success: false, error};
      } 
}