# Practice Code Review

Before jumping into group projects using JS, take some time to learn about _code review_ and _code quality automation_ . Practicing with these concepts now will make the transition to collaborative development much smoother.

- Big Picture
  - [The Challenges](#the-challenges)
  - [Planning](#planning)
  - [Code Review](#code-review)
- Writing Code
  - [Repo Setup](#repo-setup)
  - [Local Setup](#local-setup)
  - [Developing Your Solutions](#developing-your-solution)
- [Code Quality Automation](#code-quality-automation)
  - [`npm` scripts](#npm-scripts)
  - [Continuous Integration](#continuous-integration)

---

## The Challenges

Your group's challenge is to write as many strategies and implementations as you can! Code quality should be your main focus. You'll practice formatting, linting, testing, documenting and code review.

There are already a few challenges in the `/src` folder, but feel free to add a new one if there's a different problem you'd like to solve. And it's ok if someone has already tried using the same strategy to solve the same problem you want to work on. You can always find a slightly different approach, and comparing your solutions will be a good topic for the retrospective.

As usual, it's more important to write great solutions to easy problems than to write ok solutions to hard challenges. So take it easy and have some fun.

### Template

> [./template-solution](./template-solution)

/practice-code-review
  /template-solution
    /README.md
    /sandbox.js
    /solution-name.js
    /solution-name.spec.js

</details>
</summary>what are all these files?</summary>
</br>

- **`/README.md`**:
  - **Challenge Description**: A short description of the challenge.
  - **Strategy**: Describe the strategy you used to solve this challenge. Why did you choose this strategy? What did you learn from using this strategy?
  - **Implementation**: Describe your implementation. How did you implement your solution? What language features did you use and why?
  - **Use Cases**: Include one or two use cases for how your function could be helpful in the real world.
  - **Inspiration**: Which classmates, code, blogs, or videos inspired you? Include links and explain what you used from each source.
- **`/sandbox.js`**: An empty file just for you. You can import your solution and write whatever experiments you like in here, it will not be reviewed when you send your PR.
- **`/solution-name.js`**: Your function will be exported from this file to the `.spec.js` and `sandbox.js` files. `solution-name.js` will contain only two things:
  1. your function's JSDoc comment
  2. your function
- **`/solution-name.spec.js`**: Unit tests for your function, nothing else. This file will import your solution and test it. There will be no extra logs, experiments, or comments in this file.

</details>

### Example Solution

> [./src/sort-numbers/example-built-in-sort](./src/sort-numbers/example-built-in-sort)

/practice-code-review
  /src
    /challenge
      /strategy
        /README.md
        /sandbox.js - for experimenting and logging
        /solution-name.js - for your function
        /solution-name.spec.js - for your tests

---

## Planning

Your group doesn't need to plan much for this, it's a group exercise not a full project. There's no need for a backlog, dev-strategy, wireframe, ... all you need is a a project board with:

- _todo_ - solutions someone wants to try writing
- _doing_ - the solution you are currently working on
- _ready for review_ - solutions waiting for a code review
- _done_ - solutions that have been merged to main/master

You don't need to use milestones, but a label for each behavior (challenge folder) and different strategies can help finding similar solutions for inspiration. There is a template Issue and a template Pull request in this repository that point you in the right direction.

Besides that, just go for it.

---

## Code Review

Writing your solution is only half of the exercise, reviewing each other's code is the other half. You've already had some experience with reviewing HTML and CSS in [Incremental Development](https://github.com/hackyourfuturebelgium/incremental-developmen), so you know that it's important to look over each others' work before merging to main/master.

### Branches and PRs

Develop your solutions on a separate branch then push your branch to GitHub when you're ready for a review. You'll know you're ready for review when you've

1. Formatted your code
2. Generated your documentation
3. Passed your linting checks
4. Passed all your tests
5. Written your README

When you open your PR be sure to use the [Pull Request Template for code review](./.github/PULL_REQUEST_TEMPLATE/code-review-checklist.md). After you've opened your PR it's time to:

1. link your PR to your solution issue on the project board
2. request a review from 1 or two classmates
3. get started on a new solution

### The Checklist

No code review is complete without a checklist. This repository has a [Pull Request Template for code review](./.github/PULL_REQUEST_TEMPLATE/code-review-checklist.md) with all the things to check in your code review. The checklist covers 3 different aspects of the code:

- **Behavior**: Is the code well documented? Do the tests make sense? Do the tests pass?
- **Strategy**: Is the strategy clear and well explained?
- **Implementation**: Is the code well-formatted? Does it pass the linting checks? Are variables well-named? Is the code clear to read and understand?

This checklist is very long to help you learn what's important when reviewing code. Code review checklists in future projects be shorter and less detailed than this one.

---

## Repo Setup

Not much to do, you aren't building a web page so there is no need for boilerplate code or GitHub pages. All that matters is:

- Everyone in your group is a contributor with _write_ access in the group repo
- in the _Branches_ section of your repo's settings make sure:
  - The repository [requires a review](https://github.blog/2018-03-23-require-multiple-reviewers/) before pull requests can be merged.
  - check _Dismiss stale pull request approvals when new commits are pushed_
  - The `master`/`main` branch must "_Require status checks to pass before merging_"
  - The `master`/`main` branch must "_Require require branches to be up to date before merging_"
- In enable the _Actions_ section of your repository so the automated checks will run each time you send a PR to `master`/`main`

---

## Local Setup

So you're ready to start coding? If you haven't cloned this repository already you should, and then ...

1. Clone this repository:
   - `$ git clone git@github.com:HackYourFutureBelgium/practice-code-review.git`
2. Navigate to this repository in your local computer
   - `$ cd practice-code-review`
3. Install the project's development dependencies - you will need these for the code quality automation:
   - `$ npm install`

If you would prefer to develop your code with the browser's devtools, you can use Study Lenses:

1. `$ npm install -g study-lenses`
2. Navigate into this folder on your local computer
3. `$ study`
4. The directory will open in your default browser, and you're good to go.

---

## Developing your Solutions

You can write, run and test your code in Node.js or the browser. Whichever you prefer.

- **In the Browser**: you can use Study Lenses to edit, lint, format, test and debug your code from the browser. Just make sure that the `environment` open is selected and set to `module`
- **In Node.js**: you can also do everything directly from VSCode using the terminal to run your code (`node path/to/file.js`), and the debugger to step through it. You will need to use the `|> current spec file` option to debug a file with tests.

---

## Code Quality Automation

Writing code is hard. To write even just 10 lines there are 100 things you need to think about, and 1000 mistakes you can make. Developers are clever and lazy people. They have built tools to help with all of this.

### NPM Scripts

This repository's [package.json](./package.json) has 4 scripts to help write the cleanest code you can:

#### Documenting

</details>
</summary></code>$ npm run document</code></summary>
</br>

Documentation is very important for a project, it's how others know what code is in your repo and how it works. But writing documentation by hand takes a lot of time and is easy to mess up.

Imagine you spend an hour documenting a few functions in your README, and then your colleague changes the code! Either you documentation will be wrong, or you'll need to spend a bunch more time fixing the documentation. To avoid this, developers have built tools that will automatically create documentation based on the JSDoc comments in your JavaScript files.

The `npm run document` script in this repository uses [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown/), [regular expressions](https://regexr.com/) and the Node.js [file system module](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html) to generate the documentation in your solution READMEs.

- PS. check out [lodash](https://lodash.com/docs) to see some great documentation

</details>

#### Formatting

</details>
</summary></code>$ npm run format</code></summary>
</br>

Formatting doesn't change your code's behavior but it sure makes your code easier to read. It's hard enough to read your own code, now imaging trying to read everyone's different code!

Automated formatting helps everyone in your project write their code with the same style so that reading your own code is the same as reading some else's.

The `npm run format` script in this repository uses [Prettier](https://prettier.io/) and a [local configuration file](./.prettier.json) to format the code in your .js (and .md) files.

</details>

#### Linting

</details>
</summary></code>$ npm run lint -- path/to/file.js</code></summary>
</br>

Linting is a type of **static code analysis** - that means it checks your code for mistakes _without running it_. Kind of like when you read your code to look for mistakes, but automated.

The linting configuration in this repository is strict. There is a lot of code you have read and written in the last weeks that would not be allowed. This is hard to get used to at first. But once you get used to this you will find strict conventions are helpful for writing consistent code, avoiding easy mistakes, and collaborating on a code base.

The `npm run lint` script uses [ESLint Node.js API](https://eslint.org/docs/developer-guide/nodejs-api), [eslint-plugin-jsdoc-rules](https://github.com/Extersky/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules), [eslint-plugin-spellcheck](https://github.com/aotaduy/eslint-plugin-spellcheck) and a [local configuration file](./.eslintrc.json) to check your .js files for possible mistakes, bad practices, and consistent style.

</details>

#### Testing

</details>
</summary></code>$ npm run test -- path/to/file.spec.js</code></summary>
</br>

You've already practiced with tests in the last weeks, unit tests in this repository will be exactly the same - `describe`, `it` and `expect(_).toEqual(_)`. The main difference is that your tests and your function will be in two different files:

- `solution-name.js`: this file `export`s your function
- `solution-name.spec.js`: this file `import`s your function for testing

The `npm run test` script uses [Jest](https://jestjs.io/) to run your tests and report the results.

</details>

### Continuous Integration

For now you can think of _Continuous Integration_ is a fancy way to say "automatically check your code before you merge". This repository has 3 CI scripts to help your group maintain a quality and consistent code base. If any of the scripts encounter a mistake you will not be able to merge.

_hint: remember to [enable GitHub Actions](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/disabling-or-limiting-github-actions-for-a-repository) in your repository!_

#### [document.yml](./.github/workflows/document.yml)

> `npm run document` locally to check if this action will pass

This action will rebuild the documentation for your code each time someone sends a PR to or pushes to `main`/`master`. Using this action means that the documentation in your GitHub repository will always describe the code that is _actually_ on the master branch, not the code from 2 days ago.

#### [lint.yml](./.github/workflows/lint.yml)

> `npm run lint -- ./src` locally to check if this action will pass

This action will run a linting check on the `./src` folder each time someone sends a PR to or pushes to `main`/`master`. All of the linting checks must pass _before_ you are allowed to merge changes.

Don't forget to use `npm run format` before pushing! The linter will also check your code's formatting.

#### [test.yml](./.github/workflows/test.yml)

> `npm run test -- ./src` locally to check if this action will pass

This action will run all of the `.spec.js` tests in the `./src` folder each time someone sends a PR to or pushes to `main`/`master`. All of the linting tests must pass _before_ you are allowed to merge changes.
