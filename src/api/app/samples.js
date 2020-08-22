import base from './base';

export const getAll = () => {
  return base.get('/v1/samples');
}
