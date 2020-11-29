---
title: Mongo DB Admin Account Create TIL
date: "2020-06-12T23:00:00"
template: "post"
draft: false # 공개여부
slug: "Mongo-DB-5"
category: "Mongo DB" # 카테고리
description: "Mongo DB TIL 배운거 정리"
socialImage: ""
tags:
    - Mongo DB
    - TIL
---

# mongoDB 관리자 계정 생성하기
이번 기업협업때 test로 만들어놓은 mongoDB에 정보가 갑자기 사라지는 일이 발생하였다. 물론 팀원중에는 데이터를 지울 사람이 당연히 없다. 사실 사용하던 mongoDB server에는 별다른 인증 기능이 따로있지 않았다. 마침 서버에 공격이 있었다고 하긴 했는데 그때 당한건지 아무튼 데이터가 사라져 있었다.

그래서 이번에는 관리자계정을 따로 만들어서 사용하게되었다.
관리자 계정을 생성하는 법을 남겨 두고 자한다.

## 계정 생성하기
mongod로 별도의 보안 모델이 없는 MongoDB Server를 실행하고, MongoDB Shell에 접속한다.

```bash
mongo # 터미널에서 mongo 접속

MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3

use admin # admin DB로 이동한다.

# 아래와 명령어를 사용하면 root 권한을 가지는 계정을 만들수 있다.
db.createUser({
    user: 'username',
    pwd: 'password',
    roles: ['root']
})
```
db.createUser()는 현재 사용하고 있는 데이터베이스(여기서는 admin)에 사용자를 추가한다는 뜻이며, 사용자 이름, 비밀번호와 함께 권한(roles)을 array로 정의합니다.
roles옵션은 [mongoDB 공식](https://docs.mongodb.com/manual/reference/built-in-roles) 여기서 확인하면된다.

그리고 위의 명령어는 mongodb 2.4 이하는 db.addUser()를 통해 사용자를 추가해야한다.

## authorization 기능 활성화하기
`/etc/mongod.conf`를 수정하고 재시작(systemctl restart mongod)해 주면된다.

```bash
MongoDB 2.x
auth=true
```
```bash
MongoDB 3.x
security:
    authorization: enabled
```
3.x버전에서는 security부분이 주석이되어있으므로 바로 찾을 수 있을것이다.
2.x버전대는 사용한적이 없어서 잘 모르겠지만 auth가 있다면 true처리 해주거나 저 구문을 추가해 주면될거 같다.

## admin 데이터베이스에 관리자 인증하기
관리자 인증하는 방법은 2가지가 있다.
1. shell에 접속하여 인증하는법
2. shell접속시 username, password 인증하고 들어가기

일단 첫번째 방법부터 알아 보도록하자.

### 1. shell에 접속하여 인증하는법
```bash
mongo #mongo shell에 접속

MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.3
...

> use admin # admin 계정을 만들었던 db로 이동합니다.
> db.auth('username', 'password') # db.auth를 사용하여 username, password 사용하면됩니다. 이때 ''(따옴표) 작성해서 하면됩니다.
1 # 로그인에 성공하면 1이 나오게된다.
```

### 2. shell접속시 username, password 인증하고 들어가기

```bash
mongo -u username -p password --authenticationDatabase admin
```

위와 같이 작성하면 접속과 동시에 인증을 받을 수 있다.
인증과 함께 admin 데이터베이스로 접근하려면, 명령어에 명시만 해 주면 됩니다.
```bash
mongo admin -u username -p password --authenticationDatabase admin
```

## 일반 사용자 만들기
일반사용자를 만들때도 사용하는 명령어는 같다 이때 다른점은 사용하려는 DB로 접속해서 해당 DB에만 계정을 만드는것이다.

```bash
use test
db.createUser({
    user: 'username',
    pwd: 'password',
    roles: ['dbOwner']
})
```
dbOwner라는 권한은 해당 데이터베이스에 대한 모든 수정/삭제 권한을 가진다는 것을 의미한다.

auth를 받는 방법은 use로 해당 db로 이동한 후 db.auth를 사용하면된다.
```bash
use test # test db로 이동함
db.auth('username', 'password') # auth인증 시도
1 # 성공시 1을 반환
```