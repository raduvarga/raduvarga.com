---
title: Photo
layout: default
permalink: /photo
---

<div class="tiled-gallery">

{% for item in site.static_files reversed %}

  {% if item.path contains 'gallery' and 
  	    item.path contains "jpg" or 
  	    item.path contains 'gallery' and
  	    item.path contains "jpeg" %}
  <div class="project-item">
    <a href="{{ item.path }}">
    	<img src="{{ item.path }}" alt="">
    </a>
  </div>
  {% endif %}

{% endfor %}

</div>