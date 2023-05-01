module.exports = {
  env: {
    browser: true, //ブラウザでメジャーなもの（documentなど）を許可
    es6: true, //ES6の書き方許可
    node: true, //module.exports を使っているファイルがエラーになったので
  },
  extends: [
    "eslint:recommended", //ESLintおすすめルールの読み込み
    "prettier", //Prettier適用
  ],
  //個別ルール
  rules: {},
};
