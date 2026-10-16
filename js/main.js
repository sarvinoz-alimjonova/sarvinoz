document.querySelectorAll('.filters').forEach(f=>{const items=document.querySelectorAll('.work li[data-tags]');
f.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
f.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));
items.forEach(c=>{c.hidden=b.dataset.f!=='all'&&!c.dataset.tags.split(' ').includes(b.dataset.f)});});});
