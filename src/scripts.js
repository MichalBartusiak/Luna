const showMore = document.querySelector("#show-more");
const wwdContainerTwo = document.querySelector("#wwd__container--two");

showMore.addEventListener("click", function() {
  showMore.classList.toggle("show-more--active");
  wwdContainerTwo.classList.toggle("wwd__container--two--active");
  //   console.log(wwdContainerTwo);
});
