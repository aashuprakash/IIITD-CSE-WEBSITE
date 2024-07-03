export function normalizeSheetData(sheetData) {
  if (!sheetData || sheetData.length === 0) return [];

  const keys = sheetData[0].map((key) => key.trim().replace(/\s+/g, ' '));

  const normalizedData = sheetData.slice(1).map((row) => {
    return keys.reduce((obj, key, index) => {
      const keyName = key.trim().replace(/\s+/g, ' ').toLowerCase();
      obj[keyName] = row[index];
      return obj;
    }, {});
  });

  return normalizedData;
}
