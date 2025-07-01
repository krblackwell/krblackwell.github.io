---
sidebar_label: lists and strings
sidebar_position: 7
last_update:
    date: 6/29/25
    author: krblackwell
description: How to use lists and more string methods in Python.
tags: ['python', 'foundations', 'lists', 'strings', 'methods']
draft: False
unlisted: False
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/07-lists-and-strings.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/lists-and-strings) - [Go to Foundations section](/docs/python/foundations)

# Lists

`Lists` are a super useful `data structure` in Python. Sometimes this same type of structure is called an `array` in other programming languages.

`Data structures` hold multiple pieces of data, while `data type` describes the format of individual data pieces. A data structure might be like a picnic basket, and that picnic basket can hold multiple types of things in it, like an food, drink, utensils. Those types of things are like data types.

## Learning Objectives

- Learn what a list is and how to use it.
- Strings can be used like lists of characters.
- Strings can be split into lists of words.

## What is a list?

Lists are collections of things. A list can have all strings, all integers, and more. A list can contain a list of lists.


```python
pet_string_list = ['dog', 'cat', 'bird', 'guinea pig', 'turtle']

pet_string_list
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['dog', 'cat', 'bird', 'guinea pig', 'turtle']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
age_integer_list = [1, 34, 41, 55, 10]

age_integer_list
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    [1, 34, 41, 55, 10]



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
out_of_school_programs_list_of_lists = [
    ["Soccer Practice", "AV Club", "Homework Help"],        # Monday
    ["Chess Club", "Track Practice", "Art Studio"],         # Tuesday
    ["Debate Team", "Drama Club", "Coding Workshop"],       # Wednesday
    ["Science Club", "Basketball Practice", "Yearbook"],    # Thursday
    ["Film Club", "School Newspaper", "Open Gym"],          # Friday
]

out_of_school_programs_list_of_lists
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    [['Soccer Practice', 'AV Club', 'Homework Help'],  
     ['Chess Club', 'Track Practice', 'Art Studio'],  
     ['Debate Team', 'Drama Club', 'Coding Workshop'],  
     ['Science Club', 'Basketball Practice', 'Yearbook'],  
     ['Film Club', 'School Newspaper', 'Open Gym']]



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And in Python, the next example shows you can have different types of elements in the list. There's a string, an integer, a decimal, and a boolean!


```python
["String", 1, 0.99, True]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['String', 1, 0.99, True]



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And a list of lists.


```python
shopping_cart = [
    ["Book", 2, 19.99, True],
    ["Headphones", 1, 39.99, False],
    ["Pen", 3, 2.49, True]
]

shopping_cart
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    [['Book', 2, 19.99, True],  
     ['Headphones', 1, 39.99, False],  
     ['Pen', 3, 2.49, True]]



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Working with lists

Now we get what lists can look like. Let's look at how to work with them. We'll take a list of numbers.


```python
list_of_numbers = [1, 10, 24, 13, 40, 8]

list_of_numbers
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    [1, 10, 24, 13, 40, 8]



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Python lists start with 0 as their `index`.

| Index | 0 | 1 | 2 | 3 | 4 | 5 |
|-------|---|---|---|---|---|---|
| Element | 1 | 10 | 24 | 13 | 40 | 8 |

You can access each element in the list with the index.

If we want to get the second element, 10, we need to ask for index 1.


```python
list_of_numbers[1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    10



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now add some cells in the Lab and try that out with other index numbers! What happens if you ask it for a number that is larger than 5?

The next cell shows you a special way you can ask for the last element of a list. Use -1 as the index.


```python
list_of_numbers[-1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    8



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And if you keep going, you can go backwards through this list until you get to the first element again.


```python
list_of_numbers[-6]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    1



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Strings can be used like lists

You can treat strings like a list of characters by using the square brackets like you did with a list of items.


```python
"YMCA"[0]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Y'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
word = "YMCA"

word[1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'M'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
"YMCA"[2]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'C'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
"YMCA"[3]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'A'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
"YMCA"[-1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'A'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## String split into list of words

We can use the `.split()` method to turn our words into a list. By default, `.split()` separates words by whitespace. If there's at least one space, it'll use that as a separator.


```python
"a bunch of words".split()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['a', 'bunch', 'of', 'words']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We can get creative with this.


```python
original_sentence = "We have a list: this, that, and the other thing."

split_sentence = original_sentence.split(":")

split_sentence
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['We have a list', ' this, that, and the other thing.']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
split_sentence[1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ' this, that, and the other thing.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
split_sentence2 = split_sentence[1].split(',')

split_sentence2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    [' this', ' that', ' and the other thing.']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

When we get to the lessons about looping, we can do a little more to process this list.

## `.join()` text together

Join is a useful method for lists. It will take the list, and join each piece by something you specify into a single string.

Let's look at the pets list from earlier.


```python
pet_string_list = ['dog', 'cat', 'bird', 'guinea pig', 'turtle']

'✨'.join(pet_string_list)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'dog✨cat✨bird✨guinea pig✨turtle'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
type('✨'.join(pet_string_list))
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    str



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
'--'.join(pet_string_list)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'dog--cat--bird--guinea pig--turtle'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now let's get back to the example from our string lesson. We had some white space we couldn't easily deal with, but now we can.

First we use `.split()` to get rid of the random whitespace amounts.

Then, we can use `.join()` to bring it back together with the appropriate amount of whitespace.


```python
example = "   Extra spaces at the start,  in the middle  ,  and at the end.  "

example_split = example.split()

example_split
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['Extra',  
     'spaces',  
     'at',  
     'the',  
     'start,',  
     'in',  
     'the',  
     'middle',  
     ',',  
     'and',  
     'at',  
     'the',  
     'end.']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
' '.join(example.split())
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Extra spaces at the start, in the middle , and at the end.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Conclusion

Now you can handle strings and lists like a pro. There is more to cover for lists,
