import { BookCodePipe } from './book-code.pipe';

describe('BookCodePipe', () => {
  it('create an instance', () => {
    const pipe = new BookCodePipe();
    expect(pipe).toBeTruthy();
  });
});
