/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function sandbox(tag, className, html){
  var el;

  beforeEach(function(){
    el = document.createElement(tag);
    el.classList.add(className);
    el.innerHTML = html;
    document.body.appendChild(el);
  });


  afterEach(function(){
    document.body.removeChild(el);
    el = null;
 });
 
}


describe("getElementContent text", function(){
  
  sandbox('div', 'test', 'this is a test');

  it('should find an element and return the innerHTML', function(){
      var elemContent = getElementContent('div.test');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
  
  it('should find an element and return the innerHTML', function(){
      var elemContent = getElementContent('div.test');      
      expect( elemContent ).not.toEqual('this is a not test');
  });
  
  
});


describe("getElementContent html", function(){
  
  sandbox('div', 'test', '<p>this is a test</p>');

  it('should find an element and return the innerHTML', function(){
      var elemContent = getElementContent('div.test p');
      expect( elemContent ).toEqual('this is a test');
      expect( elemContent ).not.toEqual('this is a not test');
  });
   
  
});