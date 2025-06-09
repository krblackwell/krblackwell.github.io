import pytest
from nbformat import v4 as nbf
from utils.preprocessor import AdmonitionPreprocessor


@pytest.fixture
def preprocessor():
    return AdmonitionPreprocessor()


def test_admonition_transformation_tip(preprocessor):
    cell = nbf.new_markdown_cell("""***TIP***
Here is a helpful tip.
*** ***""")
    cell_out, _ = preprocessor.preprocess_cell(cell, {}, 0)
    assert cell_out.source == ":::tip\nHere is a helpful tip.\n:::"


def test_admonition_transformation_warning(preprocessor):
    cell = nbf.new_markdown_cell("""***WARNING***
Watch out!
*** ***""")
    cell_out, _ = preprocessor.preprocess_cell(cell, {}, 0)
    assert cell_out.source == ":::warning\nWatch out!\n:::"


def test_no_change_for_non_matching_markdown(preprocessor):
    original = "Just a regular markdown cell."
    cell = nbf.new_markdown_cell(original)
    cell_out, _ = preprocessor.preprocess_cell(cell, {}, 0)
    assert cell_out.source == original


def test_no_change_for_code_cell(preprocessor):
    cell = nbf.new_code_cell("print('hello')")
    cell_out, _ = preprocessor.preprocess_cell(cell, {}, 0)
    assert cell_out.source == "print('hello')"


# the next test is ok because the markdown page still adds an appropriate
# amount of space after the admonition, but it's possible
# this may not pass linting
def test_multiple_admonitions_in_one_cell(preprocessor):
    cell = nbf.new_markdown_cell("""
***TIP***
Tip 1
*** ***

Some text between.

***WARNING***
Careful now!
*** ***
""")
    expected = """
:::tip
Tip 1
:::
Some text between.

:::warning
Careful now!
:::"""
    cell_out, _ = preprocessor.preprocess_cell(cell, {}, 0)
    assert cell_out.source == expected
