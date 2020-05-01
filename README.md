# AnimationApp

![Build and Deploy](https://github.com/devnrj07/angular-animations/workflows/Build%20and%20Deploy/badge.svg)


<b>Understanding Angular Animation States</b>
Animation involves transition from one state of an element to another state. Angular defines three different states for an element:

1. <u>Void state</u> — represents the state of an element which is not part of the DOM. This state occurs when an element is created but not yet placed in the DOM or the element is removed from the DOM. This state is useful when we want to create animation while adding or removing an element from our DOM. To define this state in our code we use the keyword `void`.

2. <u> The wildcard state </u> — This is also known as the default state of the element. The styles defined for this state are applicable to the element regardless of its current animation state. To define this state in our code we use the `*` symbol.

3. <u> Custom state </u> — This is the custom state of the element and it needs to be defined explicitly in the code. To define this state in our code, we can use any custom name of our choice.

<b>Animation Transition Timing</b>
To show the animation transition from one state to another, we define animation transition timing in our application.

Angular provides the following three timing properties:

1. <u>Duration</u> :
        This property represents the time our animation takes to complete from start (initial state) to finish (final state). We can define the duration of animation in the following three ways:
       -  Using an integer value to represent the time in milliseconds. E.g.- 500
       -  Using a string value to represent the time in milliseconds. E.g. — ‘500ms’
       - Using a string value to represent the time in seconds. E.g.—‘0.5s’.
            - 
2. <u>Delay</u>
        This property represents the duration between the animation trigger and the beginning of the actual transition. This property also follows the same syntax as duration. To define the delay, we need to add the delay value after the duration value in a string format — ‘ Duration Delay’. Delay is an optional property.

        For example:

       - 0.3s 500ms’. This means the transition will wait for 500ms and then run for 0.3s.


3. <u>Easing</u>
        This property represents how the animation accelerates or decelerates during its execution. We can define the easing by adding it as the third variable in the string after duration and delay. If the delay value is not present, then easing will be the second value. This is also an optional property.

        For example:

       - ‘0.3s 500ms ease-in’ — This means the transition will wait for 500ms and then run for 0.3s (300ms) with ease-in effect.
    
       - ‘300ms ease-out’. — This means the transition will run for 300ms (0.3s) with ease-out effect.


<b>Angular Animation Syntax</b>

```
@Component({
// other component properties.
  animations: [
    trigger('triggerName'), [
      state('stateName', style())
      transition('stateChangeExpression', [Animation Steps])
    ]
  ]
})
```


# Tips

- The transition from void => * and * => void is very common.   Therefore, Angular provides aliases for these animations:

    for void => * we can use ‘:enter’
    for * => void we can use ‘:leave’ 


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go reach out on `niraj.mukta123@gmail.com` 