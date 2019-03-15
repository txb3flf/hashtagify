# Setup

`$ git clone https://github.com/orderup/hashtagify`

`$ cd hashtagify`

`$ npm i`

`$ npm run test`

# Interview

## Prompt

You have an existing implemention of a program which converts inputs to hashtags. 

It has passing unit tests.

 You are to look at the tests and for each test: 

* Say what code in the application is tested by the test
* Make any improvements to that particular code block __optimizing for readability__

## Requirements of the Hashtag Program

The return value should... 

* start with an octothorpe (#)

* have the first letter of each word capitalized

* be false if the final result is longer than 140 chars

* be false if the input or the result is an empty string
