!function(t){t.fn.savy=function(e,s){"load"==e?(t(this).each(function(){t(this).is(":radio")?(localStorage.getItem("savy-"+t(this).attr("name"))&&(localStorage.getItem("savy-"+t(this).attr("name"))==this.id?this.checked=!0:this.checked=!1),t(this).change(function(){localStorage.setItem("savy-"+t(this).attr("name"),this.id)})):t(this).is(":checkbox")?(localStorage.getItem("savy-"+this.id)&&(this.checked="1"==localStorage.getItem("savy-"+this.id)?!0:!1),t(this).change(function(){localStorage.setItem("savy-"+this.id,this.checked?"1":"0")})):t(this).is("input")||t(this).is("textarea")?(localStorage.getItem("savy-"+this.id)&&(this.value=localStorage.getItem("savy-"+this.id)),t(this).keyup(function(){localStorage.setItem("savy-"+this.id,this.value)})):t(this).is("select")&&(t(this).is("[multiple]")?(localStorage.getItem("savy-"+this.id)&&t(this).val(localStorage.getItem("savy-"+this.id).split(",")),t(this).change(function(){localStorage.setItem("savy-"+this.id,t(this).val())})):(localStorage.getItem("savy-"+this.id)&&t(this).val(localStorage.getItem("savy-"+this.id)),t(this).change(function(){localStorage.setItem("savy-"+this.id,t(this).val())})))}),t.isFunction(s)&&s()):"destroy"==e?(t(this).each(function(){localStorage.getItem("savy-"+this.id)&&localStorage.removeItem("savy-"+this.id)}),t.isFunction(s)&&s()):console.error("savy action not defined please use $('.classname').savy('load') to trigger savy to save all inputs")}}(jQuery);
$(function(){
    $('.saveonload').savy('load');
    setTimeout(function(){
        $('.saveonload').savy('destroy');
    },50000);
})


// FOLLOW DROPDoWNBACKGROUND JS
const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {

    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'),
        150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    // console.log(navCoords);
    // console.log(dropdownCoords);
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
    };
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    // console.log('leave');
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open');
}
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


function showComment() {
    $('.comment_display').toggleClass('hidecomment');
}

// ajax search
$(function(){
  $('.search').keyup(function(){
    var search = $(this).val();
    $.post('http://localhost/aprojectv1/core/ajax/search.php', {search:search}, function(data){
     $('.search-result').html(data);
    });
  });
});