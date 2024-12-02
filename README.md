# String Calculator TDD Kata

## Overview
A Test-Driven Development (TDD) implementation of the String Calculator Kata. This project demonstrates the step-by-step process of building a calculator that handles string inputs using TDD principles.

## Features
The calculator processes strings with the following capabilities:

1. Basic Addition
   - Empty string returns 0
   - Single number returns the number
   - Two numbers, comma delimited, returns their sum

2. Multiple Numbers
   - Handles an unknown amount of numbers

3. New Line Handling
   - Supports new lines between numbers (e.g., "1\n2,3" = 6)

4. Custom Delimiters
   - Supports different delimiters (e.g., "//;\n1;2" = 3)
   - Supports multi-character delimiters (e.g., "//[***]\n1***2***3" = 6)
   - Supports multiple delimiters (e.g., "//[*][%]\n1*2%3" = 6)
   - Handles multiple delimiters of varying lengths (e.g., "//[***][#][%]\n1***2#3%4" = 10)

5. Input Validation
   - Throws exception for negative numbers with message "negatives not allowed: [negative numbers]"
   - Numbers bigger than 1000 are ignored

## TDD Process
Each feature was implemented following the TDD cycle:
1. Write a failing test (Red)
2. Write minimal code to make the test pass (Green)
3. Refactor code while keeping tests green (Refactor)

## Getting Started

### Prerequisites
- Node.js
- TypeScript

### Installation
```bash
npm install
```

### Running Tests
```bash
npm test
```

## Development Journey
The implementation followed strict TDD principles with small, incremental steps:
1. Started with basic number addition
2. Added support for multiple numbers
3. Implemented newline handling
4. Added custom delimiter support
5. Added negative number validation
6. Implemented number filtering (>1000)
7. Enhanced delimiter support for multiple and varying lengths