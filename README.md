# WaterJugChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Overview

This application solves the Water Jug Riddle, where you use two jugs with different capacities to measure exactly Z gallons of water.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Algorithmic Approach
The solution to the Water Jug Challenge leverages the Euclidean algorithm to determine whether it is possible to measure exactly Z gallons using two jugs with capacities X and Y. The key insight is that a solution exists if and only if Z is a multiple of the greatest common divisor (GCD) of X and Y, and Z is less than or equal to the maximum capacity of the two jugs.

To implement this, we simulate the process of filling, emptying, and transferring water between the two jugs. We start by filling one jug, then transferring water to the other jug until either the first jug is empty or the second jug is full. We repeat this process, emptying the full jug when necessary and continuing until we measure exactly Z gallons or determine that it is impossible. This step-by-step approach ensures that we find the most efficient way to achieve the desired measurement if a solution exists.


## Test Cases

# Example 1
Jug 1 Capacity (X): 3
Jug 2 Capacity (Y): 5
Desired Amount (Z): 4

Steps:
Fill Jug 2: Jug1: 0, Jug2: 5
Pour Jug 2 to Jug 1: Jug1: 3, Jug2: 2
Empty Jug 1: Jug1: 0, Jug2: 2
Pour Jug 2 to Jug 1: Jug1: 2, Jug2: 0
Fill Jug 2: Jug1: 2, Jug2: 5
Pour Jug 2 to Jug 1: Jug1: 3, Jug2: 4

# Example 2
Jug 1 Capacity (X): 2
Jug 2 Capacity (Y): 6
Desired Amount (Z): 5
Result: No Solution