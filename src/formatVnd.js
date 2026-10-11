const integerFormatter = new Intl.NumberFormat('de-DE', {
  useGrouping: true,
  maximumFractionDigits: 0,
});

export function formatVnd(value) {
  if (typeof value !== 'number' || !Number.isFinite(value) || !Number.isInteger(value)) {
    throw new TypeError('value must be a finite integer number');
  }

  // Normalize negative zero so it is displayed as a plain zero amount.
  return `${integerFormatter.format(value === 0 ? 0 : value)} ₫`;
}
