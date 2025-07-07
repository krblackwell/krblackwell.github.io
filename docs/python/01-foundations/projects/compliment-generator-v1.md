---
sidebar_label: compliment generator v1
sidebar_position: 3
last_update:
    date: 7/02/25
    author: krblackwell
description: Python Project - Compliment generator
tags: ['python', 'foundations', 'lists']
draft: False
unlisted: False
hide_table_of_contents: true
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/projects/compliment-generator-v1.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/projects/compliment-generator-v1) - [Go to Foundations section](/docs/python/foundations)

# Python Project Compliment Generator

In this project, we'll create a compliment generator. We'll use the `random` library to randomly select from three lists of words to get something like "You're a glorious, swimming, pancake."


```python
descriptor = ['handsome', 'lovely', 'wild', 'glorious']
action = ['laughing', 'rolling', 'jumping', 'breathing']
noun = ['waffle', 'squishmallow', 'panda', 'pickle']

f"You are a {descriptor[3]}, {action[3]}, {noun[3]}!"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'You are a glorious, breathing, pickle!'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Random

Something interesting we can do here is randomly pick from this list. But how do we do that? With the random library. This is one that you'll have to use import to bring in to your program.

You'll see I also set random.seed(11). This is so when I run this notebook through tests, I get the same result every time. I only want a test to fail if something has changed about the functionality of a package or piece of code.

If a test fails because of something being randomly generated, and that's how it works! I don't want it to fail because it's working.


```python
import random

random.seed(11)

print(f"""
You are a {descriptor[random.randint(0, len(descriptor) - 1)]},
{action[random.randint(0, len(action) - 1)]},
{noun[random.randint(0, len(noun) - 1)]}.
""")
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

      
    You are a glorious,  
    breathing,  
    pickle.  
      


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

:::tip
<a href="/lite/lab/index.html">Open a new blank notebook in the Lab</a> to test if you can remember how to do this on your own! To open a new notebook from the link, click on the tile that says "Py" or "Python."
Create three lists like we did here. Randomly select something from each list using `import random` without the seed. Run it over and over!
:::

## Conclusion

We used lists and the random library to create a compliment generator.
