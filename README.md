# eslint-config
Golden Path linting rules for a brighter tomorrow.

Shared Mindflash Javascript [eslint](http://eslint.org) config

### Add to an existing project

Add package:
`npm install --save-dev git+ssh://git@github.com:Mindflash/eslint-config.git`

Add a .eslintrc file to the root of your project:

```
{
	"extends": "mindflash"
}
```

### Full workflow setup
COMING SOON


## A note on eslint:
eslint is a very powerful tool that offers a large highly customizable rule set. Rules can be set to
disabled, warning, or error. Beyond that many rules offer tight grained control such as this
[one](http://eslint.org/docs/rules/no-cond-assign) where you can specify additional settings that
allow use of assignment operators in conditionals if you wrap the operation with parens. Thus a binary view of rule
settings should be avoided and the concerned coder should be willing to look at the rule page for additional
information about the rule, it's settings, and reasoning for its utility before forming an opinion on a rule.

A complete list of eslint rules can be found [here](http://eslint.org/docs/rules/). Where applicable every rule
has a detailed explanation of the pros and cons associated with the rule, examples of the conditions under which the
linter will act, information about additional configuration, and links to additional information about the reasoning
for the rule if applicable. The page for [semi colon usage](http://eslint.org/docs/rules/semi) is a great example of
eslints approach to linting rules.


## Contributing:
If you would like to suggest a rule change please open a pull request and provide 3-5 business days for
people to be able to respond to your pull request and provide feedback. Due to the controversial nature of
some linting rules we need to allow people an opportunity to voice their opinions so that we end up with the
linting rule set we want as a team. 