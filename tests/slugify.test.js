import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('matches all required examples', () => {
  const examples = [
    ['Chợ Bến Thành', 'cho-ben-thanh'],
    ['  Xin   chào! ', 'xin-chao'],
    ['', ''],
    ['Đà Nẵng & Huế', 'da-nang-hue'],
  ];

  for (const [input, expected] of examples) {
    assert.equal(slugify(input), expected);
  }
});

test('removes Vietnamese diacritics, including uppercase Đ and lowercase đ', () => {
  assert.equal(slugify('Đường đèo ĐẶNG ĐÌNH'), 'duong-deo-dang-dinh');
  assert.equal(slugify('Tiếng Việt: CẦN THƠ'), 'tieng-viet-can-tho');
  assert.equal(slugify('a\u0300 e\u0302 o\u031b\u0301'), 'a-e-o');
});

test('collapses consecutive spaces, punctuation and other separators', () => {
  assert.equal(slugify('  Một---hai___ba...bốn / năm & sáu!  '), 'mot-hai-ba-bon-nam-sau');
  assert.equal(slugify('A \t\n B 💡 C'), 'a-b-c');
  assert.equal(slugify('ABC123--42'), 'abc123-42');
});

test('handles empty and separator-only strings', () => {
  assert.equal(slugify(''), '');
  assert.equal(slugify('  --- !! ___  '), '');
});

test('never produces leading or trailing hyphens', () => {
  const inputs = ['---xin chào---', '!Đà Nẵng!', '  A  ', '___', ''];
  for (const input of inputs) {
    const output = slugify(input);
    assert.doesNotMatch(output, /^-|-$|--/);
  }
});

test('throws TypeError for all non-string inputs', () => {
  const invalid = [undefined, null, 0, 123, NaN, true, false, 10n, {}, [], Symbol('text')];
  for (const input of invalid) {
    assert.throws(() => slugify(input), TypeError);
  }
});
