{% extends 'markdown/index.md.j2' %}

{% block header %}
---
sidebar_label: {{ nb.metadata.sidebar_label | default('MISSING') }}
sidebar_position: {{ nb.metadata.sidebar_position | default('MISSING') }}
last_update:
    date: {{ nb.metadata.last_update_date | default('MISSING') }}
    author: {{ nb.metadata.last_update_author | default('MISSING') }}
description: {{ nb.metadata.description | default('MISSING') }}
tags: {{ nb.metadata.tags | default('MISSING') }}
draft: {{ nb.metadata.draft | default('MISSING') }}
unlisted: {{ nb.metadata.unlisted | default('MISSING') }}
hide_table_of_contents: true
---
{% set full_path = nb.metadata.relative_path if nb.metadata.relative_path is defined else 'MISSING' %}
{% set rel_path = full_path | replace('notebooks/', '') %}

<!-- markdownlint-disable MD033 MD041 -->
<a href="/lite/lab/index.html?path={{ rel_path }}" target="_blank">
  <img src="https://jupyterlite.rtfd.io/en/latest/_static/badge.svg" alt="Open in the Lab!" />
</a>
<!-- markdownlint-enable MD033 MD041 -->

{% endblock header %}

{% block execute_result %}
<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">
{{ super() }}
</div><br/>
<!-- markdownlint-enable MD033 MD009 -->
{% endblock execute_result %}

{% block stream %}
<!-- markdownlint-disable MD033 MD009 -->
<div class="output-cell">
{{ super() }}
</div><br/>
<!-- markdownlint-enable MD033 MD009 -->
{% endblock stream %}

