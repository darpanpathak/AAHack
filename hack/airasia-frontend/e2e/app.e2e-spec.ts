import { AirasiaFrontendPage } from './app.po';

describe('airasia-frontend App', () => {
  let page: AirasiaFrontendPage;

  beforeEach(() => {
    page = new AirasiaFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
