// Generated by CoffeeScript 1.3.1
(function() {
  var TIMEOUT, WdWrap, browser, should, someText, wd, _ref;

  _ref = require('../../index'), wd = _ref.wd, WdWrap = _ref.WdWrap;

  should = require('should');

  browser = null;

  someText = null;

  TIMEOUT = 30000;

  describe("WdWrap", function() {
    describe("passing browser", function() {
      browser = wd.remote({
        mode: 'sync'
      });
      return it("should work", WdWrap({
        "with": function() {
          return browser;
        },
        pre: function() {
          this.timeout(30000);
          return someText = 'Test1';
        }
      }, function() {
        var queryField;
        someText.should.equal('Test1');
        this.init();
        this.get("http://google.com");
        this.title().toLowerCase().should.include('google');
        queryField = this.elementByName('q');
        this.type(queryField, "Hello World");
        this.type(queryField, "\n");
        this.setWaitTimeout(3000);
        this.elementByCss('#ires');
        this.title().toLowerCase().should.include('hello world');
        return this.quit();
      }));
    });
    return describe("without passing browser", function() {
      WdWrap = WdWrap({
        pre: function() {
          this.timeout(30000);
          return someText = 'Test2';
        },
        "with": function() {
          return browser;
        }
      });
      before(function(done) {
        browser = wd.remote({
          mode: 'sync'
        });
        return done();
      });
      return it("should work", WdWrap(function() {
        var queryField;
        someText.should.equal('Test2');
        this.init();
        this.get("http://google.com");
        this.title().toLowerCase().should.include('google');
        queryField = this.elementByName('q');
        this.type(queryField, "Hello World");
        this.type(queryField, "\n");
        this.setWaitTimeout(3000);
        this.elementByCss('#ires');
        this.title().toLowerCase().should.include('hello world');
        return this.quit();
      }));
    });
  });

}).call(this);
