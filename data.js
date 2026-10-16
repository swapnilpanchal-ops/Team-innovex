const {useState}=React;const h=htm.bind(React.createElement);
const f=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const D=n=>{const d=new Date();d.setDate(d.getDate()+n);return f(d)};
const dw=(new Date().getDay()+6)%7,WK=[D(-dw),D(6-dw)];
const inr=n=>'₹'+n.toLocaleString('en-IN');
const B=[{id:'JFS-A',name:'Java Full Stack',key:'java',mode:'Classroom',trainer:'Rohan Kulkarni',cap:30,fee:80000},
{id:'PY-B',name:'Python for Data',key:'python',mode:'Classroom',trainer:'Meera Joshi',cap:25,fee:60000},
{id:'WD-C',name:'Web Dev Bootcamp',key:'web',mode:'Online',trainer:'Sanket Patil',cap:40,fee:45000}];
// name,batch,counselor,last 8 sessions (P present,L late,A absent,S online join <45 of 60 min = not counted),total,paid,emi,due offset
const seed=[['Aarav Deshmukh','JFS-A','Anita Rao','PAPAAPPA',80000,30000,10000,2],['Isha Kulkarni','JFS-A','Anita Rao','PPPPPLPP',80000,50000,10000,5],
['Rahul More','JFS-A','Anita Rao','APAAPPPA',80000,20000,10000,4],['Sneha Pawar','JFS-A','Anita Rao','PPPAPPAP',80000,40000,10000,3],
['Omkar Jadhav','JFS-A','Anita Rao','PAAPPPAP',80000,60000,10000,-9],['Priya Shinde','PY-B','Anita Rao','PPPPPPAP',60000,60000,0,null],
['Karan Bhosale','PY-B','Vikram Shah','PAPPAPAL',60000,30000,7500,1],['Neha Gaikwad','PY-B','Vikram Shah','PPAPPPPP',60000,45000,7500,6],
['Vivek Salunkhe','PY-B','Vikram Shah','AAPAPAPP',60000,15000,7500,-9],['Tanvi Chavan','WD-C','Vikram Shah','PPSPPPSP',45000,30000,5000,3],
['Aditya Kale','WD-C','Vikram Shah','PSSPAPSP',45000,15000,5000,0],['Riya Mane','WD-C','Vikram Shah','PPPPLPPP',45000,45000,0,null]];
const mk=(r,i)=>({id:'S'+String(i+1).padStart(3,'0'),name:r[0],batch:r[1],cn:r[2],att:r[3],total:r[4],paid:r[5],emi:r[6],due:r[7]==null?null:D(r[7]),phone:'+91 90000 '+(10001+i),status:'Active'});
const missed=s=>[...s.att].filter(c=>c==='A'||c==='S').length;
const pct=s=>s.att?Math.round([...s.att].filter(c=>c==='P'||c==='L').length/s.att.length*100):null;
const out=s=>s.total-s.paid,bat=id=>B.find(b=>b.id===id);
const inWeek=s=>s.emi>0&&out(s)>0&&s.due>=WK[0]&&s.due<=WK[1];
const in7=s=>s.emi>0&&out(s)>0&&s.due>=D(0)&&s.due<=D(7);
const fstat=s=>out(s)<=0?'Paid':(s.due&&s.due<D(0)?'Overdue':(s.paid>0?'Partially paid':'Pending'));
const stC=x=>({Paid:'ok',Overdue:'er','Partially paid':'wn',Pending:'wn'}[x]);
const Card=(l,v,s)=>h`<div class="card"><div class="sm">${l}</div><div class="big">${v}</div>${s?h`<div class="sm">${s}</div>`:null}</div>`;
const Pill=(t,c)=>h`<span class="pill ${c||''}">${t}</span>`;
const Bars=(rows,fmt)=>h`<div>${rows.map(r=>h`<div class="bar"><span class="sm">${r.l}</span><div class="trk"><i style=${{width:Math.max(2,r.v/r.m*100)+'%',background:r.c||'var(--ac)'}}></i></div><b class="sm">${fmt?fmt(r.v):r.v}</b></div>`)}</div>`;
const Table=(cols,rows)=>rows.length?h`<div class="tw"><table><thead><tr>${cols.map(c=>h`<th>${c}</th>`)}</tr></thead><tbody>${rows.map(r=>h`<tr>${r.map(c=>h`<td>${c}</td>`)}</tr>`)}</tbody></table></div>`:h`<div class="empty">No matching records.</div>`;
const Codes=a=>h`<span>${[...a].map(c=>h`<span class="cell ${c}">${c}</span>`)}</span>`;
