---
title: Markdown Basics
sidebar_label: Markdown Basics
sidebar_position: 2
last_update:
    date: 6/23/25
    author: krblackwell
description: Learn coding! Markdown Basics
tags: ['markdown']
draft: False
unlisted: False
---

One thing that's important to know is there are different _flavors_ of Markdown. One platform or interpreter might do things a little differently when you get to some more complex ways of doing it.

One example of different flavors is a platform I use at work called Databricks. The star of the show there are notebooks, and you can do text cells and dashboards that use Markdown. I can do something like `#Heading 1` without a space after the hash tag, and it will render it just fine. Your notebooks here also will do that, but the best practice is to include a space after your hash tags.

## Headings

```markdown
# Heading level 1 (H1)

## Heading level 2 (H2)

### Heading level 3 (H3)
```

You can use hashtags/pound signs to mark headings for sections. They can make things pop and help visual organization.

The above code looks like this:
<!-- markdownlint-disable-next-line MD025 -->
# Heading level 1 (H1)

## Heading level 2 (H2)

### Heading level 3 (H3)

## Bold, italics, underline

```markdown
**bold**

_italics_

~~strikethrough~~

***bold italic***

<u>underline</u>
```

There are different things you can do to mark up text in Markdown. I even show you a couple of non-standard no-nos.

The above looks like this:

**bold**

_italics_

~~strikethrough~~

***bold italic***
<!-- markdownlint-disable-next-line MD033 -->
<u>underline</u>

The `***bold italic***` might not work everywhere you use Markdown.

## New lines

You might notice there are spaces between lines in the code I'm showing you. I could also use a `\` to mark the end of a line. 

Look at the difference between this:

```markdown
**bold**\
_italics_
```

**bold**\
_italics_

And then how it's different from leaving out the slash `\`.

```markdown
**bold**
_italics_
```

**bold**
_italics_

## Lists

Lists in Markdown can have numbers or bullets, and as far as I know, they can be as long as you want.

You can also have sub-items in your lists by adding two spaces before something like with "salut" and "salve".

```markdown
1. hey
1. hi
  1. salut
  1. salve
1. hello

1. number list
  - bullet sublist
1. number list item

- item
- thing
- what
  - oh
  - stuff
```

In most "flavors" of markdown, you can write all the numbers in a list as 1. The above Markdown looks like this:

1. hey
1. hi
  1. salut
  1. salve
1. hello

1. number list
  - bullet sublist
1. number list item

- item
- thing
- what
  - oh
  - stuff

:::tip
Best practice is to make sure there is an empty space above and below each list.
:::

If all numbers are 1., your list is flexible. You might want to reorder something, and if all the numbers are 1., you don't have to renumber too.

The following example requires a renumber!

```markdown
1. item a
2. item c
3. item b
```

Let's move #3 up one. That means I have to fix the numbers.

```markdown
1. item a
3. item b
2. item c
```

And I fix the numbers.

```markdown
1. item a
2. item b
3. item c
```

But if we have all of them as 1....

```markdown
1. item a
1. item c
1. item b
```

1. item a
1. item c
1. item b

```markdown
1. item a
1. item b
1. item c
```

1. item a
1. item b
1. item c

Bulleted lists can also use asterisks.

```markdown
- a list
- item
- another item

* or you can use
* asterisks
* for a list
```
