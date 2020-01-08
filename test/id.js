module.exports = ({ vtbs }) => vtbs
  .flatMap(({ accounts }) => accounts)
  .map(({ id }) => typeof id === 'string' ? false : `account id is not string, ${id}`)
  .filter(Boolean)
