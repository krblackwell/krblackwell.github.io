---
sidebar_label: dictionaries
sidebar_position: 9
last_update:
    date: 6/29/25
    author: krblackwell
description: How to use dictionaries in Python.
tags: ['python', 'foundations', 'dictionaries']
draft: False
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/09-dictionaries.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/dictionaries) - [Go to Foundations section](/docs/python/foundations)

# Dictionaries

In Python, dictionaries are a useful key-value pair. Javascript objects and R lists are just like Python dictionaries.

## Learning Objectives

- Key-value pairs
- Dictionary methods
  - `.get()`
  - `.set()`
  - `.list()`
  - `.copy()`
  - `.pop()`

There are a lot of things we can do with dictionaries, but we'll keep this one short.

## Key-value pairs

A dictionary in real life is something where you can look up a word and get information, a definition. In a Python dictionary, the "key" is the word, and the "value" is the definition.

To create an empty dictionary, it's similar to a list.

An empty list was created with square brackets `List = []`.\
An empty dictionary is created with curly braces `Dictionary = {}`.

Let's look at a word dictionary in Python dictionary format.


```python
dictionary_dict = {
    "cat": "a small pet feline",
    "sun": "the brightest star in our solar system",
    "book": "pages bound together"
}

dictionary_dict
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'cat': 'a small pet feline',  
     'sun': 'the brightest star in our solar system',  
     'book': 'pages bound together'\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

I can "look up" a word in my dictionary. Let's find the definition for "sun."


```python
dictionary_dict.get("sun")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'the brightest star in our solar system'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## `.get()` to get keys

If I want to find a definition in my dictionary, I can use `.get()` like you saw above. Next, let's find the definition for "book."


```python
book_definition = dictionary_dict.get("book")

book_definition
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'pages bound together'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Add key-value pairs

If I want to add another definition, I can do it like this.


```python
dictionary_dict['new word'] = 'new definition'

dictionary_dict
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'cat': 'a small pet feline',  
     'sun': 'the brightest star in our solar system',  
     'book': 'pages bound together',  
     'new word': 'new definition'\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

I added something to the dictionary.


```python
dictionary_dict['tree'] = 'a woody plant with leaves or needles'

dictionary_dict
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'cat': 'a small pet feline',  
     'sun': 'the brightest star in our solar system',  
     'book': 'pages bound together',  
     'new word': 'new definition',  
     'tree': 'a woody plant with leaves or needles'\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And we get one of our new definitions.


```python
dictionary_dict.get("tree")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'a woody plant with leaves or needles'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## `list()`

`list()` is a function that will return all the keys of a dictionary. So in our example, that means `list()` will show us the words in the dictionary.


```python
list(dictionary_dict)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['cat', 'sun', 'book', 'new word', 'tree']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## `.copy()`

We can also copy the dictionary, but like lists, you probably won't be doing this much. Be cautious when making copies of anything, so you don't lose track of which one is right.


```python
new_dictionary = dictionary_dict.copy()

new_dictionary
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'cat': 'a small pet feline',  
     'sun': 'the brightest star in our solar system',  
     'book': 'pages bound together',  
     'new word': 'new definition',  
     'tree': 'a woody plant with leaves or needles'\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The dictionary looks the same as the original. Next, let's check if we have to worry about the same issues as the lists. When we used `.copy()` with a list, our lists were different.


```python
id(new_dictionary) == id(dictionary_dict)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The two dictionaries are different, just like with the lists. They do not share a reference when we use `.copy()`. It's a `deep copy`, meaning the two variables are different. If we do something to one, we're NOT doing it to the other. They can be treated as independent things.

Just to be sure, though, let's check how a dictionary behaves if we set one equal to another.


```python
dictionary_dict2 = dictionary_dict

dictionary_dict2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'cat': 'a small pet feline',  
     'sun': 'the brightest star in our solar system',  
     'book': 'pages bound together',  
     'new word': 'new definition',  
     'tree': 'a woody plant with leaves or needles'\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
id(dictionary_dict2) == id(dictionary_dict)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

They are the same. If I make a change to one dictionary, it will make a change to the other. This is behaving just like lists with shared references to a memory location.

## `.pop()`

We have a `.pop()` method for dictionaries, like we did with lists. We have to give it an argument. Let's yeet "new word" out of this dictionary.


```python
dictionary_dict.pop("new word")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'new definition'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

That returned what we dropped from the dictionary. If we look at the dictionary, we'll see "new word" and its definition are both gone. `.pop()` dropped the whole key-value pair.


```python
dictionary_dict
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'cat': 'a small pet feline',  
     'sun': 'the brightest star in our solar system',  
     'book': 'pages bound together',  
     'tree': 'a woody plant with leaves or needles'\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Another example

A dictionary is not literally a dictionary, where it has to be words and their definitions. If you continue with Python, you might be using dictionaries a lot depending on what you do.

This is what a `JSON` format would look like storing a person and their favorite things. It's basically the same as a dictionary. This is a big step up from the previous example, but we'll look at it step by step.


```python
person1 = {
    "name": "Sam",
    "age": 14,
    "favorite_color": "green",
    "hobbies": ["running", "writing", "reading"],
    "pet": {
        "type": "cat",
        "name": "Steve"
    }
}

person1
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'name': 'Sam',  
     'age': 14,  
     'favorite_color': 'green',  
     'hobbies': ['running', 'writing', 'reading'],  
     'pet': \{'type': 'cat', 'name': 'Steve'\}\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

There's a lot in there! We have a few keys that are just like what we saw before. Notice the dictionary can hold different data types. The "name" value is a string, "Sam." But the "age" value is a number, 14.


```python
print(
    f"""
    Keys like before:
    name: {person1.get("name")}
    age: {person1.get("age")}
    favorite_color: {person1.get("favorite_color")}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        Keys like before:  
        name: Sam  
        age: 14  
        favorite_color: green  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The value for "hobbies" is a list. Once we get the value, we can use it like a list.


```python
type(person1.get("hobbies"))
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    list



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Get the list of hobbies.


```python
person1.get("hobbies")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['running', 'writing', 'reading']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Get the first item in the list.


```python
person1.get("hobbies")[0]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'running'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

It can also look like this to get the first item in the hobbies list.


```python
hobbies = person1.get("hobbies")

hobbies[0]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'running'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We could even add a hobby. When we add a dictionary key, we used `dictionary_dict['new word'] = 'definition'` and we'll do something similar here.


```python
person1['hobbies'].append("swimming")

person1
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'name': 'Sam',  
     'age': 14,  
     'favorite_color': 'green',  
     'hobbies': ['running', 'writing', 'reading', 'swimming'],  
     'pet': \{'type': 'cat', 'name': 'Steve'\}\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We can see when we look at the whole dictionary for `person1`, that we added swimming and didn't change anything else. We can see the hobbies values the following way too.


```python
person1['hobbies']
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['running', 'writing', 'reading', 'swimming']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And check the last item in the hobbies value list with `-1` because `.append()` adds something to the end of a list.


```python
person1['hobbies'][-1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'swimming'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Lastly, we can look at the "pet" key and see what its values are.


```python
person1.get("pet")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{'type': 'cat', 'name': 'Steve'\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
type(person1.get("pet"))
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    dict



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Interesting, we have a dictionary within a dictionary. We can get the values in different ways that achieve the same result.


```python
person1.get("pet").get("type")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'cat'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
person1["pet"]["type"]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'cat'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
pet = person1.get("pet")

pet['type']
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'cat'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

But, I do recommend you keep your program consistent. If you use `.get()`, use it. Don't switch between `.get()` and `[]` square brackets.


```python
pet = person1.get("pet")

pet.get("type")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'cat'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Conclusion

We covered dictionaries in this lesson. We went over how to use them, change them, and what one can look like that contains a list or dictionary in it.
