---
title: Collaborations
layout: default
permalink: /collaborations
---

{%- for item in site.data.collaborations.items -%}

  {%- include project-item.html href = item.href
							   img = item.img
							   video = item.video
							   name = item.name -%}

{%- endfor -%}