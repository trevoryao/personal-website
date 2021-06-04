import vmDemo from './img/vm.jpg'

function RenderProjects() {
  return (
    <div>
      <h2 id="projects">My Favourite Projects</h2>
      <div class="Subsection">
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
        <div>
          <h3>Countdown (Numbers) Solver</h3>
          <p>
            I love Panel Shows,
            and <a href="https://en.wikipedia.org/wiki/8_Out_of_10_Cats_Does_Countdown" target="_blank" rel="noreferrer">8 out of 10 Cats does Countdown</a> is
            a comedic panel show take on the classic gameshow institution that
            is <a href="https://en.wikipedia.org/wiki/Countdown_(game_show)" target="_blank" rel="noreferrer">Countdown</a>.
          </p>
          <p>
            The basic premise of the <i>Numbers Round</i> is to choose 6 numbers from a set of small numbers
            (1-10 two times over) and big numbers (25, 50, 70, 100). The resident mathemetician then randomly generates
            a number and contestants have 30 seconds to form the target using any of the 6 numbers and basic operations
            (no non-integer remainders).
          </p>
          <p>
            Creating a solver for this game led to multiple interesting mathematical and computation problems.
            The crux of the solver is attempting to find all possible combinations of numbers and operators,
            taking into account the order of operations. This problem is further compounded by the sheer number of
            comparisons that this would require. There are over 40 million possible equations. In order to speed up this
            task, I used two main strategies. Rather than generating possibilities separately and merging them, I
            generated the possibilities in place, and used template-metaprogramming to generate abstract expression trees
            and compile-time, and populate them at run-time with various possibilities. I also used multiple threads to
            split up calculations, with one thread handling possibilities with 1-3 numbers, a thread for 4 numbers, and 4 threads each for 5 and 6 number equations.
          </p>
        </div>
        <div>
          <h3>Create C++ Project</h3>
          <p>
            This is a handy script I created for creating new C++ projects compiled using a Makefile,
            which I made accessible for beginners. It behaves similar
            to <a href="https://github.com/facebook/create-react-app#readme" target="_blank" rel="noreferrer">npm-create-react</a> tool
            for react projects. It creates a C++ Project template, with a <code>Makefile</code> & <code>.gitignore</code>,
            and the binary and source files as given in the arguments. It will also initialise git repo if git is installed.
          </p>
        </div>
      </div>
    </div>
  )
}
  
export default RenderProjects;
  