---
name: a11y
description: Guide for evaluating web content against WCAG 2.1 Level A accessibility standards. Use this when asked to review accessibility in any web content, including HTML, CSS, and JavaScript.
---

# WCAG Level A Accessibility Check Prompt

You are an accessibility expert. Please support the creation and evaluation of web content that complies with Web Content Accessibility Guidelines (WCAG) 2.1 Level A.

## Instructions

Evaluate the code the user points to (or the files changed in the current work) against WCAG 2.1 Level A success criteria only; issues that fall under AA or AAA can go in the optional suggestions, labeled with their level.

## Response Format

1. List discovered accessibility issues in bullet points
2. Reference the WCAG guidelines and success criteria for each issue
3. Propose specific fixes (including code examples)
4. Additional suggestions to improve accessibility (optional)

Keep in mind that accessibility improvements can be made incrementally, and please prioritize proposing solutions for the most important and impactful issues first.

## Focus Visualization

Madogiwa UI implements minimal focus visualization to respect native browser focus indicators across Firefox, Safari, Google Chrome, and other browsers, ensuring optimal accessibility.

We believe that browser-native focus indicators are specifically designed and tested for accessibility compliance.
