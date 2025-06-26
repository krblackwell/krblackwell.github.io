---
sidebar_label: How to use notebooks?
sidebar_position: 1
last_update:
    date: 6/15/25
    author: krblackwell
description: Learn coding! Introductory Python - How to use notebooks?
tags: ['python', 'setup']
draft: False
unlisted: False
---

# How to use Notebooks

- Connect the brains - kernel
- Play - run

## Connect the brains

A `kernel` is the brains of your notebook. This should be set automatically for you when you are in the Lab. It is what interprets your code and allows it to run and get output. The notebooks should default to a lightweight Python kernel for the browser called Pydiode.

:::tip
If your code won't run, check if there's an active kernel.
:::

See the screenshot below. For code to run, you need to see Pydiode there.

![Notebook is open in the Lab and the upper right hand corner of the main screen](/img/python/00-get-set-up/kernel-upper-right.png)

If you don't see Pydiode there, you can click on it to select a kernel.

![After clicking the 'Switch kernel' tooltip, you can select Pydiode from a drop down menu.](/img/python/00-get-set-up/kernel-select.png)

## Play - run

There is a "play" button, a triangle, that will run your active cell. Output will display below code cells. Markdown cells will become "rendered."

The code cell and output cells are two different things.

![A code cell and its output cell are highlighted to show they are different. The play button is highlighted with a red rectangle. It's at the top of the notebook frame. The tool tip may say "Run this cell and advance (shift + enter)"](/img/python/00-get-set-up/play-run-code.png)

Here is a Markdown cell. When you run this cell, it will show you the formatted text based on the special markings you request. `## Header 2` will show up in larger letters and you don't see the hashtags.

![The Markdown cell is highlighted but doesn't have a special output. It "renders" instead. The play button is highlighted with a red rectangle. It's at the top of the notebook frame. The tool tip may say "Run this cell and advance (shift + enter)"](/img/python/00-get-set-up/markdown-cell-run.png)

This next example has a header and some backticks. It will look different when we render it. Notice how the header is visually distinct from the other text.

![This Markdown cell shows text that will be visually distinct when it's rendered.](/img/python/00-get-set-up/markdown-code.png)

And when we run it, it renders.

![The header becomes larger text and stands out from the paragraph text.](/img/python/00-get-set-up/rendered-markdown.png)



