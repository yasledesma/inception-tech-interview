// Source: https://eslint.vuejs.org/user-guide/
module.exports = {
    "env": {
        "browser": "true",
        "node": "true"
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended",
        "prettier"
    ],
    "rules": {
        "vue/no-unused-vars": "error",
        "vue/v-on-style": "off"
    },
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module"
    },
}
