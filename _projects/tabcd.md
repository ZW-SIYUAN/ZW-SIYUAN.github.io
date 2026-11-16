---
layout: page
title: TabCD
permalink: /projects/tabcd/
description: Exact constrained decoding for LLM-based tabular synthesis
img: assets/img/publication_preview/tabcd.png
importance: 0
category: research
---

TabCD enforces declared row-level constraints while an LLM-based tabular generator samples tokens. It rules out candidate tokens that would leave no legal completion of a row under the supported rules.

**Key ideas:**

- **Exact residual supports:** compute the values of the current field that can appear in at least one legal completion of the partial row.
- **Native-token masking:** check candidate tokens against these supports before sampling, using the generator's existing parameters and vocabulary.
- **Reuse:** share feasible value sets and within-field token checks across decoding steps and rows to reduce repeated work.

**Code:** the public repository includes the rule compiler, exact projections, token masks, reuse, a GReaT bridge, and runnable Syn-Affine and Computer Hardware examples.

**Manuscript:** _From Rules to Rows: Exact Constrained Decoding for LLM-Based Tabular Synthesis_ — Zhili Wang, Heitor Murilo Gomes, Xingquan Zhu, and Yi He. Under review at ICDE 2027 (Round 2).

[View code on GitHub](https://github.com/ZW-SIYUAN/TabCD) · [Publication details]({{ '/publications/' | relative_url }}#wang2027tabcd)
