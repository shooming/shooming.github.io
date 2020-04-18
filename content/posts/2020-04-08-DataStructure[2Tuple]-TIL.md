---
title: Data Structure(Tuple) TIL
date: "2020-04-08T23:00:00"
template: "post"
draft: false # 공개여부
slug: "TIL-Data Structure-Tuple"
category: "Data Structure" # 카테고리
description: "Data Structure TIL 배운거 정리"
socialImage: ""
tags:
    - Data Structure
    - TIL
---
# Tuple

## 정의 - Tuple
- Tuple은 list와 같이 데이터를 순차 저장하는 순열 자료구조로 한번저장면 수정 할 수없다.(immutable)
- 2~3개 정도의 적은 수의 소규모 데이터를 저장함

## 장점
- Tuple은 간단한 값 빨리 표현하고 싶을때 많이 사용
- 함수에서 리턴 값을 한개 이상 리턴하고 싶을 경우 사용함(ex:지도 좌표)

## 단점
- 데이터가 무슨 의미인지 명확하지가 않음
- 데이터의 의미를 문액을 보고 가정해야함
- 소규모 다르기 적합

## 언제 사용하면 좋음?
- Array(list)를 쓰기에는 간단한 데이터를 표현할 때 사용
- Tple이 메모리 더 적게먹음