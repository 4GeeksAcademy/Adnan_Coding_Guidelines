
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'lastofus']; // "lastofus" can use .us hack
let extensions = ['.com', '.net', '.us', '.io'];


let allDomains = [];
let index = 0;

function prepareDomains() {
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {

          
          allDomains.push(p + a + n + ext);

          
          let hack = ext.replace('.', ''); 
          if (n.toLowerCase().endsWith(hack.toLowerCase()) && hack.length < n.length) {
            let hackedDomain = p + a + n.slice(0, -hack.length) + ext;
            allDomains.push(hackedDomain);
          }
        }
      }
    }
  }
}

function generateDomains() {
  if (index >= allDomains.length) index = 0; 

  let domain = allDomains[index];

  
  console.log(domain);

  let domainList = document.getElementById("domainList");
  domainList.innerHTML = ""; 
  let li = document.createElement("li");
  li.textContent = domain;
  domainList.appendChild(li);

  index++; 
}

prepareDomains();


document.getElementById("generateBtn").addEventListener("click", generateDomains);
