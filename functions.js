const validateType = function(type) {
  const types = ['info', 'warn', 'error', 'success', 'custom', 'smashdocs'];
  if (!type || type.length === 0 || types.includes(type) == false) {
    console.warn('Invalid DropdownAlert type. Available types: info, warn, error, success, custom or smashdocs');
    return false;
  }
  return true;
};
module.exports = {
  validateType,
};
