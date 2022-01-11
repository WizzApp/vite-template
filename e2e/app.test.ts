Feature('app');

Scenario('test something', ({ I }) => {
  I.amOnPage('http://localhost:4000');
  I.seeElement('.App');
});
