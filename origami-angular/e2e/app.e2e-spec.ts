import { OrigamiAngularPage } from './app.po';

describe('origami-angular App', function() {
  let page: OrigamiAngularPage;

  beforeEach(() => {
    page = new OrigamiAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
