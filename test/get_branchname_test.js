/*
 * grunt-get-branchname
 * https://github.com/danwellman/grunt-get-branchname
 *
 * Copyright (c) 2015 Dan Wellman
 * Licensed under the MIT license.
 */

'use strict';

var grunt = require('grunt'),
    currentBranch, currentBranch2;

exports.testDefaults = {
    setUp: function (done) {
        grunt.util.spawn({
            cmd: 'git',
            args: ['symbolic-ref', '--short', 'HEAD']
        }, function (error, result) {
            currentBranch = result.stdout;
            done();
        });
    },
    default_options: function (test) {
        test.expect(1);

        test.equal(grunt.config.get('get_branchname.testconfig.branchname'), currentBranch, 'it injects the correct branch name to the specified config');
        test.done();
    }
};

exports.testNotShort = {
    setUp: function (done) {
        grunt.util.spawn({
            cmd: 'git',
            args: ['symbolic-ref', 'HEAD']
        }, function (error, result) {
            currentBranch2 = result.stdout;
            done();
        });
    },
    long_option: function (test) {
        test.expect(1);

        test.equal(grunt.config.get('get_branchname.testconfig2.branchname'), currentBranch2, 'it injects the long branch name when the short option is false');
        test.done();
    }
};
