
      JAVA SCRIPT --NOTES
    ___________________________


    1. Node js - provide runtime environment  and js library
    2. Basic Concepts in js
        - Display content : console.log(content)
        - Data Types in Js : use typeOF
         typeOF () : used to know data type
            -String
            - Number
            - boolean
        - Identifiers : set of rules for set up name for a variable
        - Variable : use to store data
            -Using Var keyword :
                    syntax : var Variable-name /
                     var variable_name = value
            - Using const               
                    syntax : const variable_name = value
            - Using let keyword
                    syntax : let  variable_name = value
        - Different b/t type of variable
       
       


                --------------VAR-------------------

                -use var keyword
                -reassigned with any
                   type of data
                - Global scope
                -Hoisted with undefined
                

                ---------const-------

               - use const keyword
               - cannot reassign its value
               -block scope
               -Hoisted without value

                 ----------let--------------------

                -use let keyword
                - can reassign it's value
                - Block scope
                - Hoisted without a value

         - Joining different type of data in js
                - using commas
                - using + operators ( concantenation )
                - using ` (template literals)

        - operators in JS
                - Assignment operators : variable_name = name
                - Arithmetic operators : + - * / % **
                - Relational operators : > >= < <= == != ===
                - Logical operators : && || !
                    ------AND--------------OR---------------NOT----------
                         T && T =T         T || T = T      !T = F
                         T && F = F        T || F = T      !F = T
                         F && T = F        F || T = T
                         F && F = F        F || F = F
                         
                - Increment / Decrement operators : ++ --        
                - Short hand operators : += -=
                - Ternary operators : condition?condition become true :condition become false
                - truthy operators : condition&& Statements become true:condition becometrue
                - Spread operator ... : used to expand an iterating varible to a single varible
        - Conditional Statements
                - if Statements :
                        syntax : if(condition) { if body: execute when condition true }
                - if-else Statements
                        syntax : if(condition) { if body: execute when condition true } else {execute when condition false}
                -else-if Statements 
                - Switch cases

        - Looping Statements

                - while Loop
                        syntax:
                        1. initialise a variable with a value 
                        2.while (condition should includes that Initalised variable){
                                while body execute when condition become true
                        }
                        3.change the value of variable that used in the condition
                - for Loop
                        syntax : for(initialise a variable with a value;condition should inclufe that initialsed varaiable;change the value of variable that used in the condition){
                                for body execute when condition become true
                        }

        - Function : used to perform specific task during to be performed
            - 2 parts
                 - Function Definiton :defining the task to be performed
                        syntax : function function -name(parametres used to perform task){
                                defining task in function body
                        }
                - Function Call : to execute a function
                        syntax : function-name(arguments to be passed to the function Definiton)
                - Return Statements : return data from function definition to function call
                -Types of function
                        - Arrow function :alternarive for function definition, function-name = (parametres used to perform task) =>{
                                defining task in function body
                        }

                        - Predefined function: console.log(),Math.floor()
                        - Callback function :function definition another function call, complete its execution only after completion of the function inside it
                        - Anonymous function : Self exceuting function , nameless function
                        - Nested Function : function definiton inside another function definition
                        -Closure property :
                        - Recursive function : Calling a function inside its own definition
        - Array -store multiple value  in a single variable
                - to access each value from an array use its index , array-name[index-Number]
                - Total count of items in array :length
                - type of array : object
                - to access array items one by one
                        - using normal for Loop
                        - using for - of loop :for(let variable-name of array -name){} return array items
                        - using for -in loop : for(let variable-name in array-name){} return array items
                - methods : array-name.method()
                        - push(item) : used to insert data at end of array
                        - unshift() : used to insert data at begining of array
                        - pop() : used to remove data at the end of existing array
                        - shift() : used to remove data at the begining of existing array
                        - sort(compareFn) : used to sort array
                                - compareFn : ((num1,num2)=>emp1-emp2)(asecending order)
                                                ((num1,num2)=>emp2-emp1)(desecending order)
                        - forEach(Callbackfn:(value,index,array)=>void) : Alternative to fpr-of loop
                        - filter(Callbackfn) : return a new array with item 
                        - find(Callbackfn) : return an item satisfing the condition from an existing array
                        - map(Callbackfn) : return a new array with values after applying  a mapping function  
                        - reduce(Callbackfn) : return a single value which is either smallest/largest/ total sum from an existing array
                        - reduceRight(Callbackfn) :return a single value (either smallest/largest)which is the first item for an existing array
                        - some(Callbackfn) : return true / false basd on a condition applied to all in given array
                        - flat(depth) : return array with corresponding depth as dimension, to convert to 1 dimension  use dept as 'Infinity'
                        - includes(key) :return bpplean based on the key present in the given array
                        - indexOf(key) :return index number corresponding to the item
                        - splice(startingIndex, delete count) :used to delete an array and return array with removed item
                        - join(seperator) :return a string with array value using the given seperator.

        - String :
                -methods
                        -substring() : Return the substring at the specified located within a String object
                        -toLowerCase()
                        -toUpperrCase()
                        -StartsWith()
                        -endsWith()
                        -trim()
                        -includes()
                        -split()
                        -slice()
                        -eval(string-expression) : used evaluate a string
        -Object : Data storing as a key-value pair 
                - use key  : To access value from an object 
                        syntax : object-name['key'] / object-name.key
                - using in operator we can check a key is in objedct,return 
                        syntax: "key" in object-name
                - Insert value to an existing object
                        syntax : object-name["key"]= value /object-name
                -Object.values(object-name) : return an array of value of the given Object
                -Object.keys(object-name) :return an array of  key of the given Object
                -Object.assing(target-object,source) : used to insert data in an existing target object
                -Methods
                        - hasOwnProperty(): we can check a key is in object ,return a boolean
        - Object Oriented Programming (OOPs)
                - Object :real time entity
                - Class : Blueprint of object
                - Reference : used to refer property to its class 
                - constructor() :method to initialise class property
                - features of OOPs
                        - Inheritance : used to get data from one class to another
                                - Classical Inheritance : use extends keyword
                                - Prototype Inheritance : use _proto_
                        - Polymorphism : to implement Polymorphism in js use REST operator (...)
                        - Abstraction : hiding the important data from user
                        - Encapsulation : Data inside another data like class
        - Try-Catch Block : use to handle run-time error


JAVASCRIPT - front end Concepts
-------------------------------
- Used to provide behavior to web page
- Ways to applying JS in HTML
        - Internal JS :use "script tag" to provide js code in HTML
        - External JS :link external js file using script tag
- DOM : Document object Model for a webpage
        - A tree structure corresponding to a webpage 
        - js can access webpage / HTML elemnets via DOM using 'document' object
- DOM Methods: Selecting HTML elements to js code :
        - using tag name : documnet.getElementByTagName('tag-name')
        - using Class name :document.getElementsByClassName('classname')
        - using id name :document.getElementsByIdName('IdName')
        - using querySelector : document.querySelector('tag/#id/.class-name')
        - - using querySelector : document.querySelectorAll('tag/#id/.class-name')
- Event : triggered by user actions
        - Mouse Related event : click,move,drag, ...
        - Keyboard Related event : keypressdown, keyup ,....
        - Text based Events
- Access / Update content of a tag
        - innerHTML
        - InnerText
- Permanant Data strorge in Browser
        - Using Local Storage
        - Using Session Storage
        - Methods : Both key and value must be string
                - setItem(key,value) : used to store data in Local /Session Storage
                - getItem(key) : Used to get data from Local /Session Storage
                - removeItem(key) : Used to delete data from Local /Session Storage
        - API : Application Programming Interface - used to communicate Application in internet
                -URL :Uniform Resource Locator
                ex : https://jsonplaceholder.typicode.com/guide/
                baseURL : https://jsonplaceholder.typicode.com/
                - URI :Uniform Resource Identifiers 
                - Path parametre : ex : 1
                - Query parametre : value followed with ? in url    
                ex: https://in.search.yahoo.com/search?fr=mcafee&type=E210IN885G0&p=jsonplaceholder
                -Body parametre :
                - Types of API
                        - REST API : HTTP, JSON
                        - SOAP API : HTTP, XML
                        - GRAPHIL
        - JSON : JAVASCRIPT Object Notation
                - {"key" : value}
        -HTTP (HYper Text Transfer Protocol)
                -HTTP Requests
                        - GET (to get a data from server to client)
                        - POST (to store/add data to server from client)
                        - PUT (to edit /update existiong data to server from client)
                        - DELETE (to remove a data from server)
                - HTTP  Response Codes : to identify the status of client request by brower
                - 1xx :informational
                - 2xx :Success
                - 3xx : Redrirection
                - 4xx : Client error
                - 5xx : Server error
        - Resolving Function Call in JS
                - Synchronus Function
                - Asynchronus Function
                - JS use Call Stack to monitor it use event loop
                        - Asynchronus
                                - Callback hold in callback queue
                                - API call hold in MIcrotask queue (priority queue)
                                - Resolving Asynchronus functions
                                        - if we callback to resolve Asynchronus function it may lead 'Callback Hell : Nesting of call back function' scenario
                                - Promise : avoid callback hell
                                         - Has 2 states
                                                - Resolved state : use 'then' method to get the Response
                                                - Reject state : use 'catch' method to get the reasonb to fail the function call
                                                - Pending state : waiting duration to get response for Asynchronus function Call
                                        - Async-Await Keyword : to resolve Promise
                                                - 'async' keyboard is used in to function to indicate its Asynchronus
                                                - use 'await' keyword in-front of async function call, to wait till its completion
                                                - only resolve state will get after await to complete the asyn function call
                                                - to get reject state use try-catch block
                        - API Call Using Js
                                - using XMLHTTPRequest : AJAX (Asynchronus JAVASCRIPT XML)
                                -  fetch() : return Promise
                                - axios library : return Promise
                                
 
 REACT - ADVANCED Front end Technology
 ----------------------------------------

 - Basic Concepts
    - React App is a collection of library
    - Components : Part of User Interface
    - React App is a collection of components
        - components are arranged in atree structure
        - There will be a root component in React app which is commonly known as 'App'
    - React used to create Single Page Application
    - Pure function : which does not cause side effects, used to create
    - Declarative Approach
    - Virutal DOM : React uses Virtual DOM exists which is like a lightweight copy of the actual DOM, where website become faster.

    - Reconciliation :  It makes the DOM updates faster in React. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.

    - JSX (JAVASCRIPT XML) : (language used to write code in React) - used to display content in Browser
        - ex: const heading = <h1>heading</h1>
        - Rules for Using JSX 
            - Every JSX element must be inside a single parent tag
            - Every tag must a closing tag. 
                ex: <h1>heading</h1> , <br/> (self closing tags)
            - Parent Tag can be any container tag / react fragment (<>....</>)
            - Attribute class is 'className'vin React
            - JSX using camel cases
            - Insted of Attribute "for" use 'htmlFor' in JSX
            - use {js-expression} : To provide js expression in JSX 
    - React App Creation
        - CRA (using cearte-react-app command)
        - Vite : built in tool for web projects
                - Installing Globally : npm i -g create-vite
                -React app using vite : 
                  npm create vite@latest react-app -- --template react
        - React App File & Folder structure
                - package.json : npm configuration file for the project
                - package-lock.json : contains version history all packages installed in the project
                - .gitignore file : contain files/folder name which is ignored while adding to git
                - index.html : entry html page to react app
                - node-modules folder : used to hold copies of dependent libraries of react project(we can install using :  npm install)
                - public folder : react project can access data stored in public folder as Globally
                - src folder : define app here
                        - assets folder : used to hold media files used in react app
                        -  main.jsx : create ReactDom with parent node as div with id as 'root' and render the parent (App) Components inside the node
                - to run react app : use command 'npm run dev'
                - Babel library : transpile JSX code to simple react function which is understood by Browser
        - *High Performance
        - *Data Binding / Sharing : One Data binding (from parent to child)
        - *Components : Part of User Interface , independent and reusable code
            - General Rules for Creating components
                -create a js / jsx file, file name must start with capital letter
            - Different Types components
                - Class Based components : use 'class' to creat component it can inherit react component
                - Functional Based components :use function to create component, return jsx code
                        - Stateless component : it cannot create state
        - Life Cycle method of React Component
                - Mounting Phase : Putting JSX to browser
                        - Constructor()
                        - getDerivedStateFromProps()
                        - render()
                        - componentDidMount()
                - Updating Phase: When component is updating
                        - getDerivedStateFromProps()
                        - shouldComponentUpdate()
                        - getSnapShotBeforeUpdate()
                - Unmounting Phase : Removing component from DOM
                        - componentWillUnmount()

        - Difference Between functional and class based compoenent
                Functional Component            
          --------------------------------
        1. JS Pure function to accept props and return JSX Element
        2. Its executes from top to bottom , once  it return  JSX, then it cannot be alive 
        3. Staeless componenet
        4. Hooks are used
        5. Life Cycle method is not available
        6. No neeed render function
        7. No need of constructor
-----------------------------------------------------------------------
                Class Component
          ---------------------------
        1. Is class extended from react component it render function return JSX Element
        2. Component alive depending on different life cycle
        3.Stetefull component
        4. Hooks are not used
        5. Can use life cycle method in component
        6. it requries render to return JSX
        7. Constructor used to initialised state
-------------------------------------------------------------------------
        - props Object : Property of a component, Using props a component can get shared data from its parent , props will be get as an  'argument' of functional component 
        - Styling in React Components - using CSS
                - Using Inline CSS : using style attribute
                        - syntax : style={{property-name:value}}
                - Using External CSS : using external Css file, import Css file to component file
                - CSS Module file : file with extension as .module.css is known as CSS Module file , import module filein component
        - React Events Binding
                - Binding a function without argument : event={function-name}
                - Binding a function with argument :
                        event={()=>function-name(arg)}
                -  - Binding a function with argument as event :
                        event={(e)=>function-name(e)}
        - Conditional Rendering : 
                if statement : use operator &&
                if-else statement : use operator ?: 
        - react state : its an object used to store data / information regarding a components, whenever state changes components re-render
                - use setState(value) : to update state
        - React Hooks : is a function used to provide react component feature to functional component
                - Hooks are function with function name starts with 'use' keyword
                - to use a hook in functional componet, we must cal the hook 
                - Rule for calling hooks in functional component
                        - import hook from react, in component
                        - Hooks can called at the top level of a component
                        - Hooks cannot be conditioanl
                Types of Hooks
                        - Predefined Hooks 
                                - useState(initial-value) : to help functional component to create state
                                syntax : const[state-name,state updating function name] = useState(initial-value)
                                - useEffect(callback function, dependency): used to provide side effects to your component
                                        -function : used define side effects applied to component
                                        - dependency : based on dependency, useEffect will get called
                                                - no dependency :useEffect hook will call all time in component
                                                - []: useEffect hook will call only at the time in componet creation
                                                - [data] : useEffect hook will call only at the time in componet creation as well as data changes
                                - Customised Hook 
                                        - Create a functipn with name starts with 'use' keyword
                        - Handling LIst using React
                                - using 'map' method
                                - to uniquely identify each item in a list use 'key' attribute in component
                                 
                        - Styling Framework in React
                                - Material UI :npm install @mui/material @emotion/react @emotion/styled
                        - React forms
                                - Controlled Components : data changes in the form is handled by the component by storing its state using change event
                                - Uncontrolled Components: form handled by real DOM
                                - To submit form, to prevent it from reloading use perventDefault() method component