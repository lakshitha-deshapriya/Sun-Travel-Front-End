import { STAFrontEndPage } from './app.po';

describe('sta-front-end App', function() {
  let page: STAFrontEndPage;

  beforeEach(() => {
    page = new STAFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
