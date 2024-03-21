function RenderSchool() {
  return (
    <div>
      <h2 id="school">School</h2>
      <p>
        I recently graduated from the <a href="https://cs.uwaterloo.ca" target="_blank" rel="noreferrer">University of Waterloo</a> (Ontario, Canada) in December of 2023.
        I attained my Honour's Bachelor of Computer Science with a minor in Pure Mathematics,
        and graduated with Dean's Honours, the highest award of academic excellence.
        This seems to be the rough equivalent of a 4.0 GPA at other schools, since we don't use a GPA scale, but rather just percentages.
        For those curious, my final GPA was approximately 89%.
      </p>
      <p>
        In my last term, I took the infamous Trains Course, officially known as <a href="https://cs.uwaterloo.ca/current/courses/course_descriptions/cDescr/CS452" target="_blank" rel="noreferrer">CS 452</a>.
        This course is widely known as the most challenging course at the university, and by the end of our term,
        only 13 (yes, thirteen!) students were still enrolled. The course is extremely free-form, in the sense that
        we were only given very loose requirements for each stage of our microkernel and project, and were given the
        freedom and responsibility to deviate from it. You can read more about what we designed <a href="#trains">here</a>.
        This course was an experience. For the first six weeks, we built our own custom microkernel.
        Then, for the last six-ish weeks, we wrote complex programs and algorithms to accomplish different kinds of train control.
        These last six weeks, we spent almost every single day in the lab, dealing with every single kind of challenge with the trains and tracks.
        The lesson learned I learned is that designing software is (relatively) easy, since our kernel was absolutely solid.
        What is in-fact hard is dealing with physical objects, which can be completely arbitrary and unpredictable, at least in the case of trains.
      </p>
      <p>
        Another challenging (but rewarding) course to date that I've taken
        is <a href="https://cs.uwaterloo.ca/current/courses/course_descriptions/cDescr/CS343" target="_blank" rel="noreferrer">CS 343</a>.
        In this course, we were taught general concurrency methods and concepts,
        implementing many common locks and patterns by scratch. The course
        ends with a legendary final project where we were asked to implement
        a large concurrent system, organising our own mutual exclusion and
        patterns (administrator, couriers, buffering, etc).
      </p>
      <p>
        One of the best courses that I have taken
        is <a href="https://student.cs.uwaterloo.ca/~cs246e/F20/outline.shtml" target="_blank" rel="noreferrer">CS 246E</a>,
        which is an enriched/advanced version of the OOP C++
        course all uWaterloo CS students take. The course focuses on the abstractions that power object-oriented
        programming, covering a more in-depth range of OOP and C++ topics, including generic programming, inheritance, and
        template metaprogramming.
      </p>
    </div>
  )
}

export default RenderSchool;
