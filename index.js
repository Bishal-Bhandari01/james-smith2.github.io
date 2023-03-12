const terminalOutput = document.querySelector('#terminal_outputs')
const userInput = document.querySelector('#user_input')
help = [
  '<p class="mt-2">root@Bishal_Bhandari:~ help</p>',
  'whois<span class="mx-5"></span>- Show detail info<br>',
  'show projects<span class="mx-5"></span>- Show my projects<br>',
  'show certs<span class="mx-5"></span>- Show achived certs<br>',
  'social<span class="mx-5"></span>- Show social media<br>',
  'clear<span class="mx-5"</span>- Clear screen<br>',
  'usage:<br><span class="mx-5"></span>:~ help<br>',
]

whois = [
  '<p class="mt-2">root@Bishal_Bhandari:~ whois</p>',
  'My name is Bishal Bhandari. Specialize in web-development using Angular and Java.',
]

showCerts = '<p class="mt-2">root@Bishal_Bhandari:~ show certs</p>'

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
      new WinBox({
        title: 'CERTIFICATES',
        mount: document.querySelector('#certificate'),
        x: 'center',
        y: 'center',
        width: '71%',
        height: '71%',
        onfocus: function () {
          this.setBackground = '#fff'
        },
        onBlur: function () {
          this.setBackground = '#999'
        },
      })
      terminalOutput.innerHTML += showCerts
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

  if (e.key == 13) {
    query(input)
    user_input.value = ''
    return
  }
}
document.addEventListener('keypress', key)

function ErrorCmd(args) {
  error = [
    `<p class="mt-2">root@Bishal-Bhandari:~ ${args}</p>`,
    `Error: Command not found.`,
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
