import sys
import re
import textwrap
from unittest.mock import patch

# this is created for the glossary markdown to test the code within it

markdown_path = sys.argv[1]

test_inputs = iter(["text input", 42])


def fake_input(prompt=""):
    return next(test_inputs)


with open(markdown_path, "r") as f:
    content = f.read()

code_blocks = re.findall(r"```python\n(.*?)```", content, re.DOTALL)

for i, code in enumerate(code_blocks, start=1):
    print(f"Running example {i}")
    clean_code = textwrap.dedent(code).strip()
    print()
    print(clean_code)
    print()
    if 'input(' in clean_code:
        try:
            with patch("builtins.input", fake_input):
                exec(clean_code)
            # print("Success\n") # silently pass. uncomment to check
        except Exception as e:
            print(f"❌ Failed: {e}\n")
    else:
        try:
            exec(clean_code)
            # print("Success\n") # silently pass. uncomment to check
        except Exception as e:
            print(f"❌ Failed: {e}\n")
