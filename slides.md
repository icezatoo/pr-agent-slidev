---
# You can also start simply with 'default'
theme: bricks
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: PR-Agent
info: |
  ## PR-Agent is an AI-powered tool that streamlines pull request reviews
  
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# AI Code Review, Smarter , Faster , Better

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/qodo-ai/pr-agent" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

---

# What is the issue with the pull request?

this is the issue with the pull request

<v-clicks>

- <b v-mark.orange="1">Time</b> Reviewing PRs takes time

- <b v-mark.orange="2">Suggestions</b> Providing suggestions on PRs is time-consuming

- <b v-mark.orange="3">Description</b> Writing PR descriptions is time-consuming

- <b v-mark.orange="4">Improvements</b> Suggesting improvements on PRs is time-consuming

- <b v-mark.orange="5">Etc</b> conflicts, failing tests, code style
</v-clicks>

<br>

<style>

h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# For Example

Some usecase  pull request

<v-switch>
  <template #1>
  <img  src="./public/detail-pr.png" alt="" />
  
   </template>
  <template #2>
  <img  src="./public/change-pr.png" alt="" />
  </template>
  <template #3>
  <img  src="./public/change-pr.png" alt="" />

  <img
  class="absolute -left-0 right-150 w-80 h-50"
  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2RzNGJtNnh0MDZ1bWQ1YXR5YzIzamR5eWoyaTlubnp1aHV5YnZnYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mXJ0lKR3HyhyixeLNn/giphy.gif"
  alt=""
  />

 <img
  class="absolute -left-0 right-50 w-80 h-50"
  src="https://media.giphy.com/media/3o72F7RrTPW6jymXew/giphy.gif?cid=790b7611eemcw3v0maxbmbkkjem2fwh9aelmnm4v3mq6cvn4&ep=v1_gifs_search&rid=giphy.gif&ct=g"
  alt=""
  />

  </template>
</v-switch>

---

# What is PR-Agent?

<br>

PR-Agent is an open-source tool to help efficiently review and handle pull requests. Qodo Merge is a hosted version of PR-Agent,
designed for companies and teams that require additional features and capabilities

Providing

- 📝 **Automated** - Automated feedback and suggestions
- 🎨 **Description** - PR description generation
- 🧑‍💻 **Improve** - Code suggestions for improving the PR
- 🛠 **Ask** - Answering free-text questions about the PR, or on specific code lines
<br>

<br>

Read more about [What PR-agent?](https://qodo-merge-docs.qodo.ai/)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

<div class="text-center">
  <h2>Demo</h2>
</div>

---

<div class="text-center">
  <h2>Q/A</h2>
</div>
