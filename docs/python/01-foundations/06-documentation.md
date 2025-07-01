---
sidebar_label: documentation
sidebar_position: 6
last_update:
    date: 6/29/25
    author: krblackwell
description: How to read documentation.
tags: ['python', 'foundations', 'documentation']
draft: False
unlisted: False
---



<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path=python/01-foundations/06-documentation.ipynb" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->


<!-- markdownlint-disable-next-line MD041 -->
[Go back to Home](/) - [Go to lesson page](/docs/python/foundations/documentation) - [Go to Foundations section](/docs/python/foundations)

# Documentation

Reading documentation is a skill in programming that is very important, and can be tricky to learn. It's not something you can do right away.

You have to understand a little about coding and how programming works.

Some documentation is better than others. You might have things that are poorly documented, and I see people blame themselves for not being "smart enough" to understand it. I don't like that mindset.

:::tip
Sometimes if you don't "get" something, it's because it's presented in a confusing way, outdated, or incomplete.
:::
Some documentation is great and very clear. When you come across that, make note of how they explain things and how they present things. Also note dates. When was something last updated? If it's not working, it might need updates.

## Learning Objectives

- Documentation is a thing

The learning objective here is simple. You may need to come back to this page multiple times, and we'll come back to documentation as we learn more.

It takes time and effort to understand how to read documentation and then actually use it. Even if you're someone who has relied on AI tools like ChatGPT or Perplexity to give you code and explanation, it's important to know how to read documentation.

:::danger
AI makes mistakes. It's a language model that's created to spit out language that sounds like it makes sense. AI is not made to understand the language it makes.
:::
:::tip
Documentation can provide key pieces of information to clear up errors you make or that AI language models make.
:::

## String documentation

It's ok if this makes zero sense to you at this point, but I want to point out that documentation is a thing. Eventually, you'll find it helpful. I just want you to know this exists. If you can't remember the `.capitalize()` function, or it used to work and isn't anymore, you can check the docs. Sometimes things change.

### [`.islower()`](https://docs.python.org/3/library/stdtypes.html#str.islower)

Let's look at one example. The docs look like this at the time I'm writing this lesson:

**str.islower()**
Return True if all cased characters [4] in the string are lowercase and there is at least one cased character, False otherwise.

The [4] footnote says this:
Cased characters are those with general category property being one of “Lu” (Letter, uppercase), “Ll” (Letter, lowercase), or “Lt” (Letter, titlecase).


```python
print("a".islower())
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    True  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

You can jump in and try to test a function, like we did with the cell above. I'll walk you through this piece of documentation one piece at a time.

"Return True"

You see from the cell above that we got `True` in the output. We printed `"a".islower()`. This means `"a".islower()` **returns** True. I could save this in a variable if I wanted. When an expression returns something, you can save it in a variable.


```python
a_is_lower = "a".islower()

print(a_is_lower)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    True  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

OK, I think we have an idea of that part.

"Return True if all cased characters in the string are lowercase"

There's a note for cased characters, but let's ignore that for a second and think about "all ~~cased~~ characters in the string are lowercase." If all characters are lowercase, it should return true.


```python
is_lower = "all characters are lowercase here".islower()

print(is_lower)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    True  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

This behaves how we would expect `.islower()` makes me think "if something is lowercase, it'll return true."

But there are two other pieces that tell us some special circumstances where it'll also return true or not.

- "cased characters"
- "at least one cased character"

A cased character is a character that can be upper or lowercase. A number or symbol can't. Let's see what that looks like:


```python
is_lower = "3".islower()

print(is_lower)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    False  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
is_lower = "!".islower()

print(is_lower)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    False  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

OK, so `3` and `!` can't have a case. They are what they are. They will return False by themselves.

That's what "and there is at least one cased character" means. Returns true if the characters that _can_ be upper or lowercase are there, and they're all lowercase.

So let's see what happens if we add "at least one cased character" to those.


```python
is_lower = "3a".islower()

print(is_lower)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    True  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->


```python
is_lower = "!a".islower()

print(is_lower)
```

<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">

    True  


</div><br/>
<!-- markdownlint-enable MD033 MD009 -->

## Conclusion

If you understood this lesson fully, good job! That's great. If some of it went over your head, don't worry.

We'll come back to documentation in other lessons, and you can come back to this lesson again later. It takes time for this type of skill to develop and "click." But it will click for you, and you'll understand documentation like a pro if you keep at it.
