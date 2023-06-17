/* What is JavaScript?
    JavaScript is.....
1. High level, interpreted programming language
2. Vonnforms to the ECMAScritp specification
3. Multi-Paradigm 
4. Runs on the client/browser as well as on the server (Node.js) 


Why learn JavaScript ??

1. It is the programming language of the browser
2. Build very interactive user interfaces with frameworks like React
3. Used in building very fast server side and full stack applications
4. Used in mobile development (React Native, NativeScript, lonic)
Used in desktop application development (Electron JS)

Topics is this tutorial.....

1. Variables & Data Types
2. Arrays 
3. Object Literals
4. Methods for strings, arrays, objects, etc
5. Loops - for, while, for...of, forEach, map
6. Conditionals(if, ternary & switch)
7. Functionns(normal & arrow)
8. OOP (prototypes & classes)
9. DOM Selection
10. DOM manipulation
11. Events
12. Basic Form Validation*/


// let's jump in the code....

// this is for directly give a massege or pop-up
// alert('Hello world');

    // this is for print the value..
    /*console.log('Hello world');
    console.error('This is an error');
    console.warn('This is a warning'); */
    
//  we can learn about console on this website => https://developer.mozilla.org/en-US/docs/Web/API/console  

/*  Let's talk about Variables

    Variable is a container that store the values .....it's known as variable initialization.
    Every  variables have a unique name.... it's identifiers.
    name of the variables is case-sensitive

    we can declare a variable with 3 reserved keyword..=> var, let and const. 
    if we want to change our variable value we'll use let keyword else we'll always use const..
    
    example...
                let x = 100;
                let X = "caseSensitive"


                Types of JavaScript Variable...

                1. Local Variable 
                2. Global Variable
                
    Local Variable....
        local Variable always declare in function or block. This variable can only be accessed inside functions and blocks.
    example...

        function demo(){
            let x = 100; // x is local variable, cannot be accessed outside function body
        }

    Global Variable....
        Global variable declare outside of the function, it can be accessed everywhere in the program.
    example...
        
        let name = "globalVariable";
        function x() {
            console.log(name);
        }
        function y() {
            console.log(name);
        }
        x(); // Calling JavaScript function
        y();


    How to use Variable...
    for using variable we must know 2 rules..
    1. Variable declaration   
       first we have to declare a variable with keyword like this...
       
       let Person;

    2. Variable assognment...
      after the declaration we have to assign the value to the variable like this...

       let Person = "Rocky Goswami";

    
    example of JS variable program..
        
        let Person;
        let Person = "Rocky Goswami";
        console.log(Person);

    Exercise question
    1. What is JavaScript?
    2. How many types of JavaScript variables ?


    Data Types....
        1. Primitive data type.
        String => this data type representse the sequence of characteers.
        Number => this data type representse numeric values like "100, 50, 1,"
        Boolean => this data type representse the boolean value true or false.
        Undefined => this is representse undefined value.
        Null => this is representse null value.

        exaple..
           const name = "Rocky"; //this is string and string will be written in "" 
           const age = 20; //this is number
           const isCool = true; //this is boolean
           const x = null;
           const y; //this is undefined 

           console.log(typeof variable name); for checking wich data type is it...

           //Concatenation
           console.log('My name is' + name + 'and i am' + age); //output => My name is Rocky and I am 20

           //Template String
           console.log(`My name is ${name} and I am ${age}`);  //output => My name is Rocky and I am 20

           const hello = `My name is ${name} and I am ${age}`; 

           console.log(hello);   //output => My name is Rocky and I am 20

        String properties....
            const s = "technology, computer, it, code";
            console.log(name.length); //this will give us the length of variable value
            console.log(name.toUpperCase());
            console.log(name.toLowerCase());
            console.log(name.substring(0, 4).toUpperCase());
            console.log(s.split(''));
            console.log(s.split(', '));
        2. Non-Primitive data type..
        Object 
        Array
        RegExp