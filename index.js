const terminalOutput = document.querySelector('#terminal_outputs')
const userInput = document.querySelector('#user_input')
help = [
  '<p class="mt-2">root@Bishal_Bhandari:~ help</p>',
  'whois<span class="mx-5"></span>- Show detail info<br>',
  'show projects<span class="mx-5"></span>- Show my projects<br>',
  'show certs<span class="mx-5"></span>- Show achived certs<br>',
  'social<span class="mx-5"></span>- Show social media<br>',
  'clear<span class="mx-5"</span>- Clear screen<br>',
  'usage:<br><span class="mx-5"></span>:~ show certs<br>',
]

whois = [
  '<p class="mt-2">root@Bishal_Bhandari:~ whois</p>',
  'My name is Bishal Bhandari. Specialize in web-development using Angular and Java.',
]

showCerts = [
  '<p class="mt-2">root@Bishal_Bhandari:~ show certs</p>',
  'Introduction to CyberSecurity (Cisco) <a class="mx-5" href="https://www.credly.com/badges/f76856aa-e989-47ca-8feb-3b62ecdd9b4e/linked_in_profile">https://www.credly.com/badges/f76856aa-e989-47ca-8feb-3b62ecdd9b4e/linked_in_profile</a><br>',
  'CyberSecurity: Inside SOC <a class="mx-5" href="https://www.udemy.com/certificate/UC-958636e6-3096-42d2-b87f-e5e905509f78/">https://www.udemy.com/certificate/UC-958636e6-3096-42d2-b87f-e5e905509f78/</a><br>',
  'CS50 (Harvard University) <a class="mx-5" href="https://certificates.cs50.io/0c014ad0-2dce-4353-8792-c9a6977c69e3.pdf?size=letter">https://certificates.cs50.io/0c014ad0-2dce-4353-8792-c9a6977c69e3.pdf?size=letter</a><br>',
  'OPSWAT File Security Associate (OFSA) <a class="mx-5" href="https://www.credly.com/badges/41132222-61fa-46eb-8ff5-d8f87a225702/linked_in_profile">https://www.credly.com/badges/41132222-61fa-46eb-8ff5-d8f87a225702/linked_in_profile</a><br>',
  'ReactJS (Basic) (HackerRank) <a class="mx-5" href="https://www.hackerrank.com/certificates/6af715f06f09">https://www.hackerrank.com/certificates/6af715f06f09</a><br>',
  'Java (Basic) (HackerRank) <a class="mx-5" href="https://www.hackerrank.com/certificates/377a58a7cd82">https://www.hackerrank.com/certificates/377a58a7cd82</a><br>',
  'Angular (Basic) (HackerRank) <a class="mx-5" href="https://www.hackerrank.com/certificates/86a93e5eb67b">https://www.hackerrank.com/certificates/86a93e5eb67b</a>'
]

showProjects = '<p class="mt-2">root@Bishal_Bhandari:~ show projects</p>'

socialMedia = [
  '<p class="mt-2">root@Bishal_Bhandari:~ social</p>',
  'LinkedIn:<span class="mx-5"></span><a href="https://www.linkedin.com/in/bishal-bhandari-5035021a0/" target="_blank" class="text-decoration-none">Bishal Bhandari</a>',
]

function query(command) {
  switch (command) {
    case 'help':
      terminalOutput.innerHTML += Commander(help)
      break
    case 'whois':
      terminalOutput.innerHTML += Commander(whois)
      break
    case 'show certs':
      terminalOutput.innerHTML += Commander(showCerts)
      break
    case 'social':
      terminalOutput.innerHTML += Commander(socialMedia)
      break;
    case 'clear':
      terminalOutput.innerHTML = ''
      break
    default:
      terminalOutput.innerHTML += ErrorCmd(command)
      break
  }
}
function key(e) {
  const input = user_input.value
  if (e.key == '13') {
    query(input)
    user_input.value = ''
    return
  }
}
document.addEventListener('keypress', key)

function ErrorCmd(args) {
  error = [
    `<p class="mt-2">root@Bishal-Bhandari:~ ${args}</p>`,
    `Error: ${args} command not found.`,
  ]
  return Commander(error)
}

function Commander(args) {
  let items = ''
  args.forEach((element) => {
    items += element
  })
  return items
}
