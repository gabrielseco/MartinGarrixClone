// @flow
export const GET_PUBLIC_PATH = (path: string) => {
  if (process.env.PUBLIC_URL) {
    return `${process.env.PUBLIC_URL}/${path}`;
  }

  return '';
};
