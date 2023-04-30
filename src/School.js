function RenderSchool() {
  return (
    <div>
      <h2 id="school">School</h2>
      <p>
        I'm in my 4A term at
        the <a href="https://cs.uwaterloo.ca" target="_blank" rel="noreferrer">University of Waterloo</a> in
        Ontario, Canada. I'll be graduating soon in December 2023.
        I am majoring in Computer Science, with a minor in Pure Mathematics. My cumulative average
        is 88% (4.0 GPA).
      </p>
      <p>
        My most challenging (but rewarding) course to date that I've taken
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
