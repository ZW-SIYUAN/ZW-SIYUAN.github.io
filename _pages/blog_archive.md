---
layout: page
permalink: /blog/archive/
title: archive
description: Every post, grouped by year. Use the box to filter by title, tag, or category.
nav: false
---

<div class="archive">
  <input
    type="search"
    id="archive-filter"
    class="archive-filter"
    placeholder="Filter posts…"
    autocomplete="off"
    aria-label="Filter posts by title, tag, or category"
  >
  <p class="archive-status" id="archive-status" role="status" aria-live="polite"></p>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}

{% for year in posts_by_year %}
<section class="archive-year" data-year="{{ year.name }}">
<h2 class="archive-year-heading">{{ year.name }}</h2>
<ul class="archive-list">
{% for post in year.items %}
{%- assign tag_list = post.tags | join: " " -%}
{%- assign cat_list = post.categories | join: " " -%}
{%- capture haystack -%}{{ post.title }} {{ post.description }} {{ tag_list }} {{ cat_list }}{%- endcapture -%}
<li class="archive-item" data-search="{{ haystack | strip_html | downcase | normalize_whitespace | escape }}">
<time class="archive-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d" }}</time>
<a class="archive-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
{% if post.categories.size > 0 %}
{% for category in post.categories %}
<a class="archive-cat" href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
{% endfor %}
{% endif %}
{% if post.tags.size > 0 %}
<span class="archive-tags">
{% for tag in post.tags %}
<a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">#{{ tag }}</a>
{% endfor %}
</span>
{% endif %}
</li>
{% endfor %}
</ul>
</section>
{% endfor %}

  <p class="archive-empty" id="archive-empty" hidden>No posts match that filter.</p>
</div>

<style>
  .archive-filter {
    width: 100%;
    padding: 0.55rem 0.8rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--global-text-color);
    background-color: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
  }
  .archive-filter:focus {
    outline: none;
    border-color: var(--global-theme-color);
  }
  .archive-status {
    min-height: 1.2em;
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }
  .archive-year-heading {
    margin: 2rem 0 0.75rem;
    padding-bottom: 0.3rem;
    font-size: 1.5rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .archive-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .archive-item {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem;
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .archive-date {
    flex: 0 0 4.2rem;
    font-size: 0.85rem;
    color: var(--global-text-color-light);
    font-variant-numeric: tabular-nums;
  }
  .archive-title {
    flex: 1 1 16rem;
    color: var(--global-text-color);
  }
  .archive-title:hover {
    color: var(--global-theme-color);
  }
  .archive-cat {
    padding: 0.05rem 0.45rem;
    font-size: 0.75rem;
    color: var(--global-bg-color) !important;
    background-color: var(--global-theme-color);
    border-radius: 4px;
  }
  .archive-tags a {
    margin-right: 0.4rem;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
  }
  .archive-tags a:hover {
    color: var(--global-theme-color);
  }
  .archive-empty {
    margin-top: 1.5rem;
    color: var(--global-text-color-light);
  }
  @media (max-width: 576px) {
    .archive-date {
      flex-basis: 100%;
    }
  }
</style>

<script>
  (function () {
    const input = document.getElementById("archive-filter");
    const status = document.getElementById("archive-status");
    const empty = document.getElementById("archive-empty");
    const items = Array.from(document.querySelectorAll(".archive-item"));
    const years = Array.from(document.querySelectorAll(".archive-year"));
    const total = items.length;

    function describe(n) {
      const q = input.value.trim();
      if (!q) return total + (total === 1 ? " post" : " posts");
      return n + " of " + total + " " + (total === 1 ? "post" : "posts") + " match “" + q + "”";
    }

    function apply() {
      const q = input.value.trim().toLowerCase();
      let shown = 0;

      items.forEach(function (item) {
        const hit = !q || item.dataset.search.indexOf(q) !== -1;
        item.hidden = !hit;
        if (hit) shown++;
      });

      // hide a year heading once every post under it is filtered out
      years.forEach(function (year) {
        const visible = year.querySelectorAll(".archive-item:not([hidden])").length;
        year.hidden = visible === 0;
      });

      empty.hidden = shown !== 0;
      status.textContent = describe(shown);
    }

    input.addEventListener("input", apply);

    // support /blog/archive/?q=term and #term for shareable filtered views
    const params = new URLSearchParams(window.location.search);
    const preset = params.get("q") || decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (preset) input.value = preset;

    apply();
  })();
</script>
