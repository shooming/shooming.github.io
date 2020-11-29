---
title: Django ORM CRUD
date: "2020-05-11T23:00:00"
template: "post"
draft: false # 공개여부
slug: "Django-ORM-CRUD"
category: "Django" # 카테고리
description: "Django 공부 후 정리"
socialImage: ""
tags:
    - Django
    - TIL
---

# Django ORM CRUD
## DB 조회
Django ORM은 `모델클래스.objects` 이라는 Manager가 제공됨
```python
AAA.objects.all() # AAA테이블의 모든 데이터 객체상태로 가져옴
AAA.objects.get() # AAA테이블의 get 조건에 부합하는 row하나 가져옴
AAA.objects.filter() # AAA테이블의 filter 조건에 해당하는 row 다 가져옴
AAA.objects.values() # AAA테이블의 모든 데이터 가져오지만 객체상태 아님
```
### filter의 AND조건
Django ORM은 filter를 통해서 원하는 정보들만 가져올 수 있는데 AND나 OR조 건을 이용해 내가원하는 조건들의 범위를 좁힐 수 있다.
```python
AAA.objects.filter(colum = 원하는값, colum 2 = 원하는값)
```
AND 조건은 별다른 방법없이 `,`(콤마)를 사용해서 계족 추가해주면된다.
### filter의 OR조건
OR은 AND와는 다르게 Q객체를 import 해주어야한다. 물론 Q객체를 활용한 AND조건도 사용이 가능하다.
```python
AAA.objects.filer(Q(colum = 조건) | Q(colum2 = 조건))
AAA.objects.filter(Q(colum = 조건) & Q(colum2 = 조건))
```
## CREAT
DB에 새로운 데이터를 만드는 방법은 2가지가 있다.
views.py에서 사용하기위해서는 models.py에 모델이 만들어져 있어야하며 해당 파일이 views.py에 import되어 있어야한다.
1. 장고 ORM을 활용하여 CREAT 하는 방법
2. 변수에 담고 save함수를 사용하는 법
```python
# 1
AAA.objects.create(컬럼명1 = 값, 컬럼명2 = 값)
#2
OH = AAA(컬럼명1 = 값, 컬럼명2 = 값)
OH.save()
```
## UPDATE
UPDATE 또한 2가지 방법을 이용한다.
조건은 상기 조건과 동일하다.
1. 각 model의 row속성 변경하고 save 함수로 저장 - 각 model row별로 SQL수행 - 다수 Row 작업 시 성능저하
2. QuerySet의 update 함수에 업데이트할 속성값을 지정하여 일괄 수정 - 하나의 SQL로서 동작, 동작빠름
```python
#1
ABC = AAA.objects.get(id=12) # id가 12인 row 객체상태로 가져옴
ABC.title = ‘빛이 당신을 태울 것 입니다.’ # id가 12인 row의 title을 변경함
ABC.save()
queryset = AAA.object.all()
for post in queryset:
	post.destination = ‘붓싼’
	post.save() # 데이터 업데이트 할 때마다 쿼리요청으로 성능저하
—————
#2
queryset = AAA.object.all()
queryset.update(destination = ‘발할라’) # 일괄 update 요청
```
## Delete
Delete도 update와 유사하다. 명령어만 바뀐 느낌이다.
조건, 방법도 동일하므로 장점과 단점도 일치한다.
1. 각 model의 row속성 삭제하고 save 함수로 저장 - 각 model row별로 SQL수행 - 다수 Row 작업 시 성능저하
2. QuerySet의 delete 함수에 업데이트할 속성값을 지정하여 일괄 수정 - 하나의 SQL로서 동작, 동작빠름
```python
#1
ABC = AAA.objects.get(id=12) # id가 12인 row 객체상태로 가져옴
ABC.delete() # id가 12인 row 지움
queryset = AAA.object.all()
for post in queryset:
	post.delete() # 데이터 삭제 할 때마다 쿼리요청으로 성능저하
—————
#2
queryset = AAA.object.all()
queryset.delete() # 일과 delete 요청
```