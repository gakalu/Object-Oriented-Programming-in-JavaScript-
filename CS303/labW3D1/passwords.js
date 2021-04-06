
function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  console.log(bound.test); /*undefined. Since result of bind is another object.
   It does not have the test property.test property is only in sayHi function.*/
   //===================================================================================================
  /* exports at end of file since exporting an object, which can only be referenced after definition */
  /* eslint-disable */
  
  
  function askPassword(ok, fail, password) {
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  function askPassword2(ok, fail, password2) {
     if (password2 == "rockstar") ok();
      else fail();
  }
  
  let user2 = {
      name: 'John',
    
      login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
      }
  };
  /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
  */
  module.exports = {askPassword, user, askPassword2, user2 };