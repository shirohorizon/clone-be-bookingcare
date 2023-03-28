import bcrypt from 'bcrypt';


// **** Variables **** //

const SALT_ROUNDS = 12;


// **** Functions **** //

/**
 * Get a hash from the password.
 */
function getHash(pwd) {
  return bcrypt.hash(pwd, SALT_ROUNDS);
}

/**
 * Useful for testing.
 */
function hashSync(pwd) {
  return bcrypt.hashSync(pwd, SALT_ROUNDS);
}

/**
 * See if a password passes the hash.
 */
async function compare(pwd, hash) {
  return await bcrypt.compare(pwd, hash)
}


// **** Export Default **** //

export default {
  getHash,
  hashSync,
  compare,
};
