
## Proposed Solution

We will start with the naive solution, described in the previous paragraph, but we will add some simple improvements that will hopefully yield relatively large performance increases.

Each package has a maximum weight it can carry. The included package items, chosen from a set of available package items, must have a total weight less than the maximum package weight. Of the possible combinations (solutions) of included package items that satisfy this maximum weight constraint, we must find the solution with the maximum total value of included package items.

If a package has n available package items to be included/excluded, the number of possible combinations of included/excluded package itens is 2^n. Further, the included/excluded items (aka the *solution*) can be represented by an n-bit integer value, as a bitfield where bit *n* is **1** to indicate item *n* is **included**, or **0** if it is **excluded**. This could be represented by a class whose constructor accepts such an integer value, whose bits have these semantics, say, *PackageItems*. An easy way to generate/iterate all the possible combinations of included package items (*PackageItems*) is to simply increment an integer counter value, starting at 0, by 1 each iteration. Use bitwise logic operators (e.g. bitwise-AND) in the PackageItems constructor to convert the integer value to a set of boolean values, represeting the included/excluded state of each available package item.

There are two parts to the calculations involved in this problem, for any given set of included package items:
- A filter - must satisfy the package maximum weight constraint. i.e. total weight of included package items < package maximum weight
- An aggregation - from remaining potential solutions, scan them and return the solution with the maximum value. i.e. maximum ( total value included package items )

These two stages could be combined in fact, to avoid iterating across a second (albeit, the filtered) set of combinations, by storing the maximum total package value, and the included package items combination that produced it, **thus far**, while generating/iterating the included package items combinations - but only if they satisfy the weight constraint - and calculating the total package items value for that set of included items.

This can actually be taken one step further, however, and this last additional improvement/optimisation could yield the most performance imrpvement - due to it eliminating even the need for the weight constraint check (or therefore the subsequent value calculation), but especially due to eliminating the need for any calculations, for *potentially large swathes of the potential solution space (combinations of package items)*.

This improvement is based on knowing that if a particular set of included package items, constructed from integer packageItemsInteger (as described above) and represented as a bit-field, is found to exceed the weight constraint, any other included package items combination that includes all the included package items fronm this comnbination, must also exceed the weight.

However, it is not immediately clear how to take advantage of that truism, given the way we are using an integer counter as a bit-field to enumerate the included package items combinations.

Initially, we will leave out this last possibility for optimisation. If it becomes apparent at that point how this last improvement might be achieved, then we will implement it.

Since the weight and value calculations for a set of included package items involve up to n arithmetic operations (one for each included package item), and there are 2^n possible combinations of included packages, the upper bound of complexity of the algorithm described here(above) is in the order of O(n * 2^n).
