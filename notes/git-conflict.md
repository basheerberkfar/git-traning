# Exercise 1 — Git merge conflict

## What I did

1. From `main`, created `greeting` using `git switch -c greeting`.
2. On `greeting`, replaced the first line with `const greeting = "Hello from feature branch";` and committed it.
3. Back on `main`, replaced the **same line** with `const greeting = "Hello from main branch";` and committed it.
4. Ran `git merge greeting`. Git reported `CONFLICT (content): Merge conflict in src/hello.js`.
5. The file showed conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>> greeting`). The main version appeared above `=======`, the other branch below it.
6. Resolved it manually as `const greeting = "Hello from main and feature branch";`, removed conflict markers, staged and committed.

## Why it happened

When the branches were being merged, a conflict arose due to modifications made to the same file. This stopped the merge process and required human intervention to select the desired changes; once the issue was resolved, the upload process was completed.