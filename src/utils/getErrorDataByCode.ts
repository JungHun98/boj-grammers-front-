import { AxiosError } from 'axios';

type ErrorCodeType = {
  [key: string]: { code: string; message: string; requireLogin?: boolean };
};

export const ERROR_CODE: ErrorCodeType = {
  default: { code: 'ERROR', message: '알 수 없는 오류가 발생했습니다.' },

  ERR_NETWORK: {
    code: '｡ŏ﹏ŏ)',
    message:
      '서버가 응답하지 않습니다.\n프로그램을 재시작하거나 관리자에게 연락하세요.',
  },
  ECONNABORTED: {
    code: '(╥﹏╥)',
    message: '요청 시간을 초과했습니다.',
  },

  400: { code: '400', message: '잘못된 요청입니다. 다시 시도해주세요.' },
  403: { code: '403', message: '문제 접근 권한이 없습니다.' },
  404: { code: '404', message: '존재하지 않는 문제입니다.' },
  500: { code: '500', message: '서버에 문제가 발생했습니다.' },
} as const;

const getErrorDataByCode = (
  error: AxiosError<{ code: number; message: string }>,
) => {
  const serverErrorCode = error?.response?.data?.code ?? '';
  const httpErrorCode = error?.response?.status ?? '';
  const axiosErrorCode = error?.code ?? '';

  if (serverErrorCode in ERROR_CODE) {
    return ERROR_CODE[serverErrorCode as keyof typeof ERROR_CODE];
  }

  if (httpErrorCode in ERROR_CODE) {
    return ERROR_CODE[httpErrorCode as keyof typeof ERROR_CODE];
  }

  if (axiosErrorCode in ERROR_CODE) {
    return ERROR_CODE[axiosErrorCode as keyof typeof ERROR_CODE];
  }

  return ERROR_CODE.default;
};

export default getErrorDataByCode;
