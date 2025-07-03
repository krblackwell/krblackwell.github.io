---
sidebar_label: alien translator v1
sidebar_position: 2
last_update:
    date: 6/28/25
    author: krblackwell
description: Alien Translator project with Python for Absolute Beginners
tags: ['python', 'project', 'secret messages', 'foundations', 'strings', 'slice', 'methods']
draft: False
unlisted: False
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/projects/alien-translator-v1.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/projects/alien-translator-v1) - [Go to Foundations section](/docs/python/foundations)

# Project - Alien Translator

You've received an alien message.

ZCAPS &ZTUQ MQ&F ZMQC I .&ZDAZL &UQY QT ZM ZKAT ,QLLZ$

Lucky for you, you also know how to translate it. Some of these steps can happen in any order. For some of them, the order matters.

Z means E\
Q means O\
$ means H\
& means R

The aliens use all uppercase, but we don't. Also, remember "I" is always capitalized.

Reverse the string. I'll show you how to do this. It's called `slicing`.


```python
alien_message = ".ZCAPS &ZTUQ MQ&F ZMQC I .&ZDAZL &UQY QT ZM ZKAT ,QLLZ$"

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.ZCAPS &ZTUQ MQ&F ZMQC I .&ZDAZL &UQY QT ZM ZKAT ,QLLZ$'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

First, we put the message into a variable. Here we call it `alien_message`. Then we displayed it.

Next, let's use `.replace()` to find and replace the alien letters one at a time. You can also chain them like

`alien_message = alien_message.replace('Z', 'E').replace('Q', 'O')`


```python
alien_message = alien_message.replace('Z', 'E')

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.ECAPS &ETUQ MQ&F EMQC I .&EDAEL &UQY QT EM EKAT ,QLLE$'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
alien_message = alien_message.replace('Q', 'O')

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.ECAPS &ETUO MO&F EMOC I .&EDAEL &UOY OT EM EKAT ,OLLE$'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
alien_message = alien_message.replace('$', 'H')

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.ECAPS &ETUO MO&F EMOC I .&EDAEL &UOY OT EM EKAT ,OLLEH'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
alien_message = alien_message.replace('&', 'R')

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.ECAPS RETUO MORF EMOC I .REDAEL RUOY OT EM EKAT ,OLLEH'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Slice

All the letters are uppercase, and in the end, we don't want that. We want it to look like normal sentences. Before we fix the cases, we want to reverse the string. This is where slicing comes in.

Basically, you can slice a string or a list with square brackets and a colon `:`. The code looks like this:
`string[start:stop:step]`


```python
my_string = "The quick brown fox jumped over the lazy dog."

my_string[0:-1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'The quick brown fox jumped over the lazy dog'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

0 is the first character, and -1 is the last character. Why did it forget the period at the end of the string?

The "stop" in our slice stops one before what you tell it. -1 is the end, so it will show us one character before that.

How do we see everything after 0? We just don't put anything after "start:"


```python
my_string[0:]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'The quick brown fox jumped over the lazy dog.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

If we want to get every other character (this includes spaces) up to the end, we do this:


```python
my_string[0::2]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Teqikbonfxjme vrtelz o.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

It would be easier to see if we slice a list of the words. Let's make a list of the individual words in the sentence.


```python
my_string_words = my_string.split()

my_string_words
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog.']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
my_string_words[0::2]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['The', 'brown', 'jumped', 'the', 'dog.']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

We get every other word!

If we want to reverse the words we can do the following cell.

The blanks for "start" and "stop" tell us to use everything. -1 says step backwards by one.


```python
my_string_words[::-1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['dog.', 'lazy', 'the', 'over', 'jumped', 'fox', 'brown', 'quick', 'The']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

I can do the same with a string, and it will reverse the letters.


```python
my_string[::-1]
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.god yzal eht revo depmuj xof nworb kciuq ehT'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Back to the message

Now that you know a little about slicing, let's reverse the letters in our string message.


```python
alien_message = alien_message[::-1]

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'HELLO, TAKE ME TO YOUR LEADER. I COME FROM OUTER SPACE.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Wow! I can read that easily, but let's make sure **each sentence** has a capital first letter and the rest are lowercase. Do you remember what method does that?

We have to do three steps for this.

In order to use `.capitalize()` to properly capitalize our sentences, we need to do it on each sentence. Let's split the message by `'. '` so the first sentence and second sentence are each in a list.


```python
alien_message = alien_message.split('. ')

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['HELLO, TAKE ME TO YOUR LEADER', 'I COME FROM OUTER SPACE.']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Now we can use the index for the first and second sentences to do capitalize.


```python
alien_message[0] = alien_message[0].capitalize()

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['Hello, take me to your leader', 'I COME FROM OUTER SPACE.']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
alien_message[1] = alien_message[1].capitalize()

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    ['Hello, take me to your leader', 'I come from outer space.']



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Those look nice! Let's join the sentence back together and put the period back.


```python
'. '.join(alien_message)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    'Hello, take me to your leader. I come from outer space.'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

Congratulations! You translated the alien message.

Try making your own alien sentence, or fill in one with a friend!
<!-- markdownlint-disable MD033 -->
:::tip
<a href="/lite/lab/index.html">Open a new blank notebook in the Lab</a> to test if you can remember how to do this on your own! To open a new notebook from the link, click on the tile that says "Py" or "Python."
:::
<!-- markdownlint-enable MD033 -->

## How I made the alien sentence

I started with the ending sentence, "Hello, take me to your leader. I come from outer space." Then, I thought about the things I showed in the lessons so far, and what might scramble the message up the best.

Something like the following.


```python
alien_message = "Hello, take me to your leader. I come from outer space."

alien_message = alien_message[::-1]

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.ecaps retuo morf emoc I .redael ruoy ot em ekat ,olleH'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
alien_message = alien_message.upper()

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.ECAPS RETUO MORF EMOC I .REDAEL RUOY OT EM EKAT ,OLLEH'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

For replacing letters, I had to be careful not to replace one letter with another that is in the sentence. Otherwise, your translation wouldn't come out right!


```python
alien_message = alien_message\
    .replace('E', 'Z')\
    .replace('O', 'Q')\
    .replace('H', '$')\
    .replace('R', '&')

alien_message
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    '.ZCAPS &ZTUQ MQ&F ZMQC I .&ZDAZL &UQY QT ZM ZKAT ,QLLZ$'



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
alien_message == ".ZCAPS &ZTUQ MQ&F ZMQC I .&ZDAZL &UQY QT ZM ZKAT ,QLLZ$"
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">




    True



</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

And I tested that to make sure it was what you started with. True means it is. So, there is the message you started with!

## Conclusion

You used string methods to decode a message.

See if you can scramble and unscramble sentences of your own. Notice our "unscramble" steps weren't exactly the same (but backwards) as the steps we did to scramble the message. We created some complications with the sentence capitalization.

For example, It was much easier to make everything uppercase than to undo that and make it so the first letter of each sentence was capitalized, while the rest was lowercase.
