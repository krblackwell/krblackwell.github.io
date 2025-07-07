---
sidebar_label: conditionals
sidebar_position: 1
last_update:
    date: 7/04/25
    author: krblackwell
description: Python conditionals - learn if-then logic with if-elif-else.
tags: ['python', 'control-flow', 'conditionals']
draft: False
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/02-control-flow/01-conditionals.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/control-flow/conditionals) - [Go to Control Flow section](/docs/python/control-flow)

# Conditionals

You might've heard the word "unconditional" like "unconditional love" when someone loves someone else no matter what. There are no conditions on it.

Conditionals in programming are if-then statements.

Maybe an example is what you do for the day depends on the weather. If the weather is bad, you do one thing, if the weather is nice, do another.

```text
If it's hot outside, then
    we go to the pool.
Else,
    we go to the mall.
```

What we do depends on the weather.

```text
If it rains, then
    we stay inside.
Else,
    let's play outside.
```

We can add more ifs in there too!

```text
If it rains, then
    we stay inside.
Else if it's drizzling, then
    we jump in the puddles.
Else if it's cloudy, then
    we go fishing.
Else if it's sunny AND warm, then
    we go to the beach.
Else if it's too hot, then
    we go to the mall.
Else
    we play soccer.
```

In Python, it can look like this. Sometimes, we use just an if by itself.


```python
if 1 == 1:
    print("1 equals 1")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    1 equals 1  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

But you can do if-else too.


```python
if False:
    print("You won't see this")
else:
    print("You see this!")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    You see this!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
if True:
    print("You see this because it's True")
else:
    print("But not this.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    You see this because it's True  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Remember those logical operators? Let's try it out.


```python
day = "Sunday"
if day == ("Saturday") or (day == "Sunday"):
    print("Weekend!")
else:
    print("It's a weekday.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Weekend!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

I'm going to give you a more real world example that I encounter in my work. Not every programmer works with data like I do. It's one of many careers that you could have as a programmer. If you're interested in that!

Let me explain the idea behind the code below. Feel free to skip this explanation if the code example makes sense enough.

When working with data on people, you usually have age, and often you `recode` age into categories. You take age 1, 2, 3, 4, 5, etc, and group them together. A variable like age being in some number of years (20, 21, 22, 23, etc) is called a `continuous` variable. We'll recode it to a `categorical` where it will be 1, 2, 3, 4, 5, and each of those numbers means a bunch of ages grouped together.

When I print "1: 0-3 years" this is because often you `recode` variables/columns when you work with data. The recode will create number or string categories. In our example below, let's imagine we create categories like this:

| recode | age in years |
|---|---|
| 1 | 0-3 |
| 2 | 4-13 |
| 3 | 14-20 |
| 4 | 21-64 |
| 5 | 65+ |

We cover every age category because we end with "65+" meaning 65 and older.

Age can be grouped in different ways depending on what you're studying and what type of things you're interested in knowing about. For example, if you want to know about driving, age 16 is significant because in the USA that's when you can get a license. But if you have to work, you can get it earlier.

In a lot of frameworks/packages that help you work with data, you can make labels for your columns and variables. So our print below is going to be like the label. When I'm working with a variable, I make sure to include the value in the label, and the description. In our case, "1: 0-3 years" lets us know that recode=1 means 0 - 3 years of age.

Variables/columns can have descriptions added to them too, so the label for the recode (which here is just a print statement and not actually something being output) would be "recode: age in years category."

If you sort of followed that, that's fine. We'll cover working with data in a different lesson section.


```python
age = 25

if age < 0:
    print("Invalid age.")
elif age >= 0 and age <= 3:
    print("1: 0-3 years")
elif age > 3 and age <= 13:
    print("2: 4-13 years")
elif age > 13 and age <= 20:
    print("3: 14-20 years")
elif age > 20 and age < 65:
    print("4: 21-64 years")
elif age >= 65:
    print("5: 65 years and up")

```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    4: 21-64 years  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Sometimes, you get input from a process or a person, and then do something based on that.


```python
input_in = "yes"

if (input_in == "yes"):
    print("Good job!")
else:
    print("Try again.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Good job!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

The next example might be like if you go shopping and have a military discount applied to your purchase.

Notice in this next example we don't need to say `is_military is True`. For truthy values ("not zero" vs 0) or "string contains values" vs empty string), you can do this too.

If you have something that is a `boolean`, you can just ask `if boolean_variable`.
Remember boolean is the name for a variable that's just True or False.


```python
is_military = True

if is_military:
    print("You get a discount! ")
else:
    print("No discount applied.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    You get a discount!   


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Or you want something to happen based on output from a method or function.


```python
returned_data = 20

if (returned_data > 30):
    print("More than 30?")
elif (returned_data == 20):
    print("Score!")
else:
    print("Less than 30, not 20")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Score!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And we can use those logical operators. Here we have an `and`.


```python
returned_data = 15.33

if (returned_data < 15):
    print("⭐️☆☆")
    print("You got it!")
elif (returned_data >= 15) and (returned_data < 35):
    print("⭐️⭐️☆")
    print("Good job!")
else:
    print("⭐️⭐️⭐️")
    print("Amazing! You nailed it! 🎉")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    ⭐️⭐️☆  
    Good job!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

You can put ifs within ifs. This is called a `nested` conditionals.


```python
player_score = 10
computer_score = 1

if (player_score > computer_score):
    if (player_score > computer_score * 2):
        print("Wow, you won by a lot!")
    elif (player_score > computer_score):
        print("You win!")
    else:
        print("You lose.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Wow, you won by a lot!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

What might it look like with rock, paper, scissors?

Pretend you're playing against the computer. Let's say you chose paper and the computer chose rock.


```python
player = "paper"
computer = "rock"

if (player == computer):
    print("It's a tie!")
elif (player == 'rock'):
    if (computer == 'scissors'):
        print("You win!")
    elif (computer == 'paper'):
        print("You lose!")
elif (player == 'paper'):
    if (computer == 'rock'):
        print("You win!")
    elif (computer == 'scissors'):
        print("You lose!")
elif (player == 'scissors'):
    if (computer == 'paper'):
        print("You win!")
    elif (computer == 'rock'):
        print("You lose!")
else:
    print("Invalid choice.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    You win!  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

That might look a little overwhelming, but if you get the if-elif-else, you can do it!

Let's not forget about `not`.


```python
inventory = ["boomerang", "arrows"]
user_request = "potion"

if user_request not in inventory:
    print(f"You don't have a {user_request}")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    You don't have a potion  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

If you're ever in a bind, you can sometimes use if-else to avoid coding something that's not working.


```python
inventory = ["healing potion", "exploding potion"]
user_request = "sticky potion"

if user_request in inventory:
    print(f"You use {user_request}!")
else:
    print(f"You don't have a {user_request}")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    You don't have a sticky potion  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

In designing programs, you use things called "feature flags" to test out new features you want to add to a system or app. If something goes wrong, you can disable it.

Here's a real world example.

Let's say I have a game where players can explore a big world. I have a new feature that the players have asked for. They want the weather to change, and the weather can impact game play.

Remember, the seed set for random is just for the notebook testing purposes. You wouldn't want to add it in this case. Sometimes you DO want to add it when doing research or working with data to be able to `reproduce`, or get, the same results.


```python
import random

random.seed(292)

enable_weather_changes = True

weather_types = ["sun", "rain", "fog", "thunderstorm"]

current_weather = "sun"

if enable_weather_changes:
    current_weather = random.choice(weather_types)

print(f"Current weather: {current_weather}")

if current_weather == "rain":
    print("The ground is slippery! Movement speed reduced.")
elif current_weather == "fog":
    print("Visibility is low. Enemies don't appear until"
          + "they are 2 tiles away.")
elif current_weather == "thunderstorm":
    print("Lightning strikes randomly! Strikes to player cause damage.")
else:
    print("☀️ Clear skies. No weather effect on the player.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Current weather: rain  
    The ground is slippery! Movement speed reduced.  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Or sometimes you toggle certain features, like a theme, or dark vs light mode.


```python
dark_mode_enabled = True

if not dark_mode_enabled:
    print("Light mode is on.")
else:
    print("Dark mode is on.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Dark mode is on.  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

When naming variables and using`not`, keep in mind how easy something is to read. If you read it out loud and it sounds confusing, you might want to change how you `not` it (how you invert it).

"not dark mode enabled" sounds ok, and there's probably not a much clearer way. "not light mode enabled" sounds the same (to me!) but I use dark mode by default.

Let's look at a confusing example.


```python
level_complete = True
score = 60

if not score >= 100 and level_complete:
    print("You need a score of at least 100 to unlock level 2. Try again.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    You need a score of at least 100 to unlock level 2. Try again.  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

This evaluates as expected. Score wasn't enough even though the level was completed. You need to score at least 100 to unlock the next level.

However, we can make it clearer with parentheses.


```python
if not (score >= 100) and level_complete:
    print("Try again.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Try again.  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

This makes it clearer that you want to invert the value of score >= 100.


```python
score >= 100
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    False



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
not (score >= 100)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

But I try to avoid using `not` as much as possible when working with data. In this case I would code it like the below instead, without `not`.

This is easier to read because your brain only has to ask one question "what is score < 100?" instead of two questions with the `not`: "what is score >= 100" and then "What is the opposite of that?"


```python
if (score < 100) and level_complete:
    print("Try again.")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    Try again.  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Conclusion

We covered examples of conditionals with the logical and comparison operators we covered in the other lesson. You also got some information about times when you would use conditionals. We'll use them a lot going forward.
