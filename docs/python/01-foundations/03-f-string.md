---
sidebar_label: f-strings
sidebar_position: 3
last_update:
    date: 6/14/25
    author: krblackwell
description: Introductory Python - What are f-strings?
tags: ['python', 'foundations', 'f-strings']
draft: False
unlisted: False
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/03-f-string.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/f-string) - [Go to Foundations section](/docs/python/foundations)

# What are f-strings?

Now that you know how to use `print()` and `variables`, we can work with `f-strings`! This is a way that some people find easier to write long blocks of text that have variables in the middle.

They look like this:


```python
type_of_thing = "an f-string"

print(f"This is {type_of_thing}")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    This is an f-string


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Learning Objective

- `f-strings` are special strings that let you insert a variable.
- `f-strings` can help print nicely formatted messages.
- An alternative to `f-strings` is using `+` pluses or `,` commas.

## `f-strings` are special strings that let you insert a variable

Note the `f` at the beginning of the string. It's not inside the quotes.

We created a variable called `name`, and assigned it a value.

`name` is referenced with curly brackets in the string.

If we say we have an f-string, we should put a variable in there in curly brackets. Your code will still run, but it's a good habit to always make an f-string an f-string with its curly brackets and variable.


```python
name = "Ella"
print(f"Hello, {name}!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello, Ella!


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
exclamation = "Wait"
word = "example"

print(f"{exclamation}! Another {word} already?")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Wait! Another example already?


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

:::tip
If you say you're using an f-string, make sure you actually put a variable inside the curly brackets {}!
:::


```python
repeat_word = "quotes"
glossary_word = "balance"

print(f'I can use single {repeat_word}')
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    I can use single quotes


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
print(f"blah blah no variable - Hey wait, this isn't best practice!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    blah blah no variable - Hey wait, this isn't best practice!


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

See? The code ran! But following the tip is `best practice`.

:::tip
Best practices` are smart habits that help you write code that’s clean, easy to understand, and less likely to have mistakes.
:::
Think of best practices like brushing your teeth or wearing a helmet — you could skip it, but doing it the right way helps you in the long run!

### More examples of f-strings




```python
age = 11
print(f"I am {age} years old.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    I am 11 years old.


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
a = 5
b = 7
print(f"{a} plus {b} equals {a + b}")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    5 plus 7 equals 12


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## `f-strings` can help print nicely formatted messages

If we’re making a text-based game, for example, we might want to print the same messages for every player — like instructions, story parts, or game updates. There are also other times when it’s helpful to print neat and clear messages, even in less exciting programs I use for work. We’ll talk about those a bit later.


```python
name = "Ava"
score = 95

print(f"Great job, {name}! You scored {score} points!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Great job, Ava! You scored 95 points!


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
player = "Max"
score = 42
print(f"Player {player} scored {score} points!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Player Max scored 42 points!


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
level = 5
print(f"🎉 Congrats! You’ve reached level {level}! Keep going!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    🎉 Congrats! You’ve reached level 5! Keep going!


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
player_name = "Hoda"
print(f" Welcome, {player_name}! Get ready for an amazing adventure!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

     Welcome, Hoda! Get ready for an amazing adventure!


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
lives = 2
name = "Vik"
print(f"⚠️ Watch out, {name}! You only have {lives} lives left!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    ⚠️ Watch out, Vik! You only have 2 lives left!


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Use `+` pluses instead of f-strings

You don’t have to use an f-string to put a message together.\
You can also use `+` signs to connect strings and variables.

:::tip
The `+` plus can create a big string variable.
:::
Here’s how it works:
Put the variable in between the parts of the sentence, and use `+` to glue everything together.


```python
sentence2 = "A variable string to insert. "

print("I have a string here. " + sentence2 + "And another string")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    I have a string here. A variable string to insert. And another string


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
sentence2 = "A variable string to insert. "
big_sentence = "I have a string here. " + sentence2 + "And another string"

print(big_sentence)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    I have a string here. A variable string to insert. And another string


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

:::tip
Note the spaces added. The + won't add space between your strings for you.
:::
However, you need to be mindful of the variable types you are gluing together. A string won't join with a number when you use `+` plus.

***WARNING***
Numbers with the pluses have to be converted to a string with something like `str()`.
*** ***


```python
number = 5

print("Number is: " + str(number))
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Number is: 5


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Use `,` commas instead of f-strings

You can use `,` commas to connect strings and variables similar to the `+`.\
However, commas can't join strings together inside a variable like pluses can.

:::tip
Commas will add a space for you.
:::


```python
variable = 5


print("Variable =", variable)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Variable = 5


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

In a `print()`, you can mix numbers and strings like this without converting the numbers to strings.


```python
print("Here's another example.",
      "Multiple lines can go like this.",
      "Commas are separating the strings, but they print on a single line.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Here's another example. Multiple lines can go like this. Commas are separating the strings, but they print on a single line.


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

See the next example also. We can separate a long line into multiple lines.


```python
print("Here's another example. "
      "With plus "
      "and multiple lines")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Here's another example. With plus and multiple lines


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

But it doesn't work with a variable in there. You need the plus or comma to join the lines. Remember the comma adds a space between strings.


```python
sentence_part = "and multiple lines"

print("Here's another example. "
      + "With plus "
      + sentence_part)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Here's another example. With plus and multiple lines


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
sentence_part = "and multiple lines"

print("Here's another example.",
      "With commas",
      sentence_part)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Here's another example. With commas and multiple lines


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

You might wonder, "Why should I separate my lines like this?" In Python, we try to keep line lengths shorter than 80 characters. It's a good habit to get into.

- It makes your code easier to read.
- It fits nicely on the screen (even small ones).
- It helps others understand your code faster.

The below code block is one that needs to be on two lines so it meets this best practice.


```python
repeat_word = "quotes"
glossary_word = "balance"

print(f'I can use single {repeat_word}, but remember how to properly '
      f'{glossary_word} your types of {repeat_word} around each other.')
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    I can use single quotes, but remember how to properly balance your types of quotes around each other.


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Recap

In sum, we covered f-strings and their alternatives.
