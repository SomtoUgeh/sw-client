// @ts-ignore
import JsonClient from 'json-client';
export const client = new JsonClient('https://swapi.dev/api/');

const fetchBase = async (base: string): Promise<any> => {
  const response = await client('get', base);

  const errorCode = 400;

  if (response.status > errorCode) throw new Error(response.errors);

  return response;
};

export { fetchBase };
