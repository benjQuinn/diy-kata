const getEmployerRole = (employeeName, employees) => {
  const search = employees.find(person => person.name === employeeName);
  return search.role;
};

module.exports = getEmployerRole;
