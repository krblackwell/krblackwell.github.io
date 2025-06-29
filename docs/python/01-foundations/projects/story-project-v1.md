---
sidebar_label: story project v1
sidebar_position: 1
last_update:
    date: 6/20/25
    author: krblackwell
description: Silly Story Project with Python for Absolute Beginners
tags: ['python', 'project', 'silly-stories', 'foundations', 'print', 'variables', 'f-strings']
draft: False
unlisted: False
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/projects/story-project-v1.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/projects/story-project-v1) - [Go to Foundations section](/docs/python/foundations)

# Project - Silly Stories v1

You may know some _libs_ that might be a little _mad_! Those silly sentences with fill-in-the-blank words are a fun game to play. We're going to start with that for our project.

You need to know the following:

- variables
- `print()`
- f-strings

That's it! And you don't have to do this with f-strings, but we are going to.

## What is a Silly Story?

**(exclamation)**! Well, if **(person)** has never heard of a **(adjective)** Story, that's a shame!

A Silly Story is a sentence that has some words taken out, and a friend fills them in (no peeking!).

## Let's start with the full story

Here is the story we'll use.

Pip is an axolotl who lives in a beautiful lake. Every day, Pip wakes up with a yawn, and eats his breakfast of waffles. He goes to the market. As he passes his turtle friends, they exclaim, "What a beautiful day!"

Print this story in the next cell. So my line isn't too long, I'm using the triple quotes `"""` and putting it on multiple lines. This isn't an f-string, so there is no f at the start.


```python
print("""
Pip is an axolotl who lives in a beautiful lake. Every day,
Pip wakes up with a yawn, and eats his breakfast of waffles.
He goes to the market.
As he passes his turtle friends, they exclaim, "What a beautiful day!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    
    Pip is an axolotl who lives in a beautiful lake. Every day,
    Pip wakes up with a yawn, and eats his breakfast of waffles.
    He goes to the market.
    As he passes his turtle friends, they exclaim, "What a beautiful day!"
    


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Replace words with variables

The next step is to replace some of the words with variables that we will say are parts of speech, or specific types of words. Let's replace the name of our character with a variable. Remember to add the `f`!


```python
name = 'Pip'

print(f"""
{name} is an axolotl who lives in a beautiful lake. Every day,
{name} wakes up with a yawn, and eats his breakfast of waffles.
He goes to the market.
As he passes his turtle friends, they exclaim, "What a beautiful day!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    
    Pip is an axolotl who lives in a beautiful lake. Every day,
    Pip wakes up with a yawn, and eats his breakfast of waffles.
    He goes to the market.
    As he passes his turtle friends, they exclaim, "What a beautiful day!"
    


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

If you open this notebook up in the Lab, you can play around with the name value (try your name!) and with the different words to replace. In the next few steps, we'll remove a few different words one at a time.

:::tip
The lab is a good place to do this project.
:::


```python
name = 'Pip'
type_of_animal = 'axolotl'

print(f"""
{name} is a/an {type_of_animal} who lives in a beautiful lake. Every day,
{name} wakes up with a yawn, and eats his breakfast of waffles.
He goes to the market.
As he passes his turtle friends, they exclaim, "What a beautiful day!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    
    Pip is a/an axolotl who lives in a beautiful lake. Every day,
    Pip wakes up with a yawn, and eats his breakfast of waffles.
    He goes to the market.
    As he passes his turtle friends, they exclaim, "What a beautiful day!"
    


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
name = 'Pip'
type_of_animal = 'axolotl'
adjective1 = 'beautiful'

print(f"""
{name} is a/an {type_of_animal} who lives in a {adjective1} lake. Every day,
{name} wakes up with a yawn, and eats his breakfast of waffles.
He goes to the market.
As he passes his turtle friends, they exclaim, "What a beautiful day!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    
    Pip is a/an axolotl who lives in a beautiful lake. Every day,
    Pip wakes up with a yawn, and eats his breakfast of waffles.
    He goes to the market.
    As he passes his turtle friends, they exclaim, "What a beautiful day!"
    


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
name = 'Pip'
type_of_animal = 'axolotl'
adjective1 = 'beautiful'
noun1 = 'day'

print(f"""
{name} is a/an {type_of_animal} who lives in a {adjective1} lake. Every day,
{name} wakes up with a yawn, and eats his breakfast of waffles.
He goes to the market.
As he passes his turtle friends, they exclaim, "What a beautiful day!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    
    Pip is a/an axolotl who lives in a beautiful lake. Every day,
    Pip wakes up with a yawn, and eats his breakfast of waffles.
    He goes to the market.
    As he passes his turtle friends, they exclaim, "What a beautiful day!"
    


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Since you get the idea, I'll replace the rest.


```python
name = 'Pip'
type_of_animal = 'axolotl'
adjective1 = 'beautiful'
noun1 = 'day'
noun2 = 'yawn'
noun3 = 'waffles'
place = 'market'
type_of_animal2 = 'turtle'
exclamation = "What a beautiful day"

print(f"""
{name} is a/an {type_of_animal} who lives in a {adjective1} lake. Every day,
{name} wakes up with a/an {noun2}, and eats his breakfast of {noun3}.
He goes to the {place}.
As he passes his {type_of_animal2} friends, they exclaim, "{exclamation}!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    
    Pip is a/an axolotl who lives in a beautiful lake. Every day,
    Pip wakes up with a/an yawn, and eats his breakfast of waffles.
    He goes to the market.
    As he passes his turtle friends, they exclaim, "What a beautiful day!"
    


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now I'm going to show that you can change the values and get a silly story! These come from one we did at home.


```python
name = 'Cookie'
type_of_animal = 'cat'
adjective1 = 'smelly'
noun1 = 'glue'
noun2 = 'egg'
noun3 = 'boombox'
place = 'volcano'
type_of_animal2 = 'snake'
exclamation = "AH"

print(f"""
{name} is a/an {type_of_animal} who lives in a {adjective1} lake. Every day,
{name} wakes up with a/an {noun2}, and eats his breakfast of {noun3}.
He goes to the {place}.
As he passes his {type_of_animal2} friends, they exclaim, "{exclamation}!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    
    Cookie is a/an cat who lives in a smelly lake. Every day,
    Cookie wakes up with a/an egg, and eats his breakfast of boombox.
    He goes to the volcano.
    As he passes his snake friends, they exclaim, "AH!"
    


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Try making your own silly story, or fill in one with a friend!
<!-- markdownlint-disable MD033 -->
:::tip
<a href="/lite/lab/index.html">Open a new blank notebook in the Lab</a> to test if you can remember how to do this on your own! To open a new notebook from the link below, click on the tile that says "Py" or "Python."
:::
<!-- markdownlint-enable MD033 -->

## Conclusion

In conclusion, we can use our new understanding of variables, the f-strings, and prints together to make a simple game. We'll come back to our Silly Stories as we learn more about how to code!
