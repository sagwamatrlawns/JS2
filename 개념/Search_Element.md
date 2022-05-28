**elem.querySelectorAll(css)**<br>
다재다능한 요소 검색 메서드이다.<br>
elem의 자식 요소 중 주어진 CSS 선택자에 대응하는 요소 모두를 반환한다.<br>

**querySelector**<br>
elem.querySelector(css) 는 주어진 css 선택자에 대응하는 요소 중 첫번째 요소를 반환한다.<br>

**matches**<br>
elem.matches(css)는 DOM을 검색하는 일이 아닌 조금 다른 일을 한다.<br>
이 메서드는 요소 elem이 주어진 css 선택자와 일치하는지 여부를 판단해줍니다.<br>

**closest**<br>
부모 요소, 부모 요소의 부 모 요소 등 DOM 트리에서 특정 요소의 상위에 있는 요소들은 조상(ancestor) 요소라고 합니다.<br>
매서드 elem.closest(css)는 elem 자기 자신을 포함하여 CSS 선택자와 일치하는 가장 가까운 조상 요소를 찾을 수 있게 도와줍니다.

**getElementsBy\***
