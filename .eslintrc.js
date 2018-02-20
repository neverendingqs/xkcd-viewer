module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "indent": ["error", 2, { "SwitchCase": 1 }],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "react/jsx-uses-react": ["error"],
        "react/jsx-uses-vars": ["error"],
        "semi": ["error", "always"]
    },
    "overrides": [{
      "files": "**/*.test.js",
      "env": {
        "jest": true
      }
    }]
};
