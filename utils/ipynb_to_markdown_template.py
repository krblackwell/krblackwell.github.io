import nbformat
from nbconvert import MarkdownExporter
import yaml
import sys
from preprocessor import AdmonitionPreprocessor
from pathlib import Path

notebook_path = sys.argv[1]
input_path = Path(notebook_path)
relative_path = input_path.relative_to("notebooks")
output_path = Path("docs") / relative_path
output_path = output_path.with_suffix(".md")

metadata_map_path = './templates/metadata_map.yml'

nb = nbformat.read(notebook_path, as_version=4)

with open(metadata_map_path) as f:
    metadata_map = yaml.safe_load(f)

notebook_name = notebook_path.split('/')[-1]
metadata = metadata_map['notebooks'].get(notebook_name, {})
metadata['relative_path'] = relative_path
nb['metadata'].update(metadata)

exporter = MarkdownExporter(
    template_file="./templates/front_matter.tpl",
    template_path=["."]
)

exporter.register_preprocessor(AdmonitionPreprocessor, enabled=True)

body, _ = exporter.from_notebook_node(
    nb,
    extra_template_vars={'notebook': nb, **metadata},
    resources={'metadata': metadata}
)

with open(output_path, 'w') as f:
    f.write(body)
