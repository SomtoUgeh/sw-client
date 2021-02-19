// @ts-ignore
import JsonClient from 'json-client';
export const client = new JsonClient('https://swapi.dev/api/');

export const getRoots = async () => await client('get', '', null, null);
export const getRoot = async (root: string) =>
  await client('get', root, null, null);
