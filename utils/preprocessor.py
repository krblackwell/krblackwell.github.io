import re
from nbconvert.preprocessors import Preprocessor


class AdmonitionPreprocessor(Preprocessor):
    """
    Preprocessor to convert custom admonition syntax in markdown cells
    from the form:

        ***TIP***
        here is a tip
        *** ***
    to the Docusaurus format:
        :::tip
        here is a tip
        :::
    """

    def preprocess_cell(self, cell, resources, cell_index):
        if cell.cell_type == 'markdown':
            pattern = re.compile(
                r"(^\*\*\*(?P<type>\w+)\*\*\*\s*\n)"
                r"(?P<content>.*?)"
                r"(\n\*\*\*\s+\*\*\*\s*$)",
                re.MULTILINE | re.DOTALL,
            )

            def replacer(match):
                admonition_type = match.group("type").lower()
                content = match.group("content").rstrip()
                return f":::{admonition_type}\n{content}\n:::"

            cell.source = re.sub(pattern, replacer, cell.source)

        return cell, resources
