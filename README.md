# JavaScript Loose Equality Bug

This repository demonstrates an unexpected behavior of loose equality (==) in JavaScript when dealing with `null` and `undefined` values.  The provided code shows how using loose equality can lead to unexpected results and how to fix it.

## Bug Description

The `foo` function is intended to add 1 to a number.  However, its use of loose equality (==) to check for null leads to `undefined` values resulting in `NaN` instead of a more expected behavior (e.g. 0 or an error).

## Solution

The solution uses strict equality (===) to check for null and undefined separately, providing a more reliable and predictable outcome.