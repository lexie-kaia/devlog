---
title: 'Intersection Observer API 이해하기'
date: '2021-07-21'
tags: ['web', 'browser']
---

## Intersection Observer API가 해결하려는 문제

<br />

Image lazy-loading이나 Infinite scroll 등을 구현하기 위해서 사용자가 스크롤해서 끝에 도달했을 때, 다음 데이터를 로딩하고 화면에 렌더링하게 해야 한다. 쉽게 말하자면 사용자가 마지막 요소(Element)를 봤을 때 다음 요소를 만들라는 것이다.

<br />

여기에서 구현하기 까다로운 것은 사용자가 '마지막 요소를 봤을 때'를 판단하는 코드이다.

이것을 직관적으로 풀면 **사용자가 스크롤할 때마다 마지막 요소가 화면에 보이는지 안보이는지를 계산**하면 된다. 이 방법을 코드로 구현하기 위해서 scroll 이벤트를 처리하는 `EventTarget.addEventListener()`와 element의 위치를 알아내는 `Element.getBoundingClientRect()`를 이용할 수 있다.

<br />

하지만 직접적인 해결책인 이 방식은 성능에 영향을 줄 만큼 단점이 있다. scroll 이벤트는 당연하게도 스크롤이 될 때마다 일어나기 때문에 event handler에 등록된 함수가 단시간에 무수하게 호출된다. getBoundingClientReact() 함수는 viewport와 element의 상대적인 위치 정보를 반환하기 때문에 스크롤이 될 때마다 새로 계산해야 한다. 이때 함수의 과도한 반복 호출을 막기 위해서 debounce와 throttle을 통해 개선할 수 있다. 하지만 위의 두 가지를 조합한 이 방식의 **근본적인 문제는 더 중요한 부분인 '다음 요소를 만드는' 코드를 실행하기도 전에 '마지막 요소를 봤을 때'를 판단하는 코드를 위해 main thread(브라우저 자바스크립트 엔진의 single thread)를 낭비**한다는 점이다.

<br />
<br />

## Intersection Observer API는 왜 쓰고 무엇일까

<br />

Intersection Observser API는 위의 방식이 가진 단점을 영리하게 해결한 API이다. Intersection Observer API의 '마지막 요소를 봤을 때'를 판단하는 것을 개발자에게 맡기지 않고 브라우저에게 넘긴다. 이때 브라우저는 '마지막 요소가 보이는지'를 판단하기 위해 main thread를 사용하지 않는다. **Intersection Observer API를 이용하면 개발자는 '다음 요소를 최적화하여 만드는데' main thread를 온전히 사용**할 수 있게 된다.

<br />

> MDN - [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)  
> The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

<br />

MDN을 보면 **'Intersection Observer API는 타겟 엘리먼트가 상위 엘리먼트나 뷰포트와 교차하는지 비동기적으로 관찰하는 기능을 제공한다.'**라고 설명한다. 이 말을 풀어서 이해해보자면, Intersection Observer API는 특정 엘리먼트가 화면에 들어오는지, 나가는지, 얼마만큼 보이는지, 다시 말해 화면과 특정 엘리먼트가 **'교차'**하는 것을 감지한다. 앞서 설명한 대로 브라우저는 교차를 계산하기 위해 main thread를 이용하지 않는다. 그래서 이를 **'비동기적으로 관찰'**한다고 표현한다.

<br />
<br />

## Intersection Observer API의 사용 방법

<br />

Intersection Observer API의 사용 방법을 보면 완전히 새로운 방식의 API가 아니라, 이벤트가 발생하면 등록된 함수를 실행하는 보통의 event handler와 비슷한 것을 알 수 있다. 다만 Intersection Observer API가 Event Handler와 다른 점은 **타겟 엘리먼트(Target Element)** 외에 **관찰자(Observer)**를 지정한다는 점이다.

<br />

```jsx
// Event handler
// Target Element에 특정한 이벤트가 발생 시, callback를 실행한다.
targetElement.addEventListener(event, callback);

// Intersection Observer
// Target Element가 관찰 될 때, callback를 실행한다.
const observer = new IntersectionObserver(callback); // Observer 생성
observer.observe(targetElement); // Target element 관찰 시작
```

<br />

Intersection Observer API를 구현하는 코드를 보면 Observer는 관찰자를 뜻하는 'Observer'외에 Target element의 상위 엘리먼트를 뜻하는 'Root element'로 쓰이기도 한다. 'Target element'도 Observer에 감지된 항목을 뜻하는 'Entries'로 쓰이기도 한다.

<br />

**Intersection Observer API 구성 요소**

- 관찰하는 Observer → Root element
- 관찰되는 Target elements → Entries

<br />

```jsx
// observer 생성
// options를 설정하지 않으면 viewport가 지정된다.
const observer = new IntersectionObserver(callback[, options]);
```

```tsx
const options = {
  root: null, // root element = observer가 될 element를 선택(null(default) => viewport)
  rootMargin: '0px', // root element의 범위를 확장하거나 축소
  threshold: 1.0, // target element가 몇 퍼센트 보일 때, callback을 실행 할지 설정 (0(0%) ~ 1.0(100%))
};

const callback = (entries, observer) => {
  // observer에 target element가 들어올 때, 나갈 때 총 두 번 callback이 실행된다.

  // entries = observer에 감지된 target elements
  // 하나의 observer가 여러개의 target element를 관찰하도록 설정할 수 있기 때문에,
  // entries는 array로 받아진다.

  if (!entries[0].isIntersecting) return; // isIntersecting = true(들어올 때), false(나갈 때)
  console.log(`${entries[0].target} is intersecting!`);
};
```

```jsx
// target element 관찰 시작
observer.observe(targetElement);

// target element 관찰 중지
observer.unobserve(targetElement);

// observer 해제
observer.disconnect();
```

<br />
<br />
<br />
<br />

---

### References

- MDN Web Docs - [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- HEROPY Tech - [Intersection Observer - 요소의 가시성 관찰](https://heropy.blog/2019/10/27/intersection-observer/)
- yejinh.log - [Intersection Observer로 무한 스크롤 구현하기](https://velog.io/@yejinh/Intersection-Observer%EB%A1%9C-%EB%AC%B4%ED%95%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
- 레진 기술 블로그 - [IntersectionObserver를 이용한 이미지 동적 로딩 기능 개선](https://tech.lezhin.com/2017/07/13/intersectionobserver-overview)
- Yoon's devlog - [Intersection Observer API의 사용법과 활용방법](http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/)
