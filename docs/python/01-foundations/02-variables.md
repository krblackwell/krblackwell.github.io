---
sidebar_label: variables
sidebar_position: 2
last_update:
    date: 6/14/25
    author: krblackwell
description: Introductory Python - What are variables?
tags: ['python', 'foundations', 'variables']
draft: False
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/02-variables.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/variables) - [Go to Foundations section](/docs/python/foundations)

# What are variables?

When you code, you'll always be using something called a `variable`. A variable is like a container that holds information. It helps you to do a few things:

- Use the same information again without writing it over and over.
- Make many changes in one place.
- Make a program more flexible.

## Learning Objectives

In this notebook, you'll learn about what a variable is, how to use it, and some of the different types.

- A variable holds information.
- Variables are assigned values.
- There are a few variable types we'll start with: strings and integers.

## A variable holds information

Sometimes you'll want to save a word or phrase, numbers, or bigger things so you can refer back to them later or change them up.

Let's look at an example without a variable, and then use a variable.


```python
print("Hello, World!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello, World!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We're printing a phrase here, but what if we want to change who we say "Hello" to!

We can use a variable to do that.


```python
name = "Katie"
print("Hello,", name)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello, Katie  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The variable can hold a name! It does more than that for us.

## Variables are assigned values

When we put information into a variable, we are assigning it a value. You use only 1 equal sign for this.

`name = "Luke"`

The name Luke is assigned to the variable name.

:::tip
`name` is a string!
:::

## There are different variable types

Programming languages, like Python, have many different variable types. Two common ones are strings and integers.

### Strings

"This is a string."

"string!"

"striiiiiiiiiiiiiiing"

### Integers

Numbers you've seen without a decimal are often integers. Most of the numbers you use and see everyday are integers.

1, 2, 3, 4, 5 are integers

100 is an integer

### Strings can be added together

Adding a string is called `concatenation`. We will `concatenate` strings.

Note I added a space after "Hello."


```python
print("Hello " + "You! " + "How are you doing?")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello You! How are you doing?  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

This can be added into a variable also!


```python
greeting = "Hello " + "You! " + "How are you doing?"
print(greeting)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello You! How are you doing?  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And we can split it up into more variables.


```python
name = "Sam"
greeting = "Hello " + name + "! " + "How are you doing?"
print(greeting)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello Sam! How are you doing?  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Notice we can change name much more easily this way. When we have a variable that's used a lot, this is very handy.


```python
name = "Krissy"
greeting = "Hello " + name + "! " + "How are you doing?"
print(greeting)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello Krissy! How are you doing?  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### Numbers can be used in math

Numbers can be printed in strings, but have to be `converted` into strings first in Python. This means we change an integer 5, for example, into a string.

Don't worry if you don't know what `str()` is. It makes the integer variable `number1` a string.

All I want you to remember is that when you mix numbers and letters together to print, you need it to all be a string.


```python
number1 = 5
number2 = 3
print("It's " + str(number1) + "!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    It's 5!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

I can do math, too. Look how I can use two variables in lots of different ways. If I ever need to change one of them, I only have to change it in one place—and it automatically updates everywhere else it’s used!


```python
print(number1 + number2)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    8  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
print(number1 - number2)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    2  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
print(number1 * number2)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    15  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Recap

In conclusion, we learned about variables, a way to hold and change out information in a program.
Using variables helps us to make our code more flexible.
