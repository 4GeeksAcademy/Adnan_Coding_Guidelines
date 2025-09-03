
let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon', 'lastofus']; 
let extensions = ['.com', '.net', '.us', '.io'];


let allDomains = [];
let index = 0;

function prepareDomains() {
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {          
            allDomains.push(pronoun + adjective + noun + extension);
            let hack = extension.replace('.', ''); 
              if (noun.toLowerCase().endsWith(hack.toLowerCase()) && hack.length < noun.length) {
              let hackedDomain = pronoun + adjective + noun.slice(0, -hack.length) + extension;
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
