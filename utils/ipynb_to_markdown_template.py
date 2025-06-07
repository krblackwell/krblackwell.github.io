import nbformat
from nbconvert import MarkdownExporter
import yaml
import sys

notebook_path = sys.argv[1]
output_path = '../docs'
metadata_map_path = 'metadata_map.yml'

nb = nbformat.read(notebook_path, as_version=4)

with open(metadata_map_path) as f:
    metadata_map = yaml.safe_load(f)

notebook_name = notebook_path.split('/')[-1]
metadata = metadata_map['notebooks'].get(notebook_name, {})
nb['metadata'].update(metadata)

exporter = MarkdownExporter(
    template_file="front_matter.tpl",
    template_path=["."]
)

body, _ = exporter.from_notebook_node(
    nb,
    extra_template_vars={'notebook': nb, **metadata},
    resources={'metadata': metadata}
)
output_path = output_path.replace('.ipynb', '.md')

with open(output_path, 'w') as f:
    f.write(body)

