---
title: Instruments
layout: default
permalink: /instruments
---

{%- for project in site.data.instruments.items -%}

  {%- include project-item.html href = project.href
			  						   img = project.img
			  						   name = project.name -%}

{%- endfor -%}