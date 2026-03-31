const fs = require('fs');
const path = require('path');

const componentPath = path.resolve(__dirname, '../../vurm-main/src/components/ExploreContainer.vue');
const content = fs.readFileSync(componentPath, 'utf-8');

describe('ExploreContainer unit tests', () => {
  test('template contains required container id (nominal case)', () => {
    expect(content).toContain('<div id="container">');
  });

  test('uses strong tag for dynamic title marker', () => {
    expect(content).toContain('<strong>{{ name }}</strong>');
  });

  test('prop contract defines name as String type', () => {
    expect(content).toMatch(/defineProps\(\{\s*name:\s*String,\s*\}\);/m);
  });

  test('security attributes are present for external link', () => {
    expect(content).toContain('target="_blank"');
    expect(content).toContain('rel="noopener noreferrer"');
  });

  test('docs link points to Ionic components URL', () => {
    expect(content).toContain('href="https://ionicframework.com/docs/components"');
  });

  test('style block contains visual boundary values', () => {
    expect(content).toContain('font-size: 20px;');
    expect(content).toContain('font-size: 16px;');
  });
});
