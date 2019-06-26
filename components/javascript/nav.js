const navAnchors = Array.from(document.querySelectorAll('nav a'));
navAnchors.map(el => el.addEventListener('mouseover', () => el.getElementsByClassName.color = "blue"))