import { HelloAngularGitPage } from './app.po';

describe('hello-angular-git App', () => {
  let page: HelloAngularGitPage;

  beforeEach(() => {
    page = new HelloAngularGitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
