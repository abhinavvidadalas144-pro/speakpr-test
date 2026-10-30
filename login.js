const attempts = {};

function canLogin(ip, username) {
  const key = ip + ":" + username;
  attempts[key] = (attempts[key] || 0) + 1;
  return attempts[key] <= 10;
}

module.exports = { canLogin };
