module.exports = {
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "globalReturn": true,
        "impliedStrict": true
    }
},
"plugins": [
    "react"
],
"extends": [
    "eslint:recommended",
    "plugin:react/recommended"
],
"globals": {
    "window": "writeable",
    "process": "readable"
},
}