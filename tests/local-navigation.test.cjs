const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function element(tag = 'div') {
  return {
    tag, children: [], textContent: '', innerHTML: '', className: '', href: '',
    appendChild(child) { this.children.push(child); }
  };
}

function run(protocol, fetchImpl) {
  const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const scripts = [...html.matchAll(/<script>([\\s\\S]*?)<\\/script>/g)];
  assert.equal(scripts.length, 1);
  const container = element();
  const heading = element();
  const emoji = element();
  const subtitle = element();
  const footer = element();
  const elements = {
    '.header .emoji': emoji,
    '.header .title-text': heading,
    '.header .sub': subtitle,
    '.footer': footer
  };
  const document = {
    title: '',
    getElementById(id) { assert.equal(id, 'cardContainer'); return container; },
    querySelector(selector) { assert.ok(elements[selector]); return elements[selector]; },
    createElement: element
  };
  vm.runInNewContext(scripts[0][1], {
    document, window: { location: { protocol } }, fetch: fetchImpl,
    String, Error
  });
  return { container, document, heading, subtitle };
}

test('file URL shows all 28 local chapter links without fetch', () => {
  const view = run('file:', () => { throw new Error('fetch must not be called'); });
  assert.equal(view.container.children.length, 28);
  const links = view.container.children.map(card => card.children[1].children[0].href);
  assert.equal(links[0], '01.html');
  assert.equal(links[27], '28.html');
  assert.equal(new Set(links).size, 28);
  assert.match(view.subtitle.textContent, /离线/);
});

test('HTTP still loads the original JSON catalog', async () => {
  let requested = '';
  const view = run('https:', url => {
    requested = url;
    return Promise.resolve({ ok: true, json: () => Promise.resolve({
      title: 'Rust', emoji: '🦀', subtitle: '课程', chapterCount: 1,
      chapters: [{ num: '01', title: '入门', file: '01.html', topics: [] }]
    }) });
  });
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(requested, 'courses.json');
  assert.equal(view.container.children.length, 1);
  assert.equal(view.container.children[0].children[1].children[0].href, '01.html');
});

test('HTTP fetch failure remains visible to users', async () => {
  const view = run('https:', () => Promise.reject(new Error('offline')));
  await new Promise(resolve => setImmediate(resolve));
  assert.match(view.container.innerHTML, /课程数据加载失败/);
});
