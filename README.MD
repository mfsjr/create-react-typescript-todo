# create-react-typescript-todo

This started out as an attempt to study TypeScript while revisiting React/Redux.
The original goals were:
1. A Redux/React approach, following Javascript-centric designs
2. Complementary usage of TypeScript to achieve complete type safety
3. Reduced boilerplate

After working through a few problems, and learning a lot about TypeScript, I 
thought I actually accomplished what I set out to do, much to my surprise...  

At that point I looked around, and saw that some of the things I had done were
discussed elsewhere. 

Nonetheless, I haven't really seen these approaches demonstrated in a simple project 
anywhere (yet).  Articles that overlap these techniques are overrall quite 
good since they are proposing better techniques, but also seem like they could 
do a better job of highlighting and explaining exactly how they work.


### Techniques and Results
1. **TypeScript enum values** are actually types. So enums are compact and 
    they can be used to create actions in which every property is type-checked.
    1. **Result**: In many cases action creator functions can be replaced by fully 
      type-checked object literals created in situ (Redux requires them to be plain objects anyway).
      Obviously, if you need to create them for other reasons, you can write action creator 
      functions using type-checked object literals.

2. **TypeScript discriminated unions with typeguards** can be used in reducers to translate the
  action enum value in a switch statement to the exact action type created with that 
  action enum value. This is a property of discriminated unions that is outlined
  in the TypeScript docs.  This means that...
    1. **Result** Actions of widely varying types can be accessed within reducer switch
       statements, in a fully type-safe manner, simply and directly, without any casting.
    2. **Result** If more than one action is defined for a single action enum value, 
       typescript will provide errors (since it is no longer a discriminated union and it
       can't generate a one-to-one mapping between the action enum value and action type).
       
3. **TypeScript generics** can be used to create action types from enum-based types and 
   action payload interfaces, especially useful if the payload is non-trivial and/or is used 
   in multiple places, e.g., used as state.
    1. **Result** less code (action types created with one line of code), clearer semantics, 
       reusable payload types, typesafe helper functions created once rather than N times.
    

This project was created using the basic configuration of Microsoft's github project,
https://github.com/Microsoft/TypeScript-React-Starter.  Additional npm installs follow 
the ones provided in those instructions.  If there are problems in that project, those 
will be inherited here.  

For convenience, the steps to create this project are listed below:
- `create-react-app create-react-typescript-todo --scripts-version=react-scripts-ts`
- `npm install -D enzyme @types/enzyme react-addons-test-utils`
- `npm install -S redux react-redux @types/react-redux`   

#### Disclaimer!
While I have meaningful JS apps in production, they are in Angular, so any misunderstandings
of React/Redux are mine, and it would be greatly appreciated if you made me aware of them.
