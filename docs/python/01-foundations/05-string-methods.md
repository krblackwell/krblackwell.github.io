---
sidebar_label: string methods
sidebar_position: 5
last_update:
    date: 6/28/25
    author: krblackwell
description: How to use string methods in Python.
tags: ['python', 'foundations', 'strings', 'methods']
draft: False
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/05-string-methods.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/string-methods) - [Go to Foundations section](/docs/python/foundations)

# String methods

When you use strings "like this" or "this" or "even something super long," you can use Python to do things with them. This lesson is a little longer, and you might want to come back to it, or just focus on a few methods at a time.

I don't cover every string method here. There are a lot more. The Python documentation is the best place to see what methods all exist for strings. The next lesson covers documentation, and it's something we'll come back to as we go along in the lessons.

## Learning Objectives

- Methods allow you to use complex code without creating it
- Methods may or may not return something
- Strings have a lot of methods built in
- You can use multiple methods on one line on one variable

## Methods

We haven't covered methods or functions yet, but you've already used one.

`print()` is a function.

Functions and methods allow you to use complex code without creating it yourself. It means you can do interesting things without knowing exactly how to code them.

Functions and methods are ways to make your code do things — like printing, formatting text, or calculating values.


```python
print("Hello World!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello World!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

- In this example, `print()` is a function.

- It takes an argument: `"Hello World!"`

- It does something with the argument: Shows it on the screen

Methods and functions take arguments, and may or may not return something. Methods are attached to something, like the string methods we'll learn about in this lesson.

A function can be used by itself, like `print()`.

Here's another method that is interesting and useful for strings, length: `len()`


```python
len("How long is this string?")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    24



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The string is 24 characters long, including the spaces and the question mark at the end. `len()`, or length, doesn't count the quotes in the length.

Let's get into the string methods.

## Upper and lower case

If you have a string, you can set it to upper or lower case with `.upper()` and `.lower()`.

This is really handy for comparing strings. If you have input provided by data or a person or something like that, you can set them both to upper or lowercase if you don't care about case.


```python
"a lowercase string".upper()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'A LOWERCASE STRING'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
"A MIX of UPPER and lower case".upper()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'A MIX OF UPPER AND LOWER CASE'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
"AN UPPERCASE STRING".lower()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'an uppercase string'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
"A MIX of UPPER and lower case again".lower()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'a mix of upper and lower case again'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Change case for some letters

There are three other interesting methods that change case:

- `.capitalize()`
- `.title()`
- `.swapcase()`

Let's check out what they can do, and then talk about them.


```python
"cookie the cat".capitalize()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Cookie the cat'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Notice this one capitalizes only the first letter in a string.


```python
"cookie the cat".title()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Cookie The Cat'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

`title()` capitalizes each word, like in a book title.


```python
"cookie the cat".swapcase()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'COOKIE THE CAT'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

`.swapcase()` is maybe not as obvious right away. The string went from lowercase to uppercase. Let's change the example a little.


```python
"Cookie The Cat".swapcase()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'cOOKIE tHE cAT'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now you can see that the uppercase letters became lowercase, and the lowercase letters became uppercase!

The only thing I can really think of in the professional world that this might be useful for is after detecting accidental capslock.


```python
"mY CAPSLOCK IS ON, OOPS".swapcase()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'My capslock is on, oops'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Remove whitespace

Here are some that I've used on the job, and they are very useful in cleaning data. We can `.strip()` the spaces out from a string.

- `.strip()`
- `.lstrip()`
- `.rstrip()`

Let's take a look at what these do, starting with `.strip()`.


```python
"     Extra spaces at the start, and at the end.    ".strip()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Extra spaces at the start, and at the end.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

That removed the spaces at the start and end. Sometimes we only care about spaces at the start OR at the end, in other words, at the left or right.


```python
"     Extra spaces at the start, and at the end.    ".rstrip()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '     Extra spaces at the start, and at the end.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The extra spaces on the "right," which is the R in `.rstrip()` are taken away.


```python
"     Extra spaces at the start, and at the end.    ".lstrip()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Extra spaces at the start, and at the end.    '



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Chaining methods

Before we go to the next section, I want to tell you how to chain methods. This means using two or more at the same time. You can do something like this:


```python
" hello ".strip().upper()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'HELLO'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

This took a `" hello "` that has extra whitespace at the start and end of the string. First we removed the extra spaces.


```python
" hello ".strip()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'hello'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

That is what's returned from the first method. What's returned is used in the second method. I'll show it in a different way.


```python
str1 = " hello ".strip()

str1.upper()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'HELLO'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

This is equivalent to `" hello ".strip().upper()`.

:::tip
Everything is an object in Python.
:::

## Replace

Can replace help us with the spaces in the middle? Let's look at what happens with `.replace(old, new)`.

The example variable has our string. We'll replace 2 spaces with no space.


```python
example = "   Extra spaces at the start,  in the middle,  and at the end.  "
example.replace("  ", "")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ' Extra spaces at the start,in the middle,and at the end.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

It doesn't really work for this example, but sometimes it can be helpful for replacing whitespace. In the lesson on lists and strings, I'll show you how you can fix it properly.

Let's play around with replace and see what it's good for. I've used replace functions a lot for working with data. I'll give a few examples of that with an address.


```python
" 1234 main street".replace("street", "st")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ' 1234 main st'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now let's do another thing with it.


```python
x = " 1234 main street".replace("street", "st")
y = x.strip()

y
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '1234 main st'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Note that this time I saved the second step to a variable with `y = x.strip()`.

In a program, you won't just be printing things like we're doing so much in these lessons.

You'll need to save things into variables to use them. This is called assigning a value to a variable.

:::tip
Assign values to a variable so you can use them in your program.
:::
Next, we'll do a more fun example of find and replace that will help when you do the "Alien Translator" project.

Let's imagine we have intercepted a secret message and translated it partway already. There's one last piece. The secret code is the alphabet but all the letters are shifted over one.

| Letter | A | B | C | D | E | F | G | H | I |
|--------|---|---|---|---|---|---|---|---|---|
| Means  | B | C | D | E | F | G | H | I | J |

| Letter | J | K | L | M | N | O | P | Q | R |
|--------|---|---|---|---|---|---|---|---|---|
| Means  | K | L | M | N | O | P | Q | R | S |

| Letter | S | T | U | V | W | X | Y | Z |
|--------|---|---|---|---|---|---|---|---|
| Means  | T | U | V | W | X | Y | Z | A |


```python
secret_message = "Meet me at the BZED"

secret_message.replace("B", "C")\
              .replace("Z", "A")\
              .replace("E", "F")\
              .replace("D", "E")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Meet me at the CAFE'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

This is a little tedious to type each letter one at a time, but the exercise will be easier when we learn dictionaries.

:::tip
See the `\` backslash used in the cell above? You can use that to continue code on another line. This is helpful to keep lines shorter.
:::

## Conclusion

In conclusion, we learned methods for the string class `str`, and how it returns things.

- `.upper()`
- `.lower()`
- `.capitalize()`
- `.title()`
- `.swapcase()`
- `.strip()`
- `.lstrip()`
- `.rstrip()`
- `.replace()`
