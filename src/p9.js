import React from 'react';
import {useAxios} from './useAxios'


function Example() {
  let url = 'https://cnodejs.org/api/v1/topics';
  const [isLoading, response, error] = useAxios(url, []);
  console.log("isLoading===",isLoading)
  console.log("response===",response)
  console.log("error===",error)
  return (
      <div>
          {isLoading ? <div>loading...</div> :
              (error ? <div> There is an error happened </div> : <div> Success, {response ? response.statusText:""} </div>)}
      </div>
  )
}

export default Example;

