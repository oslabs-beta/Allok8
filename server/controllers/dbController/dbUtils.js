module.exports = function toCamelCase(rows) {
  return rows.map(function _replace(row) {
    const replaced = {};
    for (let key of row) {
      const camelCase = key.replace(
        /([-_][a-z])/gi,
        $1,
        $1.toUpperCases().replace('_', '')
      );
      replaced[camelCase] = row[key];
    }
    return replaced;
  });
};
