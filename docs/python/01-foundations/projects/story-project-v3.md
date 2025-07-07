---
sidebar_label: story project v3
sidebar_position: 5
last_update:
    date: 7/02/25
    author: krblackwell
description: Silly Story Project with Python for Absolute Beginners
tags: ['python', 'project', 'silly stories', 'foundations', 'dictionaries']
draft: False
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/projects/story-project-v3.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/projects/story-project-v3) - [Go to Foundations section](/docs/python/foundations)

# Story Project v3

We created a "Silly Story" in [Story Project v1](/docs/python/foundations/projects/story-project-v1), [Story Project v2](/docs/python/foundations/projects/story-project-v2), and we're going to expand on that with dictionaries.

## What is a Silly Story?

**(exclamation)**! Well, if **(person)** has never heard of a **(adjective)** Story, that's a shame!

A Silly Story is a sentence that has some words taken out, and a friend fills them in (no peeking!).

## Let's start with the full story

Here is the story we used before.

Pip is an axolotl who lives in a beautiful lake. Every day, Pip wakes up with a yawn, and eats his breakfast of waffles. He goes to the market. As he passes his turtle friends, they exclaim, "What a beautiful day!"

The next cell contains the story with variables inserted, so you can add words in


```python
name = 'Lionel'
type_of_animal = 'mosasaurus'
adjective1 = 'bubbly'
noun1 = 'blip'
noun2 = 'shriek'
noun3 = 'rain'
place = 'bazaar'
type_of_animal2 = 'bubble'
exclamation = "No way"

print(f"""
{name} is a/an {type_of_animal} who lives in a {adjective1} {noun1}. Every day,
{name} wakes up with a/an {noun2}, and eats his breakfast of {noun3}.
He goes to the {place}.
As he passes his {type_of_animal2} friends, they exclaim, "{exclamation}!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
    Lionel is a/an mosasaurus who lives in a bubbly blip. Every day,  
    Lionel wakes up with a/an shriek, and eats his breakfast of rain.  
    He goes to the bazaar.  
    As he passes his bubble friends, they exclaim, "No way!"  
      


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now that we know about dictionaries, we can do a few things.

We can create a dictionary for the input data.


```python
words = {
    "name": "Lionel",
    "type_of_animal": "mosasaurus",
    "adjective1": "bubbly",
    "noun1": "blip",
    "noun2": "shriek",
    "noun3": "rain",
    "place": "bazaar",
    "type_of_animal2": "bubble",
    "exclamation": "No way"
}

words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'name': 'Lionel',  
     'type_of_animal': 'mosasaurus',  
     'adjective1': 'bubbly',  
     'noun1': 'blip',  
     'noun2': 'shriek',  
     'noun3': 'rain',  
     'place': 'bazaar',  
     'type_of_animal2': 'bubble',  
     'exclamation': 'No way'\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And remember, we can get the values for each key like this.


```python
words.get("noun2")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'shriek'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
print(
    f"""
{words.get("name")} is a/an {words.get("type_of_animal")} who lives in a
{words.get("adjective1")} {words.get("noun1")}. Every day,
{words.get("name")} wakes up with a/an {words.get("noun2")}, and eats
his breakfast of {words.get("noun3")}. He goes to the {words.get("place")}.
As he passes his {words.get("type_of_animal2")} friends, they exclaim,
"{words.get("exclamation")}!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
    Lionel is a/an mosasaurus who lives in a  
    bubbly blip. Every day,  
    Lionel wakes up with a/an shriek, and eats  
    his breakfast of rain. He goes to the bazaar.  
    As he passes his bubble friends, they exclaim,  
    "No way!"  
      


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Dictionary + List

If we want to add the randomness of our lists from [v2](/docs/python/foundations/projects/story-project-v2), we can do that too! A dictionary can contain a list.

I'll give the keys plural names, and the values are lists.


```python
words = {
    "names": ['Fifi', 'Cookie', 'Steve', 'Sean', 'Barry', 'James',
              'Sam', 'Opal', 'Jackson', 'Lakshmi', 'Chloe',
              'Regan', 'Phoebe'],
    "types_of_animals": ['dog', 'cat', 'snake', 'parrot', 'budgie',
                         'bunny', 'sugar bear', 'hermit crab'],
    "adjectives": ['fizzy', 'stinky', 'flat', 'long', 'hairy',
                   'shimmery'],
    "nouns": ['nose', 'yawn', 'waffles', 'cat food', 'funyuns',
              'phone', 'journal', 'bowling ball', 'tree',
              'pumpkin', 'ceramic art'],
    "places": ['city of Timbuktu', 'forge', 'internet', 'backyard',
               'mountain', 'volcano', 'kitchen'],
    "exclamations": ["Whoa", 'Hooray', 'Huzzah', 'Yippee', 'Oh no',
                     'What', "For Pete's Sake", 'How']
}

words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'names': ['Fifi',  
      'Cookie',  
      'Steve',  
      'Sean',  
      'Barry',  
      'James',  
      'Sam',  
      'Opal',  
      'Jackson',  
      'Lakshmi',  
      'Chloe',  
      'Regan',  
      'Phoebe'],  
     'types_of_animals': ['dog',  
      'cat',  
      'snake',  
      'parrot',  
      'budgie',  
      'bunny',  
      'sugar bear',  
      'hermit crab'],  
     'adjectives': ['fizzy', 'stinky', 'flat', 'long', 'hairy', 'shimmery'],  
     'nouns': ['nose',  
      'yawn',  
      'waffles',  
      'cat food',  
      'funyuns',  
      'phone',  
      'journal',  
      'bowling ball',  
      'tree',  
      'pumpkin',  
      'ceramic art'],  
     'places': ['city of Timbuktu',  
      'forge',  
      'internet',  
      'backyard',  
      'mountain',  
      'volcano',  
      'kitchen'],  
     'exclamations': ['Whoa',  
      'Hooray',  
      'Huzzah',  
      'Yippee',  
      'Oh no',  
      'What',  
      "For Pete's Sake",  
      'How']\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
words.get("types_of_animals")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['dog',  
     'cat',  
     'snake',  
     'parrot',  
     'budgie',  
     'bunny',  
     'sugar bear',  
     'hermit crab']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
words.get("types_of_animals")[3]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'parrot'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Remember to `import random` and you don't have to set a seed unless you want to be able to reproduce a random result.


```python
import random
random.seed(16)
```

Now in order to get the list, you need `words.get()` in `len()`.


```python
random_name = random.randint(0, len(words.get("names")) - 1)
random_animal1 = random.randint(0, len(words.get("types_of_animals")) - 1)
random_animal2 = random.randint(0, len(words.get("types_of_animals")) - 1)
random_adjective1 = random.randint(0, len(words.get("adjectives")) - 1)
random_noun1 = random.randint(0, len(words.get("nouns")) - 1)
random_noun2 = random.randint(0, len(words.get("nouns")) - 1)
random_noun3 = random.randint(0, len(words.get("nouns")) - 1)
random_place = random.randint(0, len(words.get("places")) - 1)
random_exclamation = random.randint(0, len(words.get("exclamations")) - 1)
```

Since there's a lot going on here, we'll use variables to fill in the text like we did in [Silly Stories v1](/docs/python/foundations/projects/story-project-v1).


```python
name = words.get("names")[random_name]
type_of_animal = words.get("types_of_animals")[random_animal1]
adjective1 = words.get("adjectives")[random_adjective1]
noun1 = words.get("nouns")[random_noun1]
noun2 = words.get("nouns")[random_noun2]
noun3 = words.get("nouns")[random_noun3]
place = words.get("places")[random_place]
type_of_animal2 = words.get("types_of_animals")[random_animal2]
exclamation = words.get("exclamations")[random_exclamation]

print(f"""
{name} is a/an {type_of_animal} who lives in a {adjective1} {noun1}. Every day,
{name} wakes up with a/an {noun2}, and eats his breakfast of {noun3}.
He goes to the {place}.
As he passes his {type_of_animal2} friends, they exclaim, "{exclamation}!"
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
    James is a/an hermit crab who lives in a flat journal. Every day,  
    James wakes up with a/an cat food, and eats his breakfast of bowling ball.  
    He goes to the city of Timbuktu.  
    As he passes his hermit crab friends, they exclaim, "For Pete's Sake!"  
      


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Try making your own silly story, or fill in one with a friend! Add to the lists or fill them in with your own words.

:::tip
<a href="/lite/lab/index.html">Open a new blank notebook in the Lab</a> to test if you can remember how to do this on your own! To open a new notebook from the link, click on the tile that says "Py" or "Python."
:::

## Conclusion

We were able to take our silly story and add lists in to the mix. We learned how to use `import random` to get random values from the lists to make our story more interesting.
