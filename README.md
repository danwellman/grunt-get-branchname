# grunt-get-branchname

> Get the current Git branch name and pass it to another task's config

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-get-branchname --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-get-branchname');
```

## The "get_branchname" task

### Overview
In your project's Gruntfile, add a section named `get_branchname` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  get_branchname: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific options go here.
    },
  },
});
```

### Options

#### options.target <required>
Type: `String`
Default value: `null`

A string value that is used to specify the Grunt configuration object to inject the current Git branch name into

#### options.short
Type: `Boolean`
Default value: `true`

A Boolean to specify whether just the name of the branch is specified, e.g. `master`, or whether the full symbolic-ref, e.g. `refs/heads/master` is injected

#### options.quiet
Type: `Boolean`
Default value: `false`

A Boolean to specify whether any errors being returned by the command are suppressed


### Usage Examples

```js
grunt.initConfig({
  get_branchname: {
    options: {
      target: 'sometask.dev.branchname' // property will be created if it does not exist
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0   Initial release
