import { SchedulingTestPage } from './app.po';

describe('scheduling-test App', () => {
  let page: SchedulingTestPage;

  beforeEach(() => {
    page = new SchedulingTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
