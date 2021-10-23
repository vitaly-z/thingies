const DOT_REG = /\./g;

/**
 * 1. Lower-cases whole email.
 * 2. Removes dots ".".
 * 3. Remotes name part after "+".
 * 4. Throws if cannot parse the email.
 *
 * For example, this email
 *
 *     Michal.Loler+twitter@Gmail.com
 *
 * will be normalized to
 *
 *     michalloler@gmail.com
 *
 */
export const normalizeEmail = (email: string) => {
  const [name, host] = email.split('@');
  let [beforePlus] = name.split('+');
  beforePlus = beforePlus.replace(DOT_REG, '');
  const result = beforePlus.toLowerCase() + '@' + host.toLowerCase();
  Number(result);
  return result;
};
