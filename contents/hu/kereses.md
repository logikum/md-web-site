<!-- ======================================================================
--- Search engine
title:          Keresés eredménye
keywords:       keress, eredmény
description:    A keresés eredményeinek a listja.
--- Menu system
order:          
text:           
hidden:         true
umbel:          false
--- Page properties
id:             /search
document:       
layout:         
---$-left:         
searchable:     false
======================================================================= -->

# Keresés eredménye

<form class="form-inline search-phrase" action="/kereses" method="post">
  <div class="form-group">
    <label for="text2search">Keresett szöveg:</label>
    <input type="text" class="form-control" name="text2search"
           maxlength="20" value="{{ .text2search }}">
  </div>
  <button type="submit" class="btn btn-primary">Keresés</button>
</form>

{{ .results }}

&nbsp;
