---
sidebar_label: comparisons
sidebar_position: 10
last_update:
    date: 7/02/25
    author: krblackwell
description: How do I compare stuff? Logical and comparison operators in Python
tags: ['python', 'foundations', 'operators', 'comparison']
draft: False
unlisted: False
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/10-logical-and-comparison-operators.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/logical-and-comparison-operators) - [Go to Foundations section](/docs/python/foundations)

# How do I compare things?

This lesson is going to cover how to compare things. You've seen the `==` equals comparison operator in a few lessons. This let's you know if two things are the same.

This becomes even more important when you get to the next section. The if-thens and looping that we're going to get into depend on these comparisons.

## Learning Objectives

- `is`
- Comparing strings
- Logical operators
- Comparison operators

There are `pythonic` ways of doing things in Python. There is a quick way to get the idea of this if you `import this`.


```python
import this
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    The Zen of Python, by Tim Peters  
      
    Beautiful is better than ugly.  
    Explicit is better than implicit.  
    Simple is better than complex.  
    Complex is better than complicated.  
    Flat is better than nested.  
    Sparse is better than dense.  
    Readability counts.  
    Special cases aren't special enough to break the rules.  
    Although practicality beats purity.  
    Errors should never pass silently.  
    Unless explicitly silenced.  
    In the face of ambiguity, refuse the temptation to guess.  
    There should be one-- and preferably only one --obvious way to do it.  
    Although that way may not be obvious at first unless you're Dutch.  
    Now is better than never.  
    Although never is often better than *right* now.  
    If the implementation is hard to explain, it's a bad idea.  
    If the implementation is easy to explain, it may be a good idea.  
    Namespaces are one honking great idea -- let's do more of those!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

This is called the Zen of Python. It's a guide to writing Python code. Some of the big takeaways is that coding should be straightforward and simple. You want code to be clear and readable.

Someone else should be able to follow it and understand what's going on.

But code is also about a balance. Sometimes you need to code something that's ugly, because that's the only way to achieve your results in a way that's practical.

## `is`

The first way of comparing that I'm going to talk about is using the `is` identity operator. It is considered pythonic to use it in certain situations.


```python
var = None

var is None
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

You can check if something `is None`, and this is better than doing `== None` like ~~`var == None`~~ which has a strikethrough because it's like looking at the sun! Don't look! You don't want to do it that way.

This check will make more sense when you start working with functions.


```python
no_list = None

no_list is None
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Remember `None` has a special meaning where something is intentionally missing, or doesn't have anything assigned yet.

`is` checks if something has the same location in memory. Remember this is something that's important to know about working with lists and dictionaries. We used `id()` to check if two lists are the same, but we can also use `is` to do the same check.


```python
list1 = [1, 2, 3]

list2 = list1

list1 is list2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

But remember two lists can be the same to us, but have different locations in memory. It depends on how they are created. So if we want to check that two lists or two dictionaries are the same, as in they have the same elements, we check them in a different way.

In other words. If we want to know if list1's items are the same as list2's items below, we have to loop through and check.

But we can see with our eyes that they have the same items/elements in them.


```python
list1 = [1, 2, 3]
list2 = [1, 2, 3]

list1 is list2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And dictionaries are like lists in this way, too.


```python
dict1 = {
    "key1": 1,
    "key2": 2,
    "key3": 3
}

dict2 = dict1

dict1 is dict2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Look at the two empty dictionaries below. Like the "identical" lists, these two empty dictionaries below are the same to us, but they have different locations in memory.


```python
dict1 = {}
dict2 = {}

dict1 is dict2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

If I make changes to one, it doesn't make changes to the other. They're independent.


```python
dict1['new'] = "thing"

dict2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    \{\}



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Comparing strings

We compare strings basically the same was as comparing numbers, but there's one `pythonic` way of comparing that I want to point out.

If we want to know whether something is **in** a list or if a string contains another string, we use `in`.

In the example below, we look for the word "example" in "An example string" and we find it!


```python
example_string = "An example string"

"example" in example_string
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

But remember, case matters in Python. The computer doesn't know that we might not care if it's "Example" or "example" that we're looking for.


```python
"Example" in example_string
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We can ignore case by making both sides uppercase or lowercase.


```python
"Example".upper() in example_string.upper()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
"Example".lower() in example_string.lower()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We can use this for lists with numbers and other things. Like this:


```python
list1 = [1, 2, 3]

1 in list1
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Let's look at a dictionary next. It has the word "xylophone" in it. We can see it.


```python
person_dict = {
    "name": "Bingo",
    "likes": ["owls", "xylophone", "books"]
}

"xylophone" in person_dict
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Why can't it find it? There is a reason. Let's check a different way. We have to check the values in the keys individually. Xylophone is part of "likes" and you can't check the dictionary itself like we did above.


```python
"xylophone" in person_dict.get("likes")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Or like this with a list of strings:


```python
string_list = ["aardvark", "hat", "yolo"]

"yolo" in string_list
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`)

When we want to compare things, we want to know if they're equal.\
We might want to know if they're not equal.\
We might want to know if they're

- less than, or
- greater than something else.

And when working with less than `<` or greater than `>`, you also might want to include something equal to, to get less than or equal to `<=` or greater than or equal to `>=`.

In some cases in Python, like working with the Pandas library for example, you'll want to wrap your comparisons in parentheses (a > b) to make sure things evaluate in the right order and that they evaluate at all.

Based on my experience, I recommend always wrapping your comparisons in parentheses. If you have a single comparison in a single cell, it's fine to leave them out.

### `==` and `!=` equals and not equals

1 doesn't equal 2, so we see false when we ask if 1 = 2. In programming, you usually compare with two equals signs and assign a value to a variable with one equal sign.


```python
1 == 2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

I recommend you put parentheses around your comparisons.


```python
(1 == 2)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

You can check if one string equals another. Remember, it'll only say `True` if they're the same case and everything.


```python
"This is the same" == "This is the same"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

See, "This" and "this" are seen as different.


```python
"This is different" == "this is different"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

But we can fix that, by making everything the same case. You can do uppercase or lowercase.


```python
"This is different".lower() == "this is different".lower()
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Nice! They're the same.

And of course, we'll see two things return `False` if they're obviously different like the next example.


```python
"This is different." == "Than this"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

These two strings are the same. If we use `!=`, it'll say `False`. We're asking "are these different?" `False` means "no" they're not different.


```python
"This is the same" != "This is the same"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

So then if we ask if two different strings are different with `!=`, you'll see `True`. Are they different? Yes! True.


```python
"This is different." != "Than this"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The same with numbers. 3 is the same as 3.


```python
3 == 3
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

It might be easier to see this way. Note, you can leave out the parentheses, and it'll understand what you mean.


```python
3 == 1 + 2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

I still recommend putting parentheses around things. It makes it easier to read, and it makes it clear that you're comparing (1 + 2) with 3.


```python
3 == (1 + 2)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Just like when you ask if two strings are the same, you ask "is 3 not 3?" and you get `False`. Because 3 is the same as 3.


```python
3 != 3
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Another example, 1 is different from 2. True!


```python
1 != 2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `>` and `<` greater than and less than

For the greater than/less than operators, you'll want to use numbers for comparison. And you know 1 is less than 3, so we see `True`.


```python
1 < 3
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Remember you have the **less than OR equal to** operator. That includes the same number. In this next example, we want to know... Is 2 less than or equal to 2? It's equal to 2, so we see `True`!


```python
2 <= 2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

It doesn't matter how much larger the other number is when you check if something is greater or less than. Is 2 less than or equal to 1000? Yep! `True`.


```python
2 <= 1000
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

6 is greater than 3. We see `True`.


```python
6 > 3
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Just like with 2 less than or equal to 2, we can check if 4 is **greater than or equal to** 4. It's equal to, so we get `True`.


```python
4 >= 4
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

It works with negative numbers too. 4 is greater than or equal to -2.


```python
4 >= -2
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Logical operators (`and`, `or`, `not`)

Logical operators can join things together. Think of multiple comparisons like a sentence, and these are your conjunctions. Sometimes you can also use symbols for these:

and - &\
or - |\
not - !

Some packages will allow you to use the symbols and some allow you to use the words. I usually use the symbols, but some people do find the words more readable, so I will try to use the words more often in these lessons.

### and `&`

Both conditions with `and` must be true for the whole thing to be true.


```python
(1 == 1) & (2 == 2)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
(1 == 1) and (2 == 2)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

But here's one where one condition is true and the other is false. Both must be true for us to get true with `and`.


```python
(1 == 1) and (2 == 10)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

It doesn't matter if most are true. Only one has to be false for it to be false.


```python
(1 == 1) and (2 == 10) and (2 == 2) and (3 == 3)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### or `|`

But with `or`, only one has to be true to get true, no matter how many are false.


```python
(1 == 1) | ("not same" == "same?")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

You might have to pause for `not`. It reverses the `True` or `False`.


```python
not True
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
not False
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### not

not (1 == 2) means `not False` so we get `True`


```python
not (1 == 2)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And the truthy or falsy values are reversed with not!

1 is truthy. `not 1` becomes `False`.


```python
not 1
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

0 is falsy. `not 0` is `True`.


```python
not 0
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

"" is falsy, so `not ""` is `True`.


```python
not ""
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

A string with values in it is truthy, so `not "anything"` is False.


```python
not "anything"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Conclusion

There was a lot to cover here, but now you can compare two things, more than two things, three comparisons, anything!

Here is a table summarizing them all:

### Comparison Operators

| Operator | Name                 | Example         | Description                                  |
|----------|----------------------|------------------|----------------------------------------------|
| `==`     | Equal to             | `a == b`         | True if `a` is equal to `b`                  |
| `!=`     | Not equal to         | `a != b`         | True if `a` is not equal to `b`              |
| `>`      | Greater than         | `a > b`          | True if `a` is greater than `b`              |
| `<`      | Less than            | `a < b`          | True if `a` is less than `b`                 |
| `>=`     | Greater than or equal| `a >= b`         | True if `a` is greater than or equal to `b`  |
| `<=`     | Less than or equal   | `a <= b`         | True if `a` is less than or equal to `b`     |
| `is`     | Identity             | `a is b`         | True if `a` and `b` refer to the same object |
| `is not` | Not identity         | `a is not b`     | True if `a` and `b` are not the same object  |
| `in`     | Included/part of       | `a in b`         | True if `a` is in `b`                        |
| `not in` | Not included/part of       | `a not in b`     | True if `a` is not in `b`                    |

### Logical Operators

| Operator | Name   | Example             | Description                                      |
|----------|--------|---------------------|--------------------------------------------------|
| `and`    | And    | `a and b`           | True if both `a` and `b` are True                |
| `or`     | Or     | `a or b`            | True if either `a` or `b` is True                |
| `not`    | Not    | `not a`             | True if `a` is False                             |
