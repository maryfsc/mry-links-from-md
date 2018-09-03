# Get Links From Markdown

A Node.js plugin used to extract links and their respective urls from a markdown file.

## Requirements

* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/getting-started/installing-node)

## Installation and use

You can easily install this library using npm just as it follows:

	$ npm install mry-links-from-md

And you can use it just as easily with Node.js:

	$ node
	> const text = 'Get to know [Laboratoria](https://laboratoria.la) and their awesome students!'
	> const library = require('mry-links-from-md')
	> library.getLinksFromMd(text)
	> // [ {href: "http://laboratoria.la", text: "Laboratoria"} ]

## Roadmap

Version 1.0.0
* Returns an array of objects, each one with their links and urls.
* The markdown file can have more than one link and url. 
* If there is no links in the markdown file, returns an empty array.