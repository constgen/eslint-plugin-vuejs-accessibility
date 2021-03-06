const rule = require("../heading-has-content");
const makeRuleTester = require("./makeRuleTester");

makeRuleTester("heading-has-content", rule, {
  valid: [
    "<h1>test</h1>",
    "<h1><span>test</span></h1>",
    "<h1 v-text='msg'></h1>",
    "<h1 v-html='msg'></h1>",
    "<h1>{{ test }}</h1>",
    "<h1><slot /></h1>"
  ],
  invalid: [
    "<h1 />",
    "<h1><span /></h1>",
    "<h1><span aria-hidden='true'>test</span></h1>",
    "<h1>   </h1>"
  ]
});
