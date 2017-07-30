import { BsaHw09Page } from './app.po';

describe('bsa-hw09 App', () => {
  let page: BsaHw09Page;

  beforeEach(() => {
    page = new BsaHw09Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
