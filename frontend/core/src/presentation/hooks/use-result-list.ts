import { useEffect, useState } from 'react';
import { GetResultList } from '../../domain/usecases/get-results-list';


const useResultList = (getResultList: GetResultList): any => {
 
  const [state, setState] = useState({
    isLoading: false,
    error: ''
  });
  const [response, setResponse] = useState<GetResultList.Response>()
  
  
  useEffect(() => {

    setState(old => ({ ...old, isLoading: true }));
    getResultList.perform()
      .then(response => {
        setResponse(old => ({...response}))
        setState(old => ({ ...old, isLoading: false }))
      })
      .catch(error => {
        console.log(error);
        setResponse(old => ([]))
        setState(old => ({ ...old, error: 'An error occurred', isLoading: false }));
      });
  }, [response]);
  

  return {
    state,
    response,
    
  };
};

export default useResultList;
