var shuffleChildren = function (selector) {
  var parent = document.querySelector(selector);
  try {
    for (var i = parent.children.length; i >= 0; i--) {
      parent.appendChild(parent.children[(Math.random() * i) | 0]);
    }
  } catch (e) {
    console.error(e);
  }
};

shuffleChildren('.slide-track');

var shuffleChildren = function (selector) {
  var parent = document.querySelector(selector);
  try {
    for (var i = parent.children.length; i >= 0; i--) {
      parent.appendChild(parent.children[(Math.random() * i) | 0]);
    }
  } catch (e) {
    console.error(e);
  }
};

shuffleChildren('.slide-track-2');