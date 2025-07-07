---
sidebar_label: lists
sidebar_position: 8
last_update:
    date: 6/29/25
    author: krblackwell
description: How to use list methods.
tags: ['python', 'foundations', 'lists']
draft: False
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/08-lists.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/lists-and-strings) - [Go to Foundations section](/docs/python/foundations)

# Lists

Let's continue talking about lists. You can add to them, remove from them, and put two lists together.

:::warning
You may see `# NBVAL_IGNORE_OUTPUT` in a few cells for `id()`. You can ignore that comment. It's part of the testing that these notebooks go through.
:::

## Learning Objective

- `id()`
- List return
- Learn list methods (and a function)
  - `.append()`
  - `len()`
  - `.count()`
  - `.sort()`
  - `.insert()`
  - `.index()`
  - `.reverse()`  
  - `.remove()`
  - `.pop()`

## `id()` function

In Python, there is something you need to know that's different about lists compared with other programming languages.

A list in Python is a reference to a location in memory. When you create variables and other objects in Python, they have a location in memory. They have to go somewhere, right?

If you create a list that's assigned a new variable name, it will point to the same location in memory. We are copying a `reference` and it's called a `shallow copy`.

Let me show you.


```python
# NBVAL_IGNORE_OUTPUT

original_fruits_list = ['banana', 'papaya', 'strawberry', 'lychee', 'paw paw']

id_original = id(original_fruits_list)

id_original
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    129998931779008



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

What we just did was create a list, and get it's location in memory. That's what `id()` does. It gives you a unique ID that tells you its location in memory.

Next, we'll assign the list to a new name and get that ID.


```python
# NBVAL_IGNORE_OUTPUT

new_fruits_list = original_fruits_list

id_new = id(new_fruits_list)

id_new
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    129998931779008



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

So we have two lists that are the same. That number is the same as the other ID above. Let me show you they're the same with this equals `==` comparison operator. I'm asking if the `id_original` is the same as `id_new`.


```python
id_original == id_new
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Is it the same? True. True means yes it's the same. This is something you have to keep in mind with lists. In some programming languages, you can create a new variable of something, and the variable is totally new.

But Python does something a little different with lists! I can change the new or the old list, and both are changed.


```python
new_fruits_list.remove('strawberry')

new_fruits_list
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['banana', 'papaya', 'lychee', 'paw paw']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

`.remove()` took out the "strawberry" element. It's not in new_fruits_list anymore. But look, it's gone from original_fruits_list too.


```python
original_fruits_list
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['banana', 'papaya', 'lychee', 'paw paw']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We didn't even do `.remove("strawberry")` on it, and it was the same. Anything else we do to it, will happen to the other list too.

What if we create two lists that are the same?


```python
# NBVAL_IGNORE_OUTPUT

games_list_one = ['Poppy', 'Candy', 'Sudoku', 'Halo']
games_list_two = ['Poppy', 'Candy', 'Sudoku', 'Halo']

print(
    f"""
    {id(games_list_one)}
    vs
    {id(games_list_two)}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        129998932112448  
        vs  
        129998932111040  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
id(games_list_one) == id(games_list_two)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

They're different. If we do something to one, it doesn't happen to the other.


```python
games_list_one.pop()
games_list_two.append("RE")

print(
    f"""
    List values:
    'one': {games_list_one}
    'two': {games_list_two}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        List values:  
        'one': ['Poppy', 'Candy', 'Sudoku']  
        'two': ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE']  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

`.pop()` took off the last element in the list. `.append("RE")` added "RE" to the end of the list. What we did to one list didn't happen to the other. They were created separately and not assigned to each other.

But if we assign one to the other, then they have that shared reference that means changing one changes the other. See the next cell.


```python
# NBVAL_IGNORE_OUTPUT

games_list_one = games_list_two

print(
    f"""
    {id(games_list_one)}
    vs
    {id(games_list_two)}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        129998932111040  
        vs  
        129998932111040  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
id(games_list_one) == id(games_list_two)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

They're the same list.


```python
print(
    f"""
    List values:
    'one': {games_list_one}
    'two': {games_list_two}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        List values:  
        'one': ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE']  
        'two': ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE']  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now they're the same and if we do something to one, it happens to the other. I'll change games_list_two by appending to it, and check the other list, games_list_one.


```python
games_list_two.append("Dandy")

print(games_list_one)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE', 'Dandy']  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Next, I'll change games_list_one by appending to it, and check the other list, games_list_two.


```python
games_list_one.append("Rainbow")

print(games_list_two)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE', 'Dandy', 'Rainbow']  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## `.copy()

One last note about this for lists. There is a `.copy()` method that you can use also. The Python docs for list say that it creates a `shallow copy`, the shared reference where the two lists are basically the same.

However, the behavior below shows that it's creating a `deep copy`, which means you get a new list with `.copy()`. Be cautious when copying lists. You shouldn't need to do it very often.


```python
# NBVAL_IGNORE_OUTPUT

games_list_three = games_list_two.copy()

print(
    f"""
    {id(games_list_two)}
    vs
    {id(games_list_three)}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        129998932111040  
        vs  
        129998932115328  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
id(games_list_two) == id(games_list_three)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

False means they're different lists.


```python
print(
    f"""
    List values before doing anything:
    {games_list_two}
    {games_list_three}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        List values before doing anything:  
        ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE', 'Dandy', 'Rainbow']  
        ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE', 'Dandy', 'Rainbow']  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
games_list_three.pop()

print(
    f"""
    List values after removing the last item from "three":
    {games_list_two}
    {games_list_three}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        List values after removing the last item from "three":  
        ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE', 'Dandy', 'Rainbow']  
        ['Poppy', 'Candy', 'Sudoku', 'Halo', 'RE', 'Dandy']  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## List return

This section is to point out what you might've noticed. When I used `.remove()`, `.pop()`, `.append()`, and `.reverse()`, I didn't assign it to anything, not even itself. This is like looking at the sun:

~~list = list.remove()~~

Don't look! That's not how you do it.

Lists don't return anything, so most of their methods just change the list `in place`. The notebook cells also aren't showing the new list, since it doesn't return anything, even if we `print()`. We have to print the list itself after we do an operation to see what happened.


```python
numbers_list = ['one', 'two', 'three', 'four']

print(numbers_list.append("five"))
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    None  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Another thing is the method will change the list even if you do it inside a `print()` statement. That doesn't always happen


```python
numbers_list
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['one', 'two', 'three', 'four', 'five']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The first print above showed that the list method doesn't return anything. The other cell printed the list to show the new number "five" added on even though we did it within a `print()` statement.

## List methods

For the next set of examples, I'm going to provide a list of random computer words, and we'll use these methods on it.


```python
computer_words = ['bus', 'RAM', 'cache', 'register', 'clock', 'binary']

computer_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['bus', 'RAM', 'cache', 'register', 'clock', 'binary']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.append()`

`.append()` adds something to the end of a list.


```python
computer_words.append("kernel")

computer_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['bus', 'RAM', 'cache', 'register', 'clock', 'binary', 'kernel']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.extend()`

Next, I'll make another list and I want to bring the two lists together. This is a method I use often.

Note I make an empty list also. When I bring the two individual lists together, I want to give the new list a new name. The new name is meaningful and lets me know it's a different list.


```python
hardware_software_words = []

programming_words = ['binary', 'string', 'collection', 'set']

print(
    f"""
    {hardware_software_words}
    {programming_words}
    """
)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
        []  
        ['binary', 'string', 'collection', 'set']  
          


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

`.extend()` combines the two lists. One just happens to be empty.


```python
hardware_software_words.extend(programming_words)

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['binary', 'string', 'collection', 'set']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

`.extend()` combines the two populated lists. You see the items/elements are all in the one list.

We had to add the lists in one at a time. We can't add them at the same time.


```python
hardware_software_words.extend(computer_words)

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['binary',  
     'string',  
     'collection',  
     'set',  
     'bus',  
     'RAM',  
     'cache',  
     'register',  
     'clock',  
     'binary',  
     'kernel']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now we have a list of all the words together, and our new list name is still descriptive for what's in it.

The three lists we just dealt with are separate in memory. They do not have a shared reference. When we do something to one list, it's only done to that one list.

### `len()`

The `len()` function isn't specific to list, you can use this on many things. This will tell you how long your list is. It doesn't change the list, and it returns a number.


```python
len(hardware_software_words)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    11



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

If you want to know the last index in the list, you can subtract 1 from this.


```python
idx = len(hardware_software_words) - 1

idx
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    10



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
hardware_software_words[idx]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'kernel'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.count()`

This will tell us how many times an item appears in a list.

This doesn't change our list. It just tells us how many items are in it. It returns a number.


```python
hardware_software_words.count('binary')
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    2



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

I'll add 'binary' to the list again and see how many times it appears in the list.


```python
hardware_software_words.append('binary')
```


```python
hardware_software_words.count('binary')
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    3



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.sort()`

Let's sort our list in alphabetical order. If we had numbers, they would be sorted in numerical order.


```python
hardware_software_words.sort()

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['RAM',  
     'binary',  
     'binary',  
     'binary',  
     'bus',  
     'cache',  
     'clock',  
     'collection',  
     'kernel',  
     'register',  
     'set',  
     'string']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Wait, what? 'RAM' is first! Python's default behavior (some languages are like this) is to sort capitalized letters first.

There's an option in `.sort()` that will fix this.


```python
hardware_software_words.sort(key=str.lower)

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['binary',  
     'binary',  
     'binary',  
     'bus',  
     'cache',  
     'clock',  
     'collection',  
     'kernel',  
     'RAM',  
     'register',  
     'set',  
     'string']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Let's do something crazy with that. Let's make our key the number of letters in each word.

You don't do key=len(str), you just put in `len` the name of the function without the parens `()`.


```python
hardware_software_words.sort(key=len)

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['bus',  
     'RAM',  
     'set',  
     'cache',  
     'clock',  
     'binary',  
     'binary',  
     'binary',  
     'kernel',  
     'string',  
     'register',  
     'collection']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.insert()`

Let's sort the list back in alphabetical order and insert a word in there where it belongs. Let's choose the word 'lambda'.

First sort the list again.


```python
hardware_software_words.sort(key=str.lower)

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['binary',  
     'binary',  
     'binary',  
     'bus',  
     'cache',  
     'clock',  
     'collection',  
     'kernel',  
     'RAM',  
     'register',  
     'set',  
     'string']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

That sorted the list in alphabetical order. Now we insert a word.


```python
hardware_software_words.insert(8, 'lambda')

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['binary',  
     'binary',  
     'binary',  
     'bus',  
     'cache',  
     'clock',  
     'collection',  
     'kernel',  
     'lambda',  
     'RAM',  
     'register',  
     'set',  
     'string']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.index()`

I inserted that to its place by looking at the list with my eyes.

I usually don't want to do this type of thing. I want the computer to find and use the index.

Let's use another list method to find the index of the word that starts with 'k', 'kernel', and add 'lambda' after it.

We can find a word that `.startswith('k')` with a loop that we'll learn in a future lesson. So we're still doing this manually a little bit right now until we learn loops.


```python
hardware_software_words.index('kernel')
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    7



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Add 'lambda' in the list. Notice below we find the index where 'kernel' is and add 1 to it. We want to add 'lambda' at the location after 'kernel'.


```python
idx = hardware_software_words.index('kernel') + 1

hardware_software_words.insert(idx, 'lambda')

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['binary',  
     'binary',  
     'binary',  
     'bus',  
     'cache',  
     'clock',  
     'collection',  
     'kernel',  
     'lambda',  
     'lambda',  
     'RAM',  
     'register',  
     'set',  
     'string']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.reverse()`

We can reverse the order of the list. Notice it sorted in regular expected alphabetical order. 'RAM' is in with 'register' where it should be.


```python
hardware_software_words.reverse()

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['string',  
     'set',  
     'register',  
     'RAM',  
     'lambda',  
     'lambda',  
     'kernel',  
     'collection',  
     'clock',  
     'cache',  
     'bus',  
     'binary',  
     'binary',  
     'binary']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We can also use `.sort()` to reverse the list. Note we need to use these two `keyword arguments`, `key` and `reverse`. If we don't include `key=str.lower` here, it'll put 'RAM' at the end.


```python
hardware_software_words.sort(key=str.lower, reverse=True)

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['string',  
     'set',  
     'register',  
     'RAM',  
     'lambda',  
     'lambda',  
     'kernel',  
     'collection',  
     'clock',  
     'cache',  
     'bus',  
     'binary',  
     'binary',  
     'binary']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.remove()`

Now we have two functions left that both remove things from the list.

`.remove()` will remove something by name.


```python
hardware_software_words.remove("clock")

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['string',  
     'set',  
     'register',  
     'RAM',  
     'lambda',  
     'lambda',  
     'kernel',  
     'collection',  
     'cache',  
     'bus',  
     'binary',  
     'binary',  
     'binary']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

What happens if we remove one of the words that appears more than once? It removes the first one it sees, and then it's done.


```python
hardware_software_words.remove("binary")

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['string',  
     'set',  
     'register',  
     'RAM',  
     'lambda',  
     'lambda',  
     'kernel',  
     'collection',  
     'cache',  
     'bus',  
     'binary',  
     'binary']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

### `.pop()`

`.pop()` will "pop" or remove the last item in the list.


```python
hardware_software_words.pop()

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['string',  
     'set',  
     'register',  
     'RAM',  
     'lambda',  
     'lambda',  
     'kernel',  
     'collection',  
     'cache',  
     'bus',  
     'binary']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

It will also take an index! Let's remove the first item in the list, which is at index 0.


```python
hardware_software_words.pop(0)

hardware_software_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['set',  
     'register',  
     'RAM',  
     'lambda',  
     'lambda',  
     'kernel',  
     'collection',  
     'cache',  
     'bus',  
     'binary']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Conclusion

In conclusion, we went over a lot of methods that come from the list class. You can add, remove, and sort lists now. The [lists and strings lesson](/docs/python/foundations/lists-and-strings/) went over how to access things in a list.
