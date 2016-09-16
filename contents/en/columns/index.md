<!-- ======================================================================
--- Search engine
title:        business-objects
description:  Data access objects.
keywords:     business-objects, JavaScript, node.js
--- Menu system
order:        10
text:         Page with 1 column
======================================================================= -->

# Page with 1 column

The data access objects deliver the data between the business objects and the data stores.
The direction of the data move is one way for read-only objects: the data come from the
data store to the business object. For editable objects the data move in both ways: from
the data store to the business object, and from the business object to the data store,
respectively. In case of command objects the data move can be any sort of: from the data
store to the business object only; from the business object to the data store only; or
both directions. If a model supports multiple data store, the business object should have
data access objects for each data store.

The table below summarizes which models have data access objects, and the methods those
data access objects may have: 
