## Notes / Thought Process

This is a classic mathematical optimisation problem, of a similar nature to the "Travelling Salesman Problem". ?
Entire field(s) of mathematical study exist, to analyze, solve, and otherwise understand these ***NP-hard*** problems. ?

This solution is going to implement a somewhat naive algorithm, for a few reasons:
- Admittedly limited knowledge of the mathematical axioms, concepts, theory, etc, involved in this field (or at least studied a long time ago)
- Trying not to get too bogged down in mathematics (despite how intrinsically linked to programming it is)
- **The dataset is relatively small** i.e. a package with up to (n=) 15 items is not overly large in this context.
- Easier to write/read/understand/debug
- **Items can only be chosen once each (ie there is only one of each)** -> smaller potential solution space
- **Packages are comprised of *combinations* of the potential items, not *permutations* (i.e. no ordering)** -> smaller potential solution space.

For each package, up to 15 items may (or may not) be included. This is easily and simply represented in TS as a boolean array of length 15. 

Each boolean value indicates if the item *is* (1) or *is not* (0) included in a package. The number of possible combinations (item selections) for a package, is 2^^15 = 32768. Not all of these would need to be tested as some could be skipped due to failing the packages' weight constraints. 

But essentially, we should compute, for each possible combination of item(s) for a given package, the value and the weight of package items for that particular combination. The combination that optimises (e.g. minimises, maximises) somehow the $value and/or weight of items, can be found. This is what will output to our file

The MOST naive solution might be literally looping through every possible combination of included/excluded package items, and for each, calculating the value and weight. If the calculated weight for a potential solution satisfies our constraint (being less than the package weight limit), compare its calculated value to the current (of all the potential solutions considered, so far in the loop) maximum value of any of the potential solutions. If the calculated value is more than the previous maximum, it now gets stored as the new maximum value (that also satisfies the weight constraint). This approach could be referred to as "brute force" - and as mentioned, this might be acceptable due to relatively small numbers involved.
