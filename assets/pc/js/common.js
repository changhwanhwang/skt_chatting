(() => {
  // header & footer
  Promise.all([
    fetch('./gnb.html').then(res => res.text()),
    fetch('./footer.html').then(res => res.text())
  ])
  .then(([gnbHtml, footerHtml]) => {
    const header = document.querySelector('header');
    header.innerHTML = gnbHtml;
  
    const footer = document.querySelector('footer');
    footer.innerHTML = footerHtml;
  })
  .catch(error => console.log(error));
  // publish 단계에서 확인이 필요한 코드, 개발 적용시 삭제 

  // tab
  function tabContentMenu() {
    const tabButtons = document.querySelectorAll('.tab_btn');
    const tabContents = document.querySelectorAll('.tab_cont');
  
    // 탭 버튼을 클릭했을 때의 동작을 정의하는 함수
    function handleTabButtonClick(e) {
      e.preventDefault(); 
      
      tabButtons.forEach((btn) => btn.parentElement.classList.remove('on'));
      tabContents.forEach((content) => content.classList.remove('on'));
        
      const targetId = this.getAttribute('href');
      const targetContent = document.querySelector(targetId);
      this.parentElement.classList.add('on');
      targetContent.classList.add('on');
    }  
    
    tabButtons.forEach((button) => {
      button.addEventListener('click', handleTabButtonClick);
    });
  }    
  tabContentMenu();

  // 탭이 아닌 데이타 호출 형식일때 
  // const tabmenuItems = _this.querySelectorAll("");
  // tabmenuItems.forEach(tabmenuItem=>{
  //     tabmenuItem.addEventListener("click", function(){
  //         tabmenuItems.forEach(tabmenuItem => { tabmenuItem.parentNode.classList.remove("on"); });
  //         tabmenuItem.parentNode.classList.add("on")
  //     })
  // })

  // faq-accordion
  function bindingAccordionEvent(wrap){
    let areaArr = document.querySelectorAll(wrap);
    
    areaArr.forEach(function(area){
      let btn = area.querySelector('.acc_tit');
      
      btn.addEventListener('click', function(){
        let target = this;
        let targetCon = this.closest('.acc_wrap').querySelector('.acc_cont');
        let titArr = document.querySelectorAll('.acc_tit');
        let contArr = document.querySelectorAll('.acc_cont');

        if(target.classList.contains('active')){
          target.classList.remove('active');
          targetCon.classList.remove('active');
        } else{
          for(i=0; i < titArr.length; i++){
            titArr[i].classList.remove('active');
            contArr[i].classList.remove('active');
          }
          target.classList.add('active');
          targetCon.classList.add('active');
          
        }
      })
    });
  }
  bindingAccordionEvent('.acc_wrap');
    
  // table width
  let widthNone = document.querySelectorAll('.none');
  let widthTwice = document.querySelectorAll('.n_txt');

  for(i=0; i < widthNone.length; i++){
    widthNone[i].setAttribute('colspan', '0');
    widthNone[i].style.display = "none";
    widthTwice[i].setAttribute('colspan', '2');
  };

  // progress-bar


})();