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
---
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

