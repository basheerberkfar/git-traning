I created experimental branches to compare Git merge and rebase.

The merge experiment preserved the branch structure in Git history.

I added a separate commit to the rebase branch.

I updated the main branch before performing the rebase.

After rebasing, the experimental commit appeared above the latest main commit.

Git created a new commit hash for the rebased change.

I observed both the original and rebased commits in the graph because the earlier history was still reachable.

An additional merge commit appeared on the rebase branch after its local and remote histories were combined.

Conclusion: Merge preserves branching history, while rebase reapplies commits onto a new base. Rebase can create a cleaner linear history, but later merge operations can introduce additional branches into the graph.
