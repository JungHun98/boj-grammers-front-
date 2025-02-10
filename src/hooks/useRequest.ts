import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

function useRequest<I, T>(
  request: (arg: I) => Promise<AxiosResponse<T>>,
  arg: I,
) {
  function resolvePromise(result: T) {
    _setStatus('fulfilled');
    _setResult(result);
  }

  function rejectPromise(error: Error) {
    _setStatus('error');
    _setError(error);
  }

  const [_promise, _setPromise] = useState<Promise<void>>();
  const [_status, _setStatus] = useState<'pending' | 'fulfilled' | 'error'>(
    'pending',
  );
  const [_result, _setResult] = useState<T>();
  const [_error, _setError] = useState<Error>();

  useEffect(() => {
    _setStatus('pending');
    _setPromise(
      request(arg)
        .then((response) => resolvePromise(response.data))
        .catch((error) => rejectPromise(error)),
    );
  }, [arg]);

  if (_status === 'pending' && _promise) {
    throw _promise;
  }
  if (_status === 'error') {
    throw _error;
  }

  return _result;
}

export default useRequest;
