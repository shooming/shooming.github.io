---
title: Linux TIL
date: "2020-04-02T22:40:32.169Z"
template: "post"
draft: false # 공개여부
slug: "TIL-Linux"
category: "Linux" # 카테고리
description: "Linux TIL 배운거 정리"
socialImage: ""
tags:
    - Linux
    - TIL
---

# LINUX TIL

## 리눅스 기초
linus torvals가 개발

초기 기능
- 프로세스 스케줄링
- 가상메모리 및 파일관리
- 장치 입출력을 제공하는 기본적인 커널

gnu 공개 라이센스로 변환 후 발전 됨

unix와 완벽히 호환됨
무료로 사용됨
gui제공
서버용으로 사용

하드웨어 < 커널 < 쉘 < 응용프로그램

커널 : 리눅스의 핵심, 프로세스 관리, 메모리 관리, 파일 및 장치 등 컴퓨터와 하드웨어를 모두 제어하는 영역

쉘 : 커널과 사용자간의 접점, 쉘을 통해 컴퓨터 원하는 동작 실행가능, 대표적 셀은 BASH(Bourne-agein Shell)있으며 요즘은 zsh(Z shell)이 만이 쓰인다.

응용프로그램 : 각종 프로그램 시스템을 위한 프로그램, 사용자의 문서 편집 도구, 브라우저, 네트워크 도구 등

------

## linux shell

터미널 환경에서 운영체제의 커널(kernel)과 사용자의 유저 스페이스(user spacee)를 이어주는 인터페이스(interface)역할을 하는 프로그램이다.

Terminal과 Shell은 다름

Terminal은 Shell을 실행시키는 프로그램임

package는 프로그램을 뜨하며 다른 사람들이 개발하고 대중에게 공유한 프로그램을 package라고 함.

package manager는 os별로 다름
Mac - homebrew
ubuntu - apt / apt-get apt가 좀 더 발전된 것이며 구버전은 apt-get만 사용해야하지만 최신 버전은 둘다 사용가능


cd - directory change 디렉토리 위치
cd / - root 위치로 감
cd ~ - home 위치로 감
pwd - 현재위치
ls - list dicrectory 디렉토리 내의 파일,폴더 나옴

ls -a - 숨겨진 파일까지 다나옴
ls -la  - 숨겨진 파일과 상세 내용 다나옴

env - 환경변수 보여줌
which - 어디에 있는지 알려줌 폴더, 파일 위치

환경 변수란 shell의 어떠한 설정 값을 가지고 있는 변수를 뜻한다. 그리고 이러한 환경 변수들은 shell이 돌아가는 동안 계속 존재하며 사용됨


환경변수 설정 : 변경변수는 기본적인 명령어가 들어가있음, 구분자는 콜론(:)을 사용함, shellconfig파일에 지정하여 관리할 수 있음

echo $PATH - PATH의 환경변수 출력

mkdir - 디렉토리 생성

vi .bashrc - bash설정파일 

export PATH="/home/eun/bin/anaconda3/bin:$PATH" - 환경변수 설정해줌 설정하면 맨마지막에 추가된건 제일 앞에 나온다.

source .bashrc로 bash 설정변경 다시 불러옴

mv (폴더/파일명) (폴더/파일명) - mv는 파일 옮기거나 파일이름 바꿈 앞이 기존 뒤가 바뀔것

cp (-r) (폴더/파일명) (폴더/파일명) - 파일복사 할때 사용하고 폴더 복제할때는 -r옵션줌

cat - 파일내용 출력해서 보는 명령어

rmdir - 폴더 삭제하는 명령어

clear - 터미널상 명령어 지우고 다시 보여줌

piping은 이전 커맨드의 결과물을 이후에 연결된 작업으로 추가동작을 하고 싶을 때 사용

ls | step m - m이 들어있는 디렉토리, 폴더 찾아옴

man 원하는 명령어 - 멸령어 설명 페이지 열림

tldr ls - ls에대한 핵심적인 내용만 보여줌

tldr은 패키지를 설치해야한다.

------

## vim,git 설치

```bash
sudo apt-get install vim git
```

## zsh설치
```bash
sudo apt-get install zsh
```
zsh 설치

## oh-my-zsh

```bash
sudo apt-get install curl
```
oh-my-zsh을 설치하기 위해 curl 필요 하므로 설치

oh-my-zsh github(https://github.com/ohmyzsh/ohmyzsh)에 접속해 명령어 확인하여 curl로 설치

### 폰트설치
```bash
sudo apt-get install fonts-powerline
```
powerline써야 글자 안깨짐

## zsh-autosuggestions
```bash
cd ~/oh-my-zsh/plugins
```
플러그인 디렉토리로 이동해서
해당 github로 이동해서

```bash
git clone "github주소"
```
해서 설치

## zsh-syntax-highlighting
```bash
cd ~/oh-my-zsh/plugins
```
플러그인 디렉토리로 이동해서
해당 github로 이동해서

```bash
git clone "github주소"
```
해서 설치

## zsh설정
```bash
vi ~/.zshrc
```
home의 .zshrc에서 설정

```bash
ZSH_THEME="agnoster"
```
해당 구문에서 테마 변경

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```
중간에 plugins란에 플러스인 이름 작성

```bash
source ~/.oh-my-zsh/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.oh-my-zsh/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```
맨 밑에 source로 플러그인 클론받은 위치에 스크립트 지정해주고 저장함

```bash
source ~/.zshrc
```
zsh 설정 다시 받으면 적용됨

------

## 가상환경 설치(miniconda 3)

1. wget의 설치 유무
ubuntu는 wget을 통해 웹에서 파일을 다운받을 수 있다.
```bash
apt install wget
```
위 명령어로 wget을 다운받는다.
mac은 apt가 아니라 brew를 사용한다.

2. miniconda3 설치파일 다운
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
```
`20.3.31. 기준 miniconda3의 최신버전으로 다운 받는 명령어다 버전은 계속 달라질 예정이므로 아래 주소로 들어가 본인에게 필요한 버전의 주소를 찾아서 다운 받으면된다.
https://docs.conda.io/en/latest/miniconda.html

3.miniconda3 설치파운 권한 변경
터미널에서 별도로 디렉토리를 옮기지않았다면 파일은 `/home/<유저네임>`위치에 다운받아져 있을 것이다.

```bash
chmod -x Miniconda3-latest-Linux-x86_64.sh
chmod -R 755 Miniconda3-latest-Linux-x86_64.sh
```
위의 2개중 하나의 명령어를 사용하여 설치파일의 실행할 수 있도록 권한을 바꾸어준다.

4. miniconda3 설치
```bash
./Miniconda3-latest-Linux-x86_64.sh
```
명령어를 치면 파일이 실행되며, 약관이 나온다. 약관동의 yes를 한 후
마지막에 shell에 환경변수등을 지정하고 기타 설정을통해 바로 사용할 수 있게할지 물어본다. yes를 하고 터미널을 재시작하면 적용되어 있다.
정상적으로 설치되면 터미널 앞에 (base)라고 표시가된다.
```bash
(base) ***@***:~$
```
설치시 sudo로 설치하면 conda사용시 권한문제가 생기므로 sudo 설치하지 말 것


5. 가상환경 만들기
```bash
conda env list
```
conda 명령어를 쳐서 가상환경이 몇개가 존재하는지 확인할 수 있다.

```bash
conda create -n "가상환경이름" python=3.8
```
create명령어를 사용하여 만들수 있으며 "(따옴표)는 작성하지 않고 환경의 이름만 정해준다 마지막에 python버전을 정할 수 있는데 미입력시 defualt버전이 설치된다.

```bash
conda activate "가상환경이름"
```
가상환경을 만들었으니 작동시켜보도록하자 이때는 activate를 사용한다.
명령어를 사용하면 터미널 앞에 (base)가 (가상환경이름)으로 바뀌게 된다.

```bash
pip freeze
```
명령어를 보면 현재 가상환경에 설치되어있는 패키지들의 목록을 확인할 수 있다. 만약 첫 설치라면 `certifi==2019.11.28`와 같이 `certifi==` 한줄만 나와야한다.

```bash
conda deactivate
```
deactivate를 하면 가상환경을 종료 할 수 있다.

## 가상환경 기타 명령어들
```bash
conda env remove -n "가상환경이름"
```
가상환경을 삭제한다.

```bash
conda env export> "가상환경이름.yaml"
```
가상환경 익스포트하기(배포용 yaml만들기)

```bash
conda env export> "가상환경이름.yaml"
```
익스포트한 가상환경 임포트하기

## bash 사용중 zsh로 변경시
```bash
conda init zsh
```
zsh로 변경하게되면 miniconda에서 해당 실행중인 shell initialize 해달라고함 주문대로 bash fish zsh powershell 등 본인이 사용하는 shell 쓰면됨 init 뒤에

------

## 가상환경에 Django 설치하기
Django를 설치하기전에 가상환경이 실행되어 있어야함을 확인해야한다.

```bash
python -m pip install Django
```
pip를 이용하여 Django를 설치해준다.

```bash
>> pip freeze

asgiref==3.2.7
certifi==2019.11.28
Django==3.0.4
pytz==2019.3
sqlparse==0.3.1
```
pip freeze 설치시 Django가 있고 총 4개의 파일이 설치되었다면 제대로 설치가 된것이다.

------

## Django활용해보기

## Django
초기설정
```bash
django-admin startproject mysite
```
django로 프로젝트를 시작하려면 프로젝트 저장할 디렉토리로 이동한후 위의 명령어를 작성한다.

명령어를 작성하면 해당 위치에서 django가 기본설정을 시작한다.

```bash
python manage.py runserver
```
그 후 runserver를 하면 서버가 작동하게된다.