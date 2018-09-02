let str = 'It\'s very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com) , It\'s very easy to make some words **bold** and other words *italic* with Markdown. You can even [eita!](http://github.com) , It\'s very easy to make some words **bold** and other words *italic* with Markdown. You can even [mexerica](http://banana.com)'

function getLinksFromMd(md) {
  if (typeof md === 'undefined') {
    throw new Error('No parameter given');
  }

  if (typeof md !== 'string') {
    throw new Error('Parameter must be a string');
  }

  let regexUrl = new RegExp (/(http:\/\/|https:\/\/)?(w{3}\.)?(\w)+(\.(\w){2,3}){1,2}/g);
  let regexAlt = new RegExp (/(?<=\[).*?(?=\])/g);

  let textUrl = md.match(regexUrl);
  let textAlt = md.match(regexAlt);

  let obj = {};
  let result = [];

  let output = textUrl.map((url, i) => {
    obj = {
      href: url,
      text: textAlt[i]
    }

    result.push(obj);
  });

  return textUrl ? result : [];
} 