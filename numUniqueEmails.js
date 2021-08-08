const cleanseEmail = (email) => {
  const [address, domain] = email.split('@');
  const addressNoPeriods = address.split('.').join('');
  const addressNoPlusSign = addressNoPeriods.split('+')[0];
  return `${addressNoPlusSign}@${domain}`;
};

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const hashSet = new Set();
  let counter = 0;

  emails.forEach((email) => {
    const cleansedEmail = cleanseEmail(email);
    if (!hashSet.has(cleansedEmail)) {
      hashSet.add(cleansedEmail);
      counter++;
    }
  });
  return counter;
};

let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));
emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
console.log(numUniqueEmails(emails));