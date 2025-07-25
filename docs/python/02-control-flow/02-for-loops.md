---
sidebar_label: for loops
sidebar_position: 2
last_update:
    date: 7/20/25
    author: krblackwell
description: Python for loops - learn for loops.
tags: ['python', 'control-flow', 'loops']
draft: True
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/02-control-flow/02-for-loops.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/control-flow/for-loops) - [Go to Control Flow section](/docs/python/control-flow)

# For Loops

## Learning objectives

- simple loop
- `enumerate()`
- `range()`

For loops allow you to run code over and over. We often use them to go through elements of a list one at a time.

A real world example would be delivering food. Let's say a pizza delivery driver has to go to House 1, House 2, and House 3 to deliver orders. You could loop through the list of houses and say `for house in houses:` deliver pizza.

The most common for loop in Python is one that looks like the following. In some languages, this is called an "enhanced" for loop.

You need the `for` and `in` keywords. The line ends with a colon `:` and you have indented whitespace.


```python
mylist = ['a', 'b', 'c', 'd']

for letter in mylist:
    print(letter)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    a  
    b  
    c  
    d  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

In Python, another way you might do a for loop sometimes is like the following, with `enumerate`. This allows us to get the index and value of elements in a list.


```python
mylist = ['a', 'b', 'c', 'd']

for idx, val in enumerate(mylist):
    print(idx, val)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    0 a  
    1 b  
    2 c  
    3 d  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Sometimes this can be useful when you have two lists that are the same length and you need to use them together.


```python
mylist = ['a', 'b', 'c', 'd']
words = ['apple', 'banana', 'cherry', 'durian']

for idx, letter in enumerate(mylist):
    word = words[idx]
    print(letter, word)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    a apple  
    b banana  
    c cherry  
    d durian  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Sometimes, all you need is something like `range()` that allows you to create a list of numbers. Range starts at a number you specify, and ends **before** the second, ending number.


```python
for number in range(1, 7):
    print(number)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    1  
    2  
    3  
    4  
    5  
    6  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

See in the next example how `range()` is saved to a list and then I use it in a loop to look at each number one at a time.


```python
range_list = range(3, 9)

for number in range_list:
    print(number)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    3  
    4  
    5  
    6  
    7  
    8  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python

```
