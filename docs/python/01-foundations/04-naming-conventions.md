---
sidebar_label: naming conventions
sidebar_position: 4
last_update:
    date: 6/28/25
    author: krblackwell
description: How to name variables in Python.
tags: ['python', 'foundations', 'naming']
draft: False
unlisted: False
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/04-naming-conventions.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/naming-conventions) - [Go to Foundations section](/docs/python/foundations)

# What do I call stuff in Python?

`Naming conventions` are rules for giving things a name. We're going to focus this lesson on naming variables. As you learn, you'll grow in your understanding of this concept.

- ❌ No nos
- ℹ️ Things to know
- ✅ Good names

## Learning Objectives

In this notebook, you'll learn about how to name variables.

- You'll learn how not to name things, and some things to watch out for.
- You'll see examples of good names.

## ❌ No nos

You're not allowed to use some things to name a variable:

- ❌ starting with a number
- ❌ symbols or punctuation like $, %, , @
- ❌ `reserved words` - like `break` `class` `except` `finally` `True`

Create cells below or use the cell and see what error messages you get when you do any of the "no nos."

:::tip
You might not understand the errors, but this shows you that you might get error messages that don't tell you what's really wrong.
:::
"UsageError: Line magic function `%var` not found." doesn't exactly tell you that you can't use that name for a variable.


```python
# 1thing = "this will raise SyntaxError: invalid decimal literal"
```


```python
# %var = "one"
```


```python
# class = 3
```


```python
# var%name%3 = "zombie"
```


```python
# what! = "no"
```

## ℹ️ Things to know

- ℹ️ underscores _ mean something specific
- ℹ️ use `snake_case`

### ℹ️ Underscores as the first character

Underscores have special meaning in Python at the beginning of a name. You use them in a certain way to tell other programmers (or future you) about the variables in your program.

Double underscores are called `dunders`.



```python
_secret = "you can see this"
# but the underscore at the beginning means don't use it directly!
```


```python
__top_secret = "'double underscore' also means something specific"
```


```python
BadGuy = "allowed, but not snake case"
```

### ℹ️ Snake case

Python conventions for variable names and some other names follow `snake case`. Spaces are replaced with an underscore _ and letters are usually all lowercase.


```python
type_of_animal = "marsupial"
```


```python
favorite_show = "Australian Dog Family"
```

## Good names

- ✅ descriptive
- ✅ snake case
- ✅ start with a letter

We talked about a lot of things NOT to do, so here are examples of good names. When your programs get larger, you might have parts of them in different files. You'll be glad if you give your variables unique, descriptive names.

### ✅ Descriptive, ✅ Snake case, ✅ Starts with a letter

In the ["Silly Stories" project](/docs/python/foundations/projects/silly-stories-v1), variable names like `noun1` are descriptive enough. You know you need a noun, but we don't want to give away anything about the story. It's ok to have a number without the underscore.

If you make a game, you might want to know `current_player` rather than player1 vs player2. Game logic would be based on whose turn it is, a current_player, rather than player1. `current_player` is descriptive, starts with a letter, and is snake case!

Maybe you have something that gives you a True or False (like a yes or no) if you check for a winner: `check_winner`.
<!-- markdownlint-disable-next-line MD033 -->
Try out some good names by creating new cells in <a href="/lite/lab/index.html?path=python/01-foundations/04-naming-conventions.ipynb">the Lab</a>


```python
bad_name = "not descriptive"
```


```python
test_input = "this name can be fine"
fake_input = "this can be ok too"
```


```python
zombie_npc = "A zombie lurches toward you!"
```

## Conclusion

In conclusion, we talked about good ideas for naming variables in Python. Names should be descriptive, start with a letter, and be snake_case!
