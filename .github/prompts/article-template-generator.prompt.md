---
name: Article Template Generator
description: Generate a Markdown article template with frontmatter and a slug-based filename.
argument-hint: title="Article title" description="Short article description"
agent: agent
model: GPT-4.1 (copilot)
tools: ['edit']
---

Your task is to generate a Markdown article template.

## Steps

1. Ask the user for the **article title** if it is not provided.
2. Ask the user for a **short description** if it is not provided.
3. Generate a **slug** from the title using these rules:
   - Convert to lowercase
   - Remove accents and diacritics
   - Replace spaces with hyphens
   - Remove all characters except letters, numbers, and hyphens
4. Use the slug as the **file name**, ending with `.md`.
5. Generate the following Markdown content:

```markdown
---
title: "{Article Title}"
description: "{Short Description}"
date: {YYYY-MM-DD}
---

# {Article Title}

{Short Description}

<!-- Write the article content here -->
````

## Output requirements

* First, clearly show the **generated file name**
* Then, show the **full Markdown file content**
* The file must be ready to edit and publish
