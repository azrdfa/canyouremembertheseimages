# Contribution Guideline for Can You Remember These Images

## Our Moto

> **One Issue One Merge Request**. Simplicity at all cost!.

## Issue Rules

Issue has naming convention as follows.

`<Issue Short Description>`

Example:

`Create Home Page`

Assignees, Labels, and Milestone must be filled in correctly. Also, you can add details in comment section.

## Branching Rules

All of Can You Remember These Images codebase Git repository have two level of branches: `master` branch and issue branches. Branches have to represent a single issue with naming convention as follows:

`Issue-<Issue_number>-<short_issue_description>`

Example: 

`Issue-1-create_home_page` 

means that branch represents issue "Create Home Page (#1)".

## Commit Rules

Short commit message has naming convention as follows:

`{create, update, delete}: <short_commit_description>`

Example: 

`create: add navbar to homepage`

## Merge Requests
To merge your work to `master` branch or other branches, you must create a Merge Request. You can create a merge request only after your current work is done. Make sure you notify other contributors after you've done your work on a branch, so it can be peer-reviewed.

The title of merge request must be the same as the issue name represented by that particular branch.
To link your merge request to an issue, you can include `Closes #<Issue_number>.` as the last line of your merge request's description. If you use `master` branch as target branch, your included issue will be automatically closed. 

Make sure in the "Merge Options" you selected "Delete source branch when merge request is accepted." to avoid cluttering branch selection with finished branches.

Your merge request will be merged only when [Friendly Elmo](https://github.com/ketikketik) approved it.

## Peer Review Rules
To do peer review, you can review other's code via "Changes" tab on their merge request. You can comment on a block of code specifically, or make a comment generally. You have to use English for your merge requests and peer reviews.
