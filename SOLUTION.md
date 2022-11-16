
## Proposed Solution

We will start with the naive solution, described in the previous paragraph, but we will add some simple improvements that will hopefully yield relatively large performance increases.

There are two parts to the calculations involved in this problem:
- A filter - must satisfy the package maximum weight constraint.
- An aggregation - from remaining potential solutions, scan them and return the solution with the maximum value.

We could naively take this to mean we should simply test each combination against the weight constraint - and for combinations that do not satisfy this criteria, there is no need to calculate the value of the package.

This can actually be taken one step further, however, and this last additional improvement/optimisation could yield the most performance imrpvement - due to it eliminating even the need for the weight constraint check (or therefore the subsequent value calculation), but especially due to eliminating the need for any calculations, for *potentially large swathes of the potential solution space (combinations of package items)*.

