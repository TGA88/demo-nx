import { apiNobuild } from './api-nobuild';

describe('apiNobuild', () => {
  it('should work', () => {
    expect(apiNobuild()).toEqual('api-nobuild');
  });
});
