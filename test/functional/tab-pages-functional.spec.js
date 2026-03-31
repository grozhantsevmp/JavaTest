const fs = require('fs');
const path = require('path');

const read = (relPath) =>
  fs.readFileSync(path.resolve(__dirname, `../../vurm-main/${relPath}`), 'utf-8');

const tab1 = read('src/views/Tab1Page.vue');
const tab2 = read('src/views/Tab2Page.vue');
const tab3 = read('src/views/Tab3Page.vue');
const router = read('src/router/index.ts');

describe('Tab pages functional tests', () => {
  test('all tabs are functionally connected from router to dedicated pages', () => {
    const cases = [
      { route: "path: 'tab1'", marker: 'Tab 1 page', viewContent: tab1 },
      { route: "path: 'tab2'", marker: 'Tab 2 page', viewContent: tab2 },
      { route: "path: 'tab3'", marker: 'Tab 3 page', viewContent: tab3 },
    ];

    cases.forEach(({ route, marker, viewContent }) => {
      expect(router).toContain(route);
      expect(viewContent).toContain(marker);
    });
  });

  test('default navigation scenario leads to tab1 page', () => {
    expect(router).toContain("path: '/'");
    expect(router).toContain("redirect: '/tabs/tab1'");
    expect(tab1).toContain('<ExploreContainer name="Tab 1 page" />');
  });
});
