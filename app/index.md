{% from "common/macros.njk" import trail, bold_number, callout, exercises, hp_number, label, show_commit, show_git_term, show_git_term_tip, show_detour, show_exercise, show_git_tabs, show_git_tabs_from_text, show_hands_on_practical, show_hop_prep, show_head, show_lesson_intro, show_lesson_link, show_output, show_ref, show_resources, show_sidebar, show_tag, show_transformation_columns, show_under_the_hood with context %}
{% set title = "Git-Mastery App" %}
<frontmatter>
title: "{{ title }}"
layout: default.md
pageNav: 6
</frontmatter>

# {{ title }}

## What it is for

**The GitMastery app is a small <tooltip content="Command Line Interface">CLI</tooltip> utility that helps learners** with the following:

* Set up scaffolded sandboxes for hands-on practicals and exercises
* Give feedback on exercises
* Track progress through exercises, locally and online (opt-in)

## Installation and Setup

**If you are following Git-Mastery lessons in the given sequence** you will be introduced Git-Mastery in appropriate points in the lesson path. You don't need to set it up in advance.

**If you are following lessons out of sequence, or if you are doing the exercises only,** follow the instructions given below to set up Git-Mastery app (and other required tools) in your computer, in the given sequence.

<include src="{{ baseUrl }}/lessons/gitPrep/text.md#install-git" />
<include src="{{ baseUrl }}/lessons/gitPrep/text.md#set-user" />
<include src="{{ baseUrl }}/lessons/gitPrep/text.md#install-gui" />
<include src="{{ baseUrl }}/lessons/gitPrep/text.md#install-git-mastery" />
<include src="{{ baseUrl }}/lessons/githubPrep/text.md#create-github-account" />
<include src="{{ baseUrl }}/lessons/githubPrep/text.md#setup-authentication" />
<include src="{{ baseUrl }}/lessons/githubPrep/text.md#configure-no-reply-email" />
<include src="{{ baseUrl }}/lessons/githubPrep/text.md#setup-github-cli" />