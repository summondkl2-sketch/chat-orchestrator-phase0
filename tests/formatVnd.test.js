import test from 'node:test';
import assert from 'node:assert/strict';
import { formatVnd } from '../src/formatVnd.js';

test('formats zero and negative zero without a minus sign', () => {
  assert.equal(formatVnd(0), '0 ₫');
  assert.equal(formatVnd(-0), '0 ₫');
});

test('groups positive integers by thousands with period separators', () => {
  assert.equal(formatVnd(1), '1 ₫');
  assert.equal(formatVnd(999), '999 ₫');
  assert.equal(formatVnd(1000), '1.000 ₫');
  assert.equal(formatVnd(1200000), '1.200.000 ₫');
});

test('keeps a minus sign for negative integers', () => {
  assert.equal(formatVnd(-1), '-1 ₫');
  assert.equal(formatVnd(-5000), '-5.000 ₫');
  assert.equal(formatVnd(-1200000), '-1.200.000 ₫');
});

test('handles large finite integers, including MAX_SAFE_INTEGER', () => {
  assert.equal(formatVnd(Number.MAX_SAFE_INTEGER), '9.007.199.254.740.991 ₫');
  assert.equal(formatVnd(Number.MIN_SAFE_INTEGER), '-9.007.199.254.740.991 ₫');
  assert.equal(formatVnd(1e21), '1.000.000.000.000.000.000.000 ₫');
  assert.match(formatVnd(Number.MAX_VALUE), /^\d{1,3}(?:\.\d{3})+ ₫$/);
});

test('rejects values that are not primitive JavaScript numbers', () => {
  for (const value of ['1000', '', null, undefined, true, false, 123n, new Number(1000), {}, [], Symbol('value')]) {
    assert.throws(() => formatVnd(value), TypeError);
  }
});

test('rejects non-finite numbers and fractions', () => {
  for (const value of [NaN, Infinity, -Infinity, 0.5, -0.5, 1.23, -5000.01, Number.MIN_VALUE]) {
    assert.throws(() => formatVnd(value), TypeError);
  }
});
