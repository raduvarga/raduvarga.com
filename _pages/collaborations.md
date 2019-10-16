---
title: Collaborations
layout: default
permalink: /collaborations
---

{%- for project in site.data.collaborations.artists -%}

  <div class="project-item">
    <a href="{{ project.href }}">
      <img src="{{ project.img }}" alt="no-img">
    </a>
    <h2 class="title">
      <a href="{{ project.href }}">{{ project.name }}</a>
    </h2>
  </div>

{%- endfor -%}