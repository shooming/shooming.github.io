---
title: Python TIL
date: "2020-03-30T22:40:32.169Z"
template: "post"
draft: false # 공개여부
slug: "TIL-Python"
category: "Python" # 카테고리
description: "Python TIL 배운거 정리"
socialImage: ""
tags:
    - Python
    - TIL
---

# Python

## print
```python
print("hello world!")
```
print 명령어 는 화면에 내용을 출력하기 위해 사용한다.

print는 함수 이름이며 따옴표("")안에 들어가는 내용은 string이라고 부른다.

------

## Data Types
Data Type은 작성된 내용이 숫자인지 텍스트인지를 의미하며 몇 가지 타입들이 존재한다.

1. ### Integer
    정수값(int라고도 함), 1,2,3 과 같이 일상적으로 사용되는 숫자
2. ### Float
    실수값으로 소수점이 있는 숫자 2.0, 5.99
3. ### Complex Numbers
    복소수를 이야기하며 5+6j와 같이 표현 수학에서는 i지만, 전기,전자 등 공학에서의 복소수는 j로 표기한다 (i가 먼저 사용되어 겹치는 경우가 많기 때문 ex : 전류(i))
4. ### string
    기본적인 문자열
5. ### Boolean
    Bool이라고도 하며 조건문(condition)에 주로 사용 True / False 참과 거짓을 나타낸다.
    
        0               = False
        0이 아닌 숫자    = True
        777 == 777        True
        777 == "777"      False (따옴표안에 표현되어 string type이기 때문)

------
## Variables
변수선언시 주의사항
1. 알파벳, 숫자, underscore(_)으로 만 구성됨
2. 첫 글자는 알파벳 또는 underscore(_)으로만 시작가능, 숫자로 시작 불가
3. 알파벳은 대/소문자 구분가능
4. 공백,  특수문자 사용불가

------

## Math Expression
몇 가지 기호를 통해 기본적인 수학 연산들이 가능하다.

```python
10 + 10 = 20    ## 더하기 연산자 "+"
20 - 20 = 0     ## 빼기 연산자   "-"
30 * 30 = 900   ## 곱하기 연산자 "*"
2 ** 3  = 8     ## 거듭제곱 연산자 "**"
40 / 40 = 1     ## 나누기 연산자 "/"
7 // 3 = 2      ## 정수 나누기   "//" (몫의 소수점 밑을 버림)
10 % 3 = 1      ## 나머지 연산자 "%"
```
위의 연산자들 사용 할 수 있다.

다른 연산자들은 소숫점 계산을 하지 않으면 int형이 출력될 가능성이 높지만 나누기는 int형으로 서로 나누더라도 소숫점이 나올 수 있으므로 기본 float형으로 값이 출력된다.

## Advanced Math Expressions
```python
num1 = 10

num1 += 1   ## num1 = 11 
num1 -= 1   ## num1 = 9 
num1 *= 2   ## num1 = 20
num1 /= 5   ## num1 = 2
```
위의 예제는 각각의 연산에 num1이 10 그대로 반영됨을 전제로 한다. 그대로 사용시 연속적인 연산이된다.

위 계산들은 num1을 계산 후 다시 num1으로 값을 저장하는 연산자이다.

    num1 += 1   ==  num1 = num1 + 1
    num1 -= 1   ==  num1 = num1 - 1
    num1 *= 2   ==  num1 = num1 * 2
    num1 /= 5   ==  num1 = num1 / 5
위와 같이 축약시켜 놓은 것이다.

이러한 연산을 하는 이유는 반복되는 연산을 수행하기 위해서이다. ex) 방문자수 카운터

------

## Order of Operators
수학에서도 곱셈이 덧셈보다 먼저 계산되듯 python 연산자도 연산순위가 존재한다.

일단 간단하게 기본적인 연산자만 보면
```bash
(우선순위 낮음) + , - <<< *, /, % <<< ** <<< ( ) (우선순위 높음)
```
위와 같은 순서가 된다.

------

## Concatenating Text Strings
문자열도 더할 수 있다.
```python
print("안녕하세요")
print("안녕" + "하세요")
```
그러므로 위의 예제의 두 print의 문자열은 더해져서 같은 출력값이 나오게 된다.

```python
hey = "하세요"
print("안녕" + hey)
```
위와 같이 함수와 문자열도 더할 수 있다
단 문자열은 문자열끼리만 덧셈이 가능하기 때문에 함수안의 값도 문자열이어야한다 정수형, 실수형 등 다른 형태는 불가능하다.

복잡한 string concatenation
python에는 문자열에 변수를 넣는 몇가지 방법이 존재한다.

```python
a = 10
b= "hi"

print("%s, 나는 %d살이야" %(a,b))

print("{0}, 나는 {1}살이야" .format(a,b))


name = input() 

print(f"Hello, {name}")
```
위와 같이 3가지 정도 존재하며

첫번째 print는 %-formatting이고 %뒤에 s, d 등으로 데이터 타입을 표시해서 값이 넣어준다.

두번째 print는 .format()함수를 이용한 방법이다. 중괄호에 숫자를 써놓으면 포맷팅 순서대로 숫자가 매겨져 있는데 해당 하는 숫자에 값이 들어간다. 만약 비어있을 경우 순서대로 값이 들어가게된다.

세번째 print는 f-string라는 방식이다. 해당 방식은 문자열(")앞에 f를 적고 원하는 값을 넣을 자리에 중괄호를 넣고 변수를 집어 넣으면 된다.

------

## Comparison Operators
python문에는 몇가지 비교연산자가 있다
```python
A == A  ## A는 A와 같은가
A != B  ## A는 B와 다른가
A > B   ## A는 B보다 큰가
A < B ## A는 B보다 작은가
A >= B ## A는 B보다 크거나 같나
A <= B ## A는 B보다 작거나 같은가
```
비교연산자들의 기준은 `오른쪽`에 있는 내용이며 `왼쪽`에 값을 넣어서 오른쪽과 비교하여 True, False를 판별한다.

------

## IF
```Python
if 조건문:
    조건문 True 일 경우 출력
```
조건문이 일치하면 바로아래 들여쓰기되어 해당 함수에 종속된 내용들이 실행된다.

## elif, else

```python
if 조건문1:
    조건문1 True 일 경우 출력
elif 조건문2:
    조건문2가 True 일 경우 출력
else:
    위 조건들에 해당하지 않으면 출력
```
elif는 if안에서 또 다시 조건 비교를 하게 해주는 keyword이다. 만약 if의 조건을 충족하지 못 한다면 elif의 조건을 체크해서 조건값이 맞다면 해당 elif의 내용을 출력하고 if문 종료한다. elif는 if밑에 종속되며 여러번 사용가능하다

else는 if, elif의 해당하지 않는 모든값들을 else에서 처리한다. if 다음 바로 else 사용가능하고 else는 마지막 해당 if에서 마지막 한번 혹은 사용을 안하거나 둘 중 하나를 택하면된다.

------

## 논리 연산자
```python
if A == 1 and B == 1:
    A와 B 값의 비교연산이 둘다 True가 되어야 출력됨

if A == 1 or B == 1:
    A와 B 값의 비교연산 중 둘중 하나만 True가 되어도 출력됨

if (A == 1 or B == 3) and (A == 1 and B == 1:)
    and 와 or 연산자는 복합적인 사용도 가능하다
```
아래 표를 확인하면 간단하게 알 수 있다
|   A   |   B   |  and  |
|:-----:|:-----:|:-----:|
| False | False | False |
| False |  Ture | False |
|  Ture | False | False |
|  Ture |  Ture |  Ture |

|   A   |   B   |   or  |
|:-----:|:-----:|:-----:|
| False | False | False |
| False |  Ture |  Ture |
|  Ture | False |  Ture |
|  Ture |  Ture |  Ture |

------

## comment
```python
# 주석을 달고 싶은 문장에 #을 작성하면된다 한줄 주석에 사용한다.

'''
여러 줄
주석 처리
'''

"""
여러 줄
주석 처리
"""
```
주석은 사실 # 하나만이 주석이라 볼 수 있다.
"""
"""
이나
'''
'''
은 사실 multiline을 처리할수 있게 해주는 장치이다
실제로는 문자열화 되었지만 출력되지 않았기 때문에 보이지 않게되는 것이다. 정확히는 주석이 아니지만 여러줄 주석처럼 활용한다.

------

## Function
함수는 일정한 작업을 수행하는 코드블럭으로 자주 사용되는 코드들을 함수로 만들어 효과적으로 사용한다. 또한 함수로 정리해 코드의 가독성을 높인다.

input은 parameter,
output은 return 값 이라고 한다.

```python
def 함수명(parameter):
    문장1
    문장2
    ...
    문장N
    [return 리턴값]
```
함수는 위와 같은 형태로 작성을 하며 parameter와 return 은 옵션이므로 parameter와 return이 없는 함수도 존재한다.

------

## Function Parameters

### positional arguments
```python
def like_food(food1, food2):
    print(f"{food1}과{food2}를 좋아한다.")

like_food("치킨","피자") # food1 = 치킨 / food2 = 피자

## "치킨과 피자를 좋아한다"가 출력됨
```
위와 같이 function에 바로 parameter값을 바로 넣어서 전달하면서 호출하는 형태이며 넣은 순서대로 들어간다.

### Keyword Arguments
```python
def like_food(food1, food2):
    print(f"{food1}과{food2}를 좋아한다.")

like_food(food2="피자",food1="치킨") # food1 = 치킨 / food2 = 피자

## "치킨과 피자를 좋아한다"가 출력됨
```
parameter 이름으로 맞추어서 값을 전해줄 수 있습니다. 이를 keyword argments 방식이라고 함 전달되는 parameter의 이름과 맞으면 순서는 바뀌어도 상관없이 전달된다.

### Mixing positional arguments and keyword arguments
```python
def like_food(food1, food2):
    print(f"{food1}과{food2}를 좋아한다.")

like_food("치킨",food2="피자") # food1 = 치킨 / food2 = 피자

## "치킨과 피자를 좋아한다"가 출력됨
```
해당 방식은 positional arguments와 keyword arguments를 합쳐서 사용한 방법이다. 이때 keyword arguments는 parameter의 이름이 지정되어 있어 순서가 바뀌어도 전달되지만 positional arguments는 이름이 지정되지 않다. 그렇기 때문에 positional arguments의 위치의 순서와 parameter의 순서대로 인자를 전달하게된다. 순서가 틀려버리면 에러가 발생되어 버린다.

```python
def like_food(food1, food2):
    print(f"{food1}과{food2}를 좋아한다.")

like_food(food2="피자","치킨")
# 위의 값은 에러가 발생한다.
```
위의 값은 에러가 발생하는데
첫번째 값인 keyword arguments가 먼저나와서 food2에 피자가 전달되었는데 positional arguments인 치킨이 다시 food2위치에 들어가려하며 food1에는 아무런 값도 들어가지 않은 상태가 되어 에러가 발생하게된다.

### Parameter Default Value
Parameter가 전달되지 않았을때 default값을 출력하여 줄 수 있다.
```python
def like_food(food1, food2 = "피자"):
    print(f"{food1}과{food2}를 좋아한다.")

like_food("치킨") # food1 = 치킨 만 전달됨

## "치킨과 피자를 좋아한다"가 출력됨
```
like_food함수의 parameter전달시 피자를 전달 하지 않았지만 함수에 default 설정에 의해 자동으로 피자가 출력된다.

```python
def like_food(food1="치킨", food2):
    print(f"{food1}과{food2}를 좋아한다.")

like_food("피자") # 에러가 발생한다.
```
위와 같은 default value parameter는 에러가 발생하게 된다. 그 이유는 함수 parameter 전달시 생략하는 parameter가 food1인지 food2인지 알 수 없기 때문에 피자를 전달할때 positional arguments로 생각하면 food1의 위치이다 하지만 치킨이라는 값이 기본값으로 되어있다 하지만 food2에 parameter는 전달되지 않았다. 하지만 위치는 food1이다 그럼 food2로 보내야 하는가? 파이썬은 고민하게된다. 그래서 애초에 이런 문법을 사전에 차단하려고 하는것 같다. 그러므로 Default Value값을 뒤에 배치해야한다. 그리고 food2에도 기본값을 정의해 주어 둘다 default value를 가지면 에러가 발생하지 않는다.
like_food(food1="라면", food=2"피자"), like_food(food=2"피자")등 parameter 이름을 지정하여 보내도 `SyntaxError: non-default argument follows default argument`에러가 발생한다.

## keyword-only arguments
python에서는 keyword값을 받아서만 입력받는 방식이 존재하는데 keyword only arguments 방식이다.

*varargs는 가변적인 positional arguments들을 리스트의 형태로 저장하여 parameter에 저장하는 기능을 제공한다.

**kwargs는 가변적인 keyword값을 받아 dictionary형태로 저장하여 parameter에 저장하는 기능을 제공한다.

```python
def keword_prc(a, b, *varargs, **kwargs):
    print(a, b, varargs, kwargs)

keword_prc(1, 3, 5, 7, x=9, word="book")

## 1 3 (5, 7) {'x':3, 'word'= "book"} 출력
```
위에 예제는 기본적인 문법의 흐름이다.

일단 함수호출 부분부터 확인해보자

호출 부분을 보면 함수에 보이는 parameter의 수보다 더 많은 argument들이 들어가있다.

그 다음은 출력부분을 보자, 보면 정상적으로 출력이 되었음을 확인 할 수 있다.

어떻게 처리가 된것일까? 보면 1, 3까지는 a, b에 정상적으로 들어가게된다. 그럼 1, 3을 제외한 모든 positional arguments는 *varargs로 들어가 리스트형태의`(5,7)`로 저장되고, keyword arguments는 **kwargs로 들어가 `{'x':3, 'word'="book"}` 딕셔너리의 형태로 저장된다.

 - 가독성이 향상된다.
 - API 함수들은 모호성을 피하기 위해 중요한 매개 변수를 keyword only arguments로 승인 할 수 있다.
 - 모든 함수를 keyword only arguments로 만들 수 있다.
 - keyword only arguments가 있는 함수는 많은 수의 인자를 전달 할때 유용하다.

keyword only arguments에는 두가지 종류가 존재한다.
 - Non-Default Keyword-Only Arguments
 - Default Keyword-Only Arguments

1. **Non-Default Keyword-Only Arguments**
    말그대로 default가 없이 정의된 keyward arguments이다.
    만약 함수가 Non-Default Keyword-Only Arguments와같이 정의되었다면 함수 호출시 keyword와 값을 적어서 전달하여야한다.
2. **Default Keyword-Only Arguments**
    위와는 반대로 keyword에 default값이 적용된 keyward arguments이다.
    이 경우에는 함수 호출시 값을 전달하지 않으면 기본값을 출력하게 된다.

### keyword only arguments의 문법
keyword only arguments 정의시 가변 positional arguments는 *varargs의 형태로 정의한다. (*name, *age 등 *뒤에 원하는 이름 정하면된다.)
```python
def position_word(a, b, *words, print_result=True):
     result = a + b + sum(words)
     if print_result:
         print("{} {} {} 의 합은 {}이다.".format(a, b, ' '.join(map(str, more)), result))
     return result

position_word(1, 3, 9)
## 1 3 9 의 합은 13이다. 출력
## 13 출력
position_word(2, 9, 12, 3, print_result=False) 
## 26 출력
```
위 예제는 keyword only arguments사용 예이다.

`position_word` 함수부분을 보면 `(a, b, *words, print_result=True)`로 arguments를 받는다.
`a ,b`는 positional arguments로 해당위치에 값을 맞추어서 넣어주면 된다.
`*words`에는 가변적인 positional arguments을 받으면 되는데 두번째까지 인자가 보내졌는데 추가적으로 positional arguments가 보내지면 전부 `*words`로 들어가 리스트가 된다.
`print_result=True`는 Default Keyword-Only Arguments로 값을 keyword로 값을 별도로 받지않으면 True값을 넣게된다.

인자를 받는 부분을 봤으므로 실제로 값을 넣어보면서 확인해 보면

`position_word(1, 3, 9)`를 호출하였다. 이 경우 전부 positional arguments이므로 해당위치로 인자를 전달하면된다.

`position_word(a, b, *words, print_result=True)`
전달된 인자들은 1은 a로 3은 b로 9는 *words로 들어가게된다. 뒤에 print_result는 값을 전달 받지 않았으므로 print_result 는 True값을 지닌다.

`result = a + b + sum(words)` a = 1, b = 3, words = 9
의 값을 더해 result에 저장한다.

`if print_result:` print_result의 값이 True임으로 if문을 실행한다.

`print("{} {} {} 의 합은 {}이다.".format(a, b, ' '.join(map(str, more)), result))`
값을 대입해서 출력을 하는데 첫 중괄호부터 순서대로 .format()에 기입된 순서대로 값이 들어간다. 중간에 join과 map 함수는 list의 값을 원하는 데이터 타입과 문자열의 형태로 출력하기 위해 사용한다.
그럼 순서대로 `1 3 9 의 합은 13이다.`가 출력된다.

`return result` result값을 반환하므로 `13`이 반환된다.

위에서 한번 보았으니 다음은 빠르게 다른 예를 보면

`position_word(2, 9, 12, 3, print_result=False)`
position_word를 호출하여 값을 보낸다.

`position_word(a, b, *words, print_result=True)`
아까와는 다르게 보내진 인자들이 너무 많다.
a = 1, b = 2, 여기서 *words가 기능한다. 초과되는 12와 9를 리스트에 형태로 저장한다. 그 다음 print_result는 False의 값을 받았으므로 False의 값을 가진다.

`result = a + b + sum(words)` a + b + sum()함수를 통해 words안의 모든 수를 더 한걸 전부 합하여 result에 저장한다.

`if print_result:`는 print_result가 False의 값을 가진다. if의 조건에 false값이 들어간것이라 if문을 출력하지 않고 넘긴다

`return result` result값을 반환하므로 `26`이 반환된다.

### 복합적인 구성형태
```python
def 함수명(a, b, c, an=1, sz=3, *이름, q1 , q2="랜덤", q3, q4="게임", **이름)
```
모든 Arguments의 구성은 저런 형태로 구성하면된다.

`a, b, c`는 positional arguments

`an=1, sz=3`은 Keyword Arguments
 - 지금의 순서대로 Default Value parameter가 뒤에 배치되는 이유는 positional arguments보다 앞에 배치되면 섞여져서 전달시 인자가 전달될 곳을 찾지 못하므로 에러가 발생되기 때문이다.

`*이름` positional arguments의 초과분은 다 이곳에 저장된다. ex) (5, 6, 90)

이 위로보면 key / value 값 형태가 아닌 value값만을 가지는 arguments들이 먼저 배치되어 있다
<br/>

`q1 q3` Non-Default Keyword-Only Arguments
    
`q2="랜덤" q4="게임"` Keyword-Only Arguments with no varargs

- 뒤쪽부분은 앞쪽과 다르게 default 값과 상관없이 무작위로 배치되어 있다. 그 이유는 Keyword-Only Arguments는 무조건 keyward와 값을 같이 전달해 주어야하기 때문이다 자세한 내용은 뒤에서 할 예정이다.

`**이름` 이 부분은 Keyword-Only Arguments이 다 배치되고 parameter값이 초과되는 내용이 전부 저장된다.
keyward = value 형태를 가지기 때문에 리스트가아닌 딕셔너리의 형태로 저장된다. ex) {'지역'='서울', '국가'='한국'}

이렇게 배치되는 이유에 대해 생각해 볼 필요가 있다.

positional arguments 관련된 값을 앞쪽에 배치하는 이유는 순서에 영향을 많이 받기 때문이다. 그에 비해
Keyword-Only는 Keyword값이 무조건 들어가야하므로 arguments는 자기가 가야할 parameter의 위치를 알고 있다 그렇기 때문에 순서에 영향을 덜 받기 때문에 뒤쪽으로 배치된것이다

중간에 `*이름` `**이름` 들어가는 이유는 해당 부분에서 초과되는 값을 소화해 내기 위해서이다. *뒤의 이름은 예시를 위해 이름으로 작성한 것이므로 사용시 본인의 필요에 의한 이름으로 지정하는 것이 좋다.

### Keyword-Only Arguments with no varargs
```python
def compare(a, b, *, key=None):
    . . . 
```
위의 예시를 보자 * 뒤에 값이 지정되어 있지않다
그럼 어떻게 될까 일단 왜 *를 사용하는지 알아보자
`PEP 3102 -- Keyword-Only Arguments` 파이썬 공식 문서를 보면 Keyword-Only Arguments는 *varargs가 선언 되어있어야만 사용할 수 있다고 써져있다. 하지만 굳이 값을 받지는 않지만 평소에는 기본출력이다가 필요할때만 스위치처럼 다른출력을 하기위해 Keyword-Only Arguments 사용하려고 한다. 하지만 사용하기위해선 *varargs의 불필한 정의를 해야한다 이때 예외처리를 하기위해 *를 사용한다. 그렇게되면 *varargs가 없어도 사용이 가능해진다.

### Non-Default Keyword-Only Arguments Syntax
```python
def compare(a, b, *, key):
    . . .
```
위의 예제에서는 예외처리 후 key를 Non-keyword-only Arguents로 선언한것이다. 하지만 keyword only는 keword로 parametre를 조절한다 하지만 positional arguments로 값을 3개를 작성하고 해도 keyword가 지정된게 아니므로 key에 값이 들어가지 않게된다. 즉 `key="무언가"`값이 없다면 에러가 발생하게 된다.

그래서 Keyword-Only Arguments 예외처리 사용시에는 default값을 설정해주어야한다 아니면 쓸때마다 `keyward = value`의 형태로 값을 전달해야한다.

------

## list / tuple
파이썬에는 배열을 만드는 몇가지 방법들이 존재한다.
이렇게 자료를 저장하는 것을 data sturcutre (자료구조)라고 한다.
```python
# list
random_values = [1, "two", True]
my_list = [ ]
list("리스트로 만들 대상")

# tuple
random_values = (1, "two", True)
my_list = ( )
tuple("리스트로 만들 대상")
```
1. #### list
    첫번째로는 list이다. 리스트는 다른 언어들의 배열 선언과 비슷하다
    ```python
    배열이름 = [값1, 값2, 값3]
    ```
    위와 같은 형태로 작성하면된다.
    각 값의  순서를 list의 "index"라고함 값1의 index = 0
    값2의 index = 1이다 우리는 평소에 1부터 수를 세지만 index는 0부터 세기 시작한다.

2. #### tuple
    tuple은 list와 거의 비슷한데, 한가지 큰 다른 특징을 가진다. lsit는 수정이 가능하지만 tuple은 수정이 불가능하다는 점이다.
    ```python
    배열이름 = (값1, 값2, 값3)
    ```
    list는 대괄호`[ ]`를 사용하지만 tuple은 소괄호`( )`를 사용한다.

------

## Adding And Changing Elements To List
list의 특징중 하나는 수정이 가능하다는 것이다.

1. #### append
    리스트에 새로 운 element를 추가 하기 위해서는 apopend라는 함수를 사용한다.
    ```python
    리스트명.append("추가할 값")
    ```
    위와 같이 list에 append를 사용하면 해당 list index 마지막 부분에 값이 추가된다.

2. #### +
    list에 여러개의 element를 추가할때는 +를 사용한다.

    ```python
    ex_list = ex_list + ["추가값1", "추가값2"]
    ex_list1 = ex_list1 + ex_list2
    ```
    list에 +를 사용하여 element를 추가할 경우 대괄호([])를 사용하여 리스트 형태로 만들고 추가해야한다.
    list + list 와 같다 더하고 난 값들은 변수에 저장할 변수에 지정해 주어야한다.
    list + list 의 형태가 된다는 것은 list1과 다른 list2가 +로 합쳐질 수있다는 것이다.

3. #### insert
insert는 앞의 2가지 방식과 다르게 원하는 위치에 element를 삽입 할 수 있다.
```python
country = ["한국", "미국", "영국", "중국", "인도"]
country.insert(2,"폴란드")
# country = ["한국", "미국", "폴란드",  "영국", "중국", "인도"]
```
위와 같이 `미국`과 `영국` 사이에 `폴란드`가 추가된것을 알 수 있다.

`country.insert(2,"폴란드")`
`리스트명.insert(추가할 위치, "추가할 element")`
위와 같은 방법으로 list 중간에 값을 추가할 수 있다
추가할 위치는 index가 0부터 시작함을 유의하도록하자 추가되면 그 위치의 값과 그 뒤값은 한칸씩 밀리고 index도 1씩 증가한다.

4. #### Updating Elements
이 방법은 변경을 원하는 index의 값을 지정해서 원하는 element를 저장시킨다.
```python
라면 = ["신라면",  "너구리", "짜왕", "불닭볽음면"]

라면[1] = "진라면"

#라면 = ["신라면",  "진라면", "짜왕", "불닭볽음면"]
```
값을 보면 `너구리`가 `진라면`으로 바뀌었다.

------

## slicing
slicing이란 list를 원하는 일부분만 잘라내는 것이다.
```python
과일 = ["포도", "배", "사과", "참외", "바나나", "자두", "복숭아"]
장바구니 = 과일[1:4]
# 장바구니 = ["배", "사과", "참외"]
장바구니 = 과일[3:]
# 장바구니 = ["참외", "바나나", "자두", "복숭아"]
장바구니 = 과일[:3]
# 장바구니 = ["포도", "배", "사과"]
```
```python
리스트명[시작할 index값(start) : 정지할 index값(stop)]
```
시작할 index값은 포함되고, 정지할 index값은 포함되지 않고 그 앞까지만 포함된다.

정지할 index를 비우면 시작할 index부터 끝까지 선택됨
반대로 시작할 index를 비우면 정지할 idex의 앞부터 처음까지 전부 선택됨

### Slicing Steps
```python
리스트명[시작할 index값 : 멈출 index값 : step]
```
step은 옵션값으로 써도되고 안써도 무방하다. 안쓰면 default값으로 1을 가진다.
step을 사용하면 예를 들어 2이면 2칸씩 출력한다.

------
## Deleting Elements From List

### del
```python
과일 = ["포도", "배", "사과", "참외", "바나나", "자두", "복숭아"]
del 과일 [3]
# 과일 = ["포도", "배", "사과", "바나나", "자두", "복숭아"]
```
```python
del 리스트 [삭제할 인덱스]
```
del 키워드와 list의 인덱스를 사용하여 원하는 요소를 리스트에서 삭제할 수 있다. 삭제를 하고 나면 빈공간을 채우기위해 뒤의 index가 앞으로 땡겨진다.

### remove
```python
과일 = ["포도", "배", "사과", "참외", "바나나", "자두", "복숭아"]
과일.remove["포도"]
# 과일 = ["배", "사과", "참외", "바나나", "자두", "복숭아"]
```
```python
리스트.remove["삭제원하는 요소값"]
```
del은 index로 삭제하였다면 remove는 list는 element값을 적어서 해당 element를 삭제시킨다.

------

## set
set은 배열의 여러 타입중 하나로 element를 저장할 수 있다.
list와 비슷하지만 다른 특징이 몇가지 있다.

1. list와는 다르게 순서대로 저장되지 않는다는 점이다. 즉 ordering이 없으므로 for으로 출력시 무작위로 나온다.

2. 순서가 없으므로 inexing이 없어 원하는 요소를 뽑아낼 수 없다.

3. 순서가 없으므로 동일한 값을 여러개 가지실 수 없다. 만약 중복값이 들어오면 새로운 요소가 이전 요소를 치환(replace)함

### set 생성
```python
set1 = {1,2,3}
set2 = set([1,2,3])
```
set을 만들기위해서는 중괄호({ })를 사용하는 방법과 set() 함수를 사용 방법이있다.


### set에 새로운 요소 추가
```python
추가추가 = {1, 2, 3}
추가추가.add(4)
# 추가추가 = {1,2,3,4}
```
list에서는 요소를 추가하기 위해서 append를 사용했지만 append는 덧붙인다는 의미로 list에서는 순서뒤에 덧 붙인다라는 느낌으로 사용했다 하지만 set은 요소를 추가하면 순차저장을 하지 않는다. 그래서 add를 사용한다.

### set에서 요소 삭제
```python
빼기빼기 = {1, 2, 3}
빼기빼기.remove(3)
# 빼기빼기 = {1,2}
```
remove 함수를 사용해서 삭제 합니다. 순서가 없기 때문에 del을 사용할 수 없다.

### Look Up
set에 어떤값이 포함되어있는지 알기 위해 사용하는것을 look up이라고 함.
set에 look up을 하기위해 in 키워드를 사용해야함.

```python
set1 = {1, 2, 3}

if 1 in set1:
    print("1은 있지롱")

if 4 not in set1:
    print("4는 없지롱")
```
`1 in set1` in을 이용하는 방법으로 앞의 값이 있으면 if문을 출력
`4 not in set1` not in을 이용하는 방법으로 앞의 값이 없으면 if문을 출력한다.

`in` / `not in`은 list에서도 사용가능하다.

### Intersection (교집합) & Union (합집합)
```python
set1 = {1, 2, 3, 4, 5, 6}
set2 = {4, 5, 6, 7, 8, 9}

print(set1 & set2)
> {4, 5, 6}

print(set1.intersection(set2))
> {4, 5, 6}
```
set은 교집합 구할시 사용되며 `&`,`intersection( )함수`를 사용한다.

```python
print(set1 | set2)
> {1, 2, 3, 4, 5, 6, 7, 8, 9}
print(set1.union(set2))
> {1, 2, 3, 4, 5, 6, 7, 8, 9}
```
set은 합집합 구할시 사용되며 `|`,`union( )함수`를 사용한다.

------

## Dictionary
```python
Dictionary = {"key1" : "value1", "key2" : "value2" ~}
```
- 중괄호 { } 를 사용해 dictionary 선언한다.
- key 와 value의 값으로 이루어짐

### Dictionary에서 요소(element) 불러오기
Dictionary는 key값을 활용하여 value값을 찾아온다.
```python
기생충 = {
    "제목" : "기생충",
    "감독" : "봉준호",
    "상영시간" : "131분",
    "제작국가" : "한국",
}

print(기생충["감독"])
# 봉준호 출력
```
- Key 는 string 뿐만이 아니라 숫자도 가능함
- Key 값은 중복될 수 없습니다. key값 중복시 새로운 요소로 치환(replace)됨

```python
dict1 = { 1 : "one", 1 : "two" }
print(dict1)
> { 1: "two" }
```
위와 같이 중복된 key값을 사용하면 뒤에 사용되는 key의 값이 기존값을 치환시켜버린다.

### Dictionary에서 새로운 요소(element) 추가하기
```python
dictionary_name[new_key] = new_value
```
list와 별로 차이가 없지만 index값이 아니라 key값을 사용한다는게 가장 큰 차이이다.
단 새로운 key값이 아니라 기존에 사용되어있던 key값을 쓰면 그곳에 있던 value가 새로운 value로 치환된다.

### Dictionary 에서 요소 수정 하기
```python
dictionary_name[value바꿀 key] = new_value
```
위에 말한것과 같이 기존에 있던 값을 바꾸고 싶으면 key를 활용해 value를 변경한다.

### Dictionary 에서 요소 삭제 하기
```python
del dictionary_name[삭제할 key]
```
list와 같이 del을 사용하여 삭제할 key값을 넣으면 해당 key와 value가 삭제된다.

------

## For Loops
```python
for element in list:
    반복문 출력
```
for을 사용하는 예이다 list의 요소를 한번에 한개씩 꺼내어 element에 값을 넣고 for구문 안에 있는 코드를 요소의 수 만큼 실행한다. tuple, set도 사용가능하다.

### Break
for을 사용중 중간에 for문을 종료하고 싶을 때사용 하는 방법이다.
```python
num = [1, 2, 3, 4, 5, 6]

for element in num
    if element == 3:
        print("3을 찾았으니까 for문은 종료")
        break
    else:
        print("3을 찾는 중입니다.")
```
저렇게 break를 사용하면 3이후로는 더 이상 확인을 안하고 for문을 종료하는 것이다.

### Contunue
```python
for element in num
    if element != 3:
        print("3아니네요")
        continue
    print("이것은 3이네요")
```
Contunue는 interation(list가 가진 요소)으로 넘길 때 사용한다. 3이 아닌값에서는 모든 숫자들이 if문이 실행된다. if문이 실행되면 `3아니네요`만을 출력하고 continue로 인해 `print("이것은 3이네요")`가 출력되지 않는다. 그 이유는 continue가 그 요소에서의 for문을 끝내고 다음 element를 for하라고 지시했기 때문이다.
3에서는 if문이 작동안해서 `print("이것은 3이네요")`가 나오게 된다.


### Nested For Loops
For문은 중첩이 가능하다.
```python
numbers1 = [1, 2, 3, 4, 5]
numbers2 = [10, 20, 30, 40, 50]

for num1 in numbers1:
    for num2 in numbers2:
        print(f"{num1} * {num2} == {num1 * num2}")
```
------
## While Loops
While은 python에서 사용하는 다른 방법의 반복구문이다.
```python
while <조건문>:     
    <수행할 문장1>     
    <수행할 문장2>     
    <수행할 문장3>     
    ...
    <수행할 문장N>
```
while문은 list나 tuple에서 값을 꺼내오는 방식이 아닌 `조건`을 지정하여 반복문을 수행하므로 list나 tuple을 기반으로 하지 않아도 된다. `조건 == True`일 동안 반복문이 실행된다.

```python
num = 0

while number <= 10
    print(num)
    num += 1
아래와 같이 출력됨.
0
1
2
3
4
5
6
7
8
9
10
```
### Break & Continue
```python
number = 0

while number <= 10:
    if number == 9:
        break
    elif number <= 5:
        number += 1
        continue            
    else:
        print(number)
        number += 1
> 6
7
8
```
while에도 Break, Contunue는 사용이 가능하다. 기능, 사용방법도 같다.

### While Else
```python
while <조건문>:
    <수행할 문장1>     
    ...
    <수행할 문장N> 
else:
    <while문이 종료된 후 수행할 문장1>  
    ...
    <while문이 종료된 후 수행할 문장N>
```

조건문인 if가 else를 통해 False조건문을 실행시킬 수 있는것 처럼 while 또한 조건이 flase가 되어 반복 종료시 else문을 실행시킨다.

------

## Complex Dictionary

### List of Dictionaries

```python
  klegue = [
    {
    "구단": "강원 FC",
    "리그참가": 2009,
    "연고지": "강원도(춘천)",   
    "주 경기장": "춘천송암레포츠타운"
    },
    
    {
    "구단": "광주 FC",
    "리그참가": 2011,
    "연고지": "광주광역시",   
    "주 경기장": "광주월드컵경기장"
    }
  ]
```
위와 같이 dictionary를 list에 넣어 여러개의 데이터를 관리할 수 있다.
하지만 이러한 방식에는 약간의 문제가 있다.

```python
for legue in klegue:
	if legue["구단"] == "강원 FC":
		print(legue["주 경기장"])
```
원하는 dictionary에 정확하게 접근할 방법이 없어서 for문을 돌려 특정 key로 해당 dictionary를 찾아 원하는 값을 찾아내야한다. 이러한 방식은 list안의 요소가 늘어나면 시간이 더 늘어날 것이다.

### Nested Dictionary
위 방식을 해결하여 좀더 편리하고 효율적으로 데이터를 관리할 수 있게해주는 방식이다.
아래 예시를 보자
```python
  klegue = {
    "강원 FC" : {
    "구단": "강원 FC",
    "리그참가": 2009,
    "연고지": "강원도(춘천)",   
    "주 경기장": "춘천송암레포츠타운"
    },
    
    "광주 FC" : {
    "구단": "광주 FC",
    "리그참가": 2011,
    "연고지": "광주광역시",   
    "주 경기장": "광주월드컵경기장"
    },
}

print(klegue["강원 FC"]["주 경기장"])
# 춘천송암레포츠타운 출력
```
List of Dictionaries와는 다르게 list가 아닌 Dictionary안에 Dictionary를 넣음으로서 Dictionary안의 데이터를 key값으로 특정하여 가져오기 쉽게되었다.

------

## Nested Function
for, if문을 중첩하는 것처럼 함수안에 함수를 중첩하여 작성하는 것을 말한다.

```python
def parent_function():
    def child_function():
        print("this is a child function")

    child_function()

parent_function()
> "this is a child function"
```
이렇게 만들어진 함수는 최상단의 부모함수를 호출해야 내부 자식 함수도 작동시킬 수 있다.

이렇게 중첩하는 방식을 사용하는 이유는 2가지가 있다.

1. #### 가독성
함수 안의 코드 중 반복되는 코드가 있다면 중첩함수로 선언하면 부모 함수의 코드를 효과적으로 관리하여 가독성을 높일 수 있다.

```python
def print_all_elements(list_of_things):
    ## 중첩함수 선언
    def print_each_element(things):
        for thing in things:
            print(thing)

    if len(list_of_things) > 0:
        print_each_element(list_of_things)
    else:
        print("There is nothing!")
```

2. #### Closure

중첩 함수를 사용하는 가장 큰 이유이다.

충첩 함수가 부모 함수의 변수나 정보를 가두어 사용하는 것을 closure이라고 한다. 그리고 부모함수는 중첩 함수를 return해 준다.
이렇게 하면 부모함수의 변수를 외부로부터 직접적인 접근은 격리하면서도 중첩 함수를 통해서 격리된 부모함수의 변수를 사용한 연산은 가능하게 해준다.

closure을 사용하는 경우는 어떤 정보를 기반으로 연산시 기반이되는 정보는 접근을 제한 하여 노출이 되거나 수정이 되지 못하게 하고 싶을때 사용한다.

factory 패턴을 구현할때 사용되는데 함수나 오브젝트를 생성하는데 사용된다. Factory에서 뭔가를 생성해 내기 위해서는 설정값이 필요하다 그 설정값을 노출하지 않아서 수정이 불가능하게 하면서 해당 설정값을 기반으로한 연산을 할 수 있는 함수를 만들때 closure를 사용할 수 있다.

```python
case 1
def calculate_power(number, power):
    return number ** power

calculate_power(2, 7)
# 128 출력

case 2
def calculate_power_of_two(power):
    return 2 ** power

calculate_power_of_two(7)
# 128 출력

case 3
def generate_power(base_number):
    def nth_power(power):
        return base_number ** power

    return nth_power

calculate_power_of_two = generate_power(2)
calculate_power_of_two(7)
# 128 출력
```
같은 결과를 출력하는 함수 3가지 경우이다.
전부 원하는 수는 승을 구하는 함수이다

1. case1
`calculate_power()`함수에 승을 구할 수와 승의 횟수를 넣으면 된다.
그때마다 원하는 값을 뽑을 수 있지만 배번 2개의 인자를 넣어서 보내주어야한다.

2. case2
`calculate_power_of_two()`함수에 몇승을 구할 건지 적으면된다.
승을 구함 수를 2로 고정하여 횟수만 정해주는 변수 하나만 보내면된다. 하지만 2로 고정되있어서 나중에 다른값으로 바구고 싶다면 함수를 수정해야함

3. case3
여기가 closure가 사용된 부분이다. 일단 결과를 보면 128이 정상적을 출력이 되었다.
`calculate_power_of_two = generate_power(2)`
`calculate_power_of_two(7)`
위의 함수 호출부분을 보면 2번의 호출을한다. 1번째는 base_number의 인자를 설정해 주는 부분이다. 저렇게하면 부모 함수의 parameter에 인자가 저장되어진다. 그 다음 `generate_power(2)`가 저장된 `calculate_power_of_two(7)` 함수를 호출하면 power의 값으로 7이 전달된다. 만약 2의 승이 아닌 다른수로 바꾸고 싶다면
`calculate_power_of_two = generate_power(9)`이런 식으로 바꾸어 주면된다.

------

## Decorator
Decorator는 함수앞에 붙여서 사용되는 함수라고 생각하면 된다. 그럼 아무 함수나 Decorator로 사용 할 수는 없다 중첩 함수(Nested function)를  리턴하는 함수만 Decorator로 사용이 가능하다. 이렇게 사용하는 이유는 chain of functions, 즉 여러개의 함수가 연속적으로 호출이 자동으로 되게 해주는 것이다. closure라고 생각해 볼 수 있다.

1. 일반적인 Decorator
```python
def decodeco(func):
    def child_decodeco(*args, **kwargs):
        print("%s %s" % (func.__name__, "함수 작동전"))
        result = func(*args, **kwargs)
        print("%s %s" % (func.__name__ , "함수 작동후"))
        return result
    return decorator

@decodeco
def plus(x, y):
    print(x + y)
    return x + y

plus(1,2)

# plus 함수 작동전
# 3
# plus 함수 작동후
```
위와 같은 경우는 평범하게 Decorator를 사용한는 경우이다.

일단 함수를 천천히 확인해보자

가장먼저 살펴볼 부분은 함수 호출이다
`plus(1,2)` 1,2를 인자로 plus함수를 호출한다.

```python
@decodeco
def plus(x, y):
    print(x + y)
    return x + y
```
그 다음은 plus()함수부분으로 오는데 앞에 `@decodeco`가 있다.
@decodeco는 Decorator이다. 이렇게되면 plus 함수 이전에 @decodecor가 먼저 실행되게된다.

```python
def decodeco(func):
    def child_decodeco(*args, **kwargs):
        print("%s %s" % (func.__name__, "함수 작동전"))
        result = func(*args, **kwargs)
        print("%s %s" % (func.__name__ , "함수 작동후"))
        return result
    return child_decodeco
```
`decodeco(func)`함수로 오게되면 첫번째 parameter로 `func`를 받는다 저 부분에는 `plus()`함수를 받게된다. 이제 closure와 같이 작동하게되는데 `decodeco()`함수는 내부 함수를 return한다 `child_decodeco()`함수로 오게되고 내부의 `func`는 부모의 parameter에 저장된 인자를 사용할 수 한다. 그리고는 결과값을 return한다.

2. 파라메터를 가지는 Decorator
```python
def decodeco_with_param(param):
    def wrapper(func):
        def decorator(*args, **kwargs):
            print(param)
            print("%s %s" % (func.__name__, "함수 작동전"))
            result = func(*args, **kwargs)
            print("%s %s" % (func.__name__ , "함수 작동후"))
            return result
        return decorator
    return wrapper

@decodeco_with_param("여기는, 데코레이터!")
def plus(x, y):
    print(x + y)
    return x + y

func(1,2)
```

decorator는 선언된 뒤의 함수만을 전달받는게 아니라 parametor 값을 추가해서 보내줄 수 있다. 원리는 1번째 방법과 같지만 부모함수의 parmetro에 저장된는 순서를 파악해 둘 필요가 있다.

`@decodeco_with_param("여기는, 데코레이터!")`이런식으로 파라메터값을 가진다면

```bash
@데코레이터의파라메터 -> @데코레이터 뒤에 선언된 함수 -> 호출시 받은 인자
```
위의 순으로 차례로 들어가게된다.

    `param = "여기는, 데코레이터!"'
    'func = def plus'
라고 생각하면된다.

------

## Scope
scope는 범위라는 뜻으로
객체(변수, 함수)가 유효한 범위를 말한다.

Python에서 scope은 항상 객체가 선언된 지점에서 위로는 상위 객체 까지, 아래로는 모든 하위 객체들과 그 안에까지가 범위

범위는 크게 4가지가 있다.

- Local Scope
- Enclosed Scope
- Global Scope
- Built-in Scope

Local Scope의 범위가 가장 제한적이며, Built-in Scope은 범위가 가장 크다

1. #### Local Scope
    Local scope을 가진 변수나 함수는 특정 범위에서만 유효하다.
    주소 함수안에 선언된 변수 혹은 함수를 말한다.

    ```python
    def localscope():
        a = 1 # a는 local scope을 가지는 변수이다.
        print(a)

    print(a) #local scope을 벗어나서 출력되지 않고 에러가 뜸 
    ```
    위 예제와 같이 한 지역에서만 유지성을 가지며 그 곳을 빠져나오면 바로 기능을 상실해 버린다.

2. #### Enclosed Scope
    Enclosed Scope는 중첩함수가 있을때 적용되는 scope이다.
    부모 함수에 선언된 변수가 중첩 함수 안에서도 유효한 범위를 가진다.
    ```python
    def 부모():
    a = 2
    print(a)

    def 자식():
        b = 7
        print(a * b) # a=2 , b=7 14 출력

    자식()
    print(b) # b는 자식()함수에서만 유효하므로 에러가 발생됨
    ```
    위의 예제를 보면 a는 부모()함수 선언되어 자식()함수보다 상위에 있으므로 자식()함수까지 변수가 유효하지만 b는 자식()함수에서만 유효하기 때문에 print(b)에서 에러가 발생된다.

3. #### Global Scope
    Global Scope은 함수 안에서 선언된 것이 아닌 함수 밖에서 선언된 변수나 함수이다.

    global scope을 가지고 있는 변수와 함수들은 선언된 지점이 해당 파일에서 가장 바깥쪽에서 선언되므로 해당 파일에서 선언된 지점 아래로는 다 유효한 범위를 가지고 있습니다. Global scope 이라고 한다.

4. #### Built-in Scope
    Built-in Scope은 scope중 가장 광범위하다
    python안에 내장되어 제공하는 함수 또는 속성들이 Built-in Scope을 가진다. 그러므로 따로 선언하지 않아도 모든 파일에서 유효한 범위를 가진다. ex)len(),int()

## Shadowing
이렇게 변수를 적용하다보면 변수가 겹치면서 문제가 생기는 경우가 생긴다. 그렇기 때문에 scope들의 순서에 유의해야한다.

```bash
(범위 좁음) Local -> Enclosing -> Global -> built-in (범위넓음)
```

보통 좁은 범위에 scope이 상위 scope을 가리게 된다.

```python
a = 2
  
def shadowing():
  a = 1
  print(a) # 1 출력

shadowing() # 1 출력

print(2) # 2 출력
```
위의 예제를 보면 local의 a변수가 enclosing의 a변수와 겹치는 모습을 볼 수 있다.
그렇게되면 `shadowing()`함수 안의 a가 enclosing의 a를 가리게되면서 `shadowing()`함수 안에서는 `a = 1` 이 된다.

하지만 함수 밖으로 나오게되면 다시 `a = 2`의 영향을 받게된다.

이렇게 상위 scope의 하위 scope에 의해 가려지는 현상을 Shadowing이라고 한다.

------

## Class
Class는 하나의 공통인 카테고리에 그 곳에 속하는 object들의 구성을 이루어진다.

예를들면 car를 예로 들면 차를 만드는 회사로는 bmw, audi, benz가있다고 하자 이때 class는 차라고 할 수 있고 car라는 공통점을 가지는 제조사들은 object(객체)가 된다.

1. Class 정의
```python
class ClassName:
    클래스 내용
```
class를 선언하기위해서는 class키워드를 사용하면된다.

이때 몇 가지 주의사항이 있다.

**class이름의 단어의 앞글자는 대문자를 사용한다.** 만약 여러단어로 구성되어 있다면 각 단어 앞글자는 대문자로 해서 단어를 구분한다.
ex)ThisNameTooLong 이런느낌으로 작성한다.

```python
class Car:
    pass

bmw = Car()
```
클래스를 선언하고 호출하는 예이다.
Car는 class이며, Car class를 실체(instance)화 한것이 bmw라는 객체(object)인 것이다.

## Class의 attribute(속성)
class에 정의되는 공통 요소들을 전문어로 class의 attribute(성질 혹은 속성)이라고 한다.

class 안에서 정의해주는 함수(function)는 function이라고 하지 않고 method 라고 한다.

```python
class Car:
    def __init__(self, maker, model, horse_power):
        self.maker       = maker
        self.model       = model
        self.horse_power = horse_power

hyundai = Car("현대", "제네시스", 500)
```
위의 예제는 class를 선언하고 호출하는 예제이다.

class는 `Car`로 선언하였고
`def __init__`함수를 정의하였다.

`__init__` special methods로 class가 실체화 될때 사용된다.

```python
def __init__(self, maker, model, horse_power):

hyundai = Car("현대", "제네시스", 500)
# self   class maker  model      hores_power
```
__init__함수와 호출을 보면 parameter는 4개이지만 arguments는 3개밖에 없다. self는 class의 실체를 가르킨다.
그렇기 때문에 self = hyundai가 된다. 클래스를 실체화 할때 python이 해당 객체(self)를 자동으로 __init__함수에 넘겨준다.


- `__init__` 메소드는 클래스가 실체화 될때 자동으로 호출이 된다.
- `__init__` 메소드의 self 파라미터는 클래스가 실체화된 객체를 넘겨주어야 하며, 파이썬이 자동으로 넘겨준다.
- `__init__` 메소드의 self 파라미터는 항상 정의되어야 있어야 하며 맨 처음 파라미터로 정의 되어야 한다 (그래야 파이썬이 알아서 넘겨줄 수 있으므로)

이제 함수 내부를 보면
```python
def __init__(self, maker, model, horse_power):
    self.maker       = maker
    self.model       = model
    self.horse_power = horse_power
```
maker, model, horse_power를 받아 self라는 객체로 저장한다.

## Class Method
```python
class Car:
    def __init__(self, maker, model, horse_power):
        self.maker       = maker
        self.model       = model
        self.horse_power = horse_power

    def honk(self):
        return f"{self.maker} 빠라바라빠라밤"

hyundai = Car("현대", "제네시스", 500)
hyundai.honk()
> "현대 빠라바라빠라밤"
```
class에는 __init__메소드 말고 다른메소드도 추가가 가능하다.
__init__메소드에 저장된 값을 활용하여 다른 메소드를 이용한다.
그렇기 때문에 모든 메소드의 parametor의 첫번째는 self가 들어가야한다.

그럼 객체의 메소드 호출하려면 어떻게 하면될까
`hyundai.honk()`이런식으로 dot notation을 활용하여 호출한다.

<객체>.<메소드>

이런식으로 클래스 위주로 코드를 작성하는것을 object oriented programming(객체 지향 프로그래밍)이라고 한다.

------

## Modules & Packages
간단하게 Modules는 변수나 함수, 클래스 등을 모아 놓은 파일이고, Packages는 모듈을 모아 둔 것이라고 할 수 있다.

이렇게 따로 모아서 사용하는 이유는 아래와 같다

- 다른 파일에서 재사용가능
- 전체 코드가 한 파일에 넣기 커졌을 때 여러 파일로 나누어 정리하기 위함이다.

### Module 만들기
module은 재사용하고 싶은 함수나 클래스, 변수를 담은 파일을 만들면 끝이다.

그후 module을 불러와(import) 사용하기 위해서는 import 키워드를 사용하면된다.

```python
import <모듈 이름>
```
호출시에는 module이름뒤에 확장자 .py는 쓰지 않는다.

```python
<모듈이름>.<모듈에서 사용할 변수/함수/클래스 이름>

testmodule.sumfunc()

print(testmodule.num1_var)

testmodule_class = testmodule.ModuleClass() 
```
불러온 모듈은 위와 같이 module이름을 쓰고 dot notation을 사용하여 작성하면된다.

### Alternative ways to import modules
module은 import키워드 외 from iport키워드를 사용해 모듈을 불러들일 수도 있다.
```python
from <모듈 이름> import <함수/변수/클래스1>, <함수/변수/클래스2>, ...
```
이 방법은 module에서 사용할 변수, 함수가 명확할때 사용하면 편하다.

```python
from my_module import my_module_func, my_module_var

print(my_module_var)
my_module_func()
```
위와 같이 모듈이름을 적지 않아도 바로 사용 가능하고 `import` 뒤에 `*`을 사용하면 해당 모듈의 모든 요소를 바로 import 가능하다.

하지만 이렇게하는 것은 local scope과 충돌이 일어나면 원인을 찾기 어려움으로 권장되지 않는다.

### Import As
import 내용이 많아지면서 변수, 함수가 이름이 겹처 충돌하거나, 요소의 이름이 길 경우 사용한다.

```python
from my_module  import my_func as f1
from my_module2 import my_func as f2
from my_module3 import function_with_name_too_long as f3

f1()
f2()
f3()
```
위와 같이 as를 사용하면 import 된 함수를 as뒤에 쓴 이름으로 대체하여 사용할 수 있다.

```python
import my_module as m1

m1.my_module_func()
```

## Packages
Packages는 module이 모여 있는것이고 .py가 모인 하나의 디렉토리를 package라고 부른다.

packages 또한 모듈처럼 import해서 사용 가능하다.

```python
import <패키지명>.<모듈이름>
from <패키지명>.<모듈이름> import <모듈내 함수, 변수 등>

<패키지명>.<모듈이름>.<함수이름>
```

### Package Initialization
package가 import될 때 초기 설정을 해줘야 할때 `__init__.py`파일을 통해 package 초기 설정을 가능하게 해준다.

- import 경로 총 길이 줄임
- package애서 import 할 수 있는 변수/함수/클래스 제한
- 그 외 package가 import 될 때 먼저 실행되어야 하는 코드들

위의 내용들을 할 수 있다.

1. 길이줄임
방법은 `__init__.py`에 한번 import해주면 된다.

아래는 pkg라는 이름의 pkg안의 module을 불러오는 예시이다.

```python
# __init__.py를 설정하지 않은 package의 import
import pkg.mod1

pkg.mod1.func2()

-----------------------

# __init__.py를 설정한 package의 import

# __init__.py
from mod1 import func2

# main.py
from pkg import func2

func2()
```
위와 같이 `__init__.py`를 설정해 놓고 package만 불러오면 이름이 길어지지 않고 빠르게 사용이 가능하다.

2. 변수/함수/클래스 제한
import 될때 module안에서 사용하는 함수나 변수가 외부에서 사용하는것을 막기 위해 `__all__`변수를 지정해 줍니다.

`__all__`변수를 통해 지정된 함수/변수/클래스 만을 외부에서 사용이 가능하며 default값은 모든 함수/변수/클래스 이다.

```python
# __init__.py
from mod1 import func2
from mod2 import func3

__all__ = ['func2', 'func3']

# main.py
from pkg import *

func2()
func3()
func4() ## <== Error. func4 함수는 __all__ 에 정의되지 않았으므로 import 될 수 없음.
```
위와 같이 `__init__.py`에 list형태로 `__all__`을 정의해준다.

지금 사용 가능한 값을 mod1의 func2, mod2의 func3이다. main.py를 보면 func2,func3의 사용은 문제가 없지만 func4사용은 설정되지 않았기 때문에 에러가 발생한다.

3. package가 import 될 때 먼저 실행되어야 하는 코드들
    `__init__.py`에 `__all__=[]`로 제한하는것과 함께 실행 할 수 있다. 내가 꼭 실행시켜야하는 코드를 init에 넣어두면 되는 것인데, 단 패키지안에 존재하는 모듈 중 그 코드가 존재하여야 한다.

## 다른 사람 package 사용
```bash
pip install Django
```
pip툴을 사용하여 다운로드 받을 수 있다.

------

## How import statement finds modules and packages

### import serch 순서
우리가 import 하려는 package가 있을때 package의 위치를 어디있는지 알기위해서 package의 위치를 탐색한다.

1. sys.modules
2. built-in modules
3. sys.path

python은 위의 순서로 import serch를 실시한다.

1. #### sys.modules
python이 mobule이나 package를 찾기 위해 가장 먼저 확인하는 곳으로 dictionary의 형태로 이미 import된 모듈과 package들을 저장하고 있다.
그러므로 새로 import되는 모듈은 sys.moudles에서 찾을 수 없다.

2. #### built-in modules
파이썬에서 제공하는 공식 라이브러리들이다. 예시로는 random 모듈과 같은게 있다.

3. #### sys.path
sys.path는 python 라이브러리에 설치되어있는 디렉토리들을 보여준다. 이러한 경로들은 list의 형태로 저장되어잇으며 sys.path.append()를 사용하여 추가해 줄 수도있다.
이러한 python은 위의 경로들을 탐색한뒤 sys.payh에도 import할 module이 없다면 에러를 출력한다.

### Absolute Path & Relative Path
built-in 모듈과 pip로 설치한 외부 모듈은 자동으로 site-packages라는 디렉토리에 설치가되며 sys.path에 등록되어있어 찾는데 문제가 되지 않는다.

하지만 직접 만든 lodcal package는 import하려면 경로를 잘 선언해 주어야한다.

```bash
└── my_app
    ├── main.py
    ├── package1
    │   ├── module1.py
    │   └── module2.py
    └── package2
        ├── __init__.py
        ├── module3.py
        ├── module4.py
        └── subpackage1
            └── module5.py
```
위와 같은 프로젝트로 예를 들어보겠다.

1. Absolute Path
절대 경로를 뜻하며 import를 하는 파일이나 경로에 상관없이 항상 동일한 경로를 말한다.

```python
from package1 import module1
from package1.module2 import function1
from package2 import class1
from package2.subpackage1.module5 import function2
```
위는 Absolute Path를 사용하여 import한 모습이다 모든 시작점의 기준이 my_app이라는 최상단 디렉토리에서 시작함 을 알 수 있다. 이렇게 my_app 프로젝트 내에서는 어느 파일, 어느 위치에서 import 하던지 경로가 항상 위와 같이 동일하게 되므로 absolute path 라고 하는 것이다. current directory라고 하는 현재의 프로젝트 디렉토리는 default로 sys.path에 포함된다. 그렇기 때문에 absolute path는 current directory 로 부터 경로를 시작하게 되는것이다.

2. Relative Path
Absolute Path는 어느 위치에서 import하던 원하는 module의 위치를 정확하게 가져올 수 있다는 장점이 있지만 경로가 길어질 수 있다는 단점이 있다.

그와 반대로 Relative Path는 본인 자신의 위치를 기준으로 경로를 정의한다. relative path는 보통 local package 안에서 다른 local package를 import 할때 사용된다.

```python
# package2/module3.py

from . import class1
from .subpackage1.module5 import function2
```
위의 예시는 `package2/module3.py`에서 다른 package2의 class1과 package2의 하위 package인 subpackage1.module5의 function2의 함수를 import하는 모습이다

Abosolute path와 다르게 짧은 경로인것을 확인할 수 있다.

.을 사용해 위치를 표시한다.

.(dot)은 현재위치를 이야기하며, 상위 디렉토리는 ..(dot 2개)로 나타낸다.

## sys.modules 와 sys.path의 차이점
sys.modules은 현재 로딩되어있는 모듈들을 딕셔너리 형태로 나타내며, sys.path는 파이썬 라이브러리가 설치되어 있는 디렉터리를 보여준다. sys.modules은 이미 import한 module을 보여준다. sys.path는 환경 변수에서 초기화된 PYTHONPATH 및 설치시 기본값에 따른다.

아래는 두가지를 출력했을때 모습이다.
```python
>> sys.modules

{'heapq': <module 'heapq' from 'C:\Python3\lib\heapq.py'>, 'tkinter.filedialog':

<module 'tkinter.filedialog' from 'C:\Python3\lib\tkinter\filedialog.py'>, 'functools':

<module 'functools' from 'C:\Python3\lib\functools.py'>, 'random': <module

'random' from 'C:\Python3\lib\random.py'>, ...<생략>...
```

```python
sys.path

['C:\\Python3\\Lib\\idlelib', 'C:\\WINDOWS\\system32\\python32.zip',

'C:\\Python3\\DLLs', 'C:\\Python3\\lib', 'C:\\Python3', 'C:\\Python3\\lib\\site-packages']
```

## sys 도 import 해야하는 모듈입니다. 파이썬은 sys 모듈의 위치를 어떻게 찾을 수 있을까요?
sys module은 내장 모듈임으로 built-in modules에서 찾을 수 있다. 
```python
import sys

>>>sys.builtin_module_names
=> ('_abc', '_ast', '_codecs', '_collections', '_functools', '_imp', '_io', '_locale', '_operator', '_signal', '_sre', '_stat', '_string', '_symtable', '_thread', '_tracemalloc', '_warnings', '_weakref', 'atexit', 'builtins', 'errno', 'faulthandler', 'gc', 'itertools', 'marshal', 'posix', 'pwd', 'sys', 'time', 'xxsubtype')
```
위의 예문은 repl.it의 built-in module들의 모습이다 마지막에보면 sys가 포함되어 있음을 확인할 수 있다.
또한 sys module은 .py의 형태로는 찾을 수 없다. C언어로 프로그래밍되어 python에 내장되어 있으며 ./Python/sysmodule.c의 위치에 존재하고 있다. 

## Absolute path와 relative path의 차이점
Absolute path와 relative path의 가장 큰 차이점은 경로를 보는 기준이 다르다는 것이다.

Absolute path는 절대경로로 컴퓨터 상의 루트 디렉토리를 포함한다.
그렇기 때문에
```
C:\사용자\desktop\python\pacage\module.py
```
이런식으로 최상위부터 경로가 지정된다.

relative path는 상대경로로 루트 디렉토리를 포함하지 않는 주소를 갖는 경로로 가진다.

그렇기 때문에 현재 참조하고 있는 문서가 항상 기준이며 그 문서를 기준으로 상위 폴더와 하위폴더, 현재폴더를 연결한다.

```bash
루트위치 /
상위폴더 ../파일명
현재폴더 ./파일명
하위폴더 디렉토리명/파일명
```
위와 같이 나눌 수 있다.

------

## Exceptions
python은 에러상황에 따른 예외처리를 해줄 수 있다.

그때 사용하는 방법이 try except이다. 그 에도 상황에 따른 다양한 출력을 줄 수 있다.

아래의 예제를 통해서 설명하겠다.

```python
def return_elem_or_minus_one(index):
    short_list = [1, 2, 3]
    elem = 0

    try:
        elem = short_list[index]
        print("이 문장은 exception이 발생하지 않으면 실행됩니다")
    except IndexError:
        print(f"이 문장은 Exception이 발생하면 실행 됩니다")
        elem = -1
    except Exception as e:
        print(f"IndexError가 아닌 다른 종류의 Exception이 발생했습니다 ==> {e}")
        elem = -1
    else:
        print(f"Exception이 발생하지 않았습니다!") 
    finally:
        print("이 문장은 exception 발생 여부와 상관없이 무조건 실행됩니다!")

    return elem
```
`def return_elem_or_minus_one(index)`함수는 index라는 매개변수를 받아 인덱스 수를 제한한다 하지만 예제이므로 list에는 1,2,3값만 넣기로 했다.

`try:`구문이다. 해당 구문은 일단 try 안의 문장을 실행시켜 에러가 있는지 체크를 한다 에러가 없다면 정상적으로 내용을 출력한다.

`except IndexError:` `try`에서 에러가 index 오류가 발생되면 실행되는 구문이다. `IndexError`는 index를 초과해서 생기는 오류가 발생할때 실행되는 구문이다. 다른 에러로는 `ZeroDivisionError`가 있다.

`except Exception as e:`는 IndexError가 아닌 오류가 날 경우 실행되는 구문이다. 그 뒤에 추가로 `as`문을 사용하여 에러메시지인 `Exception`을 변수 `e`에 저장하여 출력할 수 있다.
```python
print(f"IndexError가 아닌 다른 종류의 Exception이 발생했습니다 ==> {e}")

# 출력
# IndexError가 아닌 다른 종류의 Exception이 발생했습니다 ==> Exception
```
위와 같이 출력이 된다.

`else:`else는 exception이 발생하지 않았을때 실행됩니다. 에러가 발생하지 않으면 정상 출력됩니다.

`finally:` 이 부분은 위의 코드들이 에러가 발생하거나 발생하지 않아도 무조건 출력되는 부분이다.