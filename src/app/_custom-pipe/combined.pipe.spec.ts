import { CombinedPipe } from './combined.pipe';

describe('CombinedPipe', () => {
  it('create an instance', () => {
    const pipe = new CombinedPipe();
    expect(pipe).toBeTruthy();
  });
});
