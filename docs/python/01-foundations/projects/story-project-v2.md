---
sidebar_label: story project v1
sidebar_position: 4
last_update:
    date: 7/01/25
    author: krblackwell
description: Silly Story Project with Python for Absolute Beginners
tags: ['python', 'project', 'silly stories', 'foundations', 'lists']
draft: False
unlisted: False
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/projects/story-project-v2.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/projects/story-project-v2) - [Go to Foundations section](/docs/python/foundations)

# Story Project v2

We created a "Silly Story" in [Story Project v1](/docs/python/foundations/projects/story-project-v1), and we're going to expand on that with lists.

## What is a Silly Story?

**(exclamation)**! Well, if **(person)** has never heard of a **(adjective)** Story, that's a shame!

A Silly Story is a sentence that has some words taken out, and a friend fills them in (no peeking!).

## Let's start with the full story

Here is the story we used before.

Pip is an axolotl who lives in a beautiful lake. Every day, Pip wakes up with a yawn, and eats his breakfast of waffles. He goes to the market. As he passes his turtle friends, they exclaim, "What a beautiful day!"

The next cell contains the story with variables inserted, so you can add words in


```python
name = 'Fifi'
type_of_animal = 'dog'
adjective1 = 'fizzy'
noun1 = 'nose'
noun2 = 'crinkle paper'
noun3 = 'cactus'
place = 'Timbuktu'
type_of_animal2 = 'gopher'
exclamation = "Whoa"

print(f"""
{name} is a/an {type_of_animal} who lives in a {adjective1} lake. Every day,
{name} wakes up with a/an {noun2}, and eats his breakfast of {noun3}.
He goes to the {place}.
As he passes his {type_of_animal2} friends, they exclaim, "{exclamation}!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
    Fifi is a/an dog who lives in a fizzy lake. Every day,  
    Fifi wakes up with a/an crinkle paper, and eats his breakfast of cactus.  
    He goes to the Timbuktu.  
    As he passes his gopher friends, they exclaim, "Whoa!"  
      


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now that we know lists, we can do something here to create a new story each time we run the cell!

We can create a list of names, for example.


```python
names = ['Fifi', 'James', 'Sam', 'Opal', 'Jackson', 'Lakshmi', 'Chloe']

names
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['Fifi', 'James', 'Sam', 'Opal', 'Jackson', 'Lakshmi', 'Chloe']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Random

Something interesting we can do here is randomly pick from this list. But how do we do that? With the `random` library. This is one that you'll have to use `import` to bring in to your program.

You'll see I also set `random.seed(5)`. This is so when I run this notebook through tests, I get the same result every time. I only want a test to fail if something has changed about the functionality of a package or piece of code.

If a test fails because of something being randomly generated, and that's how it works! I don't want it to fail because it's working.


```python
import random

random.seed(5)  # gives me the same result for a first run through
```

Run the below cell a couple of times. You should see the value of `random_choice` change.


```python
random_choice = random.randint(0, len(names) - 1)

random_choice
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    4



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

You should only see numbers ranging from 0 to 6. The first index of the list `name` is 0 and the last one is 6. If we randomly generate the index, we can get a new name each time.

We'll create some lists below, and give them plural names.


```python
names = ['Fifi', 'Cookie', 'Steve', 'Sean', 'Barry', 'James', 'Sam',
         'Opal', 'Jackson', 'Lakshmi', 'Chloe', 'Regan', 'Phoebe']
types_of_animals = ['dog', 'cat', 'snake', 'parrot', 'budgie',
                    'bunny', 'sugar bear', 'hermit crab']
adjectives = ['fizzy', 'stinky', 'flat', 'long', 'hairy', 'shimmery']
nouns = ['nose', 'yawn', 'waffles', 'cat food', 'funyuns', 'phone',
         'journal', 'bowling ball', 'tree', 'pumpkin', 'ceramic art']
places = ['city of Timbuktu', 'forge', 'internet', 'backyard',
          'mountain', 'volcano', 'kitchen']
exclamations = ["Whoa", 'Hooray', 'Huzzah', 'Yippee', 'Oh no', 'What',
                "For Pete's Sake", 'How']
```

Next, we'll get a random value for each placeholder.


```python
# Rerun me #1

random_name = random.randint(0, len(names) - 1)
random_animal1 = random.randint(0, len(types_of_animals) - 1)
random_animal2 = random.randint(0, len(types_of_animals) - 1)
random_adjective1 = random.randint(0, len(adjectives) - 1)
random_noun1 = random.randint(0, len(nouns) - 1)
random_noun2 = random.randint(0, len(nouns) - 1)
random_noun3 = random.randint(0, len(nouns) - 1)
random_place = random.randint(0, len(places) - 1)
random_exclamation = random.randint(0, len(exclamations) - 1)
```

:::tip
Rerun the cell above to get different numbers.

`random.seed()` makes sure I get the same numbers each time.

Run the above cell, "Rerun me #1" then rerun "Rerun me #2" and "Rerun me #3" below.

Rerun the lists if you change them!
:::

Now you can see each of these is a number that goes from 0 (first element in the list) to `len(list) - 1`, which is the length of the list. We minus 1 because lists start a 0.


```python
len(names)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    13



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
len(names) - 1
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    12



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Here is one way to get the last item of a list.


```python
names[len(names) - 1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Phoebe'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And -1 is also how we can get the last item.


```python
names[-1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Phoebe'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Here are two examples of the random numbers we got.


```python
random_name
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    4



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
random_place
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    1



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We apply the random numbers to each list, so we get a random item each time.


```python
name = names[random_name]
```


```python
exclamations[random_exclamation]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Hooray'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
# Rerun me #2

name = names[random_name]
type_of_animal = types_of_animals[random_animal1]
adjective1 = adjectives[random_adjective1]
noun1 = nouns[random_noun1]
noun2 = nouns[random_noun2]
noun3 = nouns[random_noun3]
place = places[random_place]
type_of_animal2 = types_of_animals[random_animal2]
exclamation = exclamations[random_exclamation]
```


```python
# Rerun me #3

print(f"""
{name} is a/an {type_of_animal} who lives in a {adjective1} lake. Every day,
{name} wakes up with a/an {noun2}, and eats his breakfast of {noun3}.
He goes to the {place}.
As he passes his {type_of_animal2} friends, they exclaim, "{exclamation}!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
    Barry is a/an bunny who lives in a long lake. Every day,  
    Barry wakes up with a/an ceramic art, and eats his breakfast of nose.  
    He goes to the forge.  
    As he passes his dog friends, they exclaim, "Hooray!"  
      


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Try making your own silly story, or fill in one with a friend! Add to the lists or fill them in with your own words.

:::tip
<a href="/lite/lab/index.html">Open a new blank notebook in the Lab</a> to test if you can remember how to do this on your own! To open a new notebook from the link, click on the tile that says "Py" or "Python."
:::

## Conclusion

We were able to take our silly story and add lists in to the mix. We learned how to use `import random` to get random values from the lists to make our story more interesting.
