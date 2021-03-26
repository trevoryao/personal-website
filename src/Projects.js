import vmDemo from './img/vm.jpg'

function RenderProjects() {
  return (
    <div>
      <h2 id="projects">My Favourite Projects</h2>
      <div>
        <h3>vm</h3>
        <p>
          <a href="https://github.com/trevoryao/vm" target="_blank" rel="noreferrer">vm</a> was
          created as a high-performance text-editor similar
          to <a href="https://www.vim.org" target="_blank" rel="noreferrer">vim</a>.
          It is specifically designed to run on low-power embedded systems with little memory
          or processing power. Despite these imposed limitations, vm supports all common vim commands, while
          performing at the same speed and using 60% less memory. It also improves on existing vim features,
          like a theoretically unlimited undo stack. Other common vim features found in vm are:
        </p>
        <ul>
          <li>C/C++ syntax highlighting: including identifiers!</li>
          <li>Nested multipliers and movements</li>
          <li>Regex Text searching</li>
          <li>Arrow Key support</li>
        </ul>
        <img src={vmDemo} alt="vm Demo Screen" />
        <p>
          vm was written exclusively in C++ using no external libraries. This was done to reduce
          possible inefficiencies caused by third-party libraries. This was also a demonstration in
          the power of the C++ <code>stdlib</code>. vm also supports advanced C/C++ syntax highlighting,
          including referenced identifiers. It also takes into account function scope when highlighting
          identifiers.
        </p>
      </div>
      <div>
        <h3>qmk</h3>
        <p>
          <a href="https://github.com/qmk/qmk_firmware" target="_blank" rel="noreferrer">qmk</a> is an
          open-source firmware designed specifically for mechanical keyboards. Using this existing 
          firmware, I designed a custom operating system for my mechanical keyboard, 
          the <a href="https://drop.com/buy/drop-ctrl-barebones-mechanical-keyboard" target="_blank" rel="noreferrer">Drop CTRL</a>.
          It features some custom lighting schemes and keymaps. The standout feature is currently in development, and will use
          the function row leds as a one-dimension volume equaliser display.
        </p>
      </div>
    </div>
  )
}
  
export default RenderProjects;
  