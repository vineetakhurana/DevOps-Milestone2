// define('jasmine-check', function (require) {
//   var jasmine-check= function () {};
//   return jasmine-check;
// });

//var z = require('jasmine-check');

describe("Answer 1", function() {
  it("computes no Answer", function() {
    //fuzzer = require('fuzzer');
    var target = new SiteSettingsViewModel();
    //target.Pref = "true"
    expect(target.Pref1()).toBe("Not yet attempted");
  });

it("gives wrong input - for correct ans", function() {
    var target = new SiteSettingsViewModel();

    target.Pref("false");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.Pref1()).toBe("Correct!!");
  });


   it("computes correct Answer", function() {
    var target = new SiteSettingsViewModel();
    target.Pref("true");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.Pref1()).toBe("Correct!!");
  });

   it("computes wrong Answer", function() {
    var target = new SiteSettingsViewModel();
    target.Pref("false");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.Pref1()).toBe("Incorrect!!");
  });

   
    it("gives wrong input - for incorrect ans", function() {
    var target = new SiteSettingsViewModel();
    target.Pref("true");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.Pref1()).toBe("Incorrect!!");
  });

    it("gives wrong input - integer", function() {
    var target = new SiteSettingsViewModel();
    target.Pref(8879);
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.Pref1()).toBe("Correct!!");
  });

    it("gives wrong input - float", function() {
    var target = new SiteSettingsViewModel();
    target.Pref(12.69);
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.Pref1()).toBe("Incorrect!!");
  });

    //fuzzing
  it("computes output for randomized input", function() {
  var input = "true";
  var input_reverse = input.split("").reverse().join(""); //reversing a string in JS
  var target = new SiteSettingsViewModel();
  target.Pref(input_reverse);
  expect(target.Pref1()).toBe("Correct!!");
  });

});


describe("Answer 2", function() {
  it("computes no Answer", function() {
    var target = new SiteSettingsViewModel();
    //target.Pref = "true"
    expect(target.answer2()).toBe(" Not yet attempted");
  });



   it("computes correct Answer", function() {
    var target = new SiteSettingsViewModel();
    target.q2("false");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer2()).toBe("Correct!!");
  });

     it("computes wrong Answer", function() {
    var target = new SiteSettingsViewModel();
    target.q2("true");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer2()).toBe("Incorrect!!");
  });

   it("gives wrong input - for correct ans", function() {
    var target = new SiteSettingsViewModel();
    target.q2("true");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer2()).toBe("Correct!!");
  });

    it("gives wrong input - for incorrect ans", function() {
    var target = new SiteSettingsViewModel();
    target.q2("false");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer2()).toBe("Incorrect!!");
  });

    it("gives wrong input - integer", function() {
    var target = new SiteSettingsViewModel();
    target.q2(410);
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer2()).toBe("Correct!!");
  });

    it("gives wrong input - float", function() {
    var target = new SiteSettingsViewModel();
    target.q2(12.69);
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer3()).toBe("Incorrect!!");
  });   

      //fuzzing
  it("computes output for randomized input", function() {
  var input = "true";
  var input_reverse = input.split("").reverse().join(""); //reversing a string in JS
  var target = new SiteSettingsViewModel();
  target.q2(input_reverse);
  expect(target.answer2()).toBe("Correct!!");
  });


});

describe("Answer 3", function() {
  it("computes no Answer", function() {
    var target = new SiteSettingsViewModel();
    //target.Pref = "true"
    expect(target.answer3()).toBe(" Not yet attempted");
  });

   it("computes correct Answer", function() {
    var target = new SiteSettingsViewModel();
    target.q3("true");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer3()).toBe("Correct!!");
  });

    it("computes wrong Answer", function() {
    var target = new SiteSettingsViewModel();
    target.q3("false");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer3()).toBe("Incorrect!!");
  });


     it("gives wrong input - for correct ans", function() {
    var target = new SiteSettingsViewModel();
    target.q3("false");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer3()).toBe("Correct!!");
  });

    it("gives wrong input - for incorrect ans", function() {
    var target = new SiteSettingsViewModel();
    target.q3("true");
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer3()).toBe("Incorrect!!");
  });

    it("gives wrong input - integer", function() {
    var target = new SiteSettingsViewModel();
    target.q3(8879);
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer3()).toBe("Correct!!");
  });

    it("gives wrong input - float", function() {
    var target = new SiteSettingsViewModel();
    target.q3(12.69);
    //ko.utils.unwrapObservable(self.Pref)
    expect(target.answer3()).toBe("Incorrect!!");
  });

  
      //fuzzing
  it("computes output for randomized input", function() {
  var input = "false";
  var input_reverse = input.split("").reverse().join(""); //reversing a string in JS
  var target = new SiteSettingsViewModel();
  target.q3(input_reverse);
  expect(target.answer3()).toBe("InCorrect!!");
  });



// describe("tester", function() {
//   z.check.it("tests random",[gen.string], function(x) {
//     //var target = new SiteSettingsViewModel();
//     //target.Pref = "true"
//     expect(x).toEqual(jasmine.any(String));


//   });
// });  


});
