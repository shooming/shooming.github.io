---
title: Git TIL
date: "2020-05-23T23:00:00"
template: "post"
draft: false # 공개여부
slug: "TIL-Git-reabse"
category: "Git" # 카테고리
description: "Git TIL 배운거 정리"
socialImage: ""
tags:
    - Git
    - TIL
---

# Git rebase

rebase

merge commit - 단지 merge를 하는 커밋

fast forward - feature branch 로 옮겨서 작업했으나 그동안 master 변동없을때 그냥 합쳐버림

rebase - feature에서 작업하는 동안 마스터 버전업했다면 merge와는 다르게 branch의 모든 커밋을 master branch의 최신버전 앞에 추가함
       - rebase하는 이유는 커밋의 히스토리를 보기 쉽게 하기위해서이다.

squash - 브랜치 나눠서 작업중 커밋이 여러개라면 그 커밋을 하나의 커밋으로 만들어서 합치는 것이다.

그래서 git rebase + squash(git rebase - i)로 같이함

git rebase -i master feature/branch 마스터에서 리베이스할때

git rebase -i master 브랜치에서 할때 

마스터에서 할때는 목표 브랜치를 선택해주어야한다.

------

```bash
pick 커밋번호
pick 커밋번호
pick 커밋번호

    |
    V
pick 커밋번호
s 커밋번호
s 커밋번호
```
처음시작 커밋부터 pick하고 s로 스쿼시로 합침

만약 첫 conflict가 발생하면 첫번쩨 커밋에서 난것이므로 그것을 수정하고 git add만한다.

그 다음 선택해야함
git rebase --continue # 다음으로 넘어갈 시
git rebase --abort # rebase 중지

만약 pr중에 작업수정 후 업데이트 필요시 rebase해야함

하지만 그당시 master기준이랑 현재 기준이 달라져서 git push가 불가능해진다.

하지만 git push origin '브랜치명' --force-with-lease로 force로 강제로 밀어넣어야한다.

git pr올렸는데 수정사항 발생시
수정사항 발생하면 local에서 수정 후 push한뒤
rebase 후 강제로 push한다

git pr merge되었을 경우
master pull 받고 branch 새로 따서 다시 작업한다.