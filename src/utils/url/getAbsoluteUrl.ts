import { IncomingMessage } from 'http';

export const getAbsoluteUrl = (path: string, req?: IncomingMessage) => {
  let baseUrl = process.env.NEXT_INTERNAL_API_URI;

  if (!baseUrl && req) {
    const protocol = /^localhost(:\d+)?$/.test(req.headers.host || '')
      ? 'http'
      : 'https';
    baseUrl = `${protocol}://${req.headers.host}`;
  } else if (!baseUrl) {
    baseUrl = window.location.origin;
  }

  return `${baseUrl}${path}`;
};
