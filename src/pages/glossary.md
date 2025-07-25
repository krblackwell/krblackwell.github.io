---
last_update:
    date: 6/20/25
    author: krblackwell
description: Glossary/dictionary to define words and technical terms used on the site. 
tags: ['glossary']
draft: False
unlisted: False
---

# 📘 Glossary for words and definitions used on this website

- **array**\
  In some programming languages, you have multiple items in one variable. In Python, this is called a `list`. In other languages, you might call it an `array`. Some programming languages allow the elements of an array to be different data types (maybe strings and integers). Other languages require each element in an array to be the exact same type. Python allows mixed data types in its lists.
  
  ```python
  fruits_list = ['kiwi', 'orange', 'durian', 'mango']
  print(type(fruits_list))
  ```

- **best practice** \
  A recommended way of doing something that’s widely accepted as clear, effective, and efficient. It helps you avoid problems later on.
  
  ```python
  # for example, using descriptive variable names is a best practice
  user_age = 12
  ```
- **cast**\
  Changing a value from one data type to another (e.g. from a string to an integer).

  ```python
  age = "12" # age as a string
  age = int("12")  # casts a string to an integer
  ```

- **chaining methods**\
  Using dot notation and adding methods to other methods.
  
  ```python
  "  a string example".lstrip().capitalize()
  ```
  `.lstrip()` returns something that is then returned by capitalize().\
  `.lstrip()` returns "a string example" with no extra whitespace at the start.\
  `.capitalize()` returns "A string example" with that and the first letter set to uppercase.

- **class**\
  A class is a definition of an `object`. Think of the `class` as the blueprint, and the `object` as the thing you actually create and use from the class.

- **code standards**\
  Rules or guidelines for writing clean, consistent code (often project- or language-specific).

  ```python
  # Following code standards like consistent indentation and proper naming
  def greet_user(name):
      return f"Hello, {name}"
  ```

- **concatenate**\
  To link things together, like combining two strings into one.

  ```python
  full_name = "Ada" + " " + "Lovelace"
  ```

- **convert**\
  To change a value from one form to another, such as a number to text (similar to "cast").

  ```python
  num_as_str = str(42)  # Converts integer to string
  ```

- **data**\
  Think of data as information that a computer can process. You can usually read it too. If you see a string or number, you understand what it means at least a little bit.

- **data structure**\
  Data structures are a fundamental concept in programming. Data structures hold information in special formats. Strings, integers, lists, and dictionaries are data structures. There are even other types beyond that!

- **data type**\
  Data types are what category of information **format** you're dealing with. Think of strings, integers, lists, dictionaries, decimals, and so on as types of formats that can hold your information.
  
- **documentation**\
  Documentation is a way to write down and to share information about how code behaves and how to use it. [The Python documentation](https://docs.python.org/3/) is an example of this.

- **dunder**\
  Double underscores __ in Python are called dunders. There are things called "dunder methods" that exist in classes.

- **f-string**\
  A way to format strings in Python using curly braces to insert variables.

  ```python
  name = "Toby"
  greeting = f"Hello, {name}!"
  ```

- **function**\
  A way to reuse code to do a specific task. It's not attached to an object. It's a block of code that can take in arguments and may or may not return something.
  
  The following example is something I create here and it's not defined within a class. 
  ```python
  def add(x, y):
    return x + y
  
  add(1, 3)
  ```

- **integer**\
  A whole number, positive or negative, without decimals (e.g. 5, -3, 42).

  ```python
  score = 100  # This is an integer
  ```

- **kernel**\
  The core part of a computer program or environment that runs and manages code, especially in tools like Jupyter Notebooks.

  ```python
  # In Jupyter, the kernel runs this code cell
  print("The kernel executed this cell")
  ```

- **markdown**\
  A lightweight text formatting language used to style text (like **bold** or `code`) in files.

  ```markdown
  **This is bold text in markdown**
  ```

- **method**\
  Methods are like functions, but they are associated with an object. If I have a string "like this," I have methods associated with strings like `.toupper()` and `.replace()` that I can use.
  If I have a number, I have methods like `.isinteger()`.
  For lists, `.append()`. `.get()` in a dictionary, and so on.
  
  ```python
  fruits_dictionary = {
    1: "apple",
    2: "banana",
    3: "cherry"
  }
  
  fruits_dictionary.get(2)
  ````

- **naming conventions**\
  A way of labeling or calling things so they follow a standard. These are rules that help people give descriptive names that don't cause a problem for coding. Some rules mean your program won't run, but some are guidelines and your program will still run.
  
  ```python
  # &error = "this causes an error"
  zombie_trap_pit = "descriptive and allowed!"
  ``` 

- **nested**\
  When one structure is placed inside another, like a list within a list or an `if` statement inside a loop.

  ```python
  for i in range(3):
      if i % 2 == 0:
          print(f"{i} is even")
  ```

- **object**\
  Everything is an object in Python. Objects are a tricky concept to wrap your head around, but the more you work with them, the more they will start to make sense.
  
  Objects have some things associated with them:
  
  - They are part of a class.
  - They hold data.
  - They have methods.

  "a string like this" is an object of the class `str` in Python. `str` is something that's included with Python. A string in Python holds the data, in this case, "a string like this" is the data. The `str` class also has methods, like `.upper()`, `.replace()`, or `.strip()` that are defined in that class.

  [The documentation can show this in a different way](https://docs.python.org/3/library/stdtypes.html#string-methods). But if this doesn't make sense to you, that's ok. Some of it might go over your head if you're not at the point of reading documentation yet.

- **pep8**\
  Python’s official style guide that outlines how to write readable and consistent Python code.

  ```python
  # PEP8 suggests using lowercase with underscores for variable names
  # user_name is a variable, and is in what's called "snake case"
  user_name = "Seth"
  ```

- **print**\
  A function that shows output in the console or terminal.

  ```python
  print("Hello, world!")
  ```

- **reserved words**\
  Words that have special meaning, and shouldn't be used as variable names, like `break` `class` `except` `finally` `True`.

- **string**\
  A sequence of characters, usually text (e.g. `"hello"` or `'123'`).

  ```python
  message = "This is a string"
  ```

- **snake case**\
  Snake case means you add underscores between words in a name, like `my_variable`, `site_dictionary`, or `cat_tree_five`.

- **syntax**\
  The rules for writing code so the computer can understand. It's like writing in complete sentences to be very clear about what you're saying.\
  Any Python code you write has to be in the right syntax so Python knows what you want.
  
  ```python
  print("Hello World!")
  ```
  
  You have to remember all the parentheses on both sides, quotes on both sides, and spell `print` the right way.

- **token**\
  A token is a unit of meaning or language, usually in programming it is words, but it can be a piece of data also.
  
  ```python
  import re
  
  text = "Hello, tokens! Let's tokenize this."

  tokens = re.findall(r'\b\w+\b', text)

  print(tokens)

  ```

- **user**\
  A person interacting with the software or code.

  ```python
  user_input = input("Enter your name: ")
  ```

- **variable**\
  A named container in code used to store data values.

  ```python
  x = 10  # x is a variable holding the value 10
  ```
  
