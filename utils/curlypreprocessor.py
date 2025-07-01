from nbconvert.preprocessors import Preprocessor


class EscapeCurlyPreprocessor(Preprocessor):
    def preprocess_cell(self, cell, resources, cell_index):
        for output in cell.get('outputs', []):
            if output.get('output_type') == 'execute_result':
                data = output.get('data', {})
                if 'text/plain' in data:
                    original_text = data['text/plain']
                    escaped_text = original_text\
                        .replace('{', r'\{')\
                        .replace('}', r'\}')\
                        .replace('\n', '  \n')
                        #.replace('\n', '\\\n')
                    data['text/plain'] = escaped_text
            elif output.get('output_type') == 'stream':
                if 'text' in output:
                    original_text = output['text']
                    escaped_text = original_text\
                        .replace('{', r'\{')\
                        .replace('}', r'\}')\
                        .replace('\n', '  \n')
                        #.replace('\n', '\\\n')
                    output['text'] = escaped_text
        return cell, resources
