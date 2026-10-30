const attempts = {};

function canLogin(username) {
  attempts[username] = (attempts[username] || 0) + 1;
  return attempts[username] <= 5;
}

module.exports = { canLogin };
