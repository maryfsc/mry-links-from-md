module.exports.getLinksFromMd = function getLinksFromMd(md) {
  if (md === undefined || md === "") {
    throw new Error('No parameter given');
  }

  if (typeof md === 'number') {
    throw new Error('Parameter must be a string');
  }

  let regexUrl = new RegExp (/(http:\/\/|https:\/\/)?(w{3}\.)?(\w)+(\.(\w){2,3}){1,2}/g);
  let regexAlt = new RegExp (/(?<=\[).*?(?=\])/g);

  let textUrl = md.match(regexUrl);
  let textAlt = md.match(regexAlt);

  let obj = {};
  let result = [];

  if (textUrl === null) {
    return [];
  }

  let output = textUrl.map((url, i) => {
    obj = {
      href: url,
      text: textAlt[i]
    }

    result.push(obj);
  });

  return result;
} 


