---
layout: page
permalink: /repositories/
title: repositories
description: Research software and tools for online learning, synthetic data, and paper discovery.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

<div class="repository-profiles">
  {% for user in site.data.repositories.github_users %}
    <a href="https://github.com/{{ user }}"><i class="fa-brands fa-github" aria-hidden="true"></i> github.com/{{ user }}</a>
  {% endfor %}
</div>
{% endif %}

<div class="repository-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% assign details = site.data.repositories.details[repo] %}
    {% assign repo_name = repo | split: '/' | last %}
    <article class="repository-card">
      <h2><a href="https://github.com/{{ repo }}">{{ details.title | default: repo_name }}</a></h2>
      {% if details.description %}<p>{{ details.description }}</p>{% endif %}
      <a class="repository-link" href="https://github.com/{{ repo }}">View on GitHub <span aria-hidden="true">&rarr;</span></a>
    </article>
  {% endfor %}
</div>
