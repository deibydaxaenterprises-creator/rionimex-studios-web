const loader=document.getElementById("loader");
if(loader){
  window.addEventListener("load",()=>{
    setTimeout(()=>{
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 850);

    setTimeout(()=>loader.remove(), 1400);
  });
}

const header=document.getElementById("header");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>30));

const toggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
toggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{rootMargin:"0px 0px -10% 0px",threshold:.01});
document.querySelectorAll(".reveal").forEach((el,index)=>{
  el.style.transitionDelay=`${Math.min(index%4,3)*90}ms`;
  observer.observe(el);
});

const year=document.getElementById("year");
if(year)year.textContent=new Date().getFullYear();
