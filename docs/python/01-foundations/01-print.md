---
sidebar_label: prints
sidebar_position: 1
last_update:
    date: 6/28/25
    author: krblackwell
description: Introductory Python - What are prints?
tags: ['python', 'foundations', 'print']
draft: False
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/01-print.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/print) - [Go to Foundations section](/docs/python/foundations)

# What is print?

`print()` is something you'll be using a lot. It can help you with a lot of things:

- Show information.
- Figure out something wrong.

## Learning Objectives

In this notebook, you'll learn about what a print statement is, and how to use it.

- `print()` can display information.
- `print()` can even help us make basic games.

## `print()` shows us information on the screen

When you display text, you use the `print()` statement. Here is the print statement that you traditionally start with in coding!


```python
print("Hello World!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Hello World!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We can print a lot of things, and this is very useful to understand what's happening in your program.

Before we keep talking about print, I want to mention that code cells in a notebook will "print" without `print()`.


```python
"The cell will show this" + " like it's printed"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    "The cell will show this like it's printed"



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
x = 2
x + 1
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    3



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Let me show you some more print statements for fun!

There's another way to print multiple lines at once using triple quotes `"""`. This is called a `multiline string`.


```python
print("""
A multiline string
goes over more than one line,
and can contain "quoted" stuff,
or 'single quoted' stuff,
or a word with an apostrophe.
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
    A multiline string  
    goes over more than one line,  
    and can contain "quoted" stuff,  
    or 'single quoted' stuff,  
    or a word with an apostrophe.  
      


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### Game project

Over the next few lessons, let's make a couple of simple games with text. We can make a choose-your-own adventure type of game, and a Mad Libs style game!

The game will display a menu. The `user`, meaning the person playing the game, can choose a theme, like sci-fi. Text will appear on the screen and ask you what you'd like to do next.

### Game menu

Let's think through a game menu step by step. Imagine we want to make a few text-based games. We can give the user two choices, if they want a sci-fi type of game or a fantasy one.


```python
print("Game Menu")
print("1. Sci-Fi")
print("2. Fantasy")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Game Menu  
    1. Sci-Fi  
    2. Fantasy  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Perhaps we can improve it by adding emojis. `print()` will display emojis!


```python
print("🎮 Game Menu")
print("1. 🚀 Sci-Fi")
print("2. 🧙 Fantasy")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    🎮 Game Menu  
    1. 🚀 Sci-Fi  
    2. 🧙 Fantasy  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

That's nice, but maybe we can make the "Game Menu" stand out more by adding a line underneath it.


```python
print("🎮 Game Menu")
print("------------")
print("1. 🚀 Sci-Fi")
print("2. 🧙 Fantasy")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    🎮 Game Menu  
    ------------  
    1. 🚀 Sci-Fi  
    2. 🧙 Fantasy  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

That's looking nice. Let's go bananas and add more categories, including a choice so the user can exit the game.


```python
print("🎮 Game Menu")
print("------------")
print("1. 🚀 Sci-Fi")
print("2. 🧙 Fantasy")
print("3. 🦖 Dinosaur")
print("4. 🕵️ Mystery")
print("6. ❌ Quit")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    🎮 Game Menu  
    ------------  
    1. 🚀 Sci-Fi  
    2. 🧙 Fantasy  
    3. 🦖 Dinosaur  
    4. 🕵️ Mystery  
    6. ❌ Quit  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Apostrophes

The print statements above all have used double quotes `"`, but you can use single quotes too.


```python
print('I can use single quotes, too!')
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    I can use single quotes, too!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

One thing that will be important if you make your text game, is you need to know how to print something with a contraction, or other things with single quotes. A contraction is a word that is two words in one, separated by an apostrophe, like "it is" = "it's"

They need to be surrounded in print with double quotes. So our line isn't too long, we separate it onto two lines. We also use a + to combine the two strings together. See below.


```python
print("This print statement contains an apostrophe, "
      + "so it needs double quotes. It's is a contraction.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    This print statement contains an apostrophe, so it needs double quotes. It's is a contraction.  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The triple quotes also allows double quotes and single quotes inside it.

Just be mindful of the types of quotes you're using in a program, and how they're `nested` with each other. Nested means when something is between something else. The double quotes in the example below are nested between triple quotes.

I'm going to explain to you how the quotes are in the `print()` below. "triple quotes start" and "triple quotes end" refer to the three quotation marks next to each other where you see `print("""` and `""")`.

The part that says "double quotes start and end" refers to "But I can next "double quotes" within the triple quotes."

```text
"""   -> triple quotes start
" "   -> double quotes start and end
'     -> a single quote by itself!
' '   -> single quote start and end
" ' " -> double quotes in single quotes
"""   -> triple quotes end
```

"Keep up with the Jones's" is an expression about staying with current trends.


```python
print("""
This is all nested within triple quotes.
But I can nest "double quotes" within the triple quotes.
Don't you see my single quote?
'But this is fine here too'
"Keep up with the Jones's" if you want to use quotes.
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
    This is all nested within triple quotes.  
    But I can nest "double quotes" within the triple quotes.  
    Don't you see my single quote?  
    'But this is fine here too'  
    "Keep up with the Jones's" if you want to use quotes.  
      


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

In some programming languages, writing code like the examples above can be tricky because you have to use special marks called `slashes` next to the quotes.

But in Python, it’s easier! Most of the time, you don’t need to add those slashes when you use `print()`.

One thing to watch out for is `unbalanced` quotes. That means if you start with a quote `"`, you have to finish with a matching quote `"`. Otherwise, Python gets confused and shows an error. Study the above example carefully.

The only time it’s okay not to close a quote right away is if you’re using triple quotes `"""` to write multiple lines or if the quotes are inside other quotes — like in the examples we did!

## Recap

In conclusion, we learned about `print()` and how to use it.

- It can display information for us, and print on multiple lines.
- We learned to watch out for the types of quotes `'` `"` `"""` we're using together.
- We can use emojis.
- We'll be able to make a game!

After the first few lessons, go to the "projects" folder and try out [Silly Story v1](/docs/python/foundations/projects/story-project-v1). This is the first game you make.
