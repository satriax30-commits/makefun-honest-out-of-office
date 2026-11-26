# The Painfully Honest Out-of-Office

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/satriax30-commits/makefun-honest-out-of-office/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/satriax30-commits/makefun-honest-out-of-office/reward.svg)](https://make.fun)

A single brutally honest — but still polite — out-of-office email auto-reply,
written for the [make.fun bounty](https://make.fun) "The Painfully Honest
Out-of-Office".

## The entry

> I'm out until Thursday, and your message is number 163 of 289 unread emails, which I'll answer in order, unless it mentions the printer, which I will pretend I never saw.

One sentence, 170 characters: away until Thursday, 163rd of 289 unread
emails, and a last-clause twist — printer emails get pretended-never-seen.
Honest about the inbox, polite enough to survive being forwarded to a manager.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic — no clock, no
randomness, no network) writes the entry to
`${OUTPUT_DIR ?? "/output"}/entry.txt` with no trailing newline, then
self-checks it (1–200 characters, one line, not only whitespace) and verifies
by reading the file back.

```sh
node main.ts
```
