/* eslint-disable no-undef */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
module.exports = function toCamelCase(rows) {
  return rows.map(function _replace(row) {
    const replaced = {};
    for (let key in row) {
      const camelCase = key.replace(/([-_][a-z])/gi, function letterToUpperCase(
        $1
      ) {
        return $1.toUpperCase().replace('_', '');
      });
      replaced[camelCase] = row[key];
    }
    return replaced;
  });
};
