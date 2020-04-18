---
title: Data Structure(Array) TIL
date: "2020-04-08T23:00:00"
template: "post"
draft: false # 공개여부
slug: "TIL-Data Structure-Array"
category: "Data Structure" # 카테고리
description: "Data Structure TIL 배운거 정리"
socialImage: ""
tags:
    - Data Structure
    - TIL
---
# Array(List)
JavaScript에서는 Array, Python에서는 List이다.

Python도 Array사용 할 수 있지만 `import Array`모듈을 import해야한다.

## Array의 특징
순차적으로 데이터를 저장하는 자료구조
- 가장 큰 특징으로 순차적(ordered)으로 데이터를 저장한다.
- 저장하는 데이터는 보통 요소(element)라고 한다.
- 연결된 데이터들을 순차적으로 저장할때 사용한다.
- 순서 상관없더라도 연결된 데이터들 저장할때 사용
- 가장 자주 사용됨

기타 특징
- 삽입(insertion) 순서대로 저장됨 (새로 삽입되는 요소는 꼬리가됨)
- 이미 생성된 리스트도 수정 가능(mutable)
- 동일한 값 여러번 삽입 가능
- Multi-dimentional Array(다중 차원 배열)
    Array의 요소가 array가 될 수있음 일반적으로 2D(2차원) array가 많이 사용됨
    
    ```python
    A = [[11,22,33],[44,55,66],[77,88,99]]
    # A[0][0] = 11
    ```

## Array 내부구조
- 순서가 있으므로 각각의 element에 번호를 부여하는데 이 번호를 index라고 함.
- index는 0부터 시작되는데, 마지막부터 시작할때는 -1부터 세면서 내려간다.

순차적으로 저장하는 이유
실제 메모리 상에서, 즉 물리적으로 데이터가 순차적으로 저장되기 때문

데이터에 순서가 있기 때문에
1. index가 존재한다.
    0부터 시작하는 index
2. Indexing
    index를 사용해 특정 요소를 array(list)로 붙 일겅 들이는 것이 가능
3. Slicing
    요소의 특정 부분, 즉 n번째 index부터 m번째 index까지 따로 분리해 조작 가능

## 단점
1. 순차적으로 저장되어 있으므로 중간내역 삭제하면 인덱스 가 앞으로 이동하게되고 중간에 추가가되면 뒤로 밀리기 되므로 작업이 느려 질 수 있음 __Array는 정보가 자주 삭제되거나 추가되는 데이터를 담기 적절하지 않음__

2. Array Resizing으로 배열은 메모리 순차적으로 채워지므로 메모리를 미리 할당한다. 이를 pre-allocation이라고 하지만 할당한 메모리 보다 요소가 많아지면 메모리를 더 할당하는 것을 resizing이라고 함. 이 작업은 시간이 오래 걸린다.
__그러므로 Array는 사이즈 예측이 잘 안 된느 데이터를 다루기 적절치 않다.__

## 사용시기
- 순차열적인 데이터를 저장할 때
    - ex) 주식 가격. 어제의 2만원과 오늘의 2만원이 다름 >>> 값보다는 순서가 중요한 데이터
- 다차원 데이터를 다룰 때 >>> Multi-dimensional Array
- 어떠한 특정 요소를 빠르게 읽어야 할 때 >> index를 통해 곧바로 읽을 수 있기 때문
- 데이터의 사이즈가 급변하게 자주 변하지 않을 때
- 요소가 자주 삭제 되거나 추가되지 않을 때