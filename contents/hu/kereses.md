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

<div class="search-phrase">Keresett szöveg: <strong>{{ .text2search }}</strong></div>

{{ .results }}
