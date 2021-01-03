function loadRepos() {
   const url='https://api.github.com/users/testnakov/repos';

   const httpRequest=new XMLHttpRequest();
   const res=document.getElementById('res');
   httpRequest.addEventListener('loadend',function (){
      let repos=JSON.parse(this.responseText);
      res.innerHTML=JSON.stringify(repos);
   });

   httpRequest.open('GET',url);
   httpRequest.send();
}