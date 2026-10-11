/** Convert a string into a lowercase, hyphen-separated, diacritic-free slug. */
export function slugify(input) {
  if (typeof input !== 'string') {
    throw new TypeError('slugify expects a string');
  }

  return input
    .normalize('NFD')
    .replace(/[đĐ]/g, 'd')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
