---
data_file: index
---

// this file includes all partials and js it needs
// TODO: add webpack to minify or just minify these files

{% assign data_js = site.data[page.data_file].js %}
{% include partial_assets/js_partials.js data=data %}

{% for partial_js in site.data[page.data_file].js_partials %}
  {% include partial_assets/js/{{ partial_js }} %}
{% endfor %}
