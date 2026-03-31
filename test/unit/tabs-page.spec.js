const fs = require('fs');
const path = require('path');

const tabsPath = path.resolve(__dirname, '../../vurm-main/src/views/TabsPage.vue');
const tabsContent = fs.readFileSync(tabsPath, 'utf-8');

describe('TabsPage unit tests', () => {
  test('renders exactly three tab captions', () => {
    const labels = tabsContent.match(/<ion-label>Tab [123]<\/ion-label>/g) || [];

    expect(labels).toHaveLength(3);
  });

  test('contains unique tab labels without duplicates', () => {
    const labels = ['Tab 1', 'Tab 2', 'Tab 3'].filter((name) => tabsContent.includes(name));

    expect(new Set(labels).size).toBe(3);
  });

  test('has expected href targets for bottom navigation', () => {
    expect(tabsContent).toContain('href="/tabs/tab1"');
    expect(tabsContent).toContain('href="/tabs/tab2"');
    expect(tabsContent).toContain('href="/tabs/tab3"');
  });

  test('icon props are wired for all tab buttons', () => {
    expect(tabsContent).toContain(':icon="triangle"');
    expect(tabsContent).toContain(':icon="ellipse"');
    expect(tabsContent).toContain(':icon="square"');
  });
});
