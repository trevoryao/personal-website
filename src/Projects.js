import vmDemo from './img/vm.jpg'

function RenderProjects() {
  return (
    <div>
      <h2 id="projects">My Favourite Projects</h2>
      <div class="Subsection">
        <div>
          <h3 id="trains">Train Microkernel</h3>
          <p>
            The background of this project is the experience that was the CS 452 course which I took
            during my last term of <a href="#school">University</a>. The experience which was the <em>Trains Course</em> led to the creation of a microkernel in order to write very complex train control programs.
          </p>
          <p>
            Our microkernel was simple, but fast.
            It relied, like most do, on the user programs to handle many things on it's behalf.
            For example, things like the clock and I/O (on both the console and the port connected to the track controller) were handled by user servers.
            This kept our kernel lightweight, but most importantly fast.
            We found that our context switches could be performed in less than a microsecond.
            Our kernel provided basic task-related service calls (create, exit, tid lookup, etc) as well as message-passing interface following the send-receive-reply pattern to facilitate multitasking, and allow communication between tasks.
            Finally, it also provided the ability to await on different clock and UART-based interrupts.
            This is what ultimately allowed the servers to function.
            The kernel also provided an server to allow tasks to register themselves with a name, and other tasks to lookup TIDs based on this registered name.
          </p>
          <p>
            Our kernel (in particular context switching) was fast because we took advantage of GCC's ability to mix both C code and ARMv8 assembly.
            Our context switching was written entirely in ARM assembly, rather than a mix of C and inline ASM.
            One way we ensured our code stayed robust was storing all registers in a task descriptor struct, which meant that system call and interrupt handlers (i.e. message sends/receives/replies) could directly access parameters and return values through the task descriptors.
            This was particularly handy since many system calls included pointers.
          </p>
          <p>
            We also optimised many C stdlib memory &amp; string functions for the processor we worked with, optimising them to copying as many bytes as possible with wide 128 instructions.
          </p>
          <p>
            Now, for the beast that was train control.
            We had to first calibrate velocity, acceleration, and stopping data for each train available to us.
            This must be prefaced with an explanation of our train track setup.
            The Marklin track had bidirectional sensor switches connected to various modules that stored any sensor activations.
            Each module had to be polled by any program.
            This was the only method we had of knowing any state on the track. From this, we had to attribute sensor activations to trains, and determine velocity and other kinematic data from the time between sensor activations.
          </p>
          <p>
            Each train had different velocities for each possible speed. Some trains were also inconsistent, and speeds varied over time, and could even vary depending on the number of trains on the track.
            I'm sure you can see the challenge now.
            There were a multitude of other little challenges that I cannot even remember anymore, possibly due to trauma and mental anguish.
          </p>
          <p>
            Our train control programs fundamentally consisted of thread per train, which would wait on individual sensor activations and make appropriate actions.
            I wrote a modified Dijkstra's Algorithm for pathfinding on the track in order to fit our needs.
            Since not every part of the track was accessible due to branches in the track, certain switches had to be thrown for many routes.
            We also were able to add many optimisations for our usecase, since the track was segmented into mutual exclusion sections (similar to real life!) to prevent collisions.
          </p>
          <p>
            First, we accomplished basic routing and accurate stopping with a single train. We were able to stop accurately within a margin of &#177;2.5cm on any point and offset on the track.
            Obviously, since trains kind of suck, some were much more inaccurate than others.
            We accomplished routing by throwing switches on the fly as we were approaching them, precalculated by the aforementioned modified Dijkstra.
            We were able to stop the train by waiting for a sensor activation and then a time delay, calculated using the stopping data for the train, before actually stopping the train, since trains stopped gradually rather than instantly.
          </p>
          <p>
            For multi-train collision avoidance, we used a segment locking philosophy to achieve mutual exclusion.
            We defined segments as parts of the track with no escape, such as branches or straights, and bounded them with sensors on either end, so we could be sure of exact entry/exit times.
            Like in any multi-threaded system, trains could only perform actions (enter or throw switches) if they had acquired the lock.
            We had to also implement our own deadlock avoidance, for obvious reasons.
            We used a mixture of timeout locking and "OR" locking (where a train would wait for two series of locks, and whichever one became free first, it would enter).
            If the train was unable to acquire a lock before the timeout, it would stop immediately, so that it would not enter another section with a train on it.
            We were one of the only groups to accomplish three trains on the track avoiding collisions.
          </p>
          <p>
            Finally, for our crowning jewel, our final project.
            We recreated the old school mobile game Snake using trains.
            This required us to solve the difficult problem of cohorting, since it requires constant speed adjustments to maintain a consistent distance between trains.
            I wrote an algorithm for speed adjustments based on the measured distance between trains, which was calculated again using pre-calibrated velocity data and measured time.
            Depending on the distance between individual trains, or even of all the distances between trains, and also taking into account and positive/negative trends, the algorithm would make either conservative or liberal adjustments.
            In the spirit of the original game, the snake would approach stopped trains around the track, and the stopped train would speed up before collision and become the new head of the snake.
            We also implemented left/right arrow keys to control the switches ahead of the snake.
          </p>
          <p>
            For anyone curious to see how much code was required for such a beast, the github repo is <a href="https://github.com/trevoryao/cs452-kernel" target="_blank" rel="noreferrer">linked</a>.
          </p>
        </div>
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
            firmware, I designed a custom firmware and keymaps for my various mechanical keyboards.
            These usually feature some custom lighting schemes and keymaps,
            as well as some artistic displays with the lights.
            For example, at one point, the function row LEDs were used as a volume equaliser display.
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
