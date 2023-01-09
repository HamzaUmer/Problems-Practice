//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // it will true when we have dog or cat or bird or fish in our string. otherwise false.
let result = petRegex.test(petString);
