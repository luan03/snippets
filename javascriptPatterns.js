// Copyright 2013 The Reference code.
// @Authors - Luan Fagundes
// @Reference - http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
// @Add - [Memory leaks, Exceptions, Closures, Code formatting, Visibility, JavaScript Types, Comments, Tips and Tricks]


// Keep lines shorter than 80 characters. It's better for lines to be too short than to be too long.
// Break up long lists, objects, and other statements onto multiple lines.

//Quebrar as operações em mais funções e evitar duplicação quando possível.

....// indentation with four spaces

/* Strict Document ( In scope function ) */

"use strict";

/* Constants */

var PATH = "/workspace/local/";

/* variables */

var name = 'App';

/* Semicolons - Always use semicolons. */

var fn = function() {
  return true;
};

/*  Nested functions -  Feel free to use them. */

function fn(){
  return fn1( a,b );
}

function fn1(a,b){
  return a + b;
}

fn(1, 2);

/* Function Declarations Within Blocks (Never declare function directly on the block) */

if (x) {
  var foo = function() {}
}


/* Objects for primitive types ( warning ) */

var x = new Boolean(false);

/* Style to add methods to the object using "new" */

var obj = new Object();

  obj.prototype.setMethod = function() {
        return true;
    };

/* Delete - if foo.property_ === null - disposed Oject */

function Foo( name ){
    this.name = name;
}

var f = new Foo('fagundes');

Foo.prototype.dispose = function() {
  this.property_ = null;
};

/* Delete - from an object's iterated list */

if (key in obj)

/* eval Only for deserialization ( warning ) */

eval(xmlhttp.responseText);

/* Multiline string literals - Use string concatenation */

var myString = 'A rather long string of English text, an error message ' +
    'actually that just keeps going and going -- an error ' +
    'message to make the Energizer bunny blush (right through ' +
    'those Schwarzenegger shades)! Where was I? Oh yes, ' +
    'you\'ve got an error and all the extraneous whitespace is ' +
    'just gravy.  Have a nice day.';


/* Array and Object literals */
var a = [x1, x2, x3];
var o = {};


/* Accessor functions */

getFoo();
setFoo(value);
isFoo();


/* Use namespaces for global code -  If you are working on "Project Sloth", a reasonable pseudo namespace would be sloth.* */

var sloth = {};
sloth.sleep = function() {

};

/* For consistency single-quotes (') are preferred to double-quotes ("). This is helpful when creating strings that include HTML: */

var msg = 'This is some HTML';


/*  this - Only in object constructors, methods, and in setting up closures                             */
/*  for-in - Only for iterating over keys in an object/map/hash                                         */
/*  Associative Arrays - Never use Array as a map/hash/associative array                                */
/*  Modifying prototypes of builtin objects - NOOOO (Should be avoided.)                                */
/*  When creating a new namespace child sure is unique                                                  */
/*  Filenames should end in .js, and should contain no punctuation except for - or _ (prefer - to _).   */
/*  Custom toString() methods - Must always succeed without side effects.                               */
/*  Explicit scope - window.location.href                                                               */

/*  Parentheses - Never use parentheses for unary operators such as delete, typeof and void or after    */
/*  keywords such as return, throw as well as others (case, in or new).                                 */

/*  USE:

    functionNamesLikeThis,
    variableNamesLikeThis,
    ClassNamesLikeThis,
    EnumNamesLikeThis,
    methodNamesLikeThis,
    CONSTANT_VALUES_LIKE_THIS,
    foo.namespaceNamesLikeThis.bar,
    filenameslikethis.js.
 */

 /*  EXAMPLES:

        var goog = goog || {};
        goog.global = this;
        goog.DEBUG = true;
 */